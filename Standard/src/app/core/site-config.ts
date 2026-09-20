import { SiteConfig } from './site-config.model';

/**
 * Contenido de "El Olmo Centenario, Irish Tavern".
 * La carta procede de las fotos de la carta física. Los datos de contacto (`contact`) están vacíos hasta tenerlos.
 */
export const SITE_CONFIG: SiteConfig = {
  business: {
    name: 'El Olmo Centenario',
    shortName: 'El Olmo Centenario',
    kind: 'Irish Tavern',
    tagline:
      'Guinness, cervezas del mundo y platos para picar en una taberna irlandesa con chimenea y terraza.',
    logo: 'images/logo.jpg',
    heroImage: 'images/barra.jpg',
    heroImageAlt: 'Barra de madera con taburetes y decoración navideña en El Olmo Centenario',
  },

  nav: [
    { label: 'Inicio', sectionId: 'inicio' },
    { label: 'El local', sectionId: 'destacados' },
    { label: 'Carta', sectionId: 'carta' },
    { label: 'Fotos', sectionId: 'galeria' },
    { label: 'Reservar', sectionId: 'reserva' },
    { label: 'Visítanos', sectionId: 'visitanos' },
  ],

  highlights: [
    {
      icon: 'sports_bar',
      title: 'Guinness y cervezas del mundo',
      description: 'Pide tu pinta en la barra.',
    },
    {
      icon: 'tapas',
      title: 'Para picar y compartir',
      description: 'Croquetas, nachos, alitas y más.',
    },
    {
      icon: 'outdoor_grill',
      title: 'Carnes y costillar BBQ',
      description: 'Entrecot, lomo de buey y chuletillas.',
    },
    {
      icon: 'deck',
      title: 'Chimenea y terraza',
      description: 'Salón con chimenea y terraza cubierta.',
    },
  ],

  featured: {
    title: 'El local',
    subtitle: 'Barra de madera, paredes verdes y cerveza bien tirada.',
    dishes: [
      {
        name: 'La barra',
        description: 'Barra de madera oscura y taburetes, con Guinness y mucha cerveza.',
        image: 'images/barra.jpg',
        imageAlt: 'Barra de madera con taburetes y decoración navideña',
      },
      {
        name: 'Guinness',
        description: 'Una pinta de Guinness recién tirada.',
        image: 'images/guinness.jpg',
        imageAlt: 'Pinta de Guinness sobre una mesa',
      },
      {
        name: 'Cervezas del mundo',
        description: 'Founders, Paulaner y más botellas para elegir.',
        image: 'images/cervezas-founders.jpg',
        imageAlt: 'Botellas de cerveza Founders y Paulaner con un vaso de cerveza',
      },
      {
        name: 'Chimenea y terraza',
        description: 'Un salón con chimenea para el invierno y una terraza cubierta.',
        image: 'images/chimenea.jpg',
        imageAlt: 'Salón con paredes verdes y chimenea encendida',
      },
    ],
  },

  menu: {
    title: 'La carta',
    subtitle: 'Platos para picar, carnes y sugerencias.',
    allLabel: 'Toda la carta',
    note: 'Consulta precios en el local',
    categories: [
      {
        id: 'entrantes',
        name: 'Entrantes',
        items: [
          { name: 'Palitos de mozzarella', price: '8,00 €' },
          { name: 'Tiras de pollo caseras', price: '11,00 €' },
          { name: 'Aros de cebolla', price: '7,00 €' },
          {
            name: 'Tequeños de gouda',
            price: '7,50 €',
            description: 'Acompañados con salsa mango habanero.',
          },
          {
            name: 'Tequeños de cheddar y jalapeños',
            price: '7,50 €',
            description: 'Acompañados con salsa guacamole.',
          },
          {
            name: 'Bacon and cheese fries',
            price: '10,00 €',
            description:
              'Patatas fritas sobre crema de cheese ranchera, mezcla de tres quesos y bacon crispy.',
          },
          {
            name: 'Nachos Olmo Centenario',
            price: '10,50 €',
            description:
              'Con mezcla de tres quesos gratinada y bacon crispy, acompañados con salsa guacamole y queso fundido.',
          },
          { name: 'Alitas de pollo', price: '8,50 €' },
          { name: 'Alitas BBQ estilo Virginia', price: '10,50 €' },
          {
            name: 'Costillar BBQ',
            price: '20,00 €',
            description: 'Con salsa barbacoa, acompañado con patatas.',
          },
          { name: 'Tabla patatas & salsa', price: '8,00 €' },
        ],
      },
      {
        id: 'tierra',
        name: 'Para picar: de la tierra',
        items: [
          { name: 'Oreja a la plancha', price: '9,00 €' },
          { name: 'Morcilla de Burgos', price: '8,00 €' },
          {
            name: 'Setas empanadas caseras',
            price: '9,50 €',
            description: 'Acompañadas con salsa ali-oli.',
          },
          { name: 'Croquetas de jamón caseras', price: '12,00 €' },
          { name: 'Ensaladilla rusa', price: '8,50 €' },
          { name: 'Queso manchego', price: '12,00 €' },
          { name: 'Salchichón ibérico', price: '12,00 €' },
          { name: 'Chorizo ibérico', price: '12,00 €' },
          { name: 'Revuelto de morcilla', price: '9,00 €' },
          { name: 'Patatas bravas', price: '7,00 €' },
          { name: 'Patatas ali-oli', price: '7,00 €' },
        ],
      },
      {
        id: 'mar',
        name: 'Para picar: del mar',
        items: [
          { name: 'Boquerones en vinagre', price: '13,00 €' },
          { name: 'Calamares a la romana', price: '18,00 €' },
          { name: 'Chopitos a la andaluza', price: '15,00 €' },
          { name: 'Rabas con mojo picón', price: '11,00 €' },
        ],
      },
      {
        id: 'sugerencias',
        name: 'Sugerencias',
        items: [
          { name: 'Lasaña casera de ternera', price: '10,00 €' },
          { name: 'Sopa de picadillo', price: '7,00 €', description: 'Con jamón y huevo.' },
          { name: 'Salmorejo', price: '6,50 €', description: 'Con jamón y huevo duro.' },
        ],
      },
      {
        id: 'carnes',
        name: 'Carnes',
        note: 'Todos acompañados a elegir de ensalada o patatas.',
        items: [
          { name: 'Entrecot de ternera', price: '15,00 €' },
          { name: 'Lomo de buey', price: '17,00 €' },
          { name: 'Bistec de ternera', price: '12,00 €' },
          { name: 'Churrasco de ternera', price: '12,00 €' },
          { name: 'Chuletillas de cordero lechal', price: '18,00 €' },
        ],
      },
      {
        id: 'burgers',
        name: 'Acompaña nuestras burger con',
        items: [
          { name: 'Patatas fritas', price: '1,50 €' },
          { name: 'Huevo', price: '1,00 €' },
          { name: 'Ingrediente extra', price: '1,00 €' },
        ],
      },
    ],
  },

  gallery: {
    title: 'Ven a conocernos',
    subtitle: 'Fotos reales del local.',
    images: [
      { src: 'images/barra.jpg', alt: 'Barra de madera con taburetes' },
      { src: 'images/guinness.jpg', alt: 'Pinta de Guinness' },
      { src: 'images/cervezas-founders.jpg', alt: 'Cervezas Founders y Paulaner' },
      { src: 'images/terraza.jpg', alt: 'Terraza cubierta con mesas y sillas de mimbre rojo' },
      { src: 'images/salon.jpg', alt: 'Salón con banderines de Guinness y servilletas naranjas' },
      { src: 'images/chimenea.jpg', alt: 'Salón con chimenea' },
      { src: 'images/cervezas-malta.jpg', alt: 'Botellas de cerveza artesana junto a la barra' },
      { src: 'images/entrada-stout-ales.jpg', alt: 'Entrada con el rótulo Stout & Ales' },
      { src: 'images/fachada.jpg', alt: 'Fachada del local' },
    ],
  },

  reservation: {
    title: 'Reserva tu mesa',
    subtitle:
      'Llámanos o escríbenos por WhatsApp. Así tu reserva queda registrada por escrito en el restaurante.',
    partySizes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    messageIntro: 'Hola, quiero reservar una mesa en El Olmo Centenario.',
    steps: [
      'Elige fecha, hora y personas',
      'Se abre WhatsApp con tu mensaje listo',
      'Envíalo y te confirmamos la mesa',
    ],
  },

  visit: {
    title: 'Ven a vernos',
    subtitle: 'Te esperamos en El Olmo Centenario.',
    image: 'images/terraza.jpg',
    imageAlt: 'Terraza cubierta con mesas blancas y sillas de mimbre rojo',
  },

  contact: {
    address: '',
    phone: '',
    whatsapp: '',
    email: '',
    hours: '',
    socials: [],
  },

  footer: {
    copyrightName: 'El Olmo Centenario',
  },
};
