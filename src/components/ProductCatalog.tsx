import React, { useState, useMemo, useEffect } from 'react';
import { Search, Eye, X, FileText, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onInquireProduct?: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProduct, onInquireProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Perceived loading skeleton
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: 'all', label: 'All Categories', count: PRODUCTS.length },
    { id: 'food', label: 'Food & Gourmet', count: PRODUCTS.filter(p => p.category === 'food').length },
    { id: 'beverage', label: 'Beverages & Wellness', count: PRODUCTS.filter(p => p.category === 'beverage').length },
    { id: 'snack', label: 'Snacks & Confectionery', count: PRODUCTS.filter(p => p.category === 'snack').length },
    { id: 'cosmetics', label: 'Personal Care & Beauty', count: PRODUCTS.filter(p => p.category === 'cosmetics').length },
  ];

  const uniqueBrands = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach(p => set.add(p.brand));
    return ['all', ...Array.from(set)];
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.categoryLabel.toLowerCase().includes(query) ||
        (product.origin && product.origin.toLowerCase().includes(query));

      return matchesCategory && matchesBrand && matchesSearch;
    });
  }, [selectedCategory, selectedBrand, searchQuery]);

  return (
    <section id="products" className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
            Imported FMCG Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight text-balance">
            Certified FMCG Brands & Product Catalog
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed text-pretty">
            Browse our official portfolio of 100% FDA-registered food, premium beverages, snacks, and personal care products imported directly from trusted Thai manufacturers.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          {/* Category Tabs (Segmented Button Group) */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none" role="tablist" aria-label="Product categories">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-slate-900 dark:bg-rose-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/80 dark:hover:bg-slate-800'
                    }`}
                    role="tab"
                    aria-selected={isActive}
                  >
                    <span>{cat.label}</span>
                    <span className={`text-xs tabular-nums ${isActive ? 'text-slate-300 dark:text-rose-200' : 'text-slate-400 dark:text-slate-500'}`}>
                      ({cat.count})
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input Box */}
            <div className="relative min-w-[260px] sm:w-80 shrink-0">
              <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, brands, ingredients..."
                className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-colors"
                aria-label="Search product catalog"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5"
                  aria-label="Clear search query"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Secondary Brand Filter Filter Strip */}
          <div className="flex items-center gap-2 overflow-x-auto text-xs py-1 scrollbar-none">
            <span className="text-slate-400 dark:text-slate-500 font-medium shrink-0">Brand:</span>
            {uniqueBrands.map((brand) => {
              const isSelected = selectedBrand === brand;
              return (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-2.5 py-1 rounded-md text-xs transition-colors shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 font-bold border border-rose-200 dark:border-rose-800'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {brand === 'all' ? 'All Brands' : brand}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter & Reset Controls */}
        <div className="py-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div>
            Showing <span className="font-bold text-slate-800 dark:text-slate-200 tabular-nums">{filteredProducts.length}</span> of{' '}
            <span className="tabular-nums">{PRODUCTS.length}</span> certified products
          </div>
          {(selectedCategory !== 'all' || selectedBrand !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedBrand('all');
                setSearchQuery('');
              }}
              className="text-rose-600 dark:text-rose-400 hover:text-rose-800 dark:hover:text-rose-300 font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Loading Skeleton */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-slate-100 dark:bg-slate-900 rounded-2xl h-80 animate-pulse" />
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 mt-6">
            <p className="text-slate-800 dark:text-slate-200 font-semibold text-base">No matching products found</p>
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">Try adjusting your keyword search, category, or brand filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedBrand('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-slate-900 dark:bg-white dark:text-slate-950 text-white text-xs font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            >
              View Full Portfolio
            </button>
          </div>
        ) : (
          /* Product Cards Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="group bg-slate-50/60 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:shadow-xl hover:border-rose-500/30 flex flex-col justify-between cursor-pointer relative overflow-hidden"
              >
                {/* Clean Unboxed Metadata with Typographic Separator (Zero-Pill Compliance) */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="font-bold text-rose-600 dark:text-rose-400 tracking-wider uppercase text-[11px]">
                    {product.brand}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <span className="text-slate-400 dark:text-slate-500">·</span>
                    <span>{product.categoryLabel}</span>
                  </div>
                </div>

                {/* Product Image Thumbnail - 100% Contained Frame */}
                <div className="w-full h-44 sm:h-48 rounded-xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80 p-3 flex items-center justify-center overflow-hidden relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 select-none"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-lg bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white text-xs font-bold shadow-md flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-rose-600" />
                      <span>Specifications</span>
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Highlights / Specs row */}
                  <div className="pt-3 mt-3 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400 font-medium truncate max-w-[150px] flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>{product.origin}</span>
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onInquireProduct) {
                          onInquireProduct(product);
                        } else {
                          onSelectProduct(product);
                        }
                      }}
                      className="text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 font-bold flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Inquire</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
