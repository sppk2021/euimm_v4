import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Breadcrumbs } from './components/Breadcrumbs';
import { HeroCarousel } from './components/HeroCarousel';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductModal } from './components/ProductModal';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { AboutSection } from './components/AboutSection';
import { TradeNetworkSection } from './components/TradeNetworkSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Product } from './types';
import { ArrowRight, ShieldCheck, Award, Globe2, FileSpreadsheet, PhoneCall } from 'lucide-react';
import { updatePageSEO } from './utils/seo';
import { COMPANY_INFO } from './data/products';

function MainApp() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalTab, setModalTab] = useState<'specs' | 'rfq'>('specs');
  const [currentPage, setCurrentPage] = useState<string>('home');

  useEffect(() => {
    updatePageSEO(currentPage);
  }, [currentPage]);

  const handleNavigate = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProduct = (product: Product, tab: 'specs' | 'rfq' = 'specs') => {
    setSelectedProduct(product);
    setModalTab(tab);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-rose-600 selection:text-white transition-colors duration-300">
      {/* Top Bar Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Breadcrumb Navigation below Header */}
      <div className="pt-16 sm:pt-20">
        <Breadcrumbs currentPage={currentPage} onNavigate={handleNavigate} />
      </div>

      {/* Main Content Router */}
      <main className="flex-1">
        <div key={currentPage} className="animate-fade-in">
          {currentPage === 'home' && (
            <div className="space-y-0">
              {/* Hero Showcase Carousel */}
              <div className="bg-white dark:bg-slate-950">
                <HeroCarousel onSelectProduct={(product) => handleOpenProduct(product, 'specs')} />
              </div>

              {/* Core Strengths Banner */}
              <section className="py-16 bg-slate-100/80 dark:bg-slate-900/90 border-y border-slate-200/80 dark:border-slate-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xs border border-slate-200/70 dark:border-slate-800 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">18+ Years Heritage</h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                          Established track record in import-export and authorized FMCG brand representation across Southeast Asia.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xs border border-slate-200/70 dark:border-slate-800 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">100% FDA Certified</h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                          Strict health compliance, hygienic cold-chain warehousing, and official Myanmar FDA regulatory clearance.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xs border border-slate-200/70 dark:border-slate-800 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0">
                        <Globe2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">Nationwide Reach</h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                          Serving 500+ retail partners, hypermarket chains, and regional wholesale depots across Myanmar.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                    <button
                      onClick={() => handleNavigate('products')}
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-slate-900 dark:bg-rose-600 text-white font-bold text-sm hover:bg-slate-800 dark:hover:bg-rose-500 transition-colors shadow-md cursor-pointer"
                    >
                      <span>Explore Certified Catalog</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleNavigate('contact')}
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-xs cursor-pointer"
                    >
                      <PhoneCall className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                      <span>Contact Trade Desk</span>
                    </button>
                  </div>
                </div>
              </section>

              {/* Product Catalog on Home for direct browsing */}
              <ProductCatalog
                onSelectProduct={(product) => handleOpenProduct(product, 'specs')}
                onInquireProduct={(product) => handleOpenProduct(product, 'rfq')}
              />

              {/* Core Capabilities Preview */}
              <CapabilitiesSection />

              {/* Distribution Network Section */}
              <TradeNetworkSection />
            </div>
          )}

          {currentPage === 'products' && (
            <div className="bg-white dark:bg-slate-950 py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
                <div className="bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <span className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                      Official Import Catalog
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                      Certified FMCG & Gourmet Products
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl leading-relaxed">
                      All products are 100% FDA tested, officially customs cleared, and ready for commercial supply to supermarkets, regional wholesalers, and retail chains across Myanmar.
                    </p>
                  </div>

                  <a
                    href={`tel:${COMPANY_INFO.yangonOffice.phoneRaw}`}
                    className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-bold shrink-0 flex items-center gap-2 shadow-xs cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400 dark:text-rose-600" />
                    <span>Call Sales: {COMPANY_INFO.yangonOffice.phone}</span>
                  </a>
                </div>
              </div>
              <ProductCatalog
                onSelectProduct={(product) => handleOpenProduct(product, 'specs')}
                onInquireProduct={(product) => handleOpenProduct(product, 'rfq')}
              />
            </div>
          )}

          {currentPage === 'capabilities' && (
            <div className="bg-slate-50 dark:bg-slate-900 py-8">
              <CapabilitiesSection />
            </div>
          )}

          {currentPage === 'about' && (
            <div className="bg-white dark:bg-slate-950 py-8">
              <AboutSection />
            </div>
          )}

          {currentPage === 'network' && (
            <div className="bg-slate-50 dark:bg-slate-900 py-8">
              <TradeNetworkSection />
            </div>
          )}

          {currentPage === 'contact' && (
            <div className="bg-white dark:bg-slate-950 py-8">
              <ContactSection />
            </div>
          )}
        </div>
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Product Specification & RFQ Quotation Modal */}
      <ProductModal
        product={selectedProduct}
        initialTab={modalTab}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
