import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { PatentDetailModal } from './components/PatentDetailModal';
import { StructuredDataViewer } from './components/StructuredDataViewer';
import { generateSchemaGraph } from './seo/schemaGenerator';

const MainLayout: React.FC = () => {
  const { db, lang } = useApp();

  // Inject or update Schema.org JSON-LD dynamically in document head
  useEffect(() => {
    let scriptElement = document.getElementById('schema-json-ld') as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = 'schema-json-ld';
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    const schema = generateSchemaGraph(db, lang);
    scriptElement.textContent = JSON.stringify(schema);

    // Dynamic clean titles and descriptions for search engines
    if (lang === 'ru') {
      document.title = 'Саркисян Александр Давидович — Официальный персональный сайт | teduza';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Официальный персональный сайт Александра Давидовича Саркисяна (teduza), основателя M.A.R.S. COMPANION LLC. Выпускника Кронштадтского морского кадетского военного корпуса и Лицея № 410. Биография, патенты UK IPO, M.A.R.S.'
        );
      }
    } else {
      document.title = 'Aleksandr Sarkisian (Sargsyan) — Official Personal Website';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Official personal website of Aleksandr Sarkisian (Sargsyan), founder and director of M.A.R.S. COMPANION LLC. Biography, background, UK IPO patents, and technology.'
        );
      }
    }
  }, [db, lang]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0c10] text-[#eae7e1] font-sans selection:bg-[#c1440e]/30 selection:text-white overflow-x-hidden">
      <Header />

      {/* Main content with top padding to account for fixed header */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-4">
        <HomePage />
      </main>

      <Footer />

      {/* Modals */}
      <ArticleReaderModal />
      <PatentDetailModal />
      <StructuredDataViewer />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}

export default App;
