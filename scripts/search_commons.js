import fs from 'fs';
import path from 'path';
import https from 'https';

const targetDir = path.resolve('public/images/artifacts');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const queries = [
  { id: 'dancing-girl', query: 'Dancing Girl Mohenjo-daro', filename: 'dancing-girl.jpg' },
  { id: 'lion-capital', query: 'Lion Capital Ashoka Sarnath', filename: 'lion-capital.jpg' },
  { id: 'standing-buddha', query: 'Standing Buddha Sarnath Gupta', filename: 'standing-buddha.jpg' },
  { id: 'nataraja', query: 'Nataraja Chola bronze', filename: 'nataraja.jpg' },
  { id: 'princes-timur', query: 'Princes of the House of Timur', filename: 'princes-timur.jpg' },
  { id: 'raja-pratap-singh', query: 'Raja Pratap Singh Jaipur', filename: 'raja-pratap-singh.jpg' },
  { id: 'vasantsena', query: 'Raja Ravi Varma Vasantasena', filename: 'vasantsena.jpg' },
  { id: 'group-three-girls', query: 'Amrita Sher-Gil Three Girls', filename: 'group-three-girls.jpg' }
];

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'IndianArtThroughTimeEducationApp/1.0 (academic digital humanities exhibition; student@edu.org)'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`Failed to parse JSON: ${data.slice(0, 200)}`));
        }
      });
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'IndianArtThroughTimeEducationApp/1.0 (academic digital humanities exhibition; student@edu.org)'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve(dest);
      });
    }).on('error', reject);
  });
}

async function searchAndDownload() {
  console.log('Searching Wikimedia Commons API...');
  for (const item of queries) {
    const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(item.query)}&gsrlimit=5&prop=imageinfo&iiprop=url|size|mime&format=json`;
    try {
      const data = await fetchJson(searchUrl);
      if (!data.query || !data.query.pages) {
        console.warn(`No results found for ${item.query}`);
        continue;
      }
      const pages = Object.values(data.query.pages);
      console.log(`Found ${pages.length} potential files for ${item.id}:`);
      for (const page of pages) {
        if (page.imageinfo && page.imageinfo[0]) {
          const info = page.imageinfo[0];
          console.log(`  - ${page.title} (${info.width}x${info.height}, mime: ${info.mime})`);
        }
      }
      
      // pick the best page
      const best = pages.find(p => p.imageinfo && p.imageinfo[0] && (p.imageinfo[0].mime === 'image/jpeg' || p.imageinfo[0].mime === 'image/png')) || pages[0];
      if (best && best.imageinfo && best.imageinfo[0]) {
        const directUrl = best.imageinfo[0].url;
        console.log(`Downloading ${item.filename} from ${directUrl}...`);
        const dest = path.join(targetDir, item.filename);
        await downloadFile(directUrl, dest);
        const stats = fs.statSync(dest);
        console.log(`✓ Saved ${item.filename} (${(stats.size / 1024).toFixed(1)} KB) from ${best.title}`);
      }
    } catch (err) {
      console.error(`Error processing ${item.id}: ${err.message}`);
    }
  }
}

searchAndDownload();
