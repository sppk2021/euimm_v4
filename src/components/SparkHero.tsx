import React, { useState } from 'react';
import { ArrowRight, Download, ShieldCheck, CheckCircle2, Star, Sparkles, Package, Eye } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, COMPANY_INFO } from '../data/products';

interface SparkHeroProps {
  onSelectProduct: (product: Product) => void;
  onNavigate: (pageId: string) => void;
}

export const SparkHero: React.FC<SparkHeroProps> = ({ onSelectProduct, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const showcaseProducts = PRODUCTS.slice(0, 4);
  const currentProduct = showcaseProducts[activeTab] || showcaseProducts[0];

  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-slate-100/60 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Main Floating Rounded Canvas Container matching reference video */}
        <div className="relative rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl p-6 sm:p-10 lg:p-14 overflow-hidden">
          
          {/* Subtle decorative background ambient glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F6EB14]/15 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-500/10 dark:bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Floating Avatar Tag (Daw Khin Khin - Reference Video style) */}
          <div className="hidden lg:flex items-center gap-3 absolute top-12 right-14 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 animate-bounce duration-1000">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-rose-100 flex items-center justify-center shrink-0 border-2 border-white dark:border-slate-700">
              <span className="text-sm font-bold text-rose-600">KK</span>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Daw Khin Khin</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">City Mart Partner Manager</div>
            </div>
          </div>

          {/* Floating Logo Badge (Reference Video style) */}
          <div className="hidden sm:flex items-center gap-2.5 absolute top-12 left-10 lg:left-14 bg-[#F6EB14] px-3.5 py-2 rounded-2xl shadow-md transform -rotate-3 hover:rotate-0 transition-transform">
            <img
              src={COMPANY_INFO.logoSquareUrl}
              alt="EUI Icon"
              className="w-5 h-5 object-contain"
            />
            <span className="text-xs font-black text-slate-950 tracking-wider uppercase">EUI VERIFIED</span>
          </div>

          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-8 sm:pt-4">
            
            {/* Left Column: Big Headline & Value Proposition */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Trust Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Authorized Cross-Border FMCG Importer</span>
              </div>

              {/* Headline matching "Welcome To Spark" reference */}
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-slate-500 dark:text-slate-400">
                  Welcome
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08] text-balance">
                  To Excel United
                </h1>
              </div>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-pretty max-w-xl">
                The ultimate FMCG import & nationwide distribution network in Myanmar. Connecting trusted Thai manufacturers with 500+ supermarkets, hypermarkets, and wholesale depots.
              </p>

              {/* Action Buttons matching the reference video */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('products')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-slate-950 dark:bg-[#F6EB14] text-white dark:text-slate-950 font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl cursor-pointer"
                >
                  <Package className="w-4 h-4" />
                  <span>Explore Product Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 text-slate-500" />
                  <span>Wholesale Inquiry</span>
                </button>
              </div>

              {/* Mini Stats Row */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-8">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight tabular-nums">
                    500+
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Retail & Supermarket Outlets
                  </div>
                </div>

                <div className="w-px h-8 bg-slate-200 dark:bg-slate-800" />

                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight tabular-nums">
                    100%
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    FDA Certified & Cold-Chain
                  </div>
                </div>

                <div className="w-px h-8 bg-slate-200 dark:bg-slate-800" />

                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight tabular-nums">
                    18+
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Years Cross-Border Trade
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Showcase Card / Device Frame matching video */}
            <div className="lg:col-span-6 relative flex justify-center">
              
              {/* Product Selector Pills */}
              <div className="w-full max-w-md bg-slate-50 dark:bg-slate-950/80 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-xl relative">
                
                {/* Product Quick-Switch Tabs */}
                <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800 mb-4 overflow-x-auto scrollbar-none">
                  {showcaseProducts.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => setActiveTab(idx)}
                      className={`flex-1 py-1.5 px-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                        activeTab === idx
                          ? 'bg-[#F6EB14] text-slate-950 shadow-xs'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {p.brand}
                    </button>
                  ))}
                </div>

                {/* Main Product Showcase Box */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
                  
                  {/* Product Image Frame */}
                  <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-3 group">
                    <img
                      src={currentProduct.image}
                      alt={currentProduct.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />

                    <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-bold">
                      {currentProduct.origin} Origin
                    </span>

                    <button
                      onClick={() => onSelectProduct(currentProduct)}
                      className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 dark:bg-slate-800/95 text-slate-900 dark:text-white text-xs font-bold shadow-md hover:bg-slate-900 hover:text-white transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                  </div>

                  {/* Product Info Summary */}
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                      <span>{currentProduct.categoryLabel}</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        In Stock (Yangon Hub)
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-1">
                      {currentProduct.name}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                      {currentProduct.description}
                    </p>
                  </div>

                  {/* Action Bar */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-xs font-medium text-slate-500">
                      Packaging: <span className="font-semibold text-slate-800 dark:text-slate-200">{currentProduct.packaging.split('.')[0]}</span>
                    </div>
                    <button
                      onClick={() => onSelectProduct(currentProduct)}
                      className="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
                    >
                      Spec Sheet →
                    </button>
                  </div>

                </div>

                {/* Floating "Track Shipment" mini pill (Reference video style) */}
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Batch #EUI-9824</div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">100% FDA Cleared & Dispatched</div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
