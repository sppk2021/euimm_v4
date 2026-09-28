import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  currentPage: string;
  onNavigate: (pageId: string) => void;
}

const PAGE_LABELS: Record<string, string> = {
  home: 'Home',
  products: 'Certified Products',
  capabilities: 'What We Do',
  about: 'About Us',
  network: 'Distribution Network',
  contact: 'Contact',
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage, onNavigate }) => {
  if (currentPage === 'home') return null;

  return (
    <div className="bg-slate-100/70 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800 py-3 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm transition-colors">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-600 dark:text-slate-400">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1 hover:text-rose-600 dark:hover:text-rose-400 transition-colors font-medium cursor-pointer"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="font-semibold text-slate-900 dark:text-white">
          {PAGE_LABELS[currentPage] || currentPage}
        </span>
      </div>
    </div>
  );
};
