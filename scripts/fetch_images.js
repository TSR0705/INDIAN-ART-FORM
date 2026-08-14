import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const targetDir = path.resolve('public/images/artifacts');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Canonical public domain / open access URLs for the 8 artifacts
const artifacts = [
  {
    id: 'dancing-girl',
    title: 'Dancing Girl',
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Dancing_Girl_of_Mohenjo-daro.jpg/800px-Dancing_Girl_of_Mohenjo-daro.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/6/6f/Dancing_Girl_Mohenjo-Daro.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Dancing_girl.jpg/800px-Dancing_girl.jpg'
    ],
    filename: 'dancing-girl.jpg'
  },
  {
    id: 'lion-capital',
    title: 'Lion Capital of Ashoka',
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sarnath_Lion_Capital_of_Ashoka.jpg/800px-Sarnath_Lion_Capital_of_Ashoka.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Ashoka_Lion_Capital.jpg/800px-Ashoka_Lion_Capital.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Sarnath_Capital.jpg/800px-Sarnath_Capital.jpg'
    ],
    filename: 'lion-capital.jpg'
  },
  {
    id: 'standing-buddha',
    title: 'Standing Buddha from Sarnath',
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Standing_Buddha_from_Sarnath_5th_century_CE.jpg/800px-Standing_Buddha_from_Sarnath_5th_century_CE.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Buddha_Sarnath_Gupta_period.jpg/800px-Buddha_Sarnath_Gupta_period.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Standing_Buddha_Mathura_Gupta_period_5th_century_CE.jpg/800px-Standing_Buddha_Mathura_Gupta_period_5th_century_CE.jpg'
    ],
    filename: 'standing-buddha.jpg'
  },
  {
    id: 'nataraja',
    title: 'Nataraja / Shiva as Lord of Dance',
    urls: [
      'https://images.metmuseum.org/CRDImages/as/original/DP-20231-001.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Chola_Nataraja.jpg/800px-Chola_Nataraja.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Nataraja_Bronze_Chola_Dynasty.jpg/800px-Nataraja_Bronze_Chola_Dynasty.jpg'
    ],
    filename: 'nataraja.jpg'
  },
  {
    id: 'princes-timur',
    title: 'Princes of the House of Timur',
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Princes_of_the_House_of_Timur_British_Museum.jpg/1024px-Princes_of_the_House_of_Timur_British_Museum.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/9/91/Princes_of_the_House_of_Timur_British_Museum.jpg'
    ],
    filename: 'princes-timur.jpg'
  },
  {
    id: 'raja-pratap-singh',
    title: 'Portrait of Raja Pratap Singh of Jaipur',
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Raja_Pratap_Singh_of_Jaipur.jpg/800px-Raja_Pratap_Singh_of_Jaipur.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/7/75/Raja_Pratap_Singh_of_Jaipur.jpg'
    ],
    filename: 'raja-pratap-singh.jpg'
  },
  {
    id: 'vasantsena',
    title: 'Vasantsena by Raja Ravi Varma',
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Raja_Ravi_Varma_-_Vasantasena.jpg/800px-Raja_Ravi_Varma_-_Vasantasena.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/a/a5/Raja_Ravi_Varma_-_Vasantasena.jpg'
    ],
    filename: 'vasantsena.jpg'
  },
  {
    id: 'group-three-girls',
    title: 'Group of Three Girls by Amrita Sher-Gil',
    urls: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Amrita_Sher-Gil_-_Group_of_Three_Girls.jpg/800px-Amrita_Sher-Gil_-_Group_of_Three_Girls.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/Amrita_Sher-Gil_-_Group_of_Three_Girls.jpg'
    ],
    filename: 'group-three-girls.jpg'
  }
];

function downloadUrl(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const req = protocol.get(url, {
      headers: {
        'User-Agent': 'IndianArtThroughTimeEducationalProject/1.0 (https://github.com/education; contact@heritage-edu.org)'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // follow redirect
        return downloadUrl(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP status ${res.statusCode} for ${url}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve(dest);
      });
      fileStream.on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    });
    req.on('error', reject);
    req.setTimeout(15000, () => {
      req.abort();
      reject(new Error(`Timeout downloading ${url}`));
    });
  });
}

async function run() {
  console.log('Fetching 8 canonical artifact images...');
  for (const art of artifacts) {
    const dest = path.join(targetDir, art.filename);
    let success = false;
    for (const url of art.urls) {
      try {
        console.log(`Trying ${art.title} from: ${url}`);
        await downloadUrl(url, dest);
        const stats = fs.statSync(dest);
        if (stats.size > 2000) {
          console.log(`✓ Downloaded ${art.filename} (${(stats.size / 1024).toFixed(1)} KB)`);
          success = true;
          break;
        }
      } catch (err) {
        console.warn(`  Failed from ${url}: ${err.message}`);
      }
    }
    if (!success) {
      console.error(`✗ Could not download ${art.title}`);
    }
  }
  console.log('Finished downloading attempt.');
}

run();
