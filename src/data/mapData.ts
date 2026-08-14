export interface HeritageSite {
  id: string;
  name: string;
  region: string;
  lat: number;
  lng: number;
  era: string;
  period: string;
  description: string;
  artifactId: string;
  artifactTitle: string;
  additionalArtifactIds?: string[];
}

export const HERITAGE_SITES: HeritageSite[] = [
  {
    id: "mohenjo-daro",
    name: "Mohenjo-daro (Mound of the Dead)",
    region: "Indus Valley (Present-day Sindh, Pakistan)",
    lat: 27.3297,
    lng: 68.1389,
    era: "Ancient",
    period: "Harappan Civilization (c. 2500 BCE)",
    description: "One of the world's earliest major urban centers, known for advanced civil drainage, the Great Bath, and the bronze Dancing Girl.",
    artifactId: "dancing-girl",
    artifactTitle: "Dancing Girl"
  },
  {
    id: "sarnath-ashoka",
    name: "Sarnath (Deer Park / Isipatana)",
    region: "Varanasi, Uttar Pradesh",
    lat: 25.3811,
    lng: 83.0214,
    era: "Ancient & Classical",
    period: "Mauryan (c. 250 BCE) & Gupta (c. 5th c. CE)",
    description: "The sacred deer park where Gautama Buddha turned the Wheel of Law (First Sermon). Site of the Ashoka Lion Capital and the Gupta Standing Buddha.",
    artifactId: "lion-capital",
    artifactTitle: "Lion Capital & Standing Buddha",
    additionalArtifactIds: ["standing-buddha"]
  },
  {
    id: "tiruvarangulam",
    name: "Tiruvarangulam (Chola Heartlands)",
    region: "Pudukkottai, Tamil Nadu",
    lat: 10.3547,
    lng: 78.8956,
    era: "Medieval",
    period: "Imperial Chola Dynasty (c. 10th c. CE)",
    description: "A celebrated temple center in the Kaveri delta region that yielded some of the finest sacred Chola processional bronzes in South Asian history.",
    artifactId: "nataraja",
    artifactTitle: "Nataraja: Shiva as Lord of Dance"
  },
  {
    id: "delhi-mughal",
    name: "Delhi & Agra (Imperial Mughal Court)",
    region: "National Capital Region / Uttar Pradesh",
    lat: 28.6139,
    lng: 77.2090,
    era: "Early Modern",
    period: "Mughal Empire (c. 1550–1650 CE)",
    description: "The imperial capital where Humayun, Akbar, Jahangir, and Shah Jahan fostered royal painting ateliers producing grand illuminated chronicles.",
    artifactId: "princes-timur",
    artifactTitle: "Princes of the House of Timur"
  },
  {
    id: "jaipur-court",
    name: "Jaipur (Pink City / Kachwaha Kingdom)",
    region: "Rajasthan",
    lat: 26.9124,
    lng: 75.7873,
    era: "Early Modern",
    period: "Rajput / Rajasthan School (c. 1780 CE)",
    description: "The royal planned city founded by Sawai Jai Singh II, renowned for the Hawa Mahal and the vibrant Jaipur school of court portraiture.",
    artifactId: "raja-pratap-singh",
    artifactTitle: "Portrait of Raja Pratap Singh"
  },
  {
    id: "malavli-press",
    name: "Malavli / Ghatkopar (Ravi Varma Press)",
    region: "Lonavala, Maharashtra / Origin: Travancore, Kerala",
    lat: 18.7500,
    lng: 73.4833,
    era: "Colonial",
    period: "Late 19th Century (c. 1894–1896 CE)",
    description: "The pioneering steam-powered lithographic printing press established by Raja Ravi Varma that democratized Indian fine arts into mass visual culture.",
    artifactId: "vasantsena",
    artifactTitle: "Vasantsena (Oleograph)"
  },
  {
    id: "amritsar-punjab",
    name: "Amritsar (Majithia Estate)",
    region: "Punjab",
    lat: 31.6340,
    lng: 74.8723,
    era: "Modern",
    period: "Modern Indian Art (c. 1935 CE)",
    description: "The ancestral studio of Amrita Sher-Gil upon returning from Paris, where she painted 'Group of Three Girls' and inaugurated Indian Modernism.",
    artifactId: "group-three-girls",
    artifactTitle: "Group of Three Girls"
  }
];
