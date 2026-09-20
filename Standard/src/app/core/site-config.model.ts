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
  price: string;
  description?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
}

export interface Brasero {
  name: string;
  serves: string;
  price: string;
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
    description: string;
    heroBadge: string;
    heroImages: { main: string; secondary: string; alt: string; secondaryAlt: string };
  };
  nav: NavLink[];
  highlights: ValueItem[];
  parrilla: {
    title: string;
    subtitle: string;
    guarnicion: string;
    braseros: Brasero[];
    extras: MenuItem[];
    image: string;
    imageAlt: string;
  };
  menu: {
    title: string;
    subtitle: string;
    allLabel: string;
    menuDelDia: { title: string; price: string; days: string };
    pizzasNote: string;
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
  /** Empty strings mean "not set yet": the matching buttons/blocks are hidden. */
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
