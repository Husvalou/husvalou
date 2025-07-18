export interface Project {
  id: number;
  title: string;
  descriptionFr: string;
  descriptionEn: string;
  image: string;
  tags: string[];
  demo?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Annuaire des clubs sportifs (Tarn)',
    descriptionFr:
      'Application web permettant de rechercher et découvrir les clubs sportifs du département du Tarn grâce à une carte interactive et des filtres.',
    descriptionEn:
      'Web application to search and discover sports clubs of the Tarn department through an interactive map and filters.',
    image: '/cdos-annuaire.png',
    tags: ['React', 'Leaflet', 'Supabase', 'Tailwind', 'Vite'],
    demo: 'https://annuaire.cdos-tarn.fr/',
  },
  {
    id: 2,
    title: 'Raven-BS++',
    descriptionFr:
      "Mod JAR pour Minecraft 1.8.9 améliorant l'expérience de jeu grâce à de multiples optimisations et fonctionnalités.",
    descriptionEn:
      'Minecraft 1.8.9 JAR mod improving the gaming experience with multiple optimizations and features.',
    image: '/obby.png',
    tags: ['Java', 'Minecraft 1.8.9', 'Mod', 'Performance'],
    demo: 'https://github.com/OlziYT/RavenBS-Plus-Plus',
  },
  {
    id: 3,
    title: 'Duck Dueller Upgraded',
    descriptionFr:
      "Bot Hypixel Duels open-source pour Minecraft Forge 1.8.9 : sumo, classic, boxing, OP (en cours) avec smart aim/strafe, queue dodge, w-tap, détection d'arêtes, intégration Discord Webhook. Hautement personnalisable !",
    descriptionEn:
      'Open-source Hypixel Duels bot for Minecraft Forge 1.8.9: sumo, classic, boxing, OP (in progress) with smart aim/strafe, queue dodge, w-tap, edge detection and Discord Webhook integration. Highly customizable!',
    image: '/duck-dueller.png',
    tags: ['Java', 'Minecraft 1.8.9', 'Hypixel', 'Bot'],
    demo: 'https://github.com/Husvalou/duck-dueller-2024',
  },
]; 