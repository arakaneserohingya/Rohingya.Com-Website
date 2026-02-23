const fs = require('fs');
const https = require('https');

const GITHUB_API_URL = "https://api.github.com/repos/arakaneserohingya/RhgQuranAssets/contents/Quran%20Surah%20Rhg%20Translation%20audios";
const ALQURAN_API_URL = "http://api.alquran.cloud/v1/surah";

async function fetchJson(url, options = {}) {
    return new Promise((resolve, reject) => {
        https.get(url, options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

// Simple lookup for Rohingya Names since the public API only has English/Arabic.
// We can auto-fill some or leave as a placeholder for manual tweaking.
const rohingyaNameOverrides = {
    1: "Faitah",
    36: "Iasiin",
    55: "Ar-Rohman",
    67: "Al-Mulk",
    112: "Ikhlaas",
    114: "An-Naas"
};

const rohingyaDescriptionOverrides = {
    1: "The first chapter of the Quran, recited in every unit of prayer.",
    36: "Often referred to as the Heart of the Quran for its themes of resurrection and divine mercy.",
    55: "A chapter celebrating the mercy and blessings of Allah upon creation.",
    67: "A chapter reflecting on the sovereignty and majesty of the Creator.",
    112: "A concise declaration of the oneness of God, equal to a third of the Quran.",
    114: "The final chapter, a prayer seeking refuge in God from evil.",
};

async function generateData() {
    console.log("Fetching AlQuran Cloud API...");
    // Fallback to fetch via http to avoid SSL issues if api is http only
    const quranDataResp = await new Promise((resolve, reject) => {
        const http = require('http');
        http.get(ALQURAN_API_URL, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(JSON.parse(data)));
        }).on('error', reject);
    });

    const surahsBase = quranDataResp.data;

    console.log("Fetching Github Repo contents...");
    const githubDataResp = await fetchJson(GITHUB_API_URL, {
        headers: { 'User-Agent': 'Node.js Quran Generator' }
    });

    // Create a map of prefix (e.g., "001", "114") to full raw URL
    const audioMap = {};
    const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/arakaneserohingya/RhgQuranAssets/main/Quran%20Surah%20Rhg%20Translation%20audios/";
    githubDataResp.forEach(file => {
        if (file.name.endsWith('.mp3') || file.name.endsWith('.m4a') || file.name.endsWith('.M4A')) {
            const prefixMatch = file.name.match(/^(\d{3})\._Surah_/);
            if (prefixMatch) {
                const surahNumberStr = prefixMatch[1]; // e.g., "001"
                audioMap[parseInt(surahNumberStr, 10)] = GITHUB_RAW_BASE + file.name.replace(/%25/g, '%').replace(/ /g, '%20');
            }
        }
    });

    console.log("Mapping Data...");
    const finalSurahs = surahsBase.map(s => {
        const audioUrl = audioMap[s.number];
        return {
            number: s.number,
            arabic: s.englishName, // E.g., Al-Fatihah
            english: s.englishNameTranslation, // E.g., The Opening
            rohingya: rohingyaNameOverrides[s.number] || s.englishName, // Fallback to arabic transliteration if no rohingya specific name provided
            verses: s.numberOfAyahs,
            description: rohingyaDescriptionOverrides[s.number] || `Surah ${s.englishName} is the ${s.number}th chapter of the Quran with ${s.numberOfAyahs} verses.`,
            audioUrl: audioUrl || undefined
        };
    });

    // Generate TypeScript file string
    let tsContent = `export const surahs = [\n`;
    finalSurahs.forEach(s => {
        tsContent += `  {\n`;
        tsContent += `    number: ${s.number},\n`;
        tsContent += `    arabic: ${JSON.stringify(s.arabic)},\n`;
        tsContent += `    english: ${JSON.stringify(s.english)},\n`;
        tsContent += `    rohingya: ${JSON.stringify(s.rohingya)},\n`;
        tsContent += `    verses: ${s.verses},\n`;
        tsContent += `    description: ${JSON.stringify(s.description)},\n`;
        if (s.audioUrl) {
            tsContent += `    audioUrl: ${JSON.stringify(s.audioUrl)},\n`;
        }
        tsContent += `  },\n`;
    });
    tsContent += `]\n`;

    // Append to existing file instead of completely overwriting it
    const existingContent = fs.readFileSync('lib/data/quran.ts', 'utf8');
    // Ensure we don't duplicate surahs export if it already exists from a previous run
    const contentWithoutSurahs = existingContent.replace(/export const surahs = \[\s*([\s\S]*?)\]\s*/g, '');

    fs.writeFileSync('lib/data/quran.ts', contentWithoutSurahs + '\n' + tsContent);
    console.log("Successfully appended 114 Surahs to lib/data/quran.ts.");
}

generateData().catch(console.error);
