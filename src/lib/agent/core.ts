import { GoogleGenerativeAI } from "@google/generative-ai";
import { sendWhatsAppMessage } from './whatsapp';
import { sendEmail } from './email';
import { updateWebsiteContent } from './updater';

const genAI = process.env.GEMINI_API_KEY ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY) : null;
const model = genAI ? genAI.getGenerativeModel({ model: "gemini-2.5-flash" }) : null;

// Structural knowledge of the website for the LLM
const WEBSITE_MAP = `
The website is a Next.js application for the Singapore-China Friendship Association (SCFA).
Current known segments for update:
1. NEWS_ADD (Adds to page.tsx SAMPLE_NEWS): Needs title, date, and optionally summary.
2. MEMBER_UPDATE (Updates about/page.tsx): For Board, Advisors, or Management Committee.
3. TEXT_CHANGE (Updates translations.ts): For general UI text or descriptions.

Available files:
- translations.ts: Generic UI text, mission, vision, contact info.
- page.tsx (Home): Hero section and news list.
- about/page.tsx: Board of Directors, Advisors, Management Committee.
`;

const SYSTEM_PROMPT = `
You are the SCFA AI Agent. You help board members update the website via natural language.
Follow these rules:
1. Use the provided WEBSITE_MAP to understand what can be updated.
2. If the user's request is vague, respond with { "action": "CLARIFY", "text": "ask a friendly question" }.
3. If the request is clear, extract the necessary data and respond with:
   { 
     "action": "PROPOSE", 
     "explanation": "Human readable explanation of what you will change", 
     "data": { 
       "type": "NEWS_ADD|MEMBER_UPDATE|TEXT_CHANGE",
       "category": "HONORARY|ADVISOR|COMMITTEE_MEMBER", (REQUIRED for MEMBER_UPDATE)
       ...other relevant data... 
     }
   }
4. Always respond in valid JSON format only. No other text.
5. Currently, you are very good at adding NEWS (type: NEWS_ADD, needs title, date).
6. Be professional, friendly, and concise.
`;

export type Channel = 'whatsapp' | 'email';

export type AgentState = {
    step: 'CLARIFYING' | 'CONFIRMING' | 'EXECUTING';
    channel: Channel;
    extractedData?: any;
    originalRequest?: string;
    conversationHistory: { role: 'user' | 'assistant', content: string }[];
};

// Global (in-memory) state store
const sessions: Record<string, AgentState> = {};

// Authorized members
const AUTHORIZED_MEMBERS = [
    'liwei@transfong.com',
    'liwei9981@gmail.com',
    'tyler.huang@transfong.com',
    'will.huang@transfong.com',
    '6583831850'
];

export async function processAgentRequest(from: string, message: string, channel: Channel = 'whatsapp') {
    const isAuthorized = AUTHORIZED_MEMBERS.includes(from.toLowerCase().trim());

    if (!isAuthorized) {
        const responseText = "Hello! I am the SCFA AI Assistant. I only accept update requests from authorized board members.";
        channel === 'whatsapp' ? await sendWhatsAppMessage(from, responseText) : await sendEmail(from, 'SCFA Assistant: Unauthorized Access', responseText);
        return;
    }

    let state = sessions[from];
    if (!state) {
        state = { channel, step: 'CLARIFYING', conversationHistory: [], originalRequest: message };
        sessions[from] = state;
    }

    state.conversationHistory.push({ role: 'user', content: message });

    // Handle confirmations BEFORE calling AI to avoid redundant processing
    const lowerMsg = message.toLowerCase();
    if (state.step === 'CONFIRMING') {
        if (lowerMsg.includes('yes')) {
            const sendMessage = async (to: string, text: string) => {
                state.channel === 'whatsapp' ? await sendWhatsAppMessage(to, text) : await sendEmail(to, 'SCFA Website Update', text);
            };
            await sendMessage(from, "Great! I'm updating the website now...");
            await updateWebsiteContent(state.extractedData);
            await sendMessage(from, "Done! The website has been updated autonomously. Please check it out!");
            delete sessions[from];
            return;
        } else if (lowerMsg.includes('no')) {
            state.step = 'CLARIFYING';
            // Fall through to AI to handle the "No, actually I want..." part
        }
    }

    try {
        const aiResponseRaw = await callGemini(state);
        const aiResponseJSON = aiResponseRaw.replace(/```json/g, '').replace(/```/g, '').trim();
        const aiResponse = JSON.parse(aiResponseJSON);

        console.log(`[AGENT] AI Action (${channel}): ${aiResponse.action}`);

        const sendMessage = async (to: string, text: string) => {
            state.channel === 'whatsapp' ? await sendWhatsAppMessage(to, text) : await sendEmail(to, 'SCFA Website Update', text);
        };

        if (aiResponse.action === 'CLARIFY') {
            state.conversationHistory.push({ role: 'assistant', content: aiResponse.text });
            await sendMessage(from, aiResponse.text);
        }
        else if (aiResponse.action === 'PROPOSE') {
            state.step = 'CONFIRMING';
            state.extractedData = aiResponse.data;
            const proposal = `Got it! I've prepared the following update:
${aiResponse.explanation}

Should I go ahead and update the website? (Reply "Yes" or "No")`;
            state.conversationHistory.push({ role: 'assistant', content: proposal });
            await sendMessage(from, proposal);
        }
    } catch (error) {
        console.error('Agent Error:', error);
        const errorMsg = "I'm having trouble thinking right now. Please try again in a moment.";
        state.channel === 'whatsapp' ? await sendWhatsAppMessage(from, errorMsg) : await sendEmail(from, 'SCFA Assistant Error', errorMsg);
    }
}

async function callGemini(state: AgentState) {
    if (!model) {
        throw new Error('Gemini API is not configured');
    }

    const historyString = state.conversationHistory
        .map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`)
        .join('\n');

    const prompt = `
${SYSTEM_PROMPT}

CONVERSATION HISTORY:
${historyString}

Current Message: ${state.conversationHistory[state.conversationHistory.length - 1].content}

Response in JSON:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
}
