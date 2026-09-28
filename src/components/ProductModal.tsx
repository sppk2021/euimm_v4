import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, Package, MapPin, Sparkles, Mail, Copy, Check, FileSpreadsheet, ShieldAlert, Send } from 'lucide-react';
import { Product } from '../types';
import { COMPANY_INFO } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  initialTab?: 'specs' | 'rfq';
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, initialTab = 'specs' }) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'rfq'>('specs');
  const [copiedSpecs, setCopiedSpecs] = useState(false);
  const [rfqSubmitted, setRfqSubmitted] = useState(false);
  const [rfqReference, setRfqReference] = useState('');

  // RFQ Form state
  const [buyerName, setBuyerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [orderVolume, setOrderVolume] = useState('50_cartons');
  const [destination, setDestination] = useState('Yangon_Central');
  const [incoterm, setIncoterm] = useState('CIF_Yangon');
  const [inquiryNotes, setInquiryNotes] = useState('');

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleCopySpecs = () => {
    const text = [
      `--- EXCEL UNITED INTERNATIONAL PRODUCT SPECIFICATION ---`,
      `Product: ${product.name}`,
      `Brand: ${product.brand}`,
      `Category: ${product.categoryLabel}`,
      `Origin: ${product.origin}`,
      `Packaging: ${product.packaging}`,
      product.netWeight ? `Net Weight: ${product.netWeight}` : '',
      product.casePack ? `Case Pack: ${product.casePack}` : '',
      product.shelfLife ? `Shelf Life: ${product.shelfLife}` : '',
      product.storageCondition ? `Storage: ${product.storageCondition}` : '',
      product.fdaRegNumber ? `FDA Reg No: ${product.fdaRegNumber}` : '',
      `Key Highlights: ${product.highlights.join(', ')}`,
      `Official Distributor: ${COMPANY_INFO.name} (${COMPANY_INFO.yangonOffice.email})`,
    ].filter(Boolean).join('\n');

    navigator.clipboard.writeText(text);
    setCopiedSpecs(true);
    setTimeout(() => setCopiedSpecs(false), 2500);
  };

  const handleRfqSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `EUI-RFQ-${Date.now().toString().slice(-6)}`;
    setRfqReference(refCode);
    setRfqSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto max-h-[92vh] flex flex-col text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/95 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
              {product.brand}
            </span>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {product.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySpecs}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              title="Copy product specifications to clipboard"
            >
              {copiedSpecs ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedSpecs ? 'Copied to Clipboard' : 'Copy Specs'}</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close product modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-6 text-xs sm:text-sm font-semibold">
          <button
            onClick={() => { setActiveTab('specs'); setRfqSubmitted(false); }}
            className={`py-3 relative cursor-pointer ${
              activeTab === 'specs'
                ? 'text-rose-600 dark:text-rose-400 font-bold'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Technical Specifications & Usage
            {activeTab === 'specs' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-600 dark:bg-rose-400 rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('rfq')}
            className={`py-3 relative cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'rfq'
                ? 'text-rose-600 dark:text-rose-400 font-bold'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Request Wholesale Quotation (RFQ)</span>
            {activeTab === 'rfq' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-600 dark:bg-rose-400 rounded-full" />
            )}
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {activeTab === 'specs' ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Left: 100% Contained Product Image */}
                <div className="md:col-span-5 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-xs relative aspect-square p-4 sm:p-6 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full w-auto h-auto object-contain drop-shadow-sm select-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-md font-medium">
                    Origin: {product.origin}
                  </div>
                </div>

                {/* Right: Key Details & Specs */}
                <div className="md:col-span-7 space-y-4">
                  <div>
                    <h3 id="modal-product-title" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Technical Packaging & Master Carton Specs Grid */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs space-y-2">
                    <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] pb-1 border-b border-slate-200/60 dark:border-slate-700">
                      B2B Trade & Logistics Specifications
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 dark:text-slate-300">
                      <div>
                        <span className="text-slate-400 dark:text-slate-500">Unit Packaging:</span>{' '}
                        <span className="font-semibold">{product.packaging}</span>
                      </div>
                      {product.casePack && (
                        <div>
                          <span className="text-slate-400 dark:text-slate-500">Case Pack:</span>{' '}
                          <span className="font-semibold">{product.casePack}</span>
                        </div>
                      )}
                      {product.shelfLife && (
                        <div>
                          <span className="text-slate-400 dark:text-slate-500">Shelf Life:</span>{' '}
                          <span className="font-semibold">{product.shelfLife}</span>
                        </div>
                      )}
                      {product.storageCondition && (
                        <div>
                          <span className="text-slate-400 dark:text-slate-500">Storage:</span>{' '}
                          <span className="font-semibold">{product.storageCondition}</span>
                        </div>
                      )}
                      {product.fdaRegNumber && (
                        <div className="sm:col-span-2 flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-semibold pt-1">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span>FDA Registration: {product.fdaRegNumber}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Key Quality Attributes
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Usage & Preparation Guide */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  <span>Consumer Preparation & Usage Instructions</span>
                </h4>
                <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-4 border border-slate-200/70 dark:border-slate-700/60">
                  <ol className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {product.usageInstructions.map((instruction, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 tabular-nums">
                          {index + 1}
                        </span>
                        <span className="leading-relaxed">{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Distribution Channels */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                  <span>Authorized Distribution Channels in Myanmar</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-lg p-3">
                  {product.availableChannels}
                </p>
              </div>
            </>
          ) : (
            /* Interactive RFQ Form */
            <div className="space-y-6">
              {rfqSubmitted ? (
                <div className="text-center py-10 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800 p-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Wholesale RFQ Submitted Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-md mx-auto">
                    Your inquiry for <strong className="text-slate-900 dark:text-white">{product.name}</strong> has been assigned reference code:
                  </p>
                  <div className="mt-3 inline-block px-4 py-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 font-mono font-bold text-rose-600 dark:text-rose-400 text-sm">
                    {rfqReference}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
                    Our commercial trade desk at Yangon Central Facility will contact you within 24 business hours with CIF/FOB pricing and lead-time schedules.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`mailto:${COMPANY_INFO.yangonOffice.email}?subject=Wholesale%20RFQ%20[${rfqReference}]:%20${encodeURIComponent(product.name)}&body=Buyer:%20${encodeURIComponent(buyerName)}%0D%0ACompany:%20${encodeURIComponent(companyName)}%0D%0APhone:%20${encodeURIComponent(buyerPhone)}%0D%0AOrder%20Volume:%20${orderVolume}%0D%0ADestination:%20${destination}%0D%0AIncoterm:%20${incoterm}`}
                      className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email Directly to Trade Desk</span>
                    </a>
                    <button
                      onClick={() => setRfqSubmitted(false)}
                      className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleRfqSubmit} className="space-y-4">
                  <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-rose-600 dark:text-rose-400 uppercase">Target Product</span>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">{product.name}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Pack: {product.packaging} · Origin: {product.origin}</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md text-slate-700 dark:text-slate-300">
                      B2B Direct
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Buyer / Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={buyerName}
                        onChange={(e) => setBuyerName(e.target.value)}
                        placeholder="e.g. U Myo Zaw"
                        className="w-full px-3 py-2 text-xs sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Company / Store Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Royal Mart Supermarket"
                        className="w-full px-3 py-2 text-xs sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={buyerEmail}
                        onChange={(e) => setBuyerEmail(e.target.value)}
                        placeholder="e.g. purchasing@company.com"
                        className="w-full px-3 py-2 text-xs sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Phone / Viber / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={buyerPhone}
                        onChange={(e) => setBuyerPhone(e.target.value)}
                        placeholder="+95 9..."
                        className="w-full px-3 py-2 text-xs sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Target Order Volume
                      </label>
                      <select
                        value={orderVolume}
                        onChange={(e) => setOrderVolume(e.target.value)}
                        className="w-full px-3 py-2 text-xs sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                      >
                        <option value="20_50_cartons">Sample / Trial Run (20–50 Master Cartons)</option>
                        <option value="100_cartons">Pallet Consignment (100 Cartons)</option>
                        <option value="300_cartons">Regional Distributor (300–500 Cartons)</option>
                        <option value="20ft_fcl">Full 20ft Container (800–1,200 Cartons)</option>
                        <option value="40ft_hq">Full 40ft HQ Container (1,800+ Cartons)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Delivery Destination Hub
                      </label>
                      <select
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full px-3 py-2 text-xs sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                      >
                        <option value="Yangon_Central">Yangon Central (Tharkayta Depot)</option>
                        <option value="Mandalay_Depot">Mandalay Upper Myanmar Depot</option>
                        <option value="Naypyidaw">Naypyidaw Metro</option>
                        <option value="Mawlamyine">Mawlamyine / Mon State</option>
                        <option value="Taunggyi">Taunggyi / Shan State</option>
                        <option value="Bangkok_EXW">Bangkok Staging (EXW / FOB Thailand)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Preferred Trade Incoterm
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      {[
                        { id: 'CIF_Yangon', label: 'CIF Yangon Port' },
                        { id: 'DDP_Myanmar', label: 'DDP Door-to-Door' },
                        { id: 'FOB_Bangkok', label: 'FOB Bangkok Port' },
                        { id: 'EXW_Bangkok', label: 'EXW Factory Floor' },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setIncoterm(item.id)}
                          className={`p-2 rounded-lg border text-center transition-all cursor-pointer ${
                            incoterm === item.id
                              ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 font-bold'
                              : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Additional Requirements / Special Notes
                    </label>
                    <textarea
                      rows={2}
                      value={inquiryNotes}
                      onChange={(e) => setInquiryNotes(e.target.value)}
                      placeholder="e.g. Required delivery schedule, label sticker requirements, payment terms..."
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveTab('specs')}
                      className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    >
                      Back to Specs
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-lg bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Official Quotation Request</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 sticky bottom-0 z-10">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close
          </button>

          <div className="flex items-center gap-3">
            {activeTab === 'specs' ? (
              <button
                type="button"
                onClick={() => setActiveTab('rfq')}
                className="px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-rose-600 hover:bg-rose-500 active:bg-rose-700 rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Request Quotation</span>
              </button>
            ) : (
              <a
                href={`mailto:${COMPANY_INFO.yangonOffice.email}?subject=Product%20Inquiry:%20${encodeURIComponent(product.name)}`}
                className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                <span>Email Trade Desk</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
