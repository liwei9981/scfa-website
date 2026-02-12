import fs from 'fs';
import path from 'path';

export async function updateWebsiteContent(data: any) {
    console.log(`[UPDATER] Executing action: ${data.type}`);

    try {
        if (data.type === 'NEWS_ADD') {
            await addNewsItem(data);
        } else if (data.type === 'MEMBER_UPDATE') {
            await addMember(data);
        } else if (data.type === 'TEXT_CHANGE') {
            await updateTranslation(data);
        } else {
            console.warn(`[UPDATER] Unsupported change type: ${data.type}`);
        }
    } catch (error) {
        console.error('[UPDATER] Error executing update:', error);
        throw error;
    }
}

async function addNewsItem(data: any) {
    const filePath = path.join(process.cwd(), 'src/app/page.tsx');
    let content = fs.readFileSync(filePath, 'utf8');

    const newsItem = `    { 
        title: "${data.title}", 
        date: "${data.date}", 
        summary: "${data.summary || 'Autonomous update via SCFA AI Agent.'}" 
    },`;

    const newsRegex = /const\s+SAMPLE_NEWS\s*=\s*\[/;
    if (newsRegex.test(content)) {
        content = content.replace(newsRegex, `const SAMPLE_NEWS = [\n${newsItem}`);
        fs.writeFileSync(filePath, content);
        console.log('[UPDATER] News item added successfully.');
    } else {
        throw new Error('Could not find SAMPLE_NEWS in page.tsx');
    }
}

async function addMember(data: any) {
    const filePath = path.join(process.cwd(), 'src/app/about/page.tsx');
    let content = fs.readFileSync(filePath, 'utf8');

    const newMember = `    { name: "${data.name}", chineseName: "${data.chineseName || ''}", image: "${data.image || '/board/placeholder.jpg'}"${data.title ? `, title: "${data.title}"` : ''} },`;

    let regex: RegExp;
    let replacement: string;

    switch (data.category?.toUpperCase()) {
        case 'HONORARY':
            regex = /const\s+HONORARY_ADVISORS\s*=\s*\[/;
            replacement = `const HONORARY_ADVISORS = [\n${newMember}`;
            break;
        case 'ADVISOR':
            regex = /const\s+ADVISORS\s*=\s*\[/;
            replacement = `const ADVISORS = [\n${newMember}`;
            break;
        case 'COMMITTEE_MEMBER':
            // Appends to the 'members' array inside the MANAGEMENT_COMMITTEE object
            regex = /members:\s*\[/;
            replacement = `members: [\n    ${newMember}`;
            break;
        default:
            throw new Error(`Unsupported member category: ${data.category}`);
    }

    if (regex.test(content)) {
        content = content.replace(regex, replacement);
        fs.writeFileSync(filePath, content);
        console.log(`[UPDATER] Member ${data.name} added to ${data.category} successfully.`);
    } else {
        throw new Error(`Could not find member category "${data.category}" in about/page.tsx`);
    }
}

async function updateTranslation(data: any) {
    const filePath = path.join(process.cwd(), 'src/lib/i18n/translations.ts');
    let content = fs.readFileSync(filePath, 'utf8');

    // This is a complex update, so we'll start with a simpler string replacement for key values
    // for specific known fields like mission or vision.
    if (data.key && data.value) {
        // Logic for simple translation replacement could go here
        console.log(`[UPDATER] Suggestion for translation update: ${data.key} -> ${data.value}`);
    }
}
