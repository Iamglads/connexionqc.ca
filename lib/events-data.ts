export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  images: string[];
  category: string;
  features: string[];
  specifications?: {
    [key: string]: string | number;
  };
  relatedEvents?: string[];
}

export const events: Event[] = [
  {
    id: "article-dc",
    title: "Articles DC",
    slug: "articledc",
    description: "Articles et actualités sur nos services audiovisuels",
    content: "",
    images: [],
    category: "general",
    features: []
  },
  {
    id: "ecran-retro-projection",
    title: "Écran Rétro-Projection",
    slug: "ecran-retro-projection",
    description: "Solutions de rétroprojection pour vos événements",
    content: "",
    images: [],
    category: "projection",
    features: []
  },
  {
    id: "televisions-cube-portrait",
    title: "Télévisions Mode Cube et Mode Portrait",
    slug: "televisions-mode-cube-et-mode-portrait",
    description: "Configurations innovantes d'affichage pour un impact visuel maximal",
    content: "",
    images: [],
    category: "display",
    features: []
  },
  {
    id: "mur-dimage-videowall",
    title: "Mur d'Image Videowall",
    slug: "mur-dimage-videowall",
    description: "Solutions de murs vidéo pour un affichage impressionnant",
    content: "",
    images: [],
    category: "display",
    features: []
  },
  {
    id: "cinema-plein-air",
    title: "Cinéma Projection Plein Air",
    slug: "cinema-projection-plein-air",
    description: "Équipement professionnel pour projections en extérieur",
    content: "",
    images: [],
    category: "projection",
    features: []
  },
  {
    id: "presentation-hybride",
    title: "Présentation Hybride Zoom et Présentiel",
    slug: "presentation-hybride-zoom-et-presentiel",
    description: "Solutions pour événements hybrides et visioconférences",
    content: "",
    images: [],
    category: "conference",
    features: []
  },
  {
    id: "ambiance-eclairage-led",
    title: "Ambiance Éclairage LED",
    slug: "ambiance-eclairage-led",
    description: "Solutions d'éclairage LED pour créer l'ambiance parfaite",
    content: "",
    images: [],
    category: "lighting",
    features: []
  },
  {
    id: "ecran-hd-grand-format",
    title: "Écran HD Grand Format",
    slug: "ecran-hd-grand-format",
    description: "Écrans haute définition de grande taille pour un impact maximal",
    content: "",
    images: [],
    category: "display",
    features: []
  },
  {
    id: "lutrin-presidentiel",
    title: "Lutrin Présidentiel",
    slug: "lutrin-presidentiel",
    description: "Lutrins professionnels pour vos présentations",
    content: "",
    images: [],
    category: "equipment",
    features: []
  },
  {
    id: "ambiance-video-mapping",
    title: "Ambiance Video Mapping",
    slug: "ambiance-video-mapping",
    description: "Projection mapping pour des expériences visuelles uniques",
    content: "",
    images: [],
    category: "projection",
    features: []
  },
  {
    id: "ambiance-sonorisation",
    title: "Ambiance Sonorisation",
    slug: "ambiance-sonorisation",
    description: "Solutions audio professionnelles pour tous types d'événements",
    content: "",
    images: [],
    category: "audio",
    features: []
  },
  {
    id: "television-panneau-industriel",
    title: "Télévision Panneau Industriel",
    slug: "television-panneau-industriel",
    description: "Écrans industriels pour une utilisation intensive",
    content: "",
    images: [],
    category: "display",
    features: []
  },
  {
    id: "televisions-multi-espaces",
    title: "Télévisions Multi-Espaces",
    slug: "televisions-multi-espaces",
    description: "Solutions d'affichage pour plusieurs zones",
    content: "",
    images: [],
    category: "display",
    features: []
  }
];

export const eventCategories = {
  general: "Général",
  projection: "Projection",
  display: "Affichage",
  conference: "Conférence",
  lighting: "Éclairage",
  equipment: "Équipement",
  audio: "Audio"
};