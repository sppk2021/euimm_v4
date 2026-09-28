import React, { useState } from 'react';
import { MapPin, Phone, Mail, ArrowUpRight, Check, Copy } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

interface FooterProps {
  onNavigate?: (pageId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.yangonOffice.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { label: 'Products Catalog', id: 'products' },
    { label: 'What We Do', id: 'capabilities' },
    { label: 'Corporate Heritage', id: 'about' },
    { label: 'Distribution Map', id: 'network' },
    { label: 'Partner Inquiries', id: 'contact' },
  ];

  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-16 pb-12 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Contact Bar matching 0:18 in reference video */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-10 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-1">
              Direct B2B Inquiries
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Contact Us
            </h3>
          </div>

          {/* Click to Copy / Email Pill matching video */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 transition-all text-sm font-bold text-slate-900 dark:text-white cursor-pointer group"
          >
            <Mail className="w-4 h-4 text-slate-500 group-hover:text-rose-600 transition-colors" />
            <span>{COMPANY_INFO.yangonOffice.email}</span>
            {copied ? (
              <span className="flex items-center gap-1 text-emerald-600 text-xs font-semibold">
                <Check className="w-3.5 h-3.5" />
                Copied!
              </span>
            ) : (
              <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600" />
            )}
          </button>
        </div>

        {/* Center Grid: Giant Wordmark + Nav Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Big Wordmark & Corporate Mission (col-span-6) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              ExcelUnited<span className="text-rose-600">.com</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Excel United International Co., Ltd. (EUI) is an authorized import-export enterprise headquartered in Bangkok with nationwide cold-chain warehousing and FMCG distribution operations across Myanmar.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 pt-2">
              <span>Bangkok HQ</span>
              <span>·</span>
              <span>Yangon Logistics Depot</span>
              <span>·</span>
              <span>500+ Retail Partners</span>
            </div>
          </div>

          {/* Quick Links Column (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Sitemap
            </div>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  {onNavigate ? (
                    <button
                      onClick={() => onNavigate(link.id)}
                      className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <span className="text-slate-600 dark:text-slate-400">{link.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Hubs & Contact (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Operating Centers
            </div>
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <div>
                <strong className="block text-slate-900 dark:text-white font-semibold">Myanmar Operations Hub:</strong>
                <span>Yan Naing Swe (2) St, Tharkayta Industrial Zone, Yangon</span>
              </div>
              <div className="pt-1">
                <strong className="block text-slate-900 dark:text-white font-semibold">Hotline:</strong>
                <span>{COMPANY_INFO.yangonOffice.phone}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Excel United International Co., Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>FDA Registration Guaranteed</span>
            <span>·</span>
            <span>Temperature Controlled Logistics</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
