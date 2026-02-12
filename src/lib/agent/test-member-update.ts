import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

// Load environment variables from .env.local BEFORE other imports
const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
}

import { processAgentRequest } from './core';

async function testMemberUpdate() {
    const fromEmail = 'liwei9981@gmail.com';
    const message = 'Hi! Please add Mr. John Tan (陈约翰) to our Advisors list. He is our new Legal Advisor. His image is at /board/john-tan.jpg';

    console.log('--- Starting MEMBER_UPDATE Test ---');
    console.log(`User: ${fromEmail}`);
    console.log(`Request: ${message}`);

    try {
        await processAgentRequest(fromEmail, message, 'email');
        console.log('\n--- SUCCESS ---');
        console.log('Gemini processed the request. Now you just need to reply "Yes" to confirm (in a real scenario).');
        console.log('But for this test, I will simulate the "Yes" confirmation too...');

        await processAgentRequest(fromEmail, 'Yes', 'email');
        console.log('\n--- Update Executed! ---');
        console.log('Check src/app/about/page.tsx to see John Tan added to ADVISORS!');
    } catch (error) {
        console.error('Test failed:', error);
    }
}

testMemberUpdate();
