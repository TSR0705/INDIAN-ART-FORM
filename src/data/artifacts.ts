export interface Artifact {
  id: string;
  index: number;
  title: string;
  shortTitle: string;
  displayDate: string;
  year: number;
  era: string;
  period: string;
  civilization: string;
  dynasty: string;
  origin: string;
  medium: string;
  technique: string;
  dimensions: string;
  museum: string;
  accession: string;
  overview: string;
  significance: string;
  context: string;
  culturalMeaning: string;
  artisticSignificance: string;
  audioNarration: string;
  image: {
    src: string;
    alt: string;
    credit: string;
  };
  museumSource: {
    name: string;
    url: string;
    license: string;
    credit: string;
  };
}

export const ARTIFACTS: Artifact[] = [
  {
    id: "dancing-girl",
    index: 1,
    title: "Dancing Girl",
    shortTitle: "Dancing Girl",
    displayDate: "c. 2500 BCE",
    year: -2500,
    era: "Ancient",
    period: "Mature Harappan Phase (Urban Bronze Age)",
    civilization: "Indus Valley Civilization",
    dynasty: "Harappan Era",
    origin: "Mohenjo-daro (present-day Sindh, Pakistan)",
    medium: "Solid Bronze",
    technique: "Lost-wax casting (Cire-perdue)",
    dimensions: "10.5 × 5.0 × 2.5 cm (4.1 × 2.0 × 1.0 in)",
    museum: "National Museum, New Delhi, India",
    accession: "HR-5271/195 (National Museum, New Delhi)",
    overview: "The Dancing Girl is a prehistoric bronze statuette created around 2500 BCE in the Indus Valley metropolis of Mohenjo-daro. Despite its miniature scale of just 10.5 centimeters, it is globally celebrated as a masterpiece of early metallurgy and human artistic representation, showcasing an audacious sense of naturalism, movement, and individual personality.",
    significance: "One of the earliest known bronze figurative sculptures in world history, demonstrating advanced metallurgical knowledge and lost-wax casting technique in urban Bronze Age South Asia.",
    context: "Excavated by archaeologist Ernest J. H. Mackay in the HR Area of Mohenjo-daro in 1926. The statuette reveals that Harappan artisans possessed sophisticated understanding of copper-tin alloy smelting, mold preparation, and lost-wax metal casting over 4,500 years ago.",
    culturalMeaning: "Reflects the high social status of performing arts, personal body adornment, and female independence in Harappan urban society. The long series of bangles covering her left arm remains a living aesthetic tradition among rural communities in Rajasthan and Gujarat today.",
    artisticSignificance: "Stands out for its relaxed contrapposto posture—right hand resting confidently on her hip, left arm adorned with 24 bangles, head tilted back slightly with hair bound in an elaborate chignon.",
    audioNarration: "Cast over 4,500 years ago in Mohenjo-daro, the Dancing Girl is one of humanity's earliest bronze masterpieces. Standing just ten point five centimeters tall, her confident stance and arm laden with bangles celebrate ancient Indian craftsmanship and human spirit.",
    image: {
      src: "/images/artifacts/dancing-girl.jpg",
      alt: "Dancing Girl bronze statuette from Mohenjo-daro, c. 2500 BCE",
      credit: "National Museum, New Delhi / Archaeological Survey of India"
    },
    museumSource: {
      name: "National Museum, New Delhi",
      url: "https://www.nationalmuseumindia.gov.in",
      license: "Public Domain / Educational Heritage Access",
      credit: "Collection of National Museum, New Delhi"
    }
  },
  {
    id: "lion-capital",
    index: 2,
    title: "Lion Capital of Ashoka",
    shortTitle: "Ashoka Lion Capital",
    displayDate: "c. 250 BCE",
    year: -250,
    era: "Ancient",
    period: "Mauryan Empire",
    civilization: "Mauryan Dynasty",
    dynasty: "Imperial Mauryan",
    origin: "Sarnath Deer Park, Varanasi, Uttar Pradesh",
    medium: "Chunar Sandstone",
    technique: "Carved sandstone with Mauryan mirror polish",
    dimensions: "2.15 m (7 ft 1 in) height",
    museum: "Sarnath Archaeological Museum, Uttar Pradesh, India",
    accession: "Acc. No. 5454 (Sarnath Museum)",
    overview: "The Lion Capital of Ashoka is a monumental stone sculpture originally erected atop an Ashokan Pillar at Sarnath, where the Buddha first taught the Dhamma. Carved from a single block of polished sandstone, it features four back-to-back Asiatic lions standing above an abacus with four animals and wheels of law.",
    significance: "The supreme masterpiece of Imperial Mauryan stone carving and political iconography; its four-lion motif was adopted in 1950 as the official State Emblem of India, and its 24-spoked Ashoka Chakra forms the center of the National Flag of India.",
    context: "Commissioned by Emperor Ashoka the Great following his conversion to Buddhism after the Kalinga War. Erected at Sarnath to commemorate the Buddha's First Sermon (Dharmachakrapravartana), serving as a beacon of moral governance (Dhamma-vijaya).",
    culturalMeaning: "Combines royal power (lions roaring Dhamma in all four directions) with sacred spiritual order. The abacus depicts four noble animals—the Elephant, Horse, Bull, and Lion—symbolizing key stages in Gautama Buddha's life.",
    artisticSignificance: "Renowned for its extraordinary mirror-like surface polish (Mauryan polish), anatomical realism of the lions' manes and tense muscles, and architectural heraldry.",
    audioNarration: "Sculpted from a single block of sandstone around 250 BCE, the Lion Capital of Ashoka at Sarnath represents the height of Mauryan imperial stone craftsmanship. Today, its lions and 24-spoked wheel stand as the National Emblem of India.",
    image: {
      src: "/images/artifacts/lion-capital.jpg",
      alt: "Lion Capital of Ashoka from Sarnath, c. 250 BCE",
      credit: "Sarnath Archaeological Museum / Archaeological Survey of India"
    },
    museumSource: {
      name: "Sarnath Archaeological Museum",
      url: "https://asi.nic.in",
      license: "Public Domain / Educational Heritage Access",
      credit: "Archaeological Survey of India, Sarnath Site Museum"
    }
  },
  {
    id: "standing-buddha",
    index: 3,
    title: "Standing Buddha from Sarnath",
    shortTitle: "Gupta Buddha",
    displayDate: "c. 5th century CE",
    year: 474,
    era: "Classical",
    period: "Gupta Period (Classical Golden Age)",
    civilization: "Gupta Empire",
    dynasty: "Imperial Gupta Dynasty",
    origin: "Sarnath, Varanasi, Uttar Pradesh",
    medium: "Chunar Sandstone",
    technique: "High-relief stone carving",
    dimensions: "193 × 66 × 30 cm (76 × 26 × 12 in)",
    museum: "Sarnath Archaeological Museum, Uttar Pradesh, India",
    accession: "Acc. No. 5511 (Sarnath Museum)",
    overview: "The Standing Buddha from Sarnath is the definitive classical masterpiece of Indian Buddhist sculpture. Carved during the Gupta Golden Age, it depicts the Buddha in a state of serene spiritual equanimity, wearing a transparent robe that clings to the contours of the body like wet silk.",
    significance: "Established the transcendent 'Sarnath Ideal' of Buddhist art, influencing sacred visual imagery across Central Asia, Tibet, Southeast Asia, and China for over a millennium.",
    context: "Created during the reign of Gupta Emperor Kumaragupta II or Budhagupta in the late 5th century CE. Sarnath reached its artistic zenith during this period, developing a distinct school of sculpture characterized by smooth surfaces, refined proportions, and deep spiritual introspection.",
    culturalMeaning: "Visualizes the concept of Tathagata (The Enlightened One) who has transcended worldly suffering. The right hand raised in Abhaya Mudra offers reassurance and protection to all living beings.",
    artisticSignificance: "Distinguished by its complete absence of drapery folds over the torso, emphasizing pure form, delicate facial features with downcast meditative eyes (Dhyana), snail-shell curl hair (Ushnisha), and an intricately carved halo (Prabhamandala).",
    audioNarration: "Carved during the 5th century Classical Gupta era, the Standing Buddha from Sarnath captures spiritual tranquility in pure stone. The sheer, diaphanous robe and calm expression established the aesthetic canon for Asian sacred art.",
    image: {
      src: "/images/artifacts/standing-buddha.jpg",
      alt: "Standing Buddha from Sarnath, Gupta period, c. 5th century CE",
      credit: "Sarnath Archaeological Museum / Archaeological Survey of India"
    },
    museumSource: {
      name: "Sarnath Archaeological Museum",
      url: "https://asi.nic.in",
      license: "Public Domain / Educational Heritage Access",
      credit: "Archaeological Survey of India, Sarnath Site Museum"
    }
  },
  {
    id: "nataraja",
    index: 4,
    title: "Nataraja: Shiva as Lord of Dance",
    shortTitle: "Chola Nataraja",
    displayDate: "c. 10th century CE",
    year: 980,
    era: "Medieval",
    period: "Imperial Chola Dynasty",
    civilization: "Chola Kingdom",
    dynasty: "Imperial Chola",
    origin: "Tiruvarangulam, Pudukkottai District, Tamil Nadu",
    medium: "Panchaloha Bronze (Five-metal alloy)",
    technique: "Lost-wax casting (Madhuchishtavidhana)",
    dimensions: "72.5 × 58.5 × 24.0 cm (28.5 × 23.0 × 9.4 in)",
    museum: "National Museum, New Delhi, India",
    accession: "Acc. No. 58.26 (National Museum, New Delhi)",
    overview: "The Chola Nataraja is a world-renowned bronze masterpiece representing Lord Shiva performing the Ananda Tandava—the Cosmic Dance of Bliss. Encapsulating the five cosmic activities of the universe within a ring of flames, it represents the absolute peak of South Indian metallurgical art.",
    significance: "Universally acclaimed by art historians, philosophers, and scientists (including physicist Fritjof Capra and philosopher Auguste Rodin) as the ultimate artistic synthesis of religion, science, and dynamic cosmic motion.",
    context: "Created during the Golden Age of the Imperial Chola Dynasty (10th century CE) under the patronage of Queen Sembiyan Mahadevi and King Raja Raja I. Designed as a mobile processional deity (Utsava Murti) for temple festivals.",
    culturalMeaning: "Encodes the five acts of divine creation and cosmic cycle: Srishti (Creation - Damaru drum), Sthiti (Preservation - Abhaya mudra), Samhara (Destruction - Agni fire), Tirobhava (Illusion - Foot on Apasmara demon), and Anugraha (Grace / Salvation - Raised left foot).",
    artisticSignificance: "Flawless mathematical balance: Shiva's four arms radiate within the circular Prabhamandala (aureole of fire), his wild matted locks flying outward containing the river goddess Ganga and crescent moon.",
    audioNarration: "Cast in bronze during the 10th century Chola Dynasty, Nataraja depicts Shiva in his cosmic dance of creation and destruction. Balanced within a fiery ring, this masterpiece bridges sacred geometry, dynamic movement, and divine grace.",
    image: {
      src: "/images/artifacts/nataraja.jpg",
      alt: "Nataraja Shiva as Lord of Dance, Chola bronze, c. 10th century CE",
      credit: "National Museum, New Delhi"
    },
    museumSource: {
      name: "National Museum, New Delhi",
      url: "https://www.nationalmuseumindia.gov.in",
      license: "Public Domain / Educational Heritage Access",
      credit: "Collection of National Museum, New Delhi"
    }
  },
  {
    id: "princes-timur",
    index: 5,
    title: "Princes of the House of Timur",
    shortTitle: "House of Timur",
    displayDate: "c. 1550–1555 CE",
    year: 1555,
    era: "Early Modern",
    period: "Mughal Empire (Humayun & Akbar Rains)",
    civilization: "Mughal Empire",
    dynasty: "Timurid / Mughal Dynasty",
    origin: "Imperial Mughal Atelier (Agra / Kabul)",
    medium: "Opaque gouache & gold on woven cotton cloth",
    technique: "Miniature painting on fine cotton panel",
    dimensions: "108.5 × 108.0 cm (42.7 × 42.5 in)",
    museum: "The British Museum, London, UK",
    accession: "Museum number 1913,0208,0.1 (British Museum)",
    overview: "Princes of the House of Timur is an extraordinary large-scale imperial Mughal painting executed on cotton fabric around 1550–1555 CE. It depicts the founding ancestors of the Mughal dynasty gathered inside an opulent garden pavilion, later updated by Emperor Jahangir to include subsequent heirs.",
    significance: "The largest and most historically important early Mughal painting in existence; acts as a visual manifesto of imperial Timurid lineage and sovereign political legitimacy.",
    context: "Commissioned by the second Mughal Emperor Humayun while in exile in Kabul and Agra, inviting Persian master artists Abd al-Samad and Mir Sayyid Ali. This work laid the foundation for the Imperial Mughal Painting Atelier.",
    culturalMeaning: "Visualizes the grand genealogical continuity connecting Amir Timur (Tamerlane) to Babur, Humayun, Akbar, Jahangir, and Shah Jahan. Blends Persianate garden geometry with Indian court realism.",
    artisticSignificance: "Executed on fine Indian cotton rather than paper due to its ambitious 1-meter square scale. Features elaborate gold leaf brocades, Persian carpets, tiled pavilions, and individualized portraiture.",
    audioNarration: "Painted on fine cotton in the 1550s for Emperor Humayun, Princes of the House of Timur is a monumental Mughal masterpiece depicting royal lineage. It marks the birth of the imperial Mughal painting tradition.",
    image: {
      src: "/images/artifacts/princes-timur.jpg",
      alt: "Princes of the House of Timur, Mughal court painting, c. 1550–1555 CE",
      credit: "The British Museum, London"
    },
    museumSource: {
      name: "The British Museum, London",
      url: "https://www.britishmuseum.org",
      license: "Educational Heritage Record",
      credit: "Trustees of the British Museum"
    }
  },
  {
    id: "raja-pratap-singh",
    index: 6,
    title: "Portrait of Raja Pratap Singh of Jaipur",
    shortTitle: "Raja Pratap Singh",
    displayDate: "1780 CE",
    year: 1780,
    era: "Early Modern",
    period: "Rajput / Rajasthan School (Jaipur Court)",
    civilization: "Kachwaha Rajput Kingdom",
    dynasty: "Jaipur Royalty",
    origin: "Jaipur Court Atelier, Rajasthan",
    medium: "Opaque gouache & burnished gold on paper",
    technique: "Rajput miniature court portraiture",
    dimensions: "29.2 × 21.6 cm (11.5 × 8.5 in)",
    museum: "Victoria and Albert Museum, London, UK",
    accession: "Museum number IS.80-1981 (V&A Museum)",
    overview: "This splendid court portrait depicts Sawai Pratap Singh, the Kachwaha Rajput ruler of Jaipur (reigned 1778–1803 CE) and builder of the famed Hawa Mahal. Painted in 1780 CE, it encapsulates the refined elegance, bold profiles, and rich color palettes of Rajput royal ateliers.",
    significance: "A supreme example of late 18th-century Rajput court portraiture, demonstrating how regional Indian royal ateliers synthesized Mughal technical refinement with indigenous Hindu chivalric and devotional visual traditions.",
    context: "Created during a period of cultural flowering in Jaipur under Sawai Pratap Singh, who was a poet, scholar, music patron, and devout worshipper of Lord Krishna (writing under the pen name 'Brajnidhi').",
    culturalMeaning: "Reflects the Kshatriya warrior dignity and royal court protocol of Rajasthan. The ruler is presented in strict profile wearing pristine white muslin dress, jeweled turban ornaments, and carrying a ceremonial sword.",
    artisticSignificance: "Striking contrast between the crisp, flat emerald-green background and the intricate gold-embossed jewelry, pearls, and delicate textile rendering.",
    audioNarration: "Painted in 1780, this royal Jaipur portrait presents Sawai Pratap Singh, the visionary patron who built the Hawa Mahal. Its vibrant palette and crisp profile define the beauty of Rajput court miniature art.",
    image: {
      src: "/images/artifacts/raja-pratap-singh.jpg",
      alt: "Portrait of Raja Pratap Singh of Jaipur, Rajput painting, 1780 CE",
      credit: "Victoria and Albert Museum, London"
    },
    museumSource: {
      name: "Victoria and Albert Museum, London",
      url: "https://www.vam.ac.uk",
      license: "Educational Heritage Record",
      credit: "Victoria and Albert Museum, London"
    }
  },
  {
    id: "vasantsena",
    index: 7,
    title: "Vasantsena",
    shortTitle: "Vasantsena",
    displayDate: "1896 CE",
    year: 1896,
    era: "Colonial",
    period: "Late 19th Century (Oleograph Print Revolution)",
    civilization: "Colonial India / Modern Visual Culture",
    dynasty: "Raja Ravi Varma Press",
    origin: "Malavli / Ghatkopar, Maharashtra (Artist: Travancore, Kerala)",
    medium: "Chromolithograph / Oleograph",
    technique: "Multi-stone lithographic steam printing",
    dimensions: "71.0 × 50.5 cm (28.0 × 19.9 in)",
    museum: "National Gallery of Modern Art (NGMA), New Delhi, India",
    accession: "NGMA Accession No. 2486 (NGMA New Delhi)",
    overview: "Vasantsena is a celebrated chromolithograph print created in 1896 by Raja Ravi Varma (1848–1906). Depicting the heroine of the ancient Sanskrit play Mrcchakatika (The Little Clay Cart), it marks the monumental transition from individual royal painting to mass-produced visual culture in India.",
    significance: "Democratized Indian art by bringing mythological and classical literary figures into millions of Indian homes via high-quality affordable lithographic prints, founding modern Indian calendar art and cinema aesthetics.",
    context: "Raja Ravi Varma established the Ravi Varma Fine Art Lithographic Press in 1894 with German press technicians. Vasantsena was one of his most popular early prints, portraying classical Indian womanhood with European oil painting realism.",
    culturalMeaning: "Bridged classical Sanskrit literature, regional theatre, and modern mass media. Vasantsena represents the noble, elegant Nayika (heroine) braving a storm to meet her lover Charudatta.",
    artisticSignificance: "Masterful application of European academic oil painting techniques—dramatic chiaroscuro lighting, translucent silk drapery, and realistic human anatomy—reproduced through over 12 lithographic color stones.",
    audioNarration: "Printed in 1896 at the Ravi Varma Press, Vasantsena brought classical Sanskrit literature to millions of Indian homes. Raja Ravi Varma's fusion of European realism and Indian mythology birthed modern mass visual culture.",
    image: {
      src: "/images/artifacts/vasantsena.jpg",
      alt: "Vasantsena oleograph print by Raja Ravi Varma, 1896 CE",
      credit: "National Gallery of Modern Art (NGMA), New Delhi"
    },
    museumSource: {
      name: "National Gallery of Modern Art (NGMA), New Delhi",
      url: "https://ngmaindia.gov.in",
      license: "Public Domain / Educational Access",
      credit: "Collection of NGMA New Delhi"
    }
  },
  {
    id: "group-three-girls",
    index: 8,
    title: "Group of Three Girls",
    shortTitle: "Three Girls",
    displayDate: "1935 CE",
    year: 1935,
    era: "Modern",
    period: "Early 20th Century Indian Modernism",
    civilization: "Modern India",
    dynasty: "Amrita Sher-Gil Studio",
    origin: "Amritsar, Punjab, India",
    medium: "Oil on Canvas",
    technique: "Modernist oil painting",
    dimensions: "83.5 × 66.5 cm (32.9 × 26.2 in)",
    museum: "National Gallery of Modern Art (NGMA), New Delhi, India",
    accession: "NGMA Accession No. 2404 (NGMA New Delhi)",
    overview: "Group of Three Girls is the foundational masterwork of Indian Modernism painted in 1935 by Amrita Sher-Gil (1913–1941). Depicting three young Indian women sitting in quiet contemplation, it won the Gold Medal at the All-India Fine Arts and Crafts Society exhibition in 1937.",
    significance: "Recognized by art historians as the turning point of modern Indian art, inaugurating an authentic, empathetic modernist visual language rooted in Indian life rather than European academic imitation or nostalgic revivalism.",
    context: "Painted shortly after Sher-Gil returned to India from Paris in 1934. Moved by the silent dignity and quiet hardship of rural Indian women, she synthesized Post-Impressionist form (Paul Gauguin) with the ancient wall paintings of Ajanta.",
    culturalMeaning: "Rejects orientalist romanticism to portray real Indian women with poignant solemnity, quiet solidarity, and introspective dignity on the threshold of modern nationhood.",
    artisticSignificance: "Monumental simplified figures, expressive hands, and bold blocks of flat color—deep crimson red, earth ochre, and warm ivory—creating a haunting rhythm of quiet stillness.",
    audioNarration: "Painted in 1935 by Amrita Sher-Gil, Group of Three Girls inaugurates Indian Modernism. With flat color blocks and solemn dignity, Sher-Gil captured the authentic spirit of Indian women, marking the dawn of modern art.",
    image: {
      src: "/images/artifacts/group-three-girls.jpg",
      alt: "Group of Three Girls oil painting by Amrita Sher-Gil, 1935 CE",
      credit: "National Gallery of Modern Art (NGMA), New Delhi"
    },
    museumSource: {
      name: "National Gallery of Modern Art (NGMA), New Delhi",
      url: "https://ngmaindia.gov.in",
      license: "Public Domain / Educational Access",
      credit: "Collection of NGMA New Delhi"
    }
  }
];
