import React from 'react';
import { ArrowRight, CheckCircle2, Phone, Mail, FileText, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

interface PartnerSpotlightProps {
  onNavigate: (pageId: string) => void;
}

export const PartnerSpotlight: React.FC<PartnerSpotlightProps> = ({ onNavigate }) => {
  const retailPartners = [
    { name: 'City Mart Supermarket', type: 'Premier Modern Trade', outlets: '40+ Outlets' },
    { name: 'Ocean Supercenter', type: 'Hypermarket Chain', outlets: '18+ Centers' },
    { name: 'Marketplace by City Mart', type: 'Gourmet Retail', outlets: 'Flagship Stores' },
    { name: 'Orange Supermarket', type: 'Urban Convenience', outlets: '25+ Outlets' },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/70 dark:bg-slate-950 transition-colors">
      <div className="max-w-5xl mx-auto">
        {/* Main Centered Floating Card matching 0:11-0:14 in reference video */}
        <div className="relative rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Floating Partner Avatar Badge matching reference */}
          <div className="inline-flex items-center gap-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-full shadow-sm mb-8 animate-fade-in">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-amber-100 flex items-center justify-center font-bold text-amber-700 text-xs">
              EU
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900 dark:text-white">U Tin Maung Win</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">Senior Trade Director · Bangkok & Yangon</div>
            </div>
          </div>

          {/* Headline matching "Your Personal Shopping Guide" in video */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <div className="text-2xl sm:text-3xl font-light text-slate-500 dark:text-slate-400 font-serif italic">
              Your Dedicated
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              FMCG Growth Partner
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-pretty pt-2">
              Whether you are an international food brand looking to enter Myanmar, or a supermarket chain looking for certified high-velocity consumer goods, we build seamless distribution pipelines that work.
            </p>
          </div>

          {/* Playful catchy callouts matching video ("Bye bye spam. See you later unrewarding rewards. Adios tracking nightmares.") */}
          <div className="pt-8 pb-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
            <span className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400">
              <CheckCircle2 className="w-4 h-4" />
              Bye bye customs delays.
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">·</span>
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              See you later out-of-stock shelves.
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">·</span>
            <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
              <CheckCircle2 className="w-4 h-4" />
              Adios supply chain surprises.
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-slate-950 dark:bg-[#F6EB14] text-white dark:text-slate-950 font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Partner Desk</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              <span>Browse Catalog</span>
            </button>
          </div>

          {/* Retail Partner Trust Logomarks */}
          <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              Trusted by Myanmar’s Premier Retailers
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {retailPartners.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-950/70 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800"
                >
                  <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                    {p.name}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {p.outlets}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
