import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RealEstateServices = () => {
  return (
    <>

<Navbar />
{/*  BEGIN: HeroSection  */}
<section className="relative h-[600px] flex items-center px-12 overflow-hidden" data-purpose="hero-banner">
{/*  Hero Background Image  */}
<img alt="Real Estate Services" className="absolute inset-0 w-full h-full object-cover" src="/service-hero.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<div className="relative z-10 max-w-4xl">
<h1 className="text-white text-5xl md:text-7xl font-serif font-bold leading-tight">
        Expert Real Estate Advisory
      </h1>
</div>
</section>
{/*  END: HeroSection  */}
{/*  BEGIN: MainIntroduction  */}
<section className="max-w-7xl mx-auto px-8 py-20" data-purpose="introduction-text">
<h2 className="text-navy text-4xl md:text-5xl font-medium mb-8">
      AURA Real Estate Services for Buyers &amp; Sellers
    </h2>
<div className="max-w-6xl text-gray-700 text-lg leading-relaxed">
<p>
        Curated Real Estate Services for Buyers &amp; Sellers. The Agency has curated a family of real estate Core Service providers to offer everything you need during the home buying and selling journey. Enjoy expert guidance and exceptional service before, during and long after the transaction. Explore our Core Service partners specializing in relocation, escrow, mortgages, insurance, and more.
      </p>
</div>
</section>
{/*  END: MainIntroduction  */}

{/*  BEGIN: HomeValuation  */}
<section className="bg-agency-navy text-white py-24 px-8" data-purpose="home-valuation">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-agency-gold">Instant Home Valuation</h2>
    <p className="text-lg md:text-xl text-white/80 font-light mb-10">
      Enter your address to receive an instant, AI-driven estimated value of your property, backed by Aura's luxury market data.
    </p>
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
      <input 
        type="text" 
        placeholder="Enter your property address..." 
        className="w-full md:w-2/3 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-agency-gold shadow-lg"
      />
      <button className="w-full md:w-auto px-8 py-4 rounded-full bg-agency-gold text-agency-navy font-bold uppercase tracking-wider hover:bg-white transition-colors shadow-lg">
        Get Estimate
      </button>
    </div>
    <p className="text-sm text-white/60 mt-6 italic">
      For a precise valuation, <Link to="/contact" className="underline text-agency-gold hover:text-white">connect with a local expert</Link>.
    </p>
  </div>
</section>
{/*  END: HomeValuation  */}
{/*  BEGIN: ServiceCards  */}
<section className="max-w-7xl mx-auto px-8 pb-24" data-purpose="services-grid">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Card 1  */}
<Link to="/contact" className="group bg-agency-navy rounded-lg overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
  <div className="relative overflow-hidden h-48">
    <img alt="Acquisition" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhIY5N0OEqYXdAIlsz9kZjAOU9MDmyOSL-VAtd9KxCz3XONSxwQ_vsSHnUp7p7tkwXyqI2OpvTz0zixqww7MQL97Wh_rLrwmNAUoW3KORGFUk5ZcXgy2vKmF7MuEoK2FqBBKYENJ60Gy4VJKq4wgw5wGbaEA37cmXT7YLnzaUpnrpr8fb_sE-C-wu1K0Jh6KJPFsql32NhBUZvQVGeEkg_xcjswKtEN1yftynTSnLVPiwnQFkEoKwlyyc062-nbxMnU_Y1QYWgbAiH"/>
    <div className="absolute inset-0 bg-agency-navy/20 group-hover:bg-transparent transition-colors duration-300"></div>
  </div>
  <div className="p-8 flex-grow flex flex-col">
    <h3 className="text-agency-gold text-xl font-medium mb-4">Aura Luxury Property Acquisition Advisory</h3>
    <p className="text-white/80 text-sm leading-relaxed flex-grow">
      Personalized guidance to acquire carefully curated luxury properties based on your lifestyle, budget, and long-term value.
    </p>
    <div className="mt-6 flex items-center text-agency-gold text-sm font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
      Learn More <span className="ml-2">→</span>
    </div>
  </div>
</Link>
{/*  Card 2  */}
<Link to="/contact" className="group bg-agency-navy rounded-lg overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
  <div className="relative overflow-hidden h-48">
    <img alt="Sale" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDWiIhMobGMWRKZFU_jVP2FlQo_BIhQ0ElDfblLs81weu-aOQc0w-EY5fxzWlKda3tKw3OXRX8-RRqsn-7UPR-mgPJg73bIq5ZBOn9TDIoeFnNQQIT6cA35GWPiEsSIr8zmxDZ_0k4jhKhkhVA1QFHUb3AxOJEyIux2OAGVgJw4SkI-6aBXqeNGxQB41UQ7REkTxd3QyKUOaz7usTUsMZjups9LKOrdIEnIeHjGJnFTv4ALbaz1-XOXlbCdwV8e7DoGoOzKmU4gxH2"/>
    <div className="absolute inset-0 bg-agency-navy/20 group-hover:bg-transparent transition-colors duration-300"></div>
  </div>
  <div className="p-8 flex-grow flex flex-col">
    <h3 className="text-agency-gold text-xl font-medium mb-4">Aura Luxury Property Sale Advisory</h3>
    <p className="text-white/80 text-sm leading-relaxed flex-grow">
      Strategic advisory and premium marketing designed to maximize the value and positioning of your luxury property.
    </p>
    <div className="mt-6 flex items-center text-agency-gold text-sm font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
      Learn More <span className="ml-2">→</span>
    </div>
  </div>
</Link>
{/*  Card 3  */}
<Link to="/contact" className="group bg-agency-navy rounded-lg overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
  <div className="relative overflow-hidden h-48">
    <img alt="Leasing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmFb1L5tgxFIquL3qlIV4iLoIdxpBh3HrGUZNGf8QEwPoZvpNqFgj4nc34zkHAcjNXi3QomQ6P8t07y4A9D31GwqsxmBsmv7VV4Wm9wRAhEq45P0ZLhioqUfsD7IswKreDhEJkIUIb94NK0zXqtRWchJlZ-FfFERfiKLCo6ruF8YI5b6NW_1buQd7p7DVPuqnf5BlsjOMHxGc2U1rPCNLfLd-rmqwFFEzCh4McEby82awXXbSzRhQhP3ILm-Pj1mk2VR1LWv-Uo2Ba"/>
    <div className="absolute inset-0 bg-agency-navy/20 group-hover:bg-transparent transition-colors duration-300"></div>
  </div>
  <div className="p-8 flex-grow flex flex-col">
    <h3 className="text-agency-gold text-xl font-medium mb-4">Aura Luxury Property Leasing Advisory</h3>
    <p className="text-white/80 text-sm leading-relaxed flex-grow">
      Discreet and professional leasing solutions for luxury residential and commercial properties, serving local and expatriate clients.
    </p>
    <div className="mt-6 flex items-center text-agency-gold text-sm font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
      Learn More <span className="ml-2">→</span>
    </div>
  </div>
</Link>
</div>
</section>
{/*  END: ServiceCards  */}

{/*  BEGIN: CorePartners  */}
<section className="max-w-7xl mx-auto px-8 py-20 border-t border-gray-200">
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-serif font-bold text-agency-navy mb-4">Our Core Service Partners</h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      A curated network of top-tier professionals to ensure every aspect of your transaction is flawless.
    </p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="text-center p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-white">
      <div className="w-16 h-16 mx-auto bg-agency-navy/5 rounded-full flex items-center justify-center text-agency-navy mb-6">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>
      <h3 className="text-xl font-bold text-agency-navy mb-3">Mortgage & Financing</h3>
      <p className="text-sm text-gray-600">Bespoke financing solutions and exclusive rates tailored for luxury real estate acquisitions.</p>
    </div>
    <div className="text-center p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-white">
      <div className="w-16 h-16 mx-auto bg-agency-navy/5 rounded-full flex items-center justify-center text-agency-navy mb-6">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>
      <h3 className="text-xl font-bold text-agency-navy mb-3">Luxury Relocation</h3>
      <p className="text-sm text-gray-600">White-glove moving and relocation services spanning across Brooklyn, Miami, and Alaska.</p>
    </div>
    <div className="text-center p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-white">
      <div className="w-16 h-16 mx-auto bg-agency-navy/5 rounded-full flex items-center justify-center text-agency-navy mb-6">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
      </div>
      <h3 className="text-xl font-bold text-agency-navy mb-3">Insurance & Title</h3>
      <p className="text-sm text-gray-600">Comprehensive coverage and secure escrow services to protect your most valuable assets.</p>
    </div>
  </div>
</section>
{/*  END: CorePartners  */}

{/*  BEGIN: SellingProcess  */}
<section className="bg-gray-50 py-24 px-8" data-purpose="selling-process">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-agency-navy mb-4">The Aura Selling Process</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        A seamless, transparent, and globally-reaching strategy designed to maximize the value of your luxury property.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
      {/* Step 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm text-center relative z-10 border border-gray-100 hover:shadow-lg transition-shadow">
        <div className="w-16 h-16 bg-agency-navy text-agency-gold rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
        <h3 className="text-xl font-bold text-agency-navy mb-3">Consultation & Valuation</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          We begin with a precise, data-driven market analysis and a customized strategy tailored to your specific goals.
        </p>
      </div>
      {/* Step 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm text-center relative z-10 border border-gray-100 hover:shadow-lg transition-shadow">
        <div className="w-16 h-16 bg-agency-navy text-agency-gold rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
        <h3 className="text-xl font-bold text-agency-navy mb-3">Staging & Premium Media</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Elevating your property's appeal through professional staging, drone footage, and 3D virtual tours.
        </p>
      </div>
      {/* Step 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm text-center relative z-10 border border-gray-100 hover:shadow-lg transition-shadow">
        <div className="w-16 h-16 bg-agency-navy text-agency-gold rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
        <h3 className="text-xl font-bold text-agency-navy mb-3">Global Marketing Launch</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Your property is showcased to our international network and featured in premium publications like Art House Magazine.
        </p>
      </div>
      {/* Step 4 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm text-center relative z-10 border border-gray-100 hover:shadow-lg transition-shadow">
        <div className="w-16 h-16 bg-agency-navy text-agency-gold rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
        <h3 className="text-xl font-bold text-agency-navy mb-3">Negotiation & Closing</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Expert negotiation to secure the best terms, ensuring a smooth, transparent, and seamless closing process.
        </p>
      </div>
    </div>
  </div>
</section>
{/*  END: SellingProcess  */}

{/*  BEGIN: Testimonials  */}
<section className="py-24 px-8 bg-agency-navy text-white">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row gap-16 items-center">
      <div className="md:w-1/3">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-agency-gold mb-6">Client Success Stories</h2>
        <p className="text-white/80 text-lg leading-relaxed mb-8">
          Hear from our clients who have experienced the unparalleled Aura standard of service across our luxury markets.
        </p>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-agency-gold hover:text-agency-navy hover:border-agency-gold transition-colors">←</button>
          <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-agency-gold hover:text-agency-navy hover:border-agency-gold transition-colors">→</button>
        </div>
      </div>
      <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
          <div className="text-agency-gold text-4xl font-serif mb-4">"</div>
          <p className="text-white/90 italic leading-relaxed mb-6">
            "Aura's acquisition team found us the perfect waterfront property in Miami before it even hit the market. Their remote expertise made the entire out-of-state transaction seamless."
          </p>
          <div>
            <p className="font-bold text-agency-gold">Jonathan & Sarah</p>
            <p className="text-xs text-white/60 uppercase tracking-widest mt-1">Miami Buyers</p>
          </div>
        </div>
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
          <div className="text-agency-gold text-4xl font-serif mb-4">"</div>
          <p className="text-white/90 italic leading-relaxed mb-6">
            "Selling our Brooklyn loft through Aura was a revelation. Their premium media and global marketing strategy brought in an offer 15% above asking within a week."
          </p>
          <div>
            <p className="font-bold text-agency-gold">Michael T.</p>
            <p className="text-xs text-white/60 uppercase tracking-widest mt-1">Brooklyn Seller</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/*  END: Testimonials  */}

{/*  BEGIN: CTA  */}
<section className="bg-agency-gold py-20 px-8 text-center">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl md:text-5xl font-serif font-bold text-agency-navy mb-6">Ready to elevate your real estate experience?</h2>
    <p className="text-agency-navy/80 text-lg mb-10 font-medium">
      Whether you're looking to acquire, sell, or lease, our local experts are ready to guide you.
    </p>
    <Link to="/contact" className="inline-block bg-agency-navy text-white font-bold px-12 py-5 rounded-full uppercase tracking-wider hover:bg-white hover:text-agency-navy transition-colors shadow-xl">
      Schedule a Consultation
    </Link>
  </div>
</section>
{/*  END: CTA  */}
{/*  BEGIN: FooterLinksSection  */}
<Footer />
{/*  END: FooterLinksSection  */}
    </>
  );
};

export default RealEstateServices;
