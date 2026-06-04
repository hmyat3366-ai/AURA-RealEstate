import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-agency-light-gray pt-20 pb-8 px-8 text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12 border-b border-gray-200 pb-20">
        <div className="lg:col-span-1">
          <Link to="/" className="bg-agency-navy w-24 h-24 rounded-lg flex items-center justify-center hover:scale-105 transition-transform overflow-hidden">
            <img src="/aura-logo-transparent.png" alt="AURA Logo" className="w-16 h-16 object-contain" />
          </Link>
        </div>
        <div>
          <h4 className="font-serif text-xl mb-6">AURA Real Estate</h4>
          <ul className="space-y-3 text-xs font-medium text-gray-500">
            <li><Link className="hover:text-agency-navy" to="/about">About Us</Link></li>
            <li><Link className="hover:text-agency-navy" to="/">Magazine</Link></li>
            <li><Link className="hover:text-agency-navy" to="/">Art House</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-xl mb-6">Resources</h4>
          <ul className="space-y-3 text-[10px] font-bold tracking-widest uppercase text-gray-500">
            <li><Link className="hover:text-agency-navy" to="/properties">Buy</Link></li>
            <li><Link className="hover:text-agency-navy" to="/services">Sell</Link></li>
            <li><Link className="hover:text-agency-navy" to="/properties-grid">Rent</Link></li>
            <li><Link className="hover:text-agency-navy" to="/agents">Agent</Link></li>
            <li><Link className="hover:text-agency-navy" to="/regions">Region</Link></li>
            <li><Link className="hover:text-agency-navy" to="/specialized-services">Service</Link></li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h4 className="font-serif text-xl mb-2">Get In Touch</h4>
          <Link className="text-sm font-bold border-b border-agency-navy pb-1" to="/contact">Contact Form ——&gt;</Link>
          <div className="mt-10">
            <h4 className="font-serif text-xl mb-6">The most followed real estate brand</h4>
            <div className="flex gap-4">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=100&h=100&fit=crop" alt="Instagram 1" className="w-12 h-12 rounded-full object-cover shadow-sm hover:scale-110 transition-transform cursor-pointer" />
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&h=100&fit=crop" alt="Instagram 2" className="w-12 h-12 rounded-full object-cover shadow-sm hover:scale-110 transition-transform cursor-pointer" />
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=100&h=100&fit=crop" alt="Instagram 3" className="w-12 h-12 rounded-full object-cover shadow-sm hover:scale-110 transition-transform cursor-pointer" />
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=100&h=100&fit=crop" alt="Instagram 4" className="w-12 h-12 rounded-full object-cover shadow-sm hover:scale-110 transition-transform cursor-pointer" />
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=100&h=100&fit=crop" alt="Instagram 5" className="w-12 h-12 rounded-full object-cover shadow-sm hover:scale-110 transition-transform cursor-pointer" />
            </div>
          </div>
          <div className="mt-10">
            <h4 className="font-serif text-xl mb-2">Join The Club</h4>
            <p className="text-xs text-gray-500 mb-4">Always be the first to know, sign up for our weekly newsletter</p>
            <div className="relative w-full max-w-md">
              <input className="w-full bg-transparent border-t-0 border-x-0 border-b border-gray-300 py-3 text-xs focus:ring-0 focus:border-agency-navy" placeholder="Enter a emailaddress" type="email" />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400">——&gt;</button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-8 text-[9px] uppercase tracking-wider text-center text-agency-navy/60">
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <Link to="/">Terms of Use</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Quebec Privacy policy (Law 25)</Link>
          <Link to="/">CCPA</Link>
          <Link to="/">DMCA Accessibility</Link>
        </div>
      </div>
      <div className="bg-agency-navy text-white py-12 px-8 -mx-8 -mb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-[10px] leading-relaxed opacity-60">
          <div className="space-y-4">
            <p>New York State Fair Housing Notice New York State Standard Operating Procedures NYC - LONG ISLAND - BROOKLYN New York State Notice of Reasonable Accommodations for Persons with Disabilities</p>
            <p>Texas Real Estate Commission Information About Brokerage Services Texas Real Estate Commission Consumer Protection Notice</p>
            <p className="pt-4">Search by: LocationIQ.com<br />Livro de Reclamações<br />Resolução de Litígios</p>
            <p>© 2026 AURA Real Estate, LLC. AURA Real Estate and the AURA logo are registered trademarks. All rights reserved.</p>
          </div>
          <div className="space-y-4">
            <p>AURA Real Estate fully supports the Equal Housing Opportunity laws. AURA Real Estate and its parents, affiliates, subsidiaries, franchisees of its affiliates, and network partners make no representations, warranties, or guarantees as to the accuracy of the information contained herein, including square footage, lot size or other information concerning the condition, suitability or features of the property. All material is intended for informational purposes only and has been obtained from public records, MLS, or other sources believed to be reliable, but not verified. All prospective buyers should conduct a careful, independent investigation of the information and property, and consult with appropriate professionals, such as appraisers, architects, civil engineers, etc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
