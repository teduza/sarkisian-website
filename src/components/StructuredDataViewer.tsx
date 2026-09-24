import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { generateSchemaGraph } from '../seo/schemaGenerator';
import { X, Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';

export const StructuredDataViewer: React.FC = () => {
  const { isStructuredDataOpen, setIsStructuredDataOpen, db, lang } = useApp();
  const [copied, setCopied] = useState(false);

  if (!isStructuredDataOpen) return null;

  const schemaJson = JSON.stringify(generateSchemaGraph(db, lang), null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(schemaJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0f121a] border border-white/[0.12] rounded-xl shadow-2xl p-4 sm:p-8 my-4 sm:my-8 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="min-w-0">
              <h2 className="text-lg sm:text-xl font-display text-white tracking-wide truncate">
                Schema.org JSON-LD Structured Data
              </h2>
              <p className="text-xs text-[#9c978f] truncate">
                {lang === 'ru'
                  ? 'Машиночитаемый граф метаданных (Person, Organization, Product, ScholarlyArticle)'
                  : 'Machine-readable metadata graph (Person, Organization, Product, ScholarlyArticle)'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsStructuredDataOpen(false)}
            className="p-1.5 text-[#9c978f] hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-2 py-3 border-b border-white/[0.06] text-xs">
          <span className="font-mono-code text-[#6b665f]">application/ld+json</span>
          <div className="flex items-center gap-3">
            <a
              href="https://validator.schema.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#d97f3d] hover:underline font-mono-code"
            >
              Schema Validator <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.06] hover:bg-white/[0.1] text-white rounded font-mono-code transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lang === 'ru' ? 'Скопировано' : 'Copied'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{lang === 'ru' ? 'Копировать JSON-LD' : 'Copy JSON-LD'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Code display */}
        <div className="flex-1 overflow-auto mt-4 p-4 bg-[#08090d] border border-white/[0.06] rounded-lg">
          <pre className="text-xs font-mono-code text-[#eae7e1] leading-relaxed whitespace-pre">
            {schemaJson}
          </pre>
        </div>
      </div>
    </div>
  );
};
