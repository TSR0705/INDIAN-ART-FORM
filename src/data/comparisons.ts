export interface ComparisonItem {
  id: string;
  title: string;
  subtitle: string;
  artifact1Id: string;
  artifact2Id: string;
  narrative: string;
  table: Array<{ criterion: string; val1: string; val2: string }>;
}

export const COMPARISONS: ComparisonItem[] = [
  {
    id: "bronzes-evolution",
    title: "Metallurgy & Form: Dancing Girl vs Nataraja",
    subtitle: "3,500 Years of Indian Bronze Casting (c. 2500 BCE vs c. 980 CE)",
    artifact1Id: "dancing-girl",
    artifact2Id: "nataraja",
    narrative: "This comparison spans 3,500 years of metallurgical development in India. While both masterpieces utilize the lost-wax casting technique (cire-perdue / madhuchishtavidhana), they represent radically different cultural paradigms: the Harappan statuette celebrates secular, human spontaneity on an intimate scale, whereas the Chola bronze visualizes monumental cosmic metaphysics through mathematical sacred geometry.",
    table: [
      {
        criterion: "Period & Date",
        val1: "Harappan / Bronze Age (c. 2500 BCE)",
        val2: "Chola Dynasty / Medieval (c. 10th century CE)"
      },
      {
        criterion: "Scale & Dimensions",
        val1: "Miniature: 10.5 cm height (Solid Bronze)",
        val2: "Monumental Processional: 72.5 cm height (Panchaloha Bronze)"
      },
      {
        criterion: "Subject Matter",
        val1: "Secular / Human female dancer or adolescent",
        val2: "Divine / Cosmic Shiva performing the Ananda Tandava"
      },
      {
        criterion: "Casting Technique",
        val1: "Solid lost-wax casting in copper-tin alloy",
        val2: "Advanced lost-wax (Madhuchishtavidhana) guided by Shilpa Shastras"
      },
      {
        criterion: "Posture & Movement",
        val1: "Casual contrapposto; arm on hip, naturalistic poise",
        val2: "Dynamic circular equilibrium; 4 radiating arms in cosmic ring"
      },
      {
        criterion: "Cultural Purpose",
        val1: "Urban domestic or personal adornment appreciation",
        val2: "Mobile temple deity (Utsava Murti) for public ecstatic worship"
      }
    ]
  },
  {
    id: "monumental-stone",
    title: "Sacred Stone: Ashoka Lion Capital vs Sarnath Gupta Buddha",
    subtitle: "From Imperial Buddhist Sovereignty to Classical Spiritual Introspection",
    artifact1Id: "lion-capital",
    artifact2Id: "standing-buddha",
    narrative: "Both sculpted from Uttar Pradesh Chunar sandstone at the sacred deer park in Sarnath, these works demonstrate how Buddhist visual language evolved from external imperial proclamation under Emperor Ashoka (3rd c. BCE) into sublime, internalized spiritual equanimity during the Classical Gupta golden age (5th c. CE).",
    table: [
      {
        criterion: "Historical Epoch",
        val1: "Mauryan Empire (c. 250 BCE)",
        val2: "Gupta Classical Era (c. 474 CE)"
      },
      {
        criterion: "Material & Surface",
        val1: "Chunar sandstone with glassy 'Mauryan mirror polish'",
        val2: "Chunar sandstone with smooth, unpolished translucent finish"
      },
      {
        criterion: "Artistic Focus",
        val1: "Muscular animal vitality and imperial majesty",
        val2: "Idealized human anatomy, inner meditative stillness (Dhyana)"
      },
      {
        criterion: "Drapery & Clothing",
        val1: "Stylized lion manes and abacus reliefs",
        val2: "Diaphanous, crease-less robe clinging like wet silk"
      },
      {
        criterion: "Patronage & Intent",
        val1: "Imperial state edict propagating moral law (Dhamma Vijaya)",
        val2: "Monastic sangha devotional image inspiring spiritual liberation"
      }
    ]
  },
  {
    id: "court-paintings",
    title: "Court Traditions: Mughal Timur Princes vs Rajput Raja Pratap Singh",
    subtitle: "Imperial Cosmopolitanism vs Regional Chivalric Devotion",
    artifact1Id: "princes-timur",
    artifact2Id: "raja-pratap-singh",
    narrative: "During the early modern era, North Indian painting split into two magnificent traditions. The Mughal atelier synthesized Persian delicacy and European perspective to document imperial history, while the Rajput courts of Rajasthan used flat saturated colors and bold lyrical lines to celebrate regional devotion and warrior romance.",
    table: [
      {
        criterion: "Artistic School",
        val1: "Imperial Mughal Court (Delhi / Agra / Kabul)",
        val2: "Rajput / Rajasthan School (Jaipur Court)"
      },
      {
        criterion: "Medium & Scale",
        val1: "Opaque gouache & gold on cotton (108.5 cm large format)",
        val2: "Opaque gouache & gold on paper (29.2 cm album folio)"
      },
      {
        criterion: "Perspective & Space",
        val1: "Persianate high horizon with architectural depth",
        val2: "Flat monochrome background accentuating strict side profile"
      },
      {
        criterion: "Ideological Theme",
        val1: "Dynastic legitimacy, Timurid ancestry, sovereign protocol",
        val2: "Kshatriya warrior dignity balanced with Vaishnavite Krishna piety"
      },
      {
        criterion: "Color Palette",
        val1: "Complex mineral gradations, gold leaf, lapis lazuli",
        val2: "Luminous white muslin against saturated, symbolic primary tones"
      }
    ]
  },
  {
    id: "print-vs-modernism",
    title: "Modern Transformations: Ravi Varma Vasantsena vs Sher-Gil Three Girls",
    subtitle: "Academic Realism & Mass Print vs Avant-Garde Modernist Introspection",
    artifact1Id: "vasantsena",
    artifact2Id: "group-three-girls",
    narrative: "These two masterworks bookend the transformation of Indian art into the 20th century. Raja Ravi Varma employed European academic realism and German lithography to democratize sacred stories for millions, whereas Amrita Sher-Gil rejected academic realism and decorative nostalgia to pioneer a raw, modernist figurative idiom grounded in authentic Indian social empathy.",
    table: [
      {
        criterion: "Art Movement",
        val1: "Late 19th-c. Academic Realism & Oleographic Print Culture",
        val2: "20th-c. Post-Impressionist Modernism & Avant-Garde"
      },
      {
        criterion: "Technique & Medium",
        val1: "Chromolithograph (Multi-stone steam press print)",
        val2: "Original Oil on Canvas with sculptural paint handling"
      },
      {
        criterion: "Female Depiction",
        val1: "Romantic, idealized classical Sanskrit heroine (Nayika)",
        val2: "Poignant, contemplative real Indian women in quiet solidarity"
      },
      {
        criterion: "Color Strategy",
        val1: "Soft chiaroscuro lighting, glossy oil varnish emulation",
        val2: "Flat, monumental color blocks of cadmium red, ochre, and sienna"
      },
      {
        criterion: "Historic Legacy",
        val1: "Birthed Indian popular calendar art and early cinema aesthetics",
        val2: "Recognized as the foundational dawn of Modern Indian Art"
      }
    ]
  }
];
