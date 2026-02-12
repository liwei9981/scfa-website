export async function sendWhatsAppMessage(to: string, text: string) {
    const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;
    const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;

    if (!ACCESS_TOKEN || !PHONE_NUMBER_ID) {
        console.error('WhatsApp credentials are not configured');
        throw new Error('WhatsApp configuration missing');
    }

    const url = `https://graph.facebook.com/v18.0/${PHONE_NUMBER_ID}/messages`;

    const payload = {
        messaging_product: 'whatsapp',
        to: to,
        type: 'text',
        text: { body: text }
    };

    console.log(`[WHATSAPP] Sending message to ${to}: ${text.substring(0, 20)}...`);
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Meta API error:', data);
            throw new Error(`WhatsApp API failed: ${data.error?.message || 'Unknown error'}`);
        }

        return data;
    } catch (error) {
        console.error('Failed to send WhatsApp message:', error);
        throw error;
    }
}
