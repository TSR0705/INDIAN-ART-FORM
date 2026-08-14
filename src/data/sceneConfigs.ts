export interface SceneConfig {
  atmosphere:
    | "archaeological"
    | "monumental"
    | "serene"
    | "cosmic"
    | "mughal"
    | "rajput"
    | "print"
    | "modern";
  alignment: "left" | "right";
  reveal: "mask" | "scale" | "vertical" | "radial" | "zoom" | "layered";
  interaction: "zoom" | "hotspots" | "rotate" | "lineage" | "print-layers" | "minimal";
  accent: string;
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  border: string;
}

export const SCENE_CONFIGS: Record<string, SceneConfig> = {
  "dancing-girl": {
    atmosphere: "archaeological",
    alignment: "left", // Text Left, Image Right
    reveal: "mask",
    interaction: "hotspots",
    accent: "#b87333",
    background: "#080605",
    surface: "#120e0b",
    text: "#f3ede7",
    mutedText: "#a39282",
    border: "rgba(184, 115, 51, 0.3)"
  },
  "lion-capital": {
    atmosphere: "monumental",
    alignment: "right", // Image Left, Text Right
    reveal: "vertical",
    interaction: "hotspots",
    accent: "#d4b483",
    background: "#07080a",
    surface: "#101217",
    text: "#f5f3ee",
    mutedText: "#9ea4b0",
    border: "rgba(212, 180, 131, 0.3)"
  },
  "standing-buddha": {
    atmosphere: "serene",
    alignment: "left", // Text Left, Image Right
    reveal: "scale",
    interaction: "minimal",
    accent: "#e6c887",
    background: "#060708",
    surface: "#0e1012",
    text: "#f7f6f0",
    mutedText: "#8e959e",
    border: "rgba(230, 200, 135, 0.25)"
  },
  "nataraja": {
    atmosphere: "cosmic",
    alignment: "right", // Image Left, Text Right
    reveal: "radial",
    interaction: "hotspots",
    accent: "#c5a059",
    background: "#0a0606",
    surface: "#180c0c",
    text: "#fcedeb",
    mutedText: "#b89088",
    border: "rgba(197, 160, 89, 0.35)"
  },
  "princes-timur": {
    atmosphere: "mughal",
    alignment: "left", // Text Left, Image Right
    reveal: "zoom",
    interaction: "lineage",
    accent: "#1a5336",
    background: "#050a07",
    surface: "#0c1510",
    text: "#f0f7f3",
    mutedText: "#8ba696",
    border: "rgba(26, 83, 54, 0.35)"
  },
  "raja-pratap-singh": {
    atmosphere: "rajput",
    alignment: "right", // Image Left, Text Right
    reveal: "layered",
    interaction: "zoom",
    accent: "#8b263e",
    background: "#0b0607",
    surface: "#180c0f",
    text: "#fcf0f2",
    mutedText: "#b88a94",
    border: "rgba(139, 38, 62, 0.35)"
  },
  "vasantsena": {
    atmosphere: "print",
    alignment: "left", // Text Left, Image Right
    reveal: "mask",
    interaction: "print-layers",
    accent: "#1f487e",
    background: "#07090e",
    surface: "#0e131d",
    text: "#f2f5fa",
    mutedText: "#90a1b8",
    border: "rgba(31, 72, 126, 0.35)"
  },
  "group-three-girls": {
    atmosphere: "modern",
    alignment: "right", // Image Left, Text Right
    reveal: "scale",
    interaction: "minimal",
    accent: "#b22222",
    background: "#090606",
    surface: "#150d0d",
    text: "#faf4f4",
    mutedText: "#b09595",
    border: "rgba(178, 34, 34, 0.35)"
  }
};
