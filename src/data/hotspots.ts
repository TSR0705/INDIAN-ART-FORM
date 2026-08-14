export interface Hotspot {
  id: string;
  artifactId: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  title: string;
  detail: string;
  category?: string;
}

export const HOTSPOTS: Hotspot[] = [
  // 01 Dancing Girl
  {
    id: "dancing-girl-arm",
    artifactId: "dancing-girl",
    x: 35,
    y: 42,
    title: "Adorned Left Arm",
    detail: "24 bangles cover her left arm entirely down to the wrist, reflecting a traditional Harappan body adornment practice still practiced in Rajasthan today.",
    category: "Ornamentation"
  },
  {
    id: "dancing-girl-hip",
    artifactId: "dancing-girl",
    x: 65,
    y: 52,
    title: "Defiant Hand on Hip",
    detail: "Her right hand placed firmly on her hip creates a relaxed contrapposto posture with slightly bent knees, conveying dynamic self-assurance.",
    category: "Posture"
  },
  {
    id: "dancing-girl-necklace",
    artifactId: "dancing-girl",
    x: 52,
    y: 28,
    title: "Cowrie Shell Necklace",
    detail: "Wears a simple triple-pendant necklace, indicating personal ornament made from marine shells traded across Indus maritime routes.",
    category: "Metallurgy"
  },
  {
    id: "dancing-girl-hair",
    artifactId: "dancing-girl",
    x: 68,
    y: 18,
    title: "Elaborate Hair Chignon",
    detail: "Her thick hair is gathered into a large braided bun (chignon) resting over her right shoulder, showing sophisticated Harappan hairstyling.",
    category: "Hairstyle"
  },

  // 02 Lion Capital
  {
    id: "lion-capital-lions",
    artifactId: "lion-capital",
    x: 50,
    y: 24,
    title: "Four Roaring Lions",
    detail: "Four Asiatic lions standing back-to-back represent royal majesty, courage, and Emperor Ashoka proclaiming Buddhist Dhamma in all four cardinal directions.",
    category: "Imperial Symbol"
  },
  {
    id: "lion-capital-chakra",
    artifactId: "lion-capital",
    x: 50,
    y: 52,
    title: "Ashoka Chakra",
    detail: "The 24-spoked wheel of moral law (Dharma). Adopted in 1947 as the central wheel on the National Flag of India.",
    category: "National Emblem"
  },
  {
    id: "lion-capital-animals",
    artifactId: "lion-capital",
    x: 32,
    y: 54,
    title: "Four Noble Animals",
    detail: "The drum features relief figures of an Elephant (conception), Horse (renunciation), Bull (birth), and Lion (enlightenment).",
    category: "Buddhist Lore"
  },
  {
    id: "lion-capital-lotus",
    artifactId: "lion-capital",
    x: 50,
    y: 78,
    title: "Inverted Lotus Base",
    detail: "Bell-shaped lotus base carved with crisp petals, symbolizing purity rising out of worldly mud.",
    category: "Sculpture"
  },

  // 03 Standing Buddha
  {
    id: "buddha-mudra",
    artifactId: "standing-buddha",
    x: 62,
    y: 35,
    title: "Abhaya Mudra",
    detail: "Right hand raised at shoulder level with palm facing outward, granting fearlessness, peace, and spiritual protection.",
    category: "Iconography"
  },
  {
    id: "buddha-robe",
    artifactId: "standing-buddha",
    x: 42,
    y: 58,
    title: "Diaphanous Robe",
    detail: "The smooth, foldless Sanghati (monastic robe) clings to the body like wet silk, revealing idealized anatomical contours.",
    category: "Gupta Style"
  },
  {
    id: "buddha-eyes",
    artifactId: "standing-buddha",
    x: 50,
    y: 18,
    title: "Downcast Dhyana Eyes",
    detail: "Lotus-petal eyes lowered inward in deep meditative absorption, symbolizing complete detachment from sensory distraction.",
    category: "Spirituality"
  },
  {
    id: "buddha-halo",
    artifactId: "standing-buddha",
    x: 32,
    y: 14,
    title: "Intricate Halo (Prabhamandala)",
    detail: "Decorated with elaborate floral scrolls, lotus rosettes, and twin geese (Hamsas), symbolizing divine radiance.",
    category: "Ornament"
  },

  // 04 Nataraja
  {
    id: "nataraja-damaru",
    artifactId: "nataraja",
    x: 75,
    y: 32,
    title: "Damaru (Hourglass Drum)",
    detail: "Upper right hand holds the drum emitting the primal sound pulse (Nada) from which creation originates (Srishti).",
    category: "Cosmic Act"
  },
  {
    id: "nataraja-agni",
    artifactId: "nataraja",
    x: 25,
    y: 32,
    title: "Agni (Flame of Destruction)",
    detail: "Upper left hand holds the divine fire that periodically dissolves the universe at the end of a cosmic cycle (Samhara).",
    category: "Cosmic Act"
  },
  {
    id: "nataraja-apasmara",
    artifactId: "nataraja",
    x: 52,
    y: 84,
    title: "Apasmara Demon",
    detail: "Right foot crushes the dwarf demon of spiritual ignorance and delusion (Tirobhava), liberating the soul.",
    category: "Cosmic Act"
  },
  {
    id: "nataraja-foot",
    artifactId: "nataraja",
    x: 62,
    y: 65,
    title: "Raised Left Foot",
    detail: "Elevated foot points toward the Gaja-hasta arm, offering refuge, grace, and ultimate salvation (Anugraha).",
    category: "Cosmic Act"
  },

  // 05 Princes of Timur
  {
    id: "timur-ruler",
    artifactId: "princes-timur",
    x: 50,
    y: 42,
    title: "Amir Timur (Tamerlane)",
    detail: "Seated prominently inside the central pavilion wearing a gold-embroidered robe, symbolizing dynastic origin.",
    category: "Lineage"
  },
  {
    id: "timur-humayun",
    artifactId: "princes-timur",
    x: 38,
    y: 48,
    title: "Emperor Humayun",
    detail: "Seated to Timur's right in high Persianate court attire, patron of the original painting panel in Kabul.",
    category: "Mughal Patron"
  },
  {
    id: "timur-akbar",
    artifactId: "princes-timur",
    x: 62,
    y: 50,
    title: "Young Prince Akbar",
    detail: "Added later by court painter Jahangir, depicting Akbar as a young prince entering the royal circle.",
    category: "Mughal Lineage"
  },

  // 06 Raja Pratap Singh
  {
    id: "pratap-profile",
    artifactId: "raja-pratap-singh",
    x: 52,
    y: 28,
    title: "Kachwaha Profile",
    detail: "Rendered in strict side profile (Ek-chashm), emphasizing regal dignity, sharp nose, and dark curled mustache.",
    category: "Rajput Style"
  },
  {
    id: "pratap-turban",
    artifactId: "raja-pratap-singh",
    x: 48,
    y: 18,
    title: "Jeweled Turban (Sarpech)",
    detail: "Golden turban ornament set with emeralds, pearls, and a peacock plume, denoting royal authority.",
    category: "Royal Jewels"
  },

  // 07 Vasantsena
  {
    id: "vasantsena-heroine",
    artifactId: "vasantsena",
    x: 48,
    y: 38,
    title: "Sanskrit Heroine Vasantsena",
    detail: "Depicts the noble courtesan heroine from Shudraka's classical play Mrcchakatika (The Little Clay Cart).",
    category: "Literature"
  },
  {
    id: "vasantsena-litho",
    artifactId: "vasantsena",
    x: 50,
    y: 70,
    title: "Oleograph Color Separation",
    detail: "Printed using over 12 distinct stone blocks, blending European oil technique with accessible mass print culture.",
    category: "Print Technique"
  },

  // 08 Group of Three Girls
  {
    id: "three-girls-faces",
    artifactId: "group-three-girls",
    x: 50,
    y: 30,
    title: "Contemplative Melancholy",
    detail: "The three young women look outward with quiet dignity and introspective sadness, avoiding dramatic theatricality.",
    category: "Modernism"
  },
  {
    id: "three-girls-palette",
    artifactId: "group-three-girls",
    x: 35,
    y: 65,
    title: "Flat Monumental Palette",
    detail: "Bold color blocks of deep crimson red, ochre yellow, and ivory white, synthesizing Gauguin with Ajanta murals.",
    category: "Color Theory"
  }
];
