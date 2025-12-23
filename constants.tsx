
import { Project, Service } from './types';

export const SERVICES: Service[] = [
  { 
    id: 1, 
    name: "Fotografía", 
    slug: 'fotografia',
    description: "Capturamos la esencia del Meta en alta resolución.",
    image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 2, 
    name: "Streaming Podcast", 
    slug: 'streaming-podcast',
    description: "Producción de audio y video en vivo con tecnología top.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 3, 
    name: "Aftermovie Festival", 
    slug: 'aftermovie-festival',
    description: "Energía pura. Documentamos los mejores eventos del país.",
    image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 4, 
    name: "Bodas", 
    slug: 'bodas',
    description: "Narrativas cinematográficas para el día más importante.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 5, 
    name: "Brand Identity", 
    slug: 'brand-identity',
    description: "Sistemas visuales que posicionan marcas en el mercado global.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800"
  }
];

export const CATEGORY_PROJECTS: Record<string, Project[]> = {
  'fotografia': [
    { id: 101, title: "Luz del Llano", subtitle: "Editorial", category: "fotografia", image: "https://picsum.photos/800/1000?random=101", year: "2024" },
    { id: 102, title: "Rostros de Villao", subtitle: "Retrato", category: "fotografia", image: "https://picsum.photos/800/600?random=102", year: "2023" },
    { id: 103, title: "Arquitectura Meta", subtitle: "Espacios", category: "fotografia", image: "https://picsum.photos/800/1100?random=103", year: "2024" }
  ],
  'streaming-podcast': [
    { id: 201, title: "El Podcast Llanero", subtitle: "Streaming", category: "streaming-podcast", image: "https://picsum.photos/800/800?random=201", year: "2024" },
    { id: 202, title: "Live Sessions Villavicencio", subtitle: "Música", category: "streaming-podcast", image: "https://picsum.photos/800/600?random=202", year: "2023" }
  ],
  'aftermovie-festival': [
    { id: 301, title: "Festival del Retorno", subtitle: "Aftermovie", category: "aftermovie-festival", image: "https://picsum.photos/1200/800?random=301", year: "2024" },
    { id: 302, title: "Expomalocas 2024", subtitle: "Evento", category: "aftermovie-festival", image: "https://picsum.photos/1200/800?random=302", year: "2024" }
  ],
  'bodas': [
    { id: 401, title: "Amor en el Hato", subtitle: "Cinema", category: "bodas", image: "https://picsum.photos/800/1200?random=401", year: "2024" },
    { id: 402, title: "Amanecer Nupcial", subtitle: "Fotografía", category: "bodas", image: "https://picsum.photos/800/1000?random=402", year: "2023" }
  ],
  'brand-identity': [
    { id: 501, title: "Café Origen Meta", subtitle: "Branding", category: "brand-identity", image: "https://picsum.photos/800/800?random=501", year: "2024" },
    { id: 502, title: "Llanera Apps", subtitle: "Visual System", category: "brand-identity", image: "https://picsum.photos/800/600?random=502", year: "2024" }
  ]
};

export const PROJECTS: Project[] = Object.values(CATEGORY_PROJECTS).flat().slice(0, 4);
