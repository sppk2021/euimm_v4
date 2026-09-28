import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export const InteractiveTestimonials: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        'Excel United has been our primary import partner for Thai consumer foods for over eight years. Their consistency in cold-chain logistics and flawless FDA clearance have eliminated stockouts across our Yangon and Mandalay hypermarkets.',
      author: 'U Kyaw Min',
      role: 'Head of FMCG Procurement',
      company: 'City Mart Supermarket Group',
      avatarText: 'KM',
      rating: 5,
    },
    {
      id: 2,
      quote:
        'Finding an import partner who handles full customs documentation, phytosanitary inspections, and door-to-door store delivery is rare. EUI’s Tharkayta facility gives us unmatched peace of mind during seasonal peak volumes.',
      author: 'Daw Thida Aye',
      role: 'Commercial Merchandising Director',
      company: 'Ocean Supercenters Myanmar',
      avatarText: 'TA',
      rating: 5,
    },
    {
      id: 3,
      quote:
        'As a Bangkok-based manufacturer, expanding into Myanmar seemed daunting until we partnered with Excel United. Within six months, our products were on shelves in over 400 retail locations with full compliance.',
      author: 'Somchai Prasert',
      role: 'VP of International Export',
      company: 'Thai Premium Foods & Care Co.',
      avatarText: 'SP',
      rating: 5,
    },
  ];

  const totalPages = testimonials.length;

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header with Pagination matching 0:15 in reference video */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 dark:border-slate-800 pb-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-1">
              Verified Partner Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Testimonials
            </h2>
          </div>

          {/* Pagination Controls & Counter matching video */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-mono font-bold text-slate-500 tabular-nums">
              0{currentPage + 1} / 0{totalPages}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 3-Card Testimonial Grid matching video styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => {
            const isFeatured = idx === currentPage;
            return (
              <div
                key={item.id}
                onClick={() => setCurrentPage(idx)}
                className={`rounded-[2rem] p-7 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isFeatured
                    ? 'bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-[#F6EB14] shadow-xl scale-[1.02]'
                    : 'bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-slate-400'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-slate-300 dark:text-slate-700" />
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-bold text-xs text-slate-900 dark:text-white shrink-0">
                    {item.avatarText}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      {item.author}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      {item.role} · <strong className="font-semibold text-slate-700 dark:text-slate-300">{item.company}</strong>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
