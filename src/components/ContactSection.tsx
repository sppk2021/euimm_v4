import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Building2, Send, CheckCircle2, MessageSquare, Copy, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interestType, setInterestType] = useState('wholesale_purchase');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `EUI-B2B-${Date.now().toString().slice(-6)}`;
    setTicketId(id);
    setIsSubmitted(true);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(COMPANY_INFO.yangonOffice.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
            Commercial Trade Desk & Facilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight text-balance">
            Connect With Excel United International
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed text-pretty">
            Connect directly with our logistics hubs and commercial trade desks in Yangon and Bangkok for FMCG wholesale orders, regional distribution partnerships, and brand principal representation.
          </p>
        </div>

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Yangon Central Facility */}
          <div className="bg-slate-50 dark:bg-slate-900/90 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-5">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                Central Operations Hub
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                Yangon Central Facility
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {COMPANY_INFO.yangonOffice.address}
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-200/70 dark:border-slate-800">
              <a
                href="https://maps.google.com/?q=Tharkayta+Industrial+Zone+Yangon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Phone Direct */}
          <div className="bg-slate-50 dark:bg-slate-900/90 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-5">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                Telephone & Direct Lines
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                Myanmar Trade Desk Line
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Yangon Sales, Logistics & Dispatch
              </p>
              <a
                href={`tel:${COMPANY_INFO.yangonOffice.phoneRaw}`}
                className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white hover:text-rose-600 dark:hover:text-rose-400 transition-colors mt-3 block tabular-nums whitespace-nowrap"
              >
                {COMPANY_INFO.yangonOffice.phone}
              </a>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between">
              <button
                type="button"
                onClick={handleCopyPhone}
                className="text-xs font-bold text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 flex items-center gap-1.5 cursor-pointer"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPhone ? 'Copied Number' : 'Copy Phone Number'}</span>
              </button>
            </div>
          </div>

          {/* Card 3: Email Communications */}
          <div className="bg-slate-50 dark:bg-slate-900/90 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Corporate Inquiries
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                Official Email Desk
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Wholesale quotes, principal representation & contracts
              </p>
              <a
                href={`mailto:${COMPANY_INFO.yangonOffice.email}`}
                className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-rose-600 dark:hover:text-rose-400 transition-colors mt-3 block break-all"
              >
                {COMPANY_INFO.yangonOffice.email}
              </a>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-200/70 dark:border-slate-800">
              <a
                href={`mailto:${COMPANY_INFO.yangonOffice.email}?subject=Commercial%20Trade%20Inquiry%20-%20Excel%20United%20International`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
              >
                <span>Compose Trade Email</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive B2B Wholesale & Partnership Inquiry Form */}
        <div className="bg-slate-50 dark:bg-slate-900/90 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-md mb-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
              Online Commercial Desk
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Send a Wholesale or Distribution Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Complete the inquiry form below for official price lists, minimum order quantities (MOQ), and dealership conditions.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-12 bg-white dark:bg-slate-800/80 rounded-2xl border border-emerald-200 dark:border-emerald-800 p-6">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Inquiry Received by EUI Trade Operations
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-md mx-auto">
                Thank you, <strong className="text-slate-900 dark:text-white">{name}</strong> ({company}). Your inquiry reference number is:
              </p>
              <div className="mt-3 inline-block px-4 py-2 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 font-mono font-bold text-rose-600 dark:text-rose-400 text-sm">
                {ticketId}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-3">
                A sales account representative from our Yangon or Bangkok office will reach out shortly.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${COMPANY_INFO.yangonOffice.email}?subject=Commercial%20Inquiry%20[${ticketId}]&body=Hello%20EUI%20Trade%20Desk,%0D%0A%0D%0AI%20submitted%20inquiry%20${ticketId}.`}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Immediate Email Follow-up</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  Submit Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Daw Khin Sandar"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Myanmar Retail Mart Co."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Corporate Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. trade@company.com"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Phone Number / Viber *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+95 9..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Type of Partnership / Inquiry
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'wholesale_purchase', label: 'Wholesale Purchase / Retail Supply' },
                    { id: 'regional_distribution', label: 'Regional Distributorship Dealership' },
                    { id: 'principal_representation', label: 'Brand Principal Representation' },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setInterestType(item.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        interestType === item.id
                          ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 font-bold'
                          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Message Details / Products of Interest *
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Specify target products, required quantity or carton volume, delivery city, or partnership proposal..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-rose-600 hover:bg-slate-800 dark:hover:bg-rose-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry to Commercial Desk</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Operating Hours & Bangkok HQ Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Bangkok Headquarters Note */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-900/90 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Corporate Headquarters
              </span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                Bangkok, Thailand
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                {COMPANY_INFO.bangkokOffice.role}. Direct manufacturer procurement, export quality inspection, and international vendor contracts.
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-900/90 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Office Hours
              </span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                Monday – Saturday
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                8:30 AM – 5:30 PM (Yangon Time, MMT, UTC+6:30)
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Closed on Sundays and Myanmar Public Holidays
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Icon Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
            Official EUI Digital Channels:
          </span>
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href={COMPANY_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-rose-600 hover:text-white dark:hover:bg-rose-600 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a
              href={COMPANY_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-rose-600 hover:text-white dark:hover:bg-rose-600 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href={COMPANY_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-rose-600 hover:text-white dark:hover:bg-rose-600 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
