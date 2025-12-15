import { Language, Provider, ProviderType, Translations } from './types';

export const TRANSLATIONS: Record<Language, Translations> = {
  [Language.EN]: {
    nav_home: "Home",
    nav_doctors: "Doctors",
    nav_pharmacies: "Pharmacies",
    nav_clinics: "Clinics",
    nav_signin: "Sign In",
    nav_get_started: "Get Started",
    
    hero_title_1: "Find Healthcare",
    hero_title_2: "Near You, Fast",
    hero_desc: "Tunisian's most comprehensive healthcare directory. Discover nearby doctors, on-call pharmacies, and medical centers with real-time availability and verified information",
    
    search_placeholder: "Search by doctor, specialty, or clinic...",
    search_btn: "Search",
    filter_all: "All",
    filter_doctors: "Doctors",
    filter_pharmacies: "Pharmacies",
    filter_clinics: "Clinics",
    filter_open_now: "Open Now",
    filter_on_call: "On Call",

    section_featured_title: "Featured Providers",
    section_features_care_title: "Everything You Need to Find Care",
    section_features_care_desc: "Our platform combines technology with comprehensive data to help you access healthcare quickly and reliably",
    
    card_open: "Open",
    card_closed: "Closed",
    card_on_call: "On Call",
    card_book: "Book Appointment",

    ai_assistant_title: "NearO AI Assistant",
    ai_assistant_placeholder: "Describe your symptoms or ask for a specialist...",
    ai_assistant_send: "Ask",
    ai_disclaimer: "AI guidance is for information only. Call 190 for emergencies.",
  },
  [Language.FR]: {
    nav_home: "Accueil",
    nav_doctors: "Médecins",
    nav_pharmacies: "Pharmacies",
    nav_clinics: "Cliniques",
    nav_signin: "Se connecter",
    nav_get_started: "Commencer",
    
    hero_title_1: "Find Healthcare",
    hero_title_2: "Near You, Fast",
    hero_desc: "L'annuaire de santé le plus complet de Tunisie. Découvrez les médecins, pharmacies de garde et centres médicaux à proximité avec disponibilité en temps réel et informations vérifiées",
    
    search_placeholder: "Rechercher un médecin, une spécialité...",
    search_btn: "Rechercher",
    filter_all: "Tout",
    filter_doctors: "Médecins",
    filter_pharmacies: "Pharmacies",
    filter_clinics: "Cliniques",
    filter_open_now: "Ouvert",
    filter_on_call: "De Garde",

    section_featured_title: "Prestataires en Vedette",
    section_features_care_title: "Everything You Need to Find Care",
    section_features_care_desc: "Notre plateforme combine la technologie avec des données complètes pour vous aider à accéder aux soins de santé rapidement et de manière fiable",
    
    card_open: "Ouvert",
    card_closed: "Fermé",
    card_on_call: "De Garde",
    card_book: "Prendre RDV",

    ai_assistant_title: "Assistant IA NearO",
    ai_assistant_placeholder: "Décrivez vos symptômes...",
    ai_assistant_send: "Envoyer",
    ai_disclaimer: "L'IA est à titre informatif. Appelez le 190 pour les urgences.",
  },
  [Language.AR]: {
    nav_home: "الرئيسية",
    nav_doctors: "أطباء",
    nav_pharmacies: "صيدليات",
    nav_clinics: "عيادات",
    nav_signin: "تسجيل الدخول",
    nav_get_started: "ابدأ الآن",
    
    hero_title_1: "Find Healthcare",
    hero_title_2: "Near You, Fast",
    hero_desc: "الدليل الصحي الأكثر شمولاً في تونس. اكتشف الأطباء القريبين، وصيدليات الحراسة، والمراكز الطبية مع توفر في الوقت الحقيقي ومعلومات موثقة",
    
    search_placeholder: "ابحث عن طبيب، تخصص، أو عيادة...",
    search_btn: "بحث",
    filter_all: "الكل",
    filter_doctors: "أطباء",
    filter_pharmacies: "صيدليات",
    filter_clinics: "عيادات",
    filter_open_now: "مفتوح الآن",
    filter_on_call: "صيدلية حراسة",

    section_featured_title: "مقدمو الخدمات المميزون",
    section_features_care_title: "Everything You Need to Find Care",
    section_features_care_desc: "تجمع منصتنا بين التكنولوجيا والبيانات الشاملة لمساعدتك في الوصول إلى الرعاية الصحية بسرعة وبشكل موثوق",
    
    card_open: "مفتوح",
    card_closed: "مغلق",
    card_on_call: "حراسة ليلية",
    card_book: "حجز موعد",

    ai_assistant_title: "مساعد NearO الذكي",
    ai_assistant_placeholder: "صف أعراضك أو اسأل عن مختص...",
    ai_assistant_send: "إرسال",
    ai_disclaimer: "إرشادات الذكاء الاصطناعي للمعلومات فقط. اتصل بـ 190 للطوارئ.",
  }
};

