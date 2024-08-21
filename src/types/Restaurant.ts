import { Menu } from "./Menu";

export type Restaurant = {
  id: string;
  image: string;
  ogImage?: string;
  avatar: string;
  name: string;
  description: string;
  rating: number;
  reviewCount: number;
  bgColor: string;
  city: string;
  address: string;
  phone: string;
  email?: string;
  location: {
    latitude: number;
    longitude: number;
  };
  specialties: string[];
  information?: {
    opening_hours: string;
    website: string;
    social_media: {
      facebook: string;
      instagram: string;
    };
  };
  menu: Menu[];
};
