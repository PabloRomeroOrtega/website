import { SiteConfig } from './site-config.model';

/**
 * DEMO CONTENT. Edit the text and image URLs below to re-skin the template
 * for a new restaurant. Colors live in src/styles.scss (the mat.theme() call).
 * Every image field (heroImage, about.image, offerings items' image,
 * gallery images' src, location.image) is optional: leave it unset and the
 * section shows a placeholder box instead, ready to swap in a real photo.
 */
export const SITE_CONFIG: SiteConfig = {
  business: {
    name: 'Casa Almendro',
    shortName: 'Casa Almendro',
    tagline: 'Restaurante de cocina mediterránea en Madrid',
    logoIcon: 'restaurant_menu',
    description:
      'Servimos comida de mercado de martes a domingo. La carta es corta y cambia varias veces al año según la temporada.',
    heroBadge: 'Abierto hoy de 13:00 a 16:30 y de 20:00 a 23:30',
  },

  nav: [
    { label: 'Inicio', sectionId: 'inicio' },
    { label: 'Carta', sectionId: 'carta' },
    { label: '¿Quiénes somos?', sectionId: 'quienes-somos' },
    { label: 'Galería', sectionId: 'galeria' },
    { label: 'Localización', sectionId: 'localizacion' },
    { label: 'Reserva y Contacto', sectionId: 'reserva' },
  ],

  highlights: [
    {
      icon: 'eco',
      title: 'Producto de temporada',
      description: 'Compramos en el mercado varias veces por semana.',
    },
    {
      icon: 'local_fire_department',
      title: 'Cocina lenta',
      description: 'Los guisos se preparan el mismo día, sin atajos.',
    },
    {
      icon: 'local_parking',
      title: 'Aparcamiento cercano',
      description: 'Hay parking público a menos de 50 metros de la puerta.',
    },
    {
      icon: 'event_available',
      title: 'Reserva fácil',
      description: 'Por teléfono o directamente desde esta página.',
    },
  ],

  about: {
    title: '¿Quiénes somos?',
    subtitle: 'Un restaurante familiar en el barrio de La Latina',
    paragraphs: [
      'Abrimos en 2014 con una carta pequeña y unas pocas mesas. Con los años hemos crecido, pero seguimos cocinando nosotros mismos cada día.',
      'La carta cambia varias veces al año según lo que encontramos en el mercado. Si tienes alguna alergia o intolerancia, dínoslo al hacer la reserva.',
    ],
  },

  offerings: {
    title: 'Nuestra Carta',
    subtitle: 'Platos de temporada, cocinados el mismo día',
    categoryAllLabel: 'Todo',
    items: [
      {
        id: 'entrante-1',
        name: 'Ensalada de temporada',
        description: 'Verduras de temporada, según lo que haya en el mercado esa semana.',
        price: '8€',
        category: 'Entrantes',
        tags: ['Vegetariana'],
      },
      {
        id: 'entrante-2',
        name: 'Ensalada César',
        description: 'Lechuga, pollo a la plancha, parmesano y salsa césar.',
        price: '9€',
        category: 'Entrantes',
      },
      {
        id: 'principal-1',
        name: 'Bol de salmón',
        description: 'Salmón marinado, arroz templado, edamame y sésamo.',
        price: '16€',
        category: 'Principales',
      },
      {
        id: 'principal-2',
        name: 'Pasta salteada',
        description: 'Pasta con setas de temporada y un toque picante.',
        price: '14€',
        category: 'Principales',
        tags: ['Vegetariana'],
      },
      {
        id: 'principal-3',
        name: 'Hamburguesa de la casa',
        description: 'Carne de vacuno, queso curado, cebolla confitada y pan brioche.',
        price: '15€',
        category: 'Principales',
      },
      {
        id: 'postre-1',
        name: 'Volcán de chocolate',
        description: 'Bizcocho de chocolate con centro líquido y helado de vainilla.',
        price: '7€',
        category: 'Postres',
      },
      {
        id: 'bebida-1',
        name: 'Cóctel de la casa',
        description: 'Cambia según la temporada. Pregunta en sala cuál es el de este mes.',
        price: '9€',
        category: 'Bebidas',
      },
      {
        id: 'bebida-2',
        name: 'Zumo de naranja',
        description: 'Natural, exprimido al momento.',
        price: '4€',
        category: 'Bebidas',
      },
    ],
  },

  gallery: {
    title: 'Fotos',
    subtitle: 'Fotos del local y de algunos platos de la carta',
    categoryAllLabel: 'Todo',
    images: [
      { alt: 'Comedor principal', category: 'Local' },
      { alt: 'Barra', category: 'Local' },
      { alt: 'Terraza', category: 'Local' },
      { alt: 'Cocina', category: 'Local' },
      { alt: 'Plato de la carta', category: 'Comida' },
      { alt: 'Plato de la carta', category: 'Comida' },
    ],
  },

  location: {
    title: 'Encuéntranos',
    subtitle: 'Cómo llegar hasta el restaurante',
    hoursSummary: 'Hoy: 13:00 a 16:30 y 20:00 a 23:30',
  },

  reservation: {
    enabled: true,
    title: 'Reserva y Contacto',
    subtitle: 'Reserva online o llama por teléfono. Confirmamos por teléfono o email.',
    partySizes: [1, 2, 3, 4, 5, 6, 7, 8],
    timeSlots: [
      '13:00',
      '13:30',
      '14:00',
      '14:30',
      '15:00',
      '20:00',
      '20:30',
      '21:00',
      '21:30',
      '22:00',
    ],
    successMessage: 'Hemos recibido tu solicitud de mesa. Te confirmaremos por teléfono o email en breve.',
  },

  contact: {
    address: 'Calle Almendro 12, 28012 Madrid',
    phone: '910 123 456',
    email: 'hola@casaalmendro.example',
    hours: [
      { day: 'Lunes', hours: '13:00 - 16:30' },
      { day: 'Martes', hours: '13:00 - 16:30 y 20:00 - 23:00' },
      { day: 'Miércoles', hours: '13:00 - 16:30 y 20:00 - 23:00' },
      { day: 'Jueves', hours: '13:00 - 16:30 y 20:00 - 23:30' },
      { day: 'Viernes', hours: '13:00 - 16:30 y 20:00 - 00:00' },
      { day: 'Sábado', hours: '13:00 - 17:00 y 20:00 - 00:00' },
      { day: 'Domingo', hours: 'Cerrado', closed: true },
    ],
    socials: [
      { icon: 'photo_camera', url: 'https://instagram.com', label: 'Instagram' },
      { icon: 'forum', url: 'https://facebook.com', label: 'Facebook' },
      { icon: 'chat', url: 'https://wa.me/34910123456', label: 'WhatsApp' },
    ],
  },

  footer: {
    copyrightName: 'Casa Almendro',
  },
};
