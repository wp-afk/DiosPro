export interface ProjectPhoto {
  id: string;
  title: string;
  category: 'social';
  subCategory: 'bodas' | 'quince' | 'sociales';
  categoryLabel: string;
  imageUrl: string;
  aspect: 'tall' | 'wide' | 'square';
  location: string;
}

export interface VideoProject {
  id: string;
  title: string;
  youtubeId: string;
  type: 'social';
  aspect: '16:9' | '9:16';
  tag: string;
  isFirst?: boolean;
}

// Official Logo provided by user
export const LOGO_URL = 'https://lh3.googleusercontent.com/d/1VnGm7_NEj2YVMfEaO45ueLPyz_O1mD6Y';

// 12 Original Social Photography Works
export const SOCIAL_PHOTOS: ProjectPhoto[] = [
  {
    id: 'soc-01',
    title: 'Ceremonia & Luz Natural',
    category: 'social',
    subCategory: 'bodas',
    categoryLabel: 'Bodas',
    imageUrl: 'https://lh3.googleusercontent.com/d/1r_4d0vT9WD1n3zKtPzUVoKTgj1KCUFST',
    aspect: 'tall',
    location: 'Palacio Sans Souci',
  },
  {
    id: 'soc-02',
    title: 'Gala de Quince',
    category: 'social',
    subCategory: 'quince',
    categoryLabel: 'XV Años',
    imageUrl: 'https://lh3.googleusercontent.com/d/1m0xkDV1fD8qJxjpgOpTCwYOYj_ix5BNA',
    aspect: 'wide',
    location: 'Terrazas del Lago',
  },
  {
    id: 'soc-03',
    title: 'Golden Hour & Votos',
    category: 'social',
    subCategory: 'bodas',
    categoryLabel: 'Bodas',
    imageUrl: 'https://lh3.googleusercontent.com/d/1Gq7SckryirK9_jejaWhepWE9JX35JMTp',
    aspect: 'square',
    location: 'Estancia Villa María',
  },
  {
    id: 'soc-04',
    title: 'Pista & Celebración',
    category: 'social',
    subCategory: 'sociales',
    categoryLabel: 'Sociales',
    imageUrl: 'https://lh3.googleusercontent.com/d/1OwuK_iUg4eGU_mnMOG8fa0NWMntkg0ny',
    aspect: 'tall',
    location: 'La Rural',
  },
  {
    id: 'soc-05',
    title: 'Retrato de Autor',
    category: 'social',
    subCategory: 'sociales',
    categoryLabel: 'Retrato',
    imageUrl: 'https://lh3.googleusercontent.com/d/1oZvAFlnuIw_AruBxy9hRZ7UzuM2hNUM1',
    aspect: 'wide',
    location: 'Hotel Alvear Icon',
  },
  {
    id: 'soc-06',
    title: 'Vals Solemne',
    category: 'social',
    subCategory: 'quince',
    categoryLabel: 'XV Años',
    imageUrl: 'https://lh3.googleusercontent.com/d/19VFBsXEiBUNJ36y-duclFTdHytSc_P63',
    aspect: 'tall',
    location: 'Espacio Pilar',
  },
  {
    id: 'soc-07',
    title: 'Brindis & Alegría',
    category: 'social',
    subCategory: 'sociales',
    categoryLabel: 'Sociales',
    imageUrl: 'https://lh3.googleusercontent.com/d/1zZVYvrK8qI111BRGIKq4TvnAsGJ5WbqS',
    aspect: 'square',
    location: 'Janos Belgrano',
  },
  {
    id: 'soc-08',
    title: 'Detalles Nupciales',
    category: 'social',
    subCategory: 'bodas',
    categoryLabel: 'Bodas',
    imageUrl: 'https://lh3.googleusercontent.com/d/1e2ZSUUVBk3ESV4HyWwFPUz3JgiKHXxSM',
    aspect: 'tall',
    location: 'Castillo Guerrero',
  },
  {
    id: 'soc-09',
    title: 'Sesión Urbana Previa',
    category: 'social',
    subCategory: 'sociales',
    categoryLabel: 'Editorial',
    imageUrl: 'https://lh3.googleusercontent.com/d/1D0yU6LuXPybXgWOlF8Lxdu1afYRoWRX9',
    aspect: 'wide',
    location: 'San Telmo',
  },
  {
    id: 'soc-10',
    title: 'Luces & Pista Desatada',
    category: 'social',
    subCategory: 'sociales',
    categoryLabel: 'Fiesta',
    imageUrl: 'https://lh3.googleusercontent.com/d/1VQhwKY0k-ujX4QevXeAGEvXKpd-UApS7',
    aspect: 'tall',
    location: 'Ribera del Plata',
  },
  {
    id: 'soc-11',
    title: 'Jardines & Debutante',
    category: 'social',
    subCategory: 'quince',
    categoryLabel: 'XV Años',
    imageUrl: 'https://lh3.googleusercontent.com/d/1a8U18Ob_t4EGN8BBqbQg1fm1WMswM2i8',
    aspect: 'wide',
    location: 'Rosedal',
  },
  {
    id: 'soc-12',
    title: 'Noche de Fiesta & Cierre',
    category: 'social',
    subCategory: 'bodas',
    categoryLabel: 'Bodas',
    imageUrl: 'https://lh3.googleusercontent.com/d/1UkOOZsyBHDN5F_kdPLdUkq3AUu_4NGeo',
    aspect: 'tall',
    location: 'San Fernando',
  },
  {
    id: 'soc-13',
    title: 'Sesión Social',
    category: 'social',
    subCategory: 'sociales',
    categoryLabel: 'Social',
    imageUrl: 'https://lh3.googleusercontent.com/d/1j3whvpVcqDD0tAK2EytNm3okosANzFI-',
    aspect: 'tall',
    location: 'Buenos Aires',
  },
  {
    id: 'soc-14',
    title: 'Momento Social',
    category: 'social',
    subCategory: 'sociales',
    categoryLabel: 'Social',
    imageUrl: 'https://lh3.googleusercontent.com/d/1JVxhkjaC3WgavOFrMF06UiJft9QW4MCx',
    aspect: 'tall',
    location: 'Buenos Aires',
  },
  {
    id: 'soc-15',
    title: 'Celebración',
    category: 'social',
    subCategory: 'sociales',
    categoryLabel: 'Social',
    imageUrl: 'https://lh3.googleusercontent.com/d/1mAQcv65uZfGqJByUVm32hP0Tpz8vAKCm',
    aspect: 'wide',
    location: 'Buenos Aires',
  },
  {
    id: 'soc-16',
    title: 'Detalle Social',
    category: 'social',
    subCategory: 'sociales',
    categoryLabel: 'Social',
    imageUrl: 'https://lh3.googleusercontent.com/d/1ixPj2B7crsjTHgnjC4CIDss40tGLmaYH',
    aspect: 'square',
    location: 'Buenos Aires',
  },
  {
    id: 'soc-17',
    title: 'Retrato de Gala',
    category: 'social',
    subCategory: 'sociales',
    categoryLabel: 'Social',
    imageUrl: 'https://lh3.googleusercontent.com/d/1sdb8NP8uklfNoN-R-7gObTSvqU7beUgX',
    aspect: 'tall',
    location: 'Buenos Aires',
  },
  {
    id: 'soc-18',
    title: 'Festejo & Alegría',
    category: 'social',
    subCategory: 'sociales',
    categoryLabel: 'Social',
    imageUrl: 'https://lh3.googleusercontent.com/d/1-Dv9CQABxr3GCM9-57SWaf60xbmcFusm',
    aspect: 'wide',
    location: 'Buenos Aires',
  },
  {
    id: 'soc-19',
    title: 'Emoción & Vals',
    category: 'social',
    subCategory: 'sociales',
    categoryLabel: 'Social',
    imageUrl: 'https://lh3.googleusercontent.com/d/1RjaM6DN5eh3yBj2BKDvioR0Agynzjtcq',
    aspect: 'tall',
    location: 'Buenos Aires',
  },
  {
    id: 'soc-20',
    title: 'Noche Inolvidable',
    category: 'social',
    subCategory: 'sociales',
    categoryLabel: 'Social',
    imageUrl: 'https://lh3.googleusercontent.com/d/1GHtPxk34OarCFy_5IpoV0b3pU6nu8Ih8',
    aspect: 'wide',
    location: 'Buenos Aires',
  },
];

