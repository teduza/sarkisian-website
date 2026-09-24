import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageCode, MultilingualString, SiteDatabase, ArticleItem, IpRecord } from '../types';
import { initialSiteDatabase } from '../data/initialData';
import { translations, UIStrings } from '../data/translations';

interface AppContextType {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  t: UIStrings;
  db: SiteDatabase;
  getString: (field: MultilingualString | undefined | null) => string;
  selectedArticle: ArticleItem | null;
  setSelectedArticle: (article: ArticleItem | null) => void;
  selectedPatent: IpRecord | null;
  setSelectedPatent: (patent: IpRecord | null) => void;
  isStructuredDataOpen: boolean;
  setIsStructuredDataOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Determine initial language:
  // 1. Explicit URL query param ?lang=ru or ?lang=en (for SEO hreflang and direct sharing)
  // 2. Saved user preference
  // 3. Default to 'en'
  const [lang, setLangState] = useState<LanguageCode>(() => {
    try {
      if (typeof window !== 'undefined' && window.location.search) {
        const params = new URLSearchParams(window.location.search);
        const urlLang = params.get('lang');
        if (urlLang === 'ru' || urlLang === 'en') return urlLang;
      }
      const saved = localStorage.getItem('sarkisian_lang');
      if (saved === 'ru' || saved === 'en') return saved;
    } catch {
      // fallback
    }
    return 'en';
  });

  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [selectedPatent, setSelectedPatent] = useState<IpRecord | null>(null);
  const [isStructuredDataOpen, setIsStructuredDataOpen] = useState(false);

  const setLang = (newLang: LanguageCode) => {
    setLangState(newLang);
    try {
      localStorage.setItem('sarkisian_lang', newLang);
      if (typeof window !== 'undefined') {
        const newUrl = newLang === 'en' ? window.location.pathname : `${window.location.pathname}?lang=ru`;
        window.history.replaceState(null, '', newUrl);
      }
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const getString = (field: MultilingualString | undefined | null): string => {
    if (!field) return '';
    return field[lang] || field.en || '';
  };

  const t = translations[lang];

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        t,
        db: initialSiteDatabase,
        getString,
        selectedArticle,
        setSelectedArticle,
        selectedPatent,
        setSelectedPatent,
        isStructuredDataOpen,
        setIsStructuredDataOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
