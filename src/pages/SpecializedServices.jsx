import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SpecializedServices = () => {
  return (
    <>

<Navbar />
{/*  BEGIN: HeroSection  */}
<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
{/*  Hero Background Image  */}
<div className="absolute inset-0 z-0">
<img alt="Service Hero" className="w-full h-full object-cover" src="/service-hero.png"/>
<div className="absolute inset-0 bg-black/40"></div>
</div>
{/*  Hero Text  */}
<div className="relative z-10 text-center px-4">
<h1 className="serif-heading text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-tight drop-shadow-lg">
        Premium Services for Buyers & Sellers
      </h1>
</div>
</section>
{/*  END: HeroSection  */}
{/*  BEGIN: IntroductionSection  */}
<section className="py-24 px-8 bg-gray-50" data-purpose="intro-text">
  <div className="max-w-4xl mx-auto text-center mb-20">
    <h2 className="text-sm font-bold tracking-widest uppercase text-agency-gold mb-4">Our Expertise</h2>
    <h3 className="text-4xl md:text-5xl font-serif font-bold text-agency-navy mb-8 leading-tight">
      AURA Real Estate Services <br/>for Buyers & Sellers
    </h3>
    <p className="text-gray-600 text-lg leading-relaxed">
      The Agency has curated a family of real estate Core Service providers to offer everything you need during the home buying and selling journey. Enjoy expert guidance and exceptional service before, during, and long after the transaction.
    </p>
  </div>
{/*  END: IntroductionSection  */}
{/*  BEGIN: ServicesGrid  */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/*  Card 1: Acquisition  */}
    <Link to="/contact" className="group relative h-[500px] rounded-2xl overflow-hidden shadow-2xl block">
      <img 
        alt="Acquisition Advisory" 
        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-agency-navy via-agency-navy/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
        <h4 className="text-agency-gold font-bold uppercase tracking-wider text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Advisory</h4>
        <h3 className="text-3xl font-serif font-bold text-white mb-4">Acquisition</h3>
        <p className="text-white/80 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-3">
          Personalized guidance to acquire carefully curated luxury properties based on your lifestyle, budget, and long-term value.
        </p>
        <span className="inline-flex items-center text-agency-gold font-semibold text-sm uppercase tracking-wider">
          Learn More <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </span>
      </div>
    </Link>

    {/*  Card 2: Sale  */}
    <Link to="/contact" className="group relative h-[500px] rounded-2xl overflow-hidden shadow-2xl block">
      <img 
        alt="Sale Advisory" 
        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-agency-navy via-agency-navy/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
        <h4 className="text-agency-gold font-bold uppercase tracking-wider text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Advisory</h4>
        <h3 className="text-3xl font-serif font-bold text-white mb-4">Sale</h3>
        <p className="text-white/80 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-3">
          Strategic advisory and premium marketing designed to maximize the value and positioning of your luxury property.
        </p>
        <span className="inline-flex items-center text-agency-gold font-semibold text-sm uppercase tracking-wider">
          Learn More <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </span>
      </div>
    </Link>

    {/*  Card 3: Leasing  */}
    <Link to="/contact" className="group relative h-[500px] rounded-2xl overflow-hidden shadow-2xl block">
      <img 
        alt="Leasing Advisory" 
        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
        src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-agency-navy via-agency-navy/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
        <h4 className="text-agency-gold font-bold uppercase tracking-wider text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Advisory</h4>
        <h3 className="text-3xl font-serif font-bold text-white mb-4">Leasing</h3>
        <p className="text-white/80 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-3">
          Discreet and professional leasing solutions for luxury residential and commercial properties, serving local and expatriate clients.
        </p>
        <span className="inline-flex items-center text-agency-gold font-semibold text-sm uppercase tracking-wider">
          Learn More <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </span>
      </div>
    </Link>
  </div>
</section>
{/*  END: ServicesGrid  */}

{/*  BEGIN: OffMarketListings  */}
<section className="py-20 px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-agency-navy mb-4">Off-Market & Exclusive Listings</h2>
        <p className="text-lg text-gray-600">
          Discover our private portfolio of ultra-luxury properties that are not available on the public market.
        </p>
      </div>
      <Link to="/contact" className="mt-6 md:mt-0 text-agency-gold font-bold uppercase tracking-wider hover:underline flex items-center">
        Request VIP Access <span className="ml-2">→</span>
      </Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative h-80 rounded-2xl overflow-hidden group">
        <div className="absolute inset-0 bg-agency-navy/80 flex items-center justify-center z-10">
          <div className="text-center text-white">
            <svg className="w-12 h-12 mx-auto mb-4 text-agency-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            <h3 className="text-2xl font-serif font-bold mb-2">Private Estate, Miami</h3>
            <p className="text-sm uppercase tracking-wider text-agency-gold">Off-Market</p>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1000" alt="Private Estate" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 blur-[2px] group-hover:blur-none" />
      </div>
      <div className="relative h-80 rounded-2xl overflow-hidden group">
        <div className="absolute inset-0 bg-agency-navy/80 flex items-center justify-center z-10">
          <div className="text-center text-white">
            <svg className="w-12 h-12 mx-auto mb-4 text-agency-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            <h3 className="text-2xl font-serif font-bold mb-2">Penthouse, Brooklyn</h3>
            <p className="text-sm uppercase tracking-wider text-agency-gold">Off-Market</p>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000" alt="Penthouse" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 blur-[2px] group-hover:blur-none" />
      </div>
    </div>
  </div>
</section>
{/*  END: OffMarketListings  */}

{/*  BEGIN: AdvisoryTeam  */}
<section className="py-24 px-8 bg-white border-t border-gray-100">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-agency-navy mb-4">The Aura Advisory Team</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Meet the experts behind our unparalleled service and luxury market dominance.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="text-center group">
        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-gray-50 shadow-lg group-hover:border-agency-gold transition-colors duration-300">
          <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Agent" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-agency-navy mb-2">Eleanor Vance</h3>
        <p className="text-sm font-bold uppercase tracking-wider text-agency-gold mb-3">Head of Acquisitions</p>
        <p className="text-gray-600 text-sm px-4">Specializing in ultra-luxury waterfront properties and discreet celebrity transactions.</p>
      </div>
      <div className="text-center group">
        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-gray-50 shadow-lg group-hover:border-agency-gold transition-colors duration-300">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Agent" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-agency-navy mb-2">Marcus Chen</h3>
        <p className="text-sm font-bold uppercase tracking-wider text-agency-gold mb-3">Director of Global Sales</p>
        <p className="text-gray-600 text-sm px-4">Connecting local sellers with an elite network of international buyers.</p>
      </div>
      <div className="text-center group">
        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-gray-50 shadow-lg group-hover:border-agency-gold transition-colors duration-300">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Agent" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-agency-navy mb-2">Sarah Jenkins</h3>
        <p className="text-sm font-bold uppercase tracking-wider text-agency-gold mb-3">Luxury Leasing Specialist</p>
        <p className="text-gray-600 text-sm px-4">Expert in securing premium long-term and seasonal leases for high-net-worth clients.</p>
      </div>
    </div>
  </div>
</section>
{/*  END: AdvisoryTeam  */}

{/*  BEGIN: MarketInsights  */}
<section className="py-24 px-8 bg-agency-navy text-white relative overflow-hidden">
  <div className="absolute top-0 right-0 w-1/2 h-full bg-agency-gold/10 transform skew-x-12 translate-x-32"></div>
  <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between">
    <div className="md:w-1/2 mb-10 md:mb-0">
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-agency-gold mb-6">Q3 2026 Luxury Market Report</h2>
      <p className="text-white/80 text-lg leading-relaxed mb-8">
        Gain an edge in your real estate journey with our exclusive insights. Discover pricing trends, neighborhood forecasts, and the latest data from the luxury sector.
      </p>
      <button className="flex items-center gap-3 bg-white text-agency-navy px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-agency-gold hover:text-white transition-colors">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
        Download Full Report
      </button>
    </div>
    <div className="md:w-5/12 bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-md">
      <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-4">Key Takeaways</h3>
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <span className="text-agency-gold font-bold">01.</span>
          <span className="text-white/90">Waterfront property values increased by 12.4% year-over-year.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-agency-gold font-bold">02.</span>
          <span className="text-white/90">International buyer inquiries surged by 35% in coastal regions.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-agency-gold font-bold">03.</span>
          <span className="text-white/90">Average days on market for ultra-luxury homes decreased to 45 days.</span>
        </li>
      </ul>
    </div>
  </div>
</section>
{/*  END: MarketInsights  */}

{/*  BEGIN: GlobalReachMap  */}
<section className="py-24 px-8 bg-gray-50 overflow-hidden relative">
  <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
    <h2 className="text-4xl md:text-5xl font-serif font-bold text-agency-navy mb-4">Our Global Reach</h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      From the sun-drenched coasts of Miami to the rugged beauty of Alaska, Aura’s luxury services span the nation's most coveted markets.
    </p>
  </div>
  <div className="max-w-5xl mx-auto relative h-96 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex items-center justify-center bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Blank_US_Map_%28states_only%29.svg/1024px-Blank_US_Map_%28states_only%29.svg.png')] bg-no-repeat bg-center bg-cover opacity-80">
    <div className="absolute inset-0 bg-agency-navy/5 backdrop-blur-[1px]"></div>
    
    {/* Map Pins */}
    <div className="absolute top-[30%] left-[20%] group cursor-pointer">
      <div className="w-4 h-4 bg-agency-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)] animate-pulse"></div>
      <div className="absolute top-6 -left-10 bg-agency-navy text-white text-xs font-bold py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Los Angeles, CA</div>
    </div>
    
    <div className="absolute top-[75%] left-[80%] group cursor-pointer">
      <div className="w-4 h-4 bg-agency-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)] animate-pulse"></div>
      <div className="absolute top-6 -left-6 bg-agency-navy text-white text-xs font-bold py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Miami, FL</div>
    </div>

    <div className="absolute top-[40%] left-[85%] group cursor-pointer">
      <div className="w-5 h-5 bg-agency-navy border-2 border-agency-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)] z-10"></div>
      <div className="absolute top-8 -left-8 bg-agency-navy text-agency-gold text-sm font-bold py-1 px-3 rounded opacity-100 whitespace-nowrap shadow-lg">New York, NY</div>
    </div>
    
    <div className="absolute top-[80%] left-[45%] group cursor-pointer">
      <div className="w-4 h-4 bg-agency-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)] animate-pulse"></div>
      <div className="absolute top-6 -left-6 bg-agency-navy text-white text-xs font-bold py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Dallas, TX</div>
    </div>
  </div>
</section>
{/*  END: GlobalReachMap  */}

{/*  BEGIN: FAQ  */}
<section className="py-24 px-8 bg-white">
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-agency-navy mb-4">Frequently Asked Questions</h2>
      <p className="text-lg text-gray-600">Everything you need to know about our premium real estate services.</p>
    </div>
    <div className="space-y-6">
      <div className="border border-gray-200 rounded-xl p-6 hover:border-agency-gold transition-colors">
        <h3 className="text-xl font-bold text-agency-navy mb-3">How does the luxury home valuation differ from a standard appraisal?</h3>
        <p className="text-gray-600 leading-relaxed">Our valuation incorporates ultra-luxury market specifics, including architectural pedigree, historical significance, bespoke amenities, and off-market comparables that standard algorithms often miss.</p>
      </div>
      <div className="border border-gray-200 rounded-xl p-6 hover:border-agency-gold transition-colors">
        <h3 className="text-xl font-bold text-agency-navy mb-3">Do you facilitate international transactions?</h3>
        <p className="text-gray-600 leading-relaxed">Yes. Our Global Sales Team and legal partners are experts in cross-border transactions, managing everything from foreign currency transfers to complex tax structuring for non-resident buyers.</p>
      </div>
      <div className="border border-gray-200 rounded-xl p-6 hover:border-agency-gold transition-colors">
        <h3 className="text-xl font-bold text-agency-navy mb-3">What is included in the premium marketing launch?</h3>
        <p className="text-gray-600 leading-relaxed">We provide architectural photography, 4K cinematic drone tours, custom property websites, and placements in elite publications like Art House Magazine and global luxury networks.</p>
      </div>
    </div>
  </div>
</section>
{/*  END: FAQ  */}
{/*  BEGIN: FooterNavigation  */}
<Footer />
{/*  END: FooterNavigation  */}
{/*  BEGIN: LegalFooter  */}
<section className="bg-aura-dark-navy py-12 px-8 text-white">
<div className="max-w-7xl mx-auto">
{/*  Top Links  */}
<div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 text-[11px] tracking-wide text-aura-gold/80 font-medium">
<Link className="hover:text-white transition-colors" to="/">Terms of Use</Link>
<Link className="hover:text-white transition-colors" to="/">Privacy Policy</Link>
<Link className="hover:text-white transition-colors" to="/">Quebec Privacy policy (Law 25)</Link>
<Link className="hover:text-white transition-colors" to="/">CCPA</Link>
<Link className="hover:text-white transition-colors" to="/">DMCA</Link>
<Link className="hover:text-white transition-colors" to="/">Accessibility</Link>
</div>
{/*  Legal Fine Print  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 legal-text text-white/60">
<div>
<p className="mb-4">
            New York State Fair Housing Notice New York State Standard Operating Procedures 
            <Link className="text-aura-gold hover:underline" to="/">NYC</Link> - 
            LONG ISLAND - BROOKLYN New York State Notice of Reasonable Accommodations for Persons With Disabilities<br/>
            Texas Real Estate Commission Information About Brokerage Services Texas Real Estate Commission Consumer Protection Notice
          </p>
<p className="mb-4 text-aura-gold font-medium">
            Search by: LocationIQ.com<br/>
            Livro de Reclamações<br/>
            Resolução de Litígios
          </p>
<p>
            © 2025 The Agency IP Holdco, LLC. The Agency and The Agency logo are registered trademarks of The Agency IP Holdco, LLC under license to its parents and affiliates. All rights in such marks are reserved by The Agency IP Holdco, LLC.
          </p>
</div>
<div>
<p className="text-aura-gold font-medium italic">
            The Agency fully supports the Equal Housing Opportunity laws. The Agency IP Holdco, LLC and its parents, affiliates, subsidiaries, franchisees of its affiliates, and network partners make no representations, warranties, or guarantees as to the accuracy of the information contained herein, including square footage, lot size or other information concerning the condition, suitability or features of the property. All material is intended for informational purposes only and has been obtained from public records, MLS, or other sources believed to be reliable, but not verified. All prospective buyers should conduct a careful, independent investigation of the information and property, and consult with appropriate professionals, such as appraisers, architects, civil engineers, etc. CalDRE #01904054
          </p>
</div>
</div>
</div>
</section>
{/*  END: LegalFooter  */}

    </>
  );
};

export default SpecializedServices;