// YouTube Videos exclusively for Social Events
// Primary video is _CzqDfNtfOM (first clip seen)
// Final section videos (M3EDJFh2gjM and 8ywoyPF0w-E)
export const SOCIAL_VIDEOS: VideoProject[] = [
  {
    id: 'vid-hero',
    title: 'DIOS PRO · Cinematografía de Eventos Sociales',
    youtubeId: '_CzqDfNtfOM',
    type: 'social',
    aspect: '16:9',
    tag: 'Cinema Social',
    isFirst: true,
  },
  {
    id: 'vid-film-2',
    title: 'Película de Evento Social I',
    youtubeId: 'M3EDJFh2gjM',
    type: 'social',
    aspect: '16:9',
    tag: 'Cinema Social',
  },
  {
    id: 'vid-film-3',
    title: 'Película de Evento Social II',
    youtubeId: '8ywoyPF0w-E',
    type: 'social',
    aspect: '16:9',
    tag: 'Cinema Social',
  },
];

// Studio Contact & Branding
export const STUDIO_INFO = {
  brandName: 'DIOS PRO estudio',
  author: 'Walter Pietrobon',
  role: 'Fotógrafo & Videógrafo de Eventos Sociales',
  instagramHandle: '@diospro',
  instagramUrl: 'https://instagram.com/diospro',
  email: 'wp@wpietrobon.com',
  whatsappNumber: '2615437508',
  whatsappDisplay: '+54 9 261 543-7508',
  whatsappUrl: 'https://wa.me/5492615437508?text=Hola%20Walter%20%28DIOS%20PRO%29%2C%20quisiera%20consultar%20por%20un%20evento%20social.',
};
