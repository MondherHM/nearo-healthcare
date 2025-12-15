import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Menu, 
  X, 
  ShieldCheck, 
  Activity, 
  Clock, 
  ChevronRight,
  Globe 
} from 'lucide-react';

import { Language, Provider, ProviderType } from './types';
import { TRANSLATIONS, MOCK_PROVIDERS } from './constants';
import ProviderCard from './components/ProviderCard';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const t = TRANSLATIONS[language];
  const isRTL = language === Language.AR;

  // Filter providers based on search and active filters
  const filteredProviders = MOCK_PROVIDERS.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          provider.specialty?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          provider.city.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;

    if (activeFilter === 'all') return true;
    if (activeFilter === 'doctors') return provider.type === ProviderType.DOCTOR;
    if (activeFilter === 'pharmacies') return provider.type === ProviderType.PHARMACY;
    if (activeFilter === 'clinics') return provider.type === ProviderType.CLINIC;
    if (activeFilter === 'open') return provider.isOpen;
    if (activeFilter === 'onCall') return provider.isOnCall;
    
    return true;
  });

  const changeLang = (lang: Language) => {
    setLanguage(lang);
    setMobileMenuOpen(false);
  };

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-nearo-green" />
              <span className={`text-2xl font-bold text-gray-900 ${isRTL ? 'mr-2' : 'ml-2'}`}>
                NearO<span className="text-nearo-green">HC</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              <a href="#" className="text-gray-700 hover:text-nearo-green px-3 py-2 font-medium">{t.nav_doctors}</a>
              <a href="#" className="text-gray-700 hover:text-nearo-green px-3 py-2 font-medium">{t.nav_pharmacies}</a>
              <a href="#" className="text-gray-700 hover:text-nearo-green px-3 py-2 font-medium">{t.nav_clinics}</a>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse border-l rtl:border-r rtl:border-l-0 border-gray-200 pl-4 rtl:pr-4">
                <button onClick={() => changeLang(Language.EN)} className={`text-xs font-bold ${language === Language.EN ? 'text-nearo-green' : 'text-gray-400'}`}>EN</button>
                <button onClick={() => changeLang(Language.FR)} className={`text-xs font-bold ${language === Language.FR ? 'text-nearo-green' : 'text-gray-400'}`}>FR</button>
                <button onClick={() => changeLang(Language.AR)} className={`text-xs font-bold ${language === Language.AR ? 'text-nearo-green' : 'text-gray-400'}`}>AR</button>
              </div>

              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <button className="text-gray-500 hover:text-gray-900 font-medium">
                  {t.nav_signin}
                </button>
                <button className="bg-nearo-green hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition-colors">
                  {t.nav_get_started}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-500">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">{t.nav_doctors}</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">{t.nav_pharmacies}</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">{t.nav_clinics}</a>
              
              <div className="flex justify-around py-3 bg-gray-50 rounded-lg mx-3">
                <button onClick={() => changeLang(Language.EN)} className={`text-sm font-bold ${language === Language.EN ? 'text-nearo-green' : 'text-gray-400'}`}>English</button>
                <button onClick={() => changeLang(Language.FR)} className={`text-sm font-bold ${language === Language.FR ? 'text-nearo-green' : 'text-gray-400'}`}>Français</button>
                <button onClick={() => changeLang(Language.AR)} className={`text-sm font-bold ${language === Language.AR ? 'text-nearo-green' : 'text-gray-400'}`}>العربية</button>
              </div>

              <div className="pt-4 flex flex-col space-y-2 px-3">
                <button className="w-full text-center text-gray-700 py-2 border border-gray-300 rounded-lg">{t.nav_signin}</button>
                <button className="w-full text-center bg-nearo-green text-white py-2 rounded-lg">{t.nav_get_started}</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section (Zone 4) */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className={`relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 flex flex-col justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8`}>
            <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
              <div className="sm:text-center lg:text-left rtl:lg:text-right">
                
                {/* Zone 4 Requirements: Black and 24, Green and 24 */}
                <h1 className="tracking-tight font-extrabold text-gray-900 flex flex-col gap-1">
                  <span className="block text-[24px] font-bold text-black leading-tight">
                    {t.hero_title_1}
                  </span>
                  <span className="block text-[24px] font-bold text-nearo-green leading-tight">
                    {t.hero_title_2}
                  </span>
                </h1>
                
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  {t.hero_desc}
                </p>
                
                {/* Search Bar */}
                <div className="mt-8 sm:mt-10">
                  <div className="relative shadow-sm rounded-full">
                    <div className="flex bg-white border border-gray-300 rounded-full shadow-lg overflow-hidden p-1">
                      <div className="flex-1 flex items-center px-4">
                        <Search className="h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          className="w-full border-none focus:ring-0 text-gray-700 placeholder-gray-400 px-3 bg-transparent outline-none"
                          placeholder={t.search_placeholder}
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <button className="bg-nearo-green text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors flex items-center">
                        {t.search_btn}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Filters (Zone 2) */}
                <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start rtl:lg:justify-start">
                  {[
                    { id: 'all', label: t.filter_all },
                    { id: 'doctors', label: t.filter_doctors },
                    { id: 'pharmacies', label: t.filter_pharmacies },
                    { id: 'clinics', label: t.filter_clinics },
                    { id: 'open', label: t.filter_open_now },
                    { id: 'onCall', label: t.filter_on_call }
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                        activeFilter === filter.id
                          ? 'bg-nearo-dark text-white shadow-md'
                          : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
        
        {/* Abstract Background Decoration */}
        <div className={`lg:absolute lg:inset-y-0 ${isRTL ? 'lg:left-0' : 'lg:right-0'} lg:w-1/2 bg-gray-50`}>
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90"
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Medical Team"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent lg:via-white/20"></div>
        </div>
      </div>

      {/* Provider List Section (Zone 1 & 5) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t.section_featured_title}
            </h2>
            <div className="mt-4 max-w-2xl mx-auto h-1 w-20 bg-nearo-green rounded-full"></div>
          </div>

          {filteredProviders.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProviders.map(provider => (
                <ProviderCard 
                  key={provider.id} 
                  provider={provider} 
                  texts={t}
                  lang={language}
                />
              ))}
            </div>
          ) : (
             <div className="text-center py-20">
               <p className="text-gray-500 text-lg">No providers found matching your criteria.</p>
               <button onClick={() => { setActiveFilter('all'); setSearchQuery(''); }} className="mt-4 text-nearo-green font-semibold hover:underline">Clear Filters</button>
             </div>
          )}
        </div>
      </section>

      {/* Features Section (Zone 6) */}
      <section className="py-20 bg-nearo-dark text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute right-0 top-0 bg-nearo-green w-96 h-96 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-0 bottom-0 bg-blue-500 w-96 h-96 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-nearo-green font-semibold tracking-wide uppercase">Technology & Care</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
              {t.section_features_care_title}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              {t.section_features_care_desc}
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: MapPin, title: "Geo-Location", desc: "Instantly find the nearest help with precise GPS tracking." },
                { icon: ShieldCheck, title: "Verified Providers", desc: "All doctors and clinics are verified by the Tunisian Medical Council." },
                { icon: Clock, title: "Real-Time Updates", desc: "Know who is open, who is on call, and wait times instantly." }
              ].map((feature, idx) => (
                <div key={idx} className="bg-gray-800 bg-opacity-50 p-8 rounded-2xl border border-gray-700 hover:border-nearo-green transition-colors duration-300">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-nearo-green text-white mb-6">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium text-white">{feature.title}</h3>
                  <p className="mt-4 text-base text-gray-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-white">NearO<span className="text-nearo-green">HC</span></span>
            <p className="mt-2 text-sm">© 2024 NearO HealthCare Tunisia. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 rtl:space-x-reverse">
             <Globe className="w-5 h-5 hover:text-white cursor-pointer" />
             <Activity className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>
      </footer>

      {/* AI Assistant Floating Widget */}
      <AIAssistant texts={t} lang={language} />

    </div>
  );
}

export default App;
