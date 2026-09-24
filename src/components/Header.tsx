import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const { lang, setLang, t, db } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const displayName =
    lang === 'ru' ? db.person.russianFullName : db.person.internationalName;

  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.timeline, href: '#timeline' },
    { label: t.nav.mars, href: '#mars' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0c10]/95 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand: teduza */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group text-left min-w-0"
          >
            <span className="text-base sm:text-lg font-mono font-bold tracking-tight text-white group-hover:text-[#d97f3d] transition-colors shrink-0">
              teduza
            </span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono text-[#9c978f] bg-white/[0.04] border border-white/[0.08]">
              {lang === 'ru' ? 'архитектор M.A.R.S.' : 'M.A.R.S. architect'}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-1.5 text-xs lg:text-sm font-normal text-[#9c978f] hover:text-white hover:bg-white/[0.04] rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Switcher (EN | RU) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="flex items-center p-0.5 bg-white/[0.04] border border-white/[0.08] rounded-md text-xs font-mono">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  lang === 'en'
                    ? 'bg-[#c1440e] text-white font-medium'
                    : 'text-[#9c978f] hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('ru')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  lang === 'ru'
                    ? 'bg-[#c1440e] text-white font-medium'
                    : 'text-[#9c978f] hover:text-white'
                }`}
              >
                RU
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#9c978f] hover:text-white hover:bg-white/[0.06] rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d1017] border-b border-white/[0.08] px-4 pt-2 pb-5 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-3 py-2 text-sm text-[#eae7e1] hover:text-white hover:bg-white/[0.04] rounded-md transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