export const MOCK_PROVIDERS: Provider[] = [
  {
    id: '1',
    name: 'Dr. Amira Ben Salem',
    type: ProviderType.DOCTOR,
    specialty: 'Cardiologist',
    address: 'Av. Habib Bourguiba, Tunis',
    city: 'Tunis',
    isOpen: true,
    rating: 4.9,
    reviews: 120,
    image: 'https://picsum.photos/200/200?random=1',
    phone: '+216 71 123 456',
    coordinates: { lat: 36.8065, lng: 10.1815 }
  },
  {
    id: '2',
    name: 'Pharmacie Al Yasmine',
    type: ProviderType.PHARMACY,
    address: 'Rue de la République, Sfax',
    city: 'Sfax',
    isOpen: true,
    isOnCall: true,
    rating: 4.5,
    reviews: 85,
    image: 'https://picsum.photos/200/200?random=2',
    phone: '+216 74 987 654',
    coordinates: { lat: 34.7406, lng: 10.7603 }
  },
  {
    id: '3',
    name: 'Clinique Les Oliviers',
    type: ProviderType.CLINIC,
    specialty: 'General Hospital',
    address: 'Zone Touristique, Sousse',
    city: 'Sousse',
    isOpen: true,
    rating: 4.7,
    reviews: 310,
    image: 'https://picsum.photos/200/200?random=3',
    phone: '+216 73 555 111',
    coordinates: { lat: 35.8256, lng: 10.6084 }
  },
  {
    id: '4',
    name: 'Dr. Karim Trabelsi',
    type: ProviderType.DOCTOR,
    specialty: 'Pediatrician',
    address: 'Cité Ennasr 2, Ariana',
    city: 'Ariana',
    isOpen: false,
    rating: 4.8,
    reviews: 95,
    image: 'https://picsum.photos/200/200?random=4',
    phone: '+216 70 222 333',
    coordinates: { lat: 36.8665, lng: 10.1647 }
  },
  {
    id: '5',
    name: 'Pharmacie De Nuit El Manar',
    type: ProviderType.PHARMACY,
    address: 'El Manar 1, Tunis',
    city: 'Tunis',
    isOpen: true,
    isOnCall: true,
    rating: 4.2,
    reviews: 45,
    image: 'https://picsum.photos/200/200?random=5',
    phone: '+216 71 888 999',
    coordinates: { lat: 36.8333, lng: 10.1333 }
  },
  {
    id: '6',
    name: 'Centre Médical Hannibal',
    type: ProviderType.CLINIC,
    specialty: 'Radiology Center',
    address: 'Les Berges du Lac 2, Tunis',
    city: 'Tunis',
    isOpen: true,
    rating: 4.6,
    reviews: 150,
    image: 'https://picsum.photos/200/200?random=6',
    phone: '+216 71 666 777',
    coordinates: { lat: 36.8456, lng: 10.2567 }
  }
];