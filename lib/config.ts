export const siteConfig = {
  name: "Daniel Carron",
  description: "Expert en location d'équipement audiovisuel au Québec - Créateur d'ambiances et d'expériences uniques",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://danielcaron.com",
  ogImage: "/og-image.jpg",
  logo: "/favicon.png",
  links: {
    facebook: "https://facebook.com/daniecarron"
  },
  contact: {
    email: "info@kabatis.com",
    phone: "450 677-2593",
    address: "441 rue Ste-Hélène, suite #2, Longueuil"
  },
  emailConfig: {
    from: {
      email: "info@kabatis.com",
      name: "Danie Carron"
    }
  },
  services: [
    {
      title: "Sonorisation",
      description: "Systèmes audio professionnels pour tous types d'événements",
      icon: "Speaker",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80"
    },
    {
      title: "Projection",
      description: "Solutions de projection HD et 4K pour un impact visuel maximal",
      icon: "Projector",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80"
    },
    {
      title: "Éclairage",
      description: "Création d'ambiances lumineuses personnalisées",
      icon: "Lightbulb",
      image: "https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?auto=format&fit=crop&q=80"
    },
    {
      title: "Vidéo",
      description: "Captation et diffusion vidéo professionnelle",
      icon: "Video",
      image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&q=80"
    },
    {
      title: "Écrans LED",
      description: "Murs d'images et affichage dynamique",
      icon: "Monitor",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80"
    },
    {
      title: "Support technique",
      description: "Équipe expérimentée pour un événement sans souci",
      icon: "HeadSet",
      image: "https://images.unsplash.com/photo-1560698741-da8b7d4f7f8c?auto=format&fit=crop&q=80"
    }
  ]


};

const colorConfig = {
  primary: {
    50: "#fef1f5",
    100: "#fde3eb",
    200: "#fac0d5",
    300: "#f69dbf",
    400: "#f37aa9",
    500: "#f05793",
    600: "#ee347d",
    700: "#ec1167",
    800: "#d00f5c",
    900: "#b40d50"
  }
};
