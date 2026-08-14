import https from 'https';

const searchQueries = [
  'Lion Capital Sarnath',
  'Sarnath Capital',
  'Buddha Sarnath Gupta',
  'Standing Buddha Sarnath',
  'Nataraja bronze',
  'Shiva Nataraja Chola',
  'Princes House Timur',
  'Raja Pratap Singh',
  'Ravi Varma Vasantasena',
  'Ravi Varma Vasantsena',
  'Amrita Sher-Gil',
  'Three Girls Sher-Gil'
];

async function search(q) {
  return new Promise((resolve) => {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&srnamespace=6&srlimit=8&format=json`;
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(d);
          console.log(`=== Query: "${q}" ===`);
          if (json.query && json.query.search) {
            json.query.search.forEach(s => console.log('  ', s.title));
          }
          resolve();
        } catch (e) {
          console.error(e);
          resolve();
        }
      });
    }).on('error', () => resolve());
  });
}

async function run() {
  for (const q of searchQueries) {
    await search(q);
  }
}

run();
