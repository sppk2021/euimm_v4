import React, { useState } from 'react';
import { Store, Building2, ShoppingBag, MapPin, Truck, Clock, ShieldCheck, ThermometerSnowflake, CheckCircle2 } from 'lucide-react';
import { DISTRIBUTION_HUBS, DistributionHub } from '../data/products';

export const TradeNetworkSection: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState<DistributionHub>(DISTRIBUTION_HUBS[0]);

  const channelHighlights = [
    {
      icon: <Store className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
      title: 'Modern Retail Chains',
      desc: 'Direct replenishment to leading hypermarket networks, supermarkets, and chain convenience stores across Myanmar.',
      outlets: '350+ Supermarkets & Hypermarkets',
    },
    {
      icon: <Building2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      title: 'Regional Wholesale Depots',
      desc: 'Bulk container and pallet consignments to regional master trading houses in Mandalay, Shan State, and lower delta hubs.',
      outlets: '150+ Wholesale Distributing Depots',
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: 'General Trade & Specialized',
      desc: 'Direct-to-store logistics route serving traditional neighborhood retail, beauty care specialty counters, and pharmacies.',
      outlets: '500+ Active Retail Accounts',
    },
  ];

  return (
    <section id="network" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
            Distribution Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight text-balance">
            Cross-Border Logistics Network & Strategic Hubs
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed text-pretty">
            Connecting premier Thai manufacturing centers directly to retail shelves and wholesale markets across Myanmar via cold-chain bonded corridors and strategic staging facilities.
          </p>
        </div>

        {/* Channels Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {channelHighlights.map((channel, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 flex items-center justify-center mb-4">
                  {channel.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  {channel.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {channel.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-rose-600 dark:text-rose-400">
                {channel.outlets}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Strategic Hub Explorer */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                Logistics Infrastructure & Nodes
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Regional Hub Explorer
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Select a logistics center to review operational capacity, transit lead times, and retail coverage.
              </p>
            </div>

            {/* Strategic Metric Highlights */}
            <div className="flex items-center gap-6 text-xs">
              <div>
                <div className="text-slate-400 dark:text-slate-500">Standard Transit</div>
                <div className="text-sm font-extrabold text-slate-900 dark:text-white">24h – 48h Overland</div>
              </div>
              <div className="w-px h-8 bg-slate-200 dark:bg-slate-800" />
              <div>
                <div className="text-slate-400 dark:text-slate-500">Cold Chain</div>
                <div className="text-sm font-extrabold text-slate-900 dark:text-white">-18°C / +4°C Certified</div>
              </div>
            </div>
          </div>

          {/* Hub Tab Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6" role="tablist">
            {DISTRIBUTION_HUBS.map((hub) => {
              const isActive = selectedHub.id === hub.id;
              return (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-slate-900 dark:bg-rose-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/80 dark:hover:bg-slate-700'
                  }`}
                  role="tab"
                  aria-selected={isActive}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{hub.city}</span>
                </button>
              );
            })}
          </div>

          {/* Active Hub Details Pane */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Hub Overview */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wide">
                  <span>{selectedHub.country}</span>
                  <span>·</span>
                  <span>{selectedHub.city}</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                  {selectedHub.name}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  {selectedHub.role}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                  {selectedHub.description}
                </p>
              </div>

              {/* Retail Partners List */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block mb-2.5">
                  Key Accounts & Supermarket Network
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedHub.majorPartners.map((partner, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <span>{partner}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Operational Metrics Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase">Storage Capacity</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">{selectedHub.capacity}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase">Replenishment Lead Time</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">{selectedHub.leadTime}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <ThermometerSnowflake className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase">Climate Standards</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">{selectedHub.temperatureControl}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase">Active Accounts Serviced</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">{selectedHub.activeAccounts}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
