import { SiteConfig } from './site-config.model';

/**
 * Contenido de "A la Uruguaya, bar y parrillada".
 * La carta y los precios proceden de la carta física del local.
 * Los datos de contacto (`contact`) se dejan vacíos hasta tenerlos confirmados:
 * mientras estén vacíos, los botones y bloques que dependen de ellos no se muestran.
 */
export const SITE_CONFIG: SiteConfig = {
  business: {
    name: 'A la Uruguaya',
    shortName: 'A la Uruguaya',
    kind: 'Bar y parrillada',
    tagline: 'Carne a las brasas, braseros para compartir y chivitos. Bar y parrillada para venir con hambre.',
    description:
      'Bar y parrillada donde todo pasa por el fuego: entrecot, chorizo y morcilla, chinchulín y braseros para 1, 2 o 4. Ven con hambre.',
    heroBadge: 'Menú del día 10,50 € · Martes a viernes',
    heroImages: {
      main: 'images/parrilla-brasas.jpg',
      secondary: 'images/brasero.jpg',
      alt: 'Parrilla de ladrillo con brasas, carne y chorizos asándose',
      secondaryAlt: 'Brasero de parrilla con carnes, chorizos y verdura grillada',
    },
  },

  nav: [
    { label: 'Inicio', sectionId: 'inicio' },
    { label: 'Parrilla', sectionId: 'parrilla' },
    { label: 'Carta', sectionId: 'carta' },
    { label: 'Fotos', sectionId: 'galeria' },
    { label: 'Reservar', sectionId: 'reserva' },
    { label: 'Visítanos', sectionId: 'visitanos' },
  ],

  highlights: [
    {
      icon: 'local_fire_department',
      title: 'Parrilla a las brasas',
      description: 'Entrecot, chorizo, morcilla, chinchulín y más, directo de la parrilla.',
    },
    {
      icon: 'groups',
      title: 'Braseros para 1, 2 o 4',
      description: 'Elige tu tamaño y compártelo en la mesa.',
    },
    {
      icon: 'restaurant',
      title: 'Menú del día 10,50 €',
      description: 'De martes a viernes.',
    },
    {
      icon: 'local_pizza',
      title: 'Carta de pizzas',
      description: 'Pídela en el local.',
    },
  ],

  parrilla: {
    title: 'Nuestra parrilla',
    subtitle: 'El corazón de la casa. Todos los braseros y combinados incluyen guarnición.',
    guarnicion: 'Todos los combinados y braseros incluyen guarnición.',
    braseros: [
      { name: 'Brasero parrilla', serves: 'Para 1', price: '24,90 €' },
      { name: 'Brasero parrilla', serves: 'Para 2', price: '43,90 €' },
      { name: 'Brasero parrilla', serves: 'Para 4', price: '66,90 €' },
    ],
    extras: [
      { name: 'Entrecot', price: '18,00 €' },
      {
        name: 'Plato parrilla',
        price: '16,50 €',
        description: 'Colita de cuadril, picaña, cabeza de lomo, cerdo o asado, a elegir.',
      },
      { name: 'Chuletón', price: '52,00 €' },
      { name: 'Chinchulín (ración)', price: '5,90 €' },
      { name: 'Chorizo y morcilla (ud.)', price: '4,00 €' },
      { name: 'Verdura grillada', price: '5,50 €' },
    ],
    image: 'images/brasero-mesa.jpg',
    imageAlt: 'Brasero de parrilla sobre la mesa, con cerveza, ensalada y pan',
  },

  menu: {
    title: 'La carta',
    subtitle: 'Todo lo que sale de nuestra cocina y de nuestra parrilla.',
    allLabel: 'Toda la carta',
    menuDelDia: { title: 'Menú del día', price: '10,50 €', days: 'Martes a viernes' },
    pizzasNote: 'Pide nuestra carta de pizzas',
    categories: [
      {
        id: 'raciones',
        name: 'Raciones',
        icon: 'tapas',
        items: [
          { name: 'Patatas bravas', price: '9,90 €' },
          { name: 'Huevos rotos', price: '13,90 €' },
          { name: 'Alitas fritas', price: '11,00 €' },
          { name: 'Oreja a la plancha', price: '12,50 €' },
          { name: 'Torreznos de Soria', price: '12,90 €' },
          { name: 'Patatas champi', price: '12,90 €' },
          { name: 'Tequeños', price: '10,50 €' },
          { name: 'Croquetas', price: '7,90 €' },
          { name: 'Cochifrito', price: '11,50 €' },
          { name: 'Revuelto de gramajo', price: '13,90 €' },
        ],
      },
      {
        id: 'combinados',
        name: 'Combinados',
        icon: 'dinner_dining',
        items: [
          {
            name: 'Chivito al plato',
            price: '15,90 €',
            description:
              'Filete de ternera, mixta, rusa, jamón york, mozzarella, salsa de tomate y patatas fritas.',
          },
          {
            name: 'Milanesa napolitana',
            price: '15,90 €',
            description:
              'Empanado de ternera, mozzarella, salsa de tomate, rusa, mixta, huevo frito, jamón york y patatas fritas.',
          },
          { name: 'Milanesa con patata y huevo', price: '12,90 €' },
          {
            name: 'Filete con patata y huevo',
            price: '12,90 €',
            description: 'De pollo, ternera o cerdo.',
          },
        ],
      },
      {
        id: 'hamburguesas',
        name: 'Hamburguesas',
        icon: 'lunch_dining',
        items: [
          { name: 'Clásica', price: '9,90 €', description: 'Pan, carne de buey, jamón y queso.' },
          {
            name: 'Bomba',
            price: '13,90 €',
            description: 'Pan, doble carne de buey, cheddar, tomate, cebolla caramelizada, beicon, jamón y huevo.',
          },
        ],
      },
      {
        id: 'bocadillos',
        name: 'Bocadillos',
        icon: 'bakery_dining',
        items: [
          { name: 'Choripán con salsas', price: '5,50 €', description: 'Tomate, lechuga, mayonesa, etc.' },
          { name: 'Choripán', price: '4,50 €' },
          { name: 'Bocadillo de carne', price: '7,90 €' },
          { name: 'Bocadillo', price: '5,50 €', description: 'Lomo, beicon o embutidos.' },
        ],
      },
      {
        id: 'empanadas',
        name: 'Empanadas',
        icon: 'cookie',
        items: [
          { name: 'Carne', price: '3,60 €' },
          { name: 'Chorizo', price: '3,60 €' },
          { name: 'Jamón y queso', price: '3,60 €' },
          { name: 'Veganas', price: '3,80 €' },
        ],
      },
      {
        id: 'ensaladas',
        name: 'Ensaladas',
        icon: 'eco',
        items: [
          { name: 'Caprese', price: '8,50 €', description: 'Tomatito cherry, albahaca y queso búfala.' },
          { name: 'Tomatito rosa', price: '8,90 €', description: 'Cebolla morada, pepinillos y melva.' },
        ],
      },
      {
        id: 'postres',
        name: 'Postres',
        icon: 'cake',
        items: [
          { name: 'Tartas artesanales', price: '6,50 €' },
          { name: 'Tartas variadas', price: '4,90 €' },
        ],
      },
      {
        id: 'pan',
        name: 'Pan',
        icon: 'breakfast_dining',
        items: [{ name: 'Cesta de pan', price: '0,50 €' }],
      },
    ],
  },

  gallery: {
    title: 'Así se come en A la Uruguaya',
    subtitle: 'Fotos reales del local y de nuestros platos.',
    images: [
      { src: 'images/brasero-mesa.jpg', alt: 'Brasero de parrilla sobre la mesa con cerveza y ensalada' },
      { src: 'images/milanesa-napolitana.jpg', alt: 'Milanesa napolitana con huevos fritos, jamón york y patatas fritas' },
      { src: 'images/parrilla-brasas.jpg', alt: 'Parrilla de ladrillo con brasas y carne asándose' },
      { src: 'images/tabla-raciones.jpg', alt: 'Ración sobre pizarra con patatas, pimientos de padrón y salsa' },
      { src: 'images/brasero.jpg', alt: 'Brasero con chorizos, carne y verdura grillada' },
      { src: 'images/tarta-chocolate.jpg', alt: 'Tarta de chocolate sobre pizarra con cubiertos dibujados en azúcar' },
    ],
  },

  reservation: {
    title: 'Reserva tu mesa',
    subtitle: 'Llámanos o escríbenos por WhatsApp. Así tu reserva queda registrada por escrito en el restaurante.',
    partySizes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    messageIntro: 'Hola, quiero reservar una mesa en A la Uruguaya.',
    steps: ['Elige fecha, hora y personas', 'Se abre WhatsApp con tu mensaje listo', 'Envíalo y te confirmamos la mesa'],
  },

  visit: {
    title: 'Ven a vernos',
    subtitle: 'Te esperamos en A la Uruguaya, bar y parrillada.',
    image: 'images/fachada-cartel.jpg',
    imageAlt: 'Cartel de A la Uruguaya, bar y parrillada, sobre el tejado del local',
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
    copyrightName: 'A la Uruguaya',
  },
};
