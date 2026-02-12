import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(to: string, subject: string, text: string) {
    if (!process.env.RESEND_API_KEY) {
        console.warn('RESEND_API_KEY is not set. Email would have been sent to:', to);
        console.log('Subject:', subject);
        console.log('Content:', text);
        return;
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'SCFA AI Assistant <bot@aiquire.sg>',
            to: [to],
            subject: subject,
            text: text,
            // We can add HTML for a more premium look later
        });

        if (error) {
            console.error('Failed to send email:', error);
            throw error;
        }

        return data;
    } catch (error) {
        console.error('Email error:', error);
        throw error;
    }
}
