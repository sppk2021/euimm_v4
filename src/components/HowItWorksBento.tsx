import React, { useState } from 'react';
import { 
  Truck, 
  ShieldCheck, 
  BarChart3, 
  CheckCircle2, 
  MapPin, 
  Package, 
  Sparkles, 
  TrendingUp, 
  ArrowRight,
  Clock,
  Layers
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/products';

interface HowItWorksBentoProps {
  onNavigate: (pageId: string) => void;
}

export const HowItWorksBento: React.FC<HowItWorksBentoProps> = ({ onNavigate }) => {
  const [selectedRegion, setSelectedRegion] = useState<number>(0);
  const [activeBrandFilter, setActiveBrandFilter] = useState<string>('all');

  // Distribution Regions Volume Data for the interactive bar chart
  const regionalMetrics = [
    { city: 'Yangon Hub', volume: '185,000 units/mo', share: '45%', color: 'bg-rose-500', height: 'h-40' },
    { city: 'Mandalay', volume: '120,000 units/mo', share: '28%', color: 'bg-amber-400', height: 'h-32' },
    { city: 'Naypyitaw', volume: '55,000 units/mo', share: '14%', color: 'bg-emerald-500', height: 'h-24' },
    { city: 'Taunggyi', volume: '32,000 units/mo', share: '8%', color: 'bg-blue-500', height: 'h-16' },
    { city: 'Mawlamyine', volume: '22,000 units/mo', share: '5%', color: 'bg-purple-500', height: 'h-12' },
  ];

  const brandCategories = [
    { id: 'all', label: 'All Categories', count: 120 },
    { id: 'food', label: 'Food & Gourmet', count: 45 },
    { id: 'beverage', label: 'Beverages', count: 35 },
    { id: 'cosmetics', label: 'Personal Care', count: 40 },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ======================================================== */}
        {/* ZONE 1: ICONIC RIPPLE HEADER ("How it works" from video) */}
        {/* ======================================================== */}
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Animated Sonar Ripple Ring Container matching 0:02 in reference */}
          <div className="relative flex items-center justify-center p-6">
            {/* Concentric expanding ripple rings */}
            <div className="absolute w-28 h-28 rounded-full border border-purple-400/30 dark:border-purple-400/20 animate-ping opacity-75" />
            <div className="absolute w-20 h-20 rounded-full border border-purple-500/40 dark:border-purple-500/30 animate-pulse" />
            <div className="absolute w-36 h-36 rounded-full border border-purple-300/20 dark:border-purple-300/10 pointer-events-none" />

            {/* Centered Pill with Logo and "How it works" */}
            <div className="relative z-10 flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-5 py-2.5 rounded-full shadow-lg">
              <div className="w-8 h-8 rounded-xl bg-[#F6EB14] flex items-center justify-center p-1 shrink-0 shadow-xs">
                <img
                  src={COMPANY_INFO.logoSquareUrl}
                  alt="EUI Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>How it</span>
                <span className="text-purple-600 dark:text-purple-400 font-extrabold bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded-md">
                  works
                </span>
              </div>
            </div>
          </div>

          {/* Section Headline matching reference video typography */}
          <div className="max-w-2xl space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              One simple flow.
            </h2>
            <div className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-500 dark:text-slate-400 font-serif italic">
              Many distribution benefits.
            </div>
          </div>
          
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            EUI serves as a single integrated bridge: we handle export clearance in Bangkok, cold-chain maritime/air transit, Myanmar FDA registration, and nationwide retail fulfillment.
          </p>
        </div>

        {/* ======================================================== */}
        {/* ZONE 2: TOP BENTO ROW ("Get Up To 120+" & "Track here")   */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card A: Dynamic Brand Counter (col-span-4) */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-[2rem] p-7 border border-slate-200/80 dark:border-slate-800 shadow-md flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                Certified Portfolio
              </div>
              <div className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight tabular-nums flex items-baseline gap-1">
                <span>120</span>
                <span className="text-rose-600 dark:text-rose-400 text-4xl font-bold">+</span>
              </div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                FMCG Brands & Stock Units
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Direct partnerships with verified food, beverage, snack, and skin health manufacturers across Thailand.
              </p>
            </div>

            {/* Interactive Category Tabs */}
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Filter by Sector:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {brandCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveBrandFilter(cat.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      activeBrandFilter === cat.id
                        ? 'bg-slate-900 text-white dark:bg-[#F6EB14] dark:text-slate-950 font-bold'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                    }`}
                  >
                    {cat.label} ({cat.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Card B: "Distribute anywhere. Track here." (col-span-8) */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-[2rem] p-7 border border-slate-200/80 dark:border-slate-800 shadow-md flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  Ship anywhere. Track here.
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  End-to-end telemetry from Bangkok export port to regional retail shelves.
                </p>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-200/60 dark:border-emerald-800/60 shrink-0 self-start sm:self-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active Cold-Chain Hub: 21°C</span>
              </div>
            </div>

            {/* Interactive Route Timeline Mockup matching reference video */}
            <div className="bg-slate-50 dark:bg-slate-950/70 rounded-2xl p-5 border border-slate-200/60 dark:border-slate-800 space-y-4">
              
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 pb-3 border-b border-slate-200/60 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-purple-600" />
                  <span>Consignment #EUI-TH-9842</span>
                </div>
                <span className="text-emerald-600 font-bold">100% Cleared for Retail</span>
              </div>

              {/* Step Flow */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800">
                  <div className="text-[11px] font-bold text-slate-400 uppercase">Step 01: Sourcing</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">Bangkok HQ Depot</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Direct Factory QC Inspection</div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800">
                  <div className="text-[11px] font-bold text-purple-600 dark:text-purple-400 uppercase">Step 02: Transit</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">Myanmar FDA Hub</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Lab Test & Regulatory Seal</div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800">
                  <div className="text-[11px] font-bold text-emerald-600 uppercase">Step 03: Shelf Delivery</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">500+ Supermarkets</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Nationwide Restock in 48h</div>
                </div>
              </div>
            </div>

            {/* Bottom mini link */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-slate-500">Scheduled bi-weekly direct shipping lanes</span>
              <button
                onClick={() => onNavigate('network')}
                className="text-xs font-bold text-slate-900 dark:text-white hover:text-rose-600 flex items-center gap-1 cursor-pointer"
              >
                <span>View Distribution Map</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* ZONE 3: 4-CARD BENTO GRID ("Many wowser benefits")         */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Certified High Margin Products (col-span-6) */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-[2rem] p-7 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-5">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Rewards that are actually rewarding.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Wholesale margins optimized for master distributors, convenience marts, and retail supermarkets with rapid consumer turnover.
              </p>
            </div>

            {/* Mini Product Snapshot Box */}
            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-white dark:bg-slate-900 p-2 shrink-0 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                <img
                  src={PRODUCTS[1]?.image || PRODUCTS[0]?.image}
                  alt="Featured Product"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  Royal Nest Natural Bird’s Nest
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  High reorder rate · Premium wellness category
                </div>
                <div className="flex items-center gap-3 mt-2 text-xs font-semibold">
                  <span className="text-emerald-600 dark:text-emerald-400">+28% Retail Margin</span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-700 dark:text-slate-300">100% Guaranteed Authenticity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Interactive Regional Bar Chart (col-span-6) */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-[2rem] p-7 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Keep tabs on your retail network.
                </h3>
              </div>
              <span className="text-xs font-bold text-slate-400">Monthly Volume</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Consolidated shipments dispatched weekly from our Tharkayta Industrial Zone distribution center to all primary regional markets.
            </p>

            {/* Interactive CSS Bar Chart matching 0:08 in reference video */}
            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800">
              <div className="flex items-end justify-between gap-3 h-44 pt-4 px-2">
                {regionalMetrics.map((region, idx) => (
                  <div
                    key={region.city}
                    onClick={() => setSelectedRegion(idx)}
                    className="flex-1 flex flex-col items-center gap-2 h-full justify-end cursor-pointer group"
                  >
                    <div className="text-[10px] font-bold text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      {region.share}
                    </div>
                    <div
                      className={`w-full rounded-t-xl transition-all duration-300 ${region.color} ${region.height} ${
                        selectedRegion === idx ? 'ring-4 ring-slate-900/10 dark:ring-white/20 scale-105' : 'hover:opacity-90'
                      }`}
                    />
                    <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300 truncate max-w-full text-center">
                      {region.city.split(' ')[0]}
                    </div>
                  </div>
                ))}
              </div>

              {/* Selected City Breakdown Tag */}
              <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500">
                  Active Region: <strong className="text-slate-900 dark:text-white">{regionalMetrics[selectedRegion].city}</strong>
                </span>
                <span className="font-bold text-rose-600 dark:text-rose-400">
                  {regionalMetrics[selectedRegion].volume}
                </span>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Quality & Trust Donut (col-span-6) */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-[2rem] p-7 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Data is like trust. Never compromised.
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Every shipment is backed by official certificates of analysis, Myanmar FDA registration numbers, and hygienic cold-chain logs.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200/60 dark:border-slate-800">
                <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">100%</div>
                <div className="text-xs text-slate-500 mt-0.5">FDA Compliance Pass</div>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200/60 dark:border-slate-800">
                <div className="text-2xl font-black text-slate-900 dark:text-white">0%</div>
                <div className="text-xs text-slate-500 mt-0.5">Customs Rejection Rate</div>
              </div>
            </div>
          </div>

          {/* Bento Card 4: Rapid Restocking & Reliability (col-span-6) */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-[2rem] p-7 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Zero supply gaps. No out-of-stock shelves.
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We maintain buffer inventory at our 48 Tharkayta central logistics warehouse to buffer seasonal surges and guarantee 48-hour store replenishment.
            </p>

            <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">Tharkayta Central Depot</div>
                <div className="text-[11px] text-slate-500">20,000+ sq ft temperature-controlled floor</div>
              </div>
              <span className="text-xs font-black text-purple-600 dark:text-purple-400">48h SLA</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
