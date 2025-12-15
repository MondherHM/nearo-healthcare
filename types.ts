export enum Language {
  EN = 'en',
  FR = 'fr',
  AR = 'ar'
}

export enum ProviderType {
  DOCTOR = 'DOCTOR',
  PHARMACY = 'PHARMACY',
  CLINIC = 'CLINIC',
  LAB = 'LAB'
}

export interface Provider {
  id: string;
  name: string;
  type: ProviderType;
  specialty?: string; // For doctors/clinics
  address: string;
  city: string; // Tunisian cities
  isOpen: boolean;
  isOnCall?: boolean; // For pharmacies
  rating: number;
  reviews: number;
  image: string;
  phone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Translations {
  nav_home: string;
  nav_doctors: string;
  nav_pharmacies: string;
  nav_clinics: string;
  nav_signin: string;
  nav_get_started: string;
  
  hero_title_1: string;
  hero_title_2: string;
  hero_desc: string;
  
  search_placeholder: string;
  search_btn: string;
  filter_all: string;
  filter_doctors: string;
  filter_pharmacies: string;
  filter_clinics: string;
  filter_open_now: string;
  filter_on_call: string;

  section_featured_title: string;
  section_features_care_title: string;
  section_features_care_desc: string;
  
  card_open: string;
  card_closed: string;
  card_on_call: string;
  card_book: string;
  
  ai_assistant_title: string;
  ai_assistant_placeholder: string;
  ai_assistant_send: string;
  ai_disclaimer: string;
}