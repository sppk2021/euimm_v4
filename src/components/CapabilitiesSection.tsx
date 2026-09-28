import React from 'react';
import { Network, Globe, ShieldCheck, Warehouse, ArrowRight } from 'lucide-react';
import { CAPABILITIES } from '../data/products';

export const CapabilitiesSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Network: <Network className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
    Globe: <Globe className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    Boxes: <Warehouse className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  };

  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
              Operational Scope
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight text-balance">
              What We Do: Cross-Border FMCG Solutions
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed text-pretty">
              From manufacturer procurement in Thailand to nationwide placement across Myanmar, EUI manages the end-to-end supply chain with regulatory rigor and temperature-controlled logistics.
            </p>
          </div>

          <a
            href="#contact"
            className="self-start md:self-auto px-4 py-2 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm font-semibold rounded-lg border border-slate-200 dark:border-slate-700 shadow-2xs transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Partner With EUI</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {iconMap[cap.icon]}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors leading-snug">
                  {cap.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cap.description}
                </p>

                <ul className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  {cap.details.map((detail, idx) => (
                    <li key={idx} className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed flex items-start gap-2">
                      <span className="text-rose-600 dark:text-rose-400 font-bold">·</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                {cap.metrics}
              </div>
            </div>
          ))}
        </div>

        {/* Operations Flow Ribbon */}
        <div className="mt-10 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-xs">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
            End-to-End Operational Pipeline
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-bold text-rose-600 dark:text-rose-400">Phase 1</span>
              <p className="text-sm font-bold text-slate-900 dark:text-white mt-1">Manufacturer Procurement</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Direct contracts negotiated in Bangkok with certified food and cosmetic producers.</p>
            </div>
            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400">Phase 2</span>
              <p className="text-sm font-bold text-slate-900 dark:text-white mt-1">Customs & FDA Clearances</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Complete lab testing, labeling, and legal compliance before arrival.</p>
            </div>
            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400">Phase 3</span>
              <p className="text-sm font-bold text-slate-900 dark:text-white mt-1">Tharkayta Central Storage</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Temperature-controlled industrial facility in Yangon ensuring freshness.</p>
            </div>
            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Phase 4</span>
              <p className="text-sm font-bold text-slate-900 dark:text-white mt-1">Nationwide Distribution</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Supplying 500+ supermarkets, modern retail chains, and regional wholesale partners.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
