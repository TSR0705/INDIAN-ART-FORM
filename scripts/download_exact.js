import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';

const files = [
  {
    name: 'lion-capital.jpg',
    title: 'File:Sarnath capital in Sarnath Museum.jpg'
  },
  {
    name: 'standing-buddha.jpg',
    title: 'File:Sarnath standing Buddha 5th century CE.jpg'
  },
  {
    name: 'nataraja.jpg',
    title: 'File:Nataraja Bronze in Government Museum, Chennai.jpg'
  },
  {
    name: 'vasantsena.jpg',
    title: 'File:Raja Ravi Varma, Vasanthasena (Oleographic print).jpg'
  }
];

async function getUrl(title) {
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`;
  return new Promise((resolve, reject) => {
    https.get(apiUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try {
          const j = JSON.parse(d);
          const page = Object.values(j.query.pages)[0];
          if (page && page.imageinfo && page.imageinfo[0]) {
            resolve(page.imageinfo[0].url);
          } else {
            resolve(null);
          }
        } catch(e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

async function main() {
  for (const f of files) {
    const url = await getUrl(f.title);
    console.log(`${f.name} -> ${url}`);
    if (url) {
      const dest = path.resolve('public/images/artifacts', f.name);
      try {
        execSync(`curl.exe -L -A "Mozilla/5.0" -o "${dest}" "${url}"`, { stdio: 'inherit' });
        console.log(`✓ Downloaded ${f.name}`);
      } catch (err) {
        console.error(`Failed to download ${f.name}: ${err.message}`);
      }
    }
  }
}

main();
