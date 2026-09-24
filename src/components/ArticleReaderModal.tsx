import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Clock, Calendar, Tag, ShieldCheck } from 'lucide-react';

export const ArticleReaderModal: React.FC = () => {
  const { selectedArticle, setSelectedArticle, getString, t } = useApp();

  if (!selectedArticle) return null;

  const title = getString(selectedArticle.title);
  const category = getString(selectedArticle.category);
  const content = getString(selectedArticle.content);
  const excerpt = getString(selectedArticle.excerpt);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl max-h-[85vh] flex flex-col bg-[#12151f] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0d1017]">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono-code uppercase px-2 py-0.5 rounded bg-[#c1440e]/20 text-[#d97f3d] border border-[#c1440e]/30">
              {category}
            </span>
            <span className="text-xs text-[#9c978f] font-mono-code">
              {selectedArticle.readTime}
            </span>
          </div>
          <button
            onClick={() => setSelectedArticle(null)}
            className="p-1.5 text-[#9c978f] hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif text-white leading-tight">
              {title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#9c978f] font-mono-code">
              <span className="text-white font-sans">{selectedArticle.author}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {selectedArticle.date}
              </span>
            </div>
          </div>

          {excerpt && (
            <div className="p-4 bg-[#0a0c10] border border-white/[0.06] rounded-xl text-xs sm:text-sm text-[#d97f3d] italic leading-relaxed">
              «{excerpt}»
            </div>
          )}

          <div className="space-y-4 text-xs sm:text-sm text-[#eae7e1]/90 leading-relaxed font-sans whitespace-pre-line">
            {content}
          </div>

          {selectedArticle.tags && selectedArticle.tags.length > 0 && (
            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
              {selectedArticle.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-white/[0.04] text-[11px] font-mono-code text-[#9c978f] rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-white/[0.08] bg-[#0d1017] flex justify-end">
          <button
            onClick={() => setSelectedArticle(null)}
            className="px-4 py-2 bg-white/[0.06] hover:bg-white/[0.1] text-xs text-white rounded-lg transition-colors font-medium"
          >
            {t.research.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
};
