export interface NavLink {
  label: string;
  sectionId: string;
}

export interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

export interface OfferingItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
  tags?: string[];
}

export interface GalleryImage {
  src?: string;
  alt: string;
  category: string;
}

export interface OpeningHour {
  day: string;
  hours: string;
  closed?: boolean;
}

export interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

export interface ReservationConfig {
  enabled: boolean;
  title: string;
  subtitle: string;
  partySizes: number[];
  timeSlots: string[];
  successMessage: string;
}

export interface SiteConfig {
  business: {
    name: string;
    shortName: string;
    tagline: string;
    logoIcon: string;
    description: string;
    heroBadge: string;
    heroImage?: string;
  };
  nav: NavLink[];
  highlights: ValueItem[];
  about: {
    title: string;
    subtitle: string;
    image?: string;
    paragraphs: string[];
  };
  offerings: {
    title: string;
    subtitle: string;
    categoryAllLabel: string;
    items: OfferingItem[];
  };
  gallery: {
    title: string;
    subtitle: string;
    categoryAllLabel: string;
    images: GalleryImage[];
  };
  location: {
    title: string;
    subtitle: string;
    image?: string;
    hoursSummary: string;
  };
  reservation: ReservationConfig;
  contact: {
    address: string;
    phone: string;
    email: string;
    hours: OpeningHour[];
    socials: SocialLink[];
  };
  footer: {
    copyrightName: string;
  };
}
