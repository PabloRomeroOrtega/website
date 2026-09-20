export interface NavLink {
  label: string;
  sectionId: string;
}

export interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

export interface MenuItem {
  name: string;
  /** Precio de la ración (o del plato, si no hay media ración). */
  price: string;
  /** Precio de la media ración, si existe. */
  half?: string;
  description?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  note?: string;
  /** Muestra la columna "Ración / ½ ración". */
  halfColumn?: boolean;
  items: MenuItem[];
}

export interface FeaturedDish {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

export interface SiteConfig {
  business: {
    name: string;
    shortName: string;
    kind: string;
    tagline: string;
    logo: string;
    heroImage: string;
    heroImageAlt: string;
  };
  nav: NavLink[];
  highlights: ValueItem[];
  featured: {
    title: string;
    subtitle: string;
    dishes: FeaturedDish[];
  };
  menu: {
    title: string;
    subtitle: string;
    allLabel: string;
    note: string;
    categories: MenuCategory[];
  };
  gallery: {
    title: string;
    subtitle: string;
    images: GalleryImage[];
  };
  reservation: {
    title: string;
    subtitle: string;
    partySizes: number[];
    /** Primera línea del mensaje de WhatsApp. */
    messageIntro: string;
    steps: string[];
  };
  visit: {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  /** Cadenas vacías = "pendiente": aparece "próximamente" o se oculta el botón correspondiente. */
  contact: {
    address: string;
    phone: string;
    whatsapp: string;
    email: string;
    hours: string;
    socials: SocialLink[];
  };
  footer: {
    copyrightName: string;
  };
}
