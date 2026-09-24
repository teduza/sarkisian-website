import React from 'react';
import { useApp } from '../context/AppContext';
import { X, ExternalLink, Calendar, User } from 'lucide-react';

export const PatentDetailModal: React.FC = () => {
  const { selectedPatent, setSelectedPatent, getString, t, lang } = useApp();

  if (!selectedPatent) return null;

  const title = getString(selectedPatent.title);
  const abstract = getString(selectedPatent.abstract);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
      <div
        className="relative w-full max-w-2xl max-h-[85vh] flex flex-col bg-[#11141e] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0d1017]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[#d97f3d] px-2 py-0.5 rounded bg-[#c1440e]/20 border border-[#c1440e]/30">
              {selectedPatent.applicationNumber}
            </span>
            <span className="text-xs text-[#9c978f] font-mono">
              {selectedPatent.jurisdiction}
            </span>
          </div>
          <button
            onClick={() => setSelectedPatent(null)}
            className="p-1.5 text-[#9c978f] hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif text-white leading-tight">
              {title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-[#0a0c10] border border-white/[0.05] rounded-lg text-xs space-y-1">
                <span className="text-[#6b665f] uppercase tracking-wider text-[10px] block font-mono">
                  {t.ip.tableDate}
                </span>
                <span className="text-white font-mono flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#d97f3d]" />
                  {selectedPatent.filingDate}
                </span>
              </div>
              <div className="p-3 bg-[#0a0c10] border border-white/[0.05] rounded-lg text-xs space-y-1">
                <span className="text-[#6b665f] uppercase tracking-wider text-[10px] block font-mono">
                  {lang === 'ru' ? 'Автор изобретения' : 'Inventor'}
                </span>
                <span className="text-white flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#d97f3d]" />
                  {selectedPatent.inventor}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-[#9c978f] tracking-wider block">
              {lang === 'ru' ? 'Реферат изобретения' : 'Official Patent Abstract'}
            </span>
            <div className="p-4 bg-[#0a0c10] border border-white/[0.06] rounded-xl text-xs sm:text-sm text-[#eae7e1]/90 leading-relaxed font-sans">
              {abstract}
            </div>
          </div>

          <div className="p-4 bg-[#141824] border border-white/[0.06] rounded-xl flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <div className="text-xs font-medium text-white">UK IPO Intellectual Property Service</div>
              <div className="text-[11px] text-[#9c978f] font-mono">
                Wikidata: {selectedPatent.wikidataId}
              </div>
            </div>
            <a
              href={selectedPatent.officialRegistryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-[#c1440e] hover:bg-[#d97f3d] text-white text-xs font-medium rounded-md transition-colors inline-flex items-center gap-1.5 shrink-0"
            >
              <span>{t.ip.openRegistry}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-white/[0.08] bg-[#0d1017] flex justify-end">
          <button
            onClick={() => setSelectedPatent(null)}
            className="px-4 py-2 bg-white/[0.06] hover:bg-white/[0.1] text-xs text-white rounded-lg transition-colors font-medium"
          >
            {t.research.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
};
