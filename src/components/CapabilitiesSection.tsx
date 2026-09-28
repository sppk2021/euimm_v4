import React, { useState, useMemo } from 'react';
import { Network, Globe, ShieldCheck, Warehouse, ArrowRight, Calculator, Truck, Box, Clock, Layers } from 'lucide-react';
import { CAPABILITIES } from '../data/products';

export const CapabilitiesSection: React.FC = () => {
  const [cargoType, setCargoType] = useState<'food_canned' | 'beverage_bottles' | 'cosmetics' | 'dry_snacks'>('food_canned');
  const [cartonQuantity, setCartonQuantity] = useState<number>(100);

  const iconMap: Record<string, React.ReactNode> = {
    Network: <Network className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
    Globe: <Globe className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    Boxes: <Warehouse className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  };

  const cargoConfigs = {
    food_canned: { label: 'Canned Seafood / Savory Foods', weightPerCarton: 9.8, cbmPerCarton: 0.022, temp: 'Ambient (Dry Storage)' },
    beverage_bottles: { label: 'Glass Bottled Wellness Drinks', weightPerCarton: 11.2, cbmPerCarton: 0.028, temp: 'Ambient / Cool (+18°C)' },
    cosmetics: { label: 'Cosmetics & Personal Skincare', weightPerCarton: 5.5, cbmPerCarton: 0.018, temp: 'Temperature Regulated (<26°C)' },
    dry_snacks: { label: 'Crisp Biscuits & Confectionery', weightPerCarton: 4.8, cbmPerCarton: 0.034, temp: 'Low Humidity Dry Pantry' },
  };

  const calculation = useMemo(() => {
    const config = cargoConfigs[cargoType];
    const totalWeight = (cartonQuantity * config.weightPerCarton).toFixed(1);
    const totalCbm = (cartonQuantity * config.cbmPerCarton).toFixed(2);
    
    let loadType = 'Partial Pallet Consignment (LTL)';
    let containerMatch = 'Shared Consolidated Reefer/Box';
    if (cartonQuantity >= 800) {
      loadType = 'Full Container Load (20ft FCL)';
      containerMatch = '1x 20ft Dedicated High-Cube';
    } else if (cartonQuantity >= 250) {
      loadType = 'Multi-Pallet Batch (3–5 Pallets)';
      containerMatch = 'Dedicated Cross-Border Truck';
    }

    return {
      totalWeight,
      totalCbm,
      loadType,
      containerMatch,
      temp: config.temp,
    };
  }, [cargoType, cartonQuantity]);

  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
              Operational Scope
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight text-balance">
              What We Do: Full-Cycle Cross-Border FMCG Solutions
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed text-pretty">
              From direct manufacturer procurement in Bangkok to nationwide retail placement in Myanmar, EUI manages the end-to-end supply chain with regulatory compliance and cold-chain integrity.
            </p>
          </div>

          <a
            href="#contact"
            className="self-start md:self-auto px-5 py-2.5 bg-slate-900 dark:bg-rose-600 hover:bg-slate-800 dark:hover:bg-rose-500 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Partner With EUI</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200">
                {cap.metrics}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive B2B Freight & Container Volume Estimator */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-lg mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>B2B Logistics Calculator</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Cross-Border Consignment Estimator
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Estimate cargo gross weight, volume in CBM, and container configuration for Bangkok to Yangon freight routes.
              </p>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-800/80 self-start lg:self-auto flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Full Customs & FDA Bonded Transit</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Select Product Commodity Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {Object.entries(cargoConfigs).map(([key, item]) => {
                    const isSelected = cargoType === key;
                    return (
                      <button
                        type="button"
                        key={key}
                        onClick={() => setCargoType(key as any)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 font-bold shadow-xs'
                            : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
                        }`}
                      >
                        <div className="text-xs font-bold">{item.label}</div>
                        <div className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">~{item.weightPerCarton} kg/carton</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Consignment Volume (Master Cartons)
                  </label>
                  <span className="text-sm font-extrabold text-rose-600 dark:text-rose-400 tabular-nums">
                    {cartonQuantity} Cartons
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="1200"
                  step="20"
                  value={cartonQuantity}
                  onChange={(e) => setCartonQuantity(Number(e.target.value))}
                  className="w-full accent-rose-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[11px] text-slate-400 dark:text-slate-500 mt-1 tabular-nums">
                  <span>20 Cartons (Sample)</span>
                  <span>500 Cartons (Regional)</span>
                  <span>1,200 Cartons (Full FCL)</span>
                </div>
              </div>

              {/* Quick Stepper Buttons */}
              <div className="flex items-center gap-2">
                {[50, 150, 400, 800, 1000].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setCartonQuantity(preset)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      cartonQuantity === preset
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {preset} ctns
                  </button>
                ))}
              </div>
            </div>

            {/* Calculated Output Summary Card */}
            <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-700/80 space-y-4">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                Estimated Logistics Profile
              </span>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/70 dark:border-slate-700">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <Box className="w-3.5 h-3.5 text-rose-600" />
                    <span>Total Cargo Volume</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1 tabular-nums">
                    {calculation.totalCbm} <span className="text-xs font-semibold text-slate-400">CBM</span>
                  </div>
                </div>

                <div className="p-3.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200/70 dark:border-slate-700">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <Layers className="w-3.5 h-3.5 text-blue-600" />
                    <span>Gross Cargo Weight</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1 tabular-nums">
                    {calculation.totalWeight} <span className="text-xs font-semibold text-slate-400">KG</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2 text-xs">
                <div className="flex items-center justify-between py-2 border-b border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-slate-500 dark:text-slate-400">Recommended Freight Mode:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{calculation.loadType}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-slate-500 dark:text-slate-400">Equipment Match:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{calculation.containerMatch}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-slate-500 dark:text-slate-400">Transit Corridor Lead Time:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">3–5 Days (Bangkok → Yangon)</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-slate-500 dark:text-slate-400">Storage Environment:</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">{calculation.temp}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Truck className="w-3.5 h-3.5" />
                  <span>Request Official Commercial Freight Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Operations Flow Ribbon */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-xs">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
            End-to-End Operational Pipeline
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-bold text-rose-600 dark:text-rose-400">Phase 1</span>
              <p className="text-sm font-bold text-slate-900 dark:text-white mt-1">Manufacturer Procurement</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Direct contracts negotiated in Bangkok with certified food and cosmetic producers.</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400">Phase 2</span>
              <p className="text-sm font-bold text-slate-900 dark:text-white mt-1">Customs & FDA Clearances</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Complete lab testing, labeling, and legal compliance before arrival.</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400">Phase 3</span>
              <p className="text-sm font-bold text-slate-900 dark:text-white mt-1">Tharkayta Central Storage</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Temperature-controlled industrial facility in Yangon ensuring freshness.</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60">
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
