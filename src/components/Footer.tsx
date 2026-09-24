import React from 'react';
import { useApp } from '../context/AppContext';
import { ExternalLink, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, setIsStructuredDataOpen, db, lang } = useApp();

  const displayName =
    lang === 'ru' ? db.person.russianName : db.person.internationalName;

  return (
    <footer className="mt-6 sm:mt-8 border-t border-white/[0.08] bg-[#07090d] text-xs text-[#9c978f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-medium text-white text-sm">
              {displayName}
            </div>
            <p className="text-xs text-[#6b665f]">
              {t.hero.role}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <a
              href="https://teduza.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9c978f] hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>teduza.com</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
            <span className="text-white/20">·</span>
            <a
              href="https://company.teduza.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9c978f] hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>company.teduza.com</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
            <span className="text-white/20">·</span>
            <a
              href="https://t.me/teduza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d97f3d] hover:text-[#f3954f] transition-colors inline-flex items-center gap-1"
            >
              <span>@teduza</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-[#6b665f]">
          <div className="break-words">
            © 2026 {displayName}. {t.footer.rights} {t.footer.legal}
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono">sarkisian.teduza.com</span>
            <button
              type="button"
              onClick={() => setIsStructuredDataOpen(true)}
              className="p-1 text-[#6b665f] hover:text-[#9c978f] transition-colors"
              title="Schema.org JSON-LD"
              aria-label="Schema.org JSON-LD"
            >
              <Code2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
