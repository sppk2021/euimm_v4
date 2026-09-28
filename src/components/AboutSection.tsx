import React from 'react';
import { COMPANY_INFO } from '../data/products';
import { CheckCircle, MapPin, Building, ShieldCheck, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
                Corporate Profile & Heritage
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight text-balance">
                18+ Years of Reliable Cross-Border Trade Leadership
              </h2>
            </div>

            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                <strong className="text-slate-900 dark:text-white font-semibold">Excel United International Co., Ltd. (EUI)</strong> is a foreign export-import enterprise headquartered in Bangkok, Thailand, with a major operating subsidiary and central warehouse facility in Yangon, Myanmar.
              </p>
              <p>
                The company specializes in the sourcing, cross-border freight, regulatory compliance, and nationwide distribution of trusted food, beverage, snack, and cosmetic products.
              </p>
              <p>
                As a recognized distributor in Myanmar's fast-moving consumer goods (FMCG) market, EUI delivers authentic, high-quality products to wholesalers, modern supermarkets, department stores, and general retail channels nationwide.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">100% Legal & FDA Approved</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                    Strict adherence to all Myanmar FDA standards, import tariffs, and safety certifications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Long-Term Partnerships</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                    Building sustainable, mutually profitable relationships with suppliers and retailers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Direct Manufacturer Ties</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                    Bangkok headquarters negotiates directly with Thai factories for competitive pricing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Cold & Dry Chain Storage</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                    Industrial warehouse located in Tharkayta Industrial Zone ensures product integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>

            {/* Right Column: Authentic Team Photography */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 group">
                <div className="w-full h-64 sm:h-80 flex items-center justify-center p-3 sm:p-4 bg-slate-100/60 dark:bg-slate-800/40 overflow-hidden">
                  <img
                    src={COMPANY_INFO.teamPhotoUrl}
                    alt="Excel United International Team"
                    className="max-w-full max-h-full w-auto h-auto object-contain rounded-xl group-hover:scale-101 transition-transform duration-500 select-none drop-shadow-xs"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    EUI Leadership & Distribution Team
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Dedicated professionals driving seamless trade operations across Thailand and Myanmar.
                  </p>
                </div>
              </div>

            {/* Office Dual-Bridge Card */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400 shrink-0" />
                <span className="font-semibold text-slate-900 dark:text-white">Bangkok HQ:</span>
                <span className="text-slate-600 dark:text-slate-400">{COMPANY_INFO.bangkokOffice.city}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <span className="font-semibold text-slate-900 dark:text-white">Yangon Hub:</span>
                <span className="text-slate-600 dark:text-slate-400 truncate">{COMPANY_INFO.yangonOffice.address.split(',')[1]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quantitative Proof Counter Bar */}
        <div className="mt-16 pt-10 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {COMPANY_INFO.stats.map((stat, i) => (
            <div key={i} className="p-4">
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                {stat.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
