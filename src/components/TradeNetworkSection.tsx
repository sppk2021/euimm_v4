import React from 'react';
import { Store, Building2, ShoppingBag } from 'lucide-react';

export const TradeNetworkSection: React.FC = () => {
  const channels = [
    {
      icon: <Store className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
      title: 'Modern Retail Chains',
      desc: 'Supplying leading supermarkets, department stores, and convenience mart chains with shelf-ready consumer goods.',
    },
    {
      icon: <Building2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      title: 'Wholesale Depots',
      desc: 'Bulk supply to regional master distributors and trading houses across major Myanmar township centers.',
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: 'General Trade & Specialty',
      desc: 'Direct distribution routes to traditional shops, pharmacies, beauty counters, and food service partners.',
    },
  ];

  return (
    <section id="network" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
            Distribution Reach
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight text-balance">
            Our Southeast Asian Distribution Footprint
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed text-pretty">
            Connecting premier manufacturers in Thailand directly with consumers across Myanmar through reliable regional channels and temperature-controlled logistics.
          </p>
        </div>

        {/* Channel Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {channels.map((channel, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                  {channel.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {channel.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {channel.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
