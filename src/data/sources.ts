export interface MuseumSource {
  artifactId: string;
  museumName: string;
  cityCountry: string;
  accessionNumber: string;
  officialUrl: string;
  creditLine: string;
  license: string;
}

export const MUSEUM_SOURCES: Record<string, MuseumSource> = {
  "dancing-girl": {
    artifactId: "dancing-girl",
    museumName: "National Museum",
    cityCountry: "New Delhi, India",
    accessionNumber: "HR-5271/195",
    officialUrl: "https://www.nationalmuseumindia.gov.in",
    creditLine: "Archaeological Survey of India / National Museum, New Delhi",
    license: "Public Domain / Educational Heritage Record"
  },
  "lion-capital": {
    artifactId: "lion-capital",
    museumName: "Sarnath Archaeological Museum",
    cityCountry: "Varanasi, Uttar Pradesh, India",
    accessionNumber: "Acc. No. 5454",
    officialUrl: "https://asi.nic.in",
    creditLine: "Archaeological Survey of India, Sarnath Site Museum",
    license: "Public Domain / Educational Heritage Record"
  },
  "standing-buddha": {
    artifactId: "standing-buddha",
    museumName: "Sarnath Archaeological Museum",
    cityCountry: "Varanasi, Uttar Pradesh, India",
    accessionNumber: "Acc. No. 5511",
    officialUrl: "https://asi.nic.in",
    creditLine: "Archaeological Survey of India, Sarnath Site Museum",
    license: "Public Domain / Educational Heritage Record"
  },
  "nataraja": {
    artifactId: "nataraja",
    museumName: "National Museum",
    cityCountry: "New Delhi, India",
    accessionNumber: "Acc. No. 58.26",
    officialUrl: "https://www.nationalmuseumindia.gov.in",
    creditLine: "Collection of National Museum, New Delhi",
    license: "Public Domain / Educational Heritage Record"
  },
  "princes-timur": {
    artifactId: "princes-timur",
    museumName: "The British Museum",
    cityCountry: "London, United Kingdom",
    accessionNumber: "1913,0208,0.1",
    officialUrl: "https://www.britishmuseum.org",
    creditLine: "Trustees of the British Museum",
    license: "Educational Heritage Access"
  },
  "raja-pratap-singh": {
    artifactId: "raja-pratap-singh",
    museumName: "Victoria and Albert Museum",
    cityCountry: "London, United Kingdom",
    accessionNumber: "IS.80-1981",
    officialUrl: "https://www.vam.ac.uk",
    creditLine: "Victoria and Albert Museum, London",
    license: "Educational Heritage Access"
  },
  "vasantsena": {
    artifactId: "vasantsena",
    museumName: "National Gallery of Modern Art (NGMA)",
    cityCountry: "New Delhi, India",
    accessionNumber: "Acc. No. 2486",
    officialUrl: "https://ngmaindia.gov.in",
    creditLine: "Collection of NGMA New Delhi / Ravi Varma Fine Art Lithographic Press",
    license: "Public Domain / Educational Access"
  },
  "group-three-girls": {
    artifactId: "group-three-girls",
    museumName: "National Gallery of Modern Art (NGMA)",
    cityCountry: "New Delhi, India",
    accessionNumber: "Acc. No. 2404",
    officialUrl: "https://ngmaindia.gov.in",
    creditLine: "Collection of NGMA New Delhi / Amrita Sher-Gil Estate",
    license: "Public Domain / Educational Access"
  }
};
