import { NextResponse } from 'next/server';
import { processAgentRequest } from '@/lib/agent/core';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
    try {
        const payload = await request.json();
        console.log('[EMAIL WEBHOOK] Root keys:', Object.keys(payload));

        // Resend's received data is nested in 'data'
        const emailData = payload.data || {};
        let fromEmail = emailData.from || payload.from || payload.sender;
        let bodyText = emailData.text || emailData.html || payload.text || emailData.subject || payload.subject;

        if (!bodyText && emailData.email_id && resend) {
            console.log(`[EMAIL WEBHOOK] Fetching full content for email_id: ${emailData.email_id}`);
            const fullEmail = await resend.emails.get(emailData.email_id);
            console.log('[EMAIL WEBHOOK] Full email object received:', JSON.stringify(fullEmail, null, 2));
            if (fullEmail.data) {
                const data = fullEmail.data as any;
                bodyText = data.text || data.html || data.subject || "No text content";
                // Only override fromEmail if it was missing
                if (!fromEmail) fromEmail = data.from;
            }
        }

        if (!fromEmail || !bodyText) {
            console.warn('[EMAIL WEBHOOK] CRITICAL MISSING DATA:', { fromEmail, bodyText, emailId: emailData.email_id });
            return NextResponse.json({ error: 'Missing email data' }, { status: 400 });
        }

        console.log(`[EMAIL WEBHOOK] Processing from ${fromEmail}: ${bodyText.substring(0, 50)}...`);

        // Process the email as an agent request
        await processAgentRequest(fromEmail, bodyText, 'email');

        return NextResponse.json({ status: 'ok' });
    } catch (error) {
        console.error('Email webhook error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
