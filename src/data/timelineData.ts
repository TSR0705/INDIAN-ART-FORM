export interface Era {
  id: string;
  name: string;
  range: string;
  startYear: number;
  endYear: number;
  theme: string;
  accentColor: string;
  description: string;
}

export const ERAS: Era[] = [
  {
    id: "ancient",
    name: "Ancient",
    range: "c. 2500 BCE – 200 BCE",
    startYear: -2500,
    endYear: -200,
    theme: "earth-bronze",
    accentColor: "#b87333",
    description: "The dawn of urban civilization, bronze metallurgy, and imperial stone monumentalism."
  },
  {
    id: "classical",
    name: "Classical",
    range: "c. 300 CE – 600 CE",
    startYear: 300,
    endYear: 600,
    theme: "ivory-gold",
    accentColor: "#c5a059",
    description: "The Golden Age of Gupta art, establishing idealized spiritual canons and sublime stone aesthetics."
  },
  {
    id: "medieval",
    name: "Medieval",
    range: "c. 900 CE – 1300 CE",
    startYear: 900,
    endYear: 1300,
    theme: "bronze-deep-red",
    accentColor: "#8b263e",
    description: "The triumph of temple architecture and kinetic Chola sacred bronzes depicting cosmic divinity."
  },
  {
    id: "early-modern",
    name: "Early Modern",
    range: "c. 1550 CE – 1800 CE",
    startYear: 1550,
    endYear: 1800,
    theme: "emerald-gold",
    accentColor: "#1a5336",
    description: "The golden synthesis of Mughal court miniatures and vibrant regional Rajput court painting."
  },
  {
    id: "colonial",
    name: "Colonial / Late 19th c.",
    range: "c. 1850 CE – 1900 CE",
    startYear: 1850,
    endYear: 1900,
    theme: "deep-blue-gold",
    accentColor: "#1f487e",
    description: "The intersection of European academic realism, Indian mythology, and the mass oleograph print revolution."
  },
  {
    id: "modern",
    name: "Modern",
    range: "c. 1900 CE – 1950 CE",
    startYear: 1900,
    endYear: 1950,
    theme: "terracotta-neutral",
    accentColor: "#b22222",
    description: "The birth of Indian modernism, synthesizing indigenous soul with international avant-garde form."
  }
];

export const MEDIUMS: string[] = [
  "All Mediums",
  "Bronze",
  "Polished Sandstone",
  "Sandstone",
  "Painted Cotton & Gold",
  "Gouache on Paper",
  "Oleograph / Print",
  "Oil on Canvas"
];

export const ART_FORMS: string[] = [
  "All Art Forms",
  "Sculpture & Metallurgy",
  "Imperial Monument",
  "Classical Sacred Sculpture",
  "Mughal Court Painting",
  "Rajput Miniature Painting",
  "Mass Visual Print Culture",
  "Modernist Painting"
];

export const TIMELINE_POINTS = [
  {
    id: "dancing-girl",
    title: "Dancing Girl",
    year: -2500,
    displayDate: "c. 2500 BCE",
    era: "Ancient",
    eraId: "ancient",
    thumbnail: "/images/artifacts/dancing-girl.jpg",
    medium: "Bronze",
    origin: "Mohenjo-daro",
    period: "Harappan"
  },
  {
    id: "lion-capital",
    title: "Lion Capital of Ashoka",
    year: -250,
    displayDate: "c. 250 BCE",
    era: "Ancient",
    eraId: "ancient",
    thumbnail: "/images/artifacts/lion-capital.jpg",
    medium: "Polished Sandstone",
    origin: "Sarnath",
    period: "Mauryan"
  },
  {
    id: "standing-buddha",
    title: "Standing Buddha from Sarnath",
    year: 474,
    displayDate: "c. 5th c. CE",
    era: "Classical",
    eraId: "classical",
    thumbnail: "/images/artifacts/standing-buddha.jpg",
    medium: "Sandstone",
    origin: "Sarnath",
    period: "Gupta"
  },
  {
    id: "nataraja",
    title: "Nataraja: Shiva as Lord of Dance",
    year: 980,
    displayDate: "c. 10th c. CE",
    era: "Medieval",
    eraId: "medieval",
    thumbnail: "/images/artifacts/nataraja.jpg",
    medium: "Bronze",
    origin: "Tiruvarangulam",
    period: "Chola"
  },
  {
    id: "princes-timur",
    title: "Princes of the House of Timur",
    year: 1555,
    displayDate: "c. 1550–1555 CE",
    era: "Early Modern",
    eraId: "early-modern",
    thumbnail: "/images/artifacts/princes-timur.jpg",
    medium: "Painted Cotton & Gold",
    origin: "Mughal Court",
    period: "Mughal"
  },
  {
    id: "raja-pratap-singh",
    title: "Portrait of Raja Pratap Singh",
    year: 1780,
    displayDate: "1780 CE",
    era: "Early Modern",
    eraId: "early-modern",
    thumbnail: "/images/artifacts/raja-pratap-singh.jpg",
    medium: "Gouache on Paper",
    origin: "Jaipur",
    period: "Rajput"
  },
  {
    id: "vasantsena",
    title: "Vasantsena",
    year: 1896,
    displayDate: "1896 CE",
    era: "Colonial",
    eraId: "colonial",
    thumbnail: "/images/artifacts/vasantsena.jpg",
    medium: "Oleograph / Print",
    origin: "Malavli / Travancore",
    period: "Raja Ravi Varma"
  },
  {
    id: "group-three-girls",
    title: "Group of Three Girls",
    year: 1935,
    displayDate: "1935 CE",
    era: "Modern",
    eraId: "modern",
    thumbnail: "/images/artifacts/group-three-girls.jpg",
    medium: "Oil on Canvas",
    origin: "Amritsar",
    period: "Amrita Sher-Gil"
  }
];
