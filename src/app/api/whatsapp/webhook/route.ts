import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { processAgentRequest } from '@/lib/agent/core';

const WHATSAPP_VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'scfa_secret_token';
const WHATSAPP_APP_SECRET = process.env.WHATSAPP_APP_SECRET || '';

// Verification check for WhatsApp/Meta Webhook setup
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const mode = searchParams.get('hub.mode');
    const token = searchParams.get('hub.verify_token');
    const challenge = searchParams.get('hub.challenge');

    if (mode === 'subscribe' && token === WHATSAPP_VERIFY_TOKEN) {
        console.log('Webhook verified');
        return new Response(challenge, { status: 200 });
    } else {
        return new Response('Forbidden', { status: 403 });
    }
}

// Handling incoming WhatsApp messages
export async function POST(request: Request) {
    const body = await request.text();
    const signature = request.headers.get('x-hub-signature-256');

    // Signature verification
    if (WHATSAPP_APP_SECRET && signature) {
        const expectedSignature = 'sha256=' +
            crypto.createHmac('sha256', WHATSAPP_APP_SECRET)
                .update(body)
                .digest('hex');

        if (signature !== expectedSignature) {
            console.error('Invalid signature');
            return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
        }
    }

    const data = JSON.parse(body);

    // Ensure it's a WhatsApp message
    if (data.object === 'whatsapp_business_account') {
        try {
            for (const entry of data.entry) {
                for (const change of entry.changes) {
                    const value = change.value;
                    if (value.messages) {
                        for (const message of value.messages) {
                            const from = message.from; // Sender's phone number
                            const text = message.text?.body;
                            const msgId = message.id;

                            console.log(`Received message from ${from}: ${text}`);

                            // Trigger the AI Agent logic
                            await processAgentRequest(from, text || '');
                        }
                    }
                }
            }
            return NextResponse.json({ status: 'ok' });
        } catch (error) {
            console.error('Error processing message:', error);
            return NextResponse.json({ error: 'Failed to process message' }, { status: 500 });
        }
    }

    return NextResponse.json({ status: 'ignored' });
}
