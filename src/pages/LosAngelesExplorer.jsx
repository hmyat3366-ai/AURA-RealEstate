import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LosAngelesExplorer = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      {/*  BEGIN: RegionSelector  */}
      <section className="bg-white py-6 px-8 border-b">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4">
          <Link to="/neighborhoods/brooklyn">
            <button className="bg-agency-gray text-agency-navy px-6 py-3 rounded-md font-semibold text-sm hover:bg-gray-200 transition-colors">Brooklyn</button>
          </Link>
          <Link to="/neighborhoods/miami">
            <button className="bg-agency-gray text-agency-navy px-6 py-3 rounded-md font-semibold text-sm hover:bg-gray-200 transition-colors">Miami</button>
          </Link>
          <Link to="/neighborhoods/alaska">
            <button className="bg-agency-gray text-agency-navy px-6 py-3 rounded-md font-semibold text-sm hover:bg-gray-200 transition-colors">Alaska</button>
          </Link>
          <Link to="/neighborhoods/los-angeles">
            <button className="bg-agency-navy text-white px-6 py-3 rounded-md font-semibold text-sm">Los Angeles</button>
          </Link>
          <Link to="/neighborhoods/california">
            <button className="bg-agency-gray text-agency-navy px-6 py-3 rounded-md font-semibold text-sm hover:bg-gray-200 transition-colors">California</button>
          </Link>
          <Link to="/neighborhoods/texas">
            <button className="bg-agency-gray text-agency-navy px-6 py-3 rounded-md font-semibold text-sm hover:bg-gray-200 transition-colors">Texas</button>
          </Link>
          <div className="ml-auto">
            <Link to="/regions">
              <button className="bg-agency-navy text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-agency-gold transition-colors">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/*  END: RegionSelector  */}

      {/*  BEGIN: Back Button  */}
      <section className="max-w-7xl mx-auto px-8 py-4">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-agency-navy font-semibold hover:text-agency-gold transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back
        </button>
      </section>
      {/*  END: Back Button  */}

      {/*  BEGIN: HeroSection  */}
      <section className="relative h-[500px] overflow-hidden">
        <img alt="Los Angeles Skyline" className="w-full h-full object-cover" src="/region-la.jpg" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-8xl md:text-9xl font-bold tracking-tight select-none">Los Angeles</h1>
        </div>
      </section>
      {/*  END: HeroSection  */}

      {/*  BEGIN: MarketSnapshot  */}
      <section className="max-w-7xl mx-auto -mt-24 relative z-10 px-8 pb-20 text-agency-navy">
        <div className="bg-white rounded-xl shadow-2xl p-10 border border-gray-100">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2 text-agency-navy">Market Snapshot</h2>
            <p className="text-gray-500">Real-time real estate insights in the Los Angeles area</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg">
              <p className="text-gray-500 text-sm mb-2">Median Price</p>
              <p className="text-4xl font-bold mb-3 text-agency-navy">$1.1M</p>
              <p className="text-sm font-medium flex items-center gap-1 text-green-700">
                <svg className="h-4 w-4 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 10l7-7m0 0l7 7m-7-7v18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                +5.2% YoY
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <p className="text-gray-500 text-sm mb-2">Active Listings</p>
              <p className="text-4xl font-bold mb-3 text-agency-navy">4,800</p>
              <p className="text-sm font-medium flex items-center gap-1 text-blue-600">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Steady Demand
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <p className="text-gray-500 text-sm mb-2">Days On Market</p>
              <p className="text-4xl font-bold mb-3 text-agency-navy">45 Days</p>
              <p className="text-sm font-medium flex items-center gap-1 text-green-700">
                <svg className="h-4 w-4 rotate-[225deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 10l7-7m0 0l7 7m-7-7v18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                -3 days YoY
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*  END: MarketSnapshot  */}

      {/*  BEGIN: NeighborhoodExplorer  */}
      <section className="max-w-7xl mx-auto px-8 py-16 text-agency-navy">
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-4 text-agency-navy">Neighborhood Explorer</h2>
          <p className="text-gray-500 text-lg">Find the neighborhood that perfectly aligns with your vision and lifestyle in Los Angeles.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
            <div className="relative h-64">
              <img alt="Beverly Hills" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHDdiN_f-NocLtKyix4wLhqrnwqlrk3eKE2qO49rZJ3xoowNwQnH3b4qiTh4BpgsV7xymXf4H1m_8mpYsbgI5je6fOgG_W3JDWM-NYmqrHjSE6jyEsRdUa_9ldl0yspCQ-n1FBdHbSxdFarkBke-5ORjLhx00TL8_MAUnz4RBO567HIc-jgHw0EyhlDEmEgMzcnRxzZ2bZsW-A8JtgeAG_c9sL_2FBCzO4CmaKPYFbaxN27OL-MKaVzZescUC5aPE9SI50Ws8wXlol" />
              <span className="absolute top-4 left-4 bg-agency-navy/80 text-white text-[10px] px-3 py-1 rounded-sm uppercase tracking-widest">Ultra Luxury</span>
            </div>
            <div className="p-8 flex flex-col flex-grow text-agency-navy">
              <h3 className="text-2xl font-bold mb-4">BEVERLY HILLS</h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">Iconic estates, palm-lined streets, and world-class shopping on Rodeo Drive.</p>
              <div className="mt-auto">
                <Link to="/properties/13" className="block text-center w-full bg-agency-navy text-white py-3 rounded text-sm font-semibold tracking-wide hover:bg-agency-gold transition-colors">View Listings</Link>
              </div>
            </div>
          </article>
          <article className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
            <div className="relative h-64">
              <img alt="Santa Monica" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2U-OnAPOKY4VRGEBz0W1TffHlvS0iGsEdPeo1zYCWMcGnXCzFDnw-WtAHlSVJoEijg_bGteLExeHAGGmNd7h_dorlyOCmcfgtB6gtVaW_sOkPPe2T6BUdQ8_nKGT5VTMVDvYvqr0NZbIREfiBzwrfWcW3UpuBhIy7hkZOmH438ORjBN94umQl-pCFgewDXzBgIRVUKdBeITUqm-1OtYl-y85zubermVOsQ7g-R8HI_rXtXVAJNJSQfmFXgLLEw9vwbwKhNGqzja4a" />
              <span className="absolute top-4 left-4 bg-agency-navy/80 text-white text-[10px] px-3 py-1 rounded-sm uppercase tracking-widest">Coastal Living</span>
            </div>
            <div className="p-8 flex flex-col flex-grow text-agency-navy">
              <h3 className="text-2xl font-bold mb-4">SANTA MONICA</h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">Beachfront luxury, iconic pier, and a walkable, vibrant community atmosphere.</p>
              <div className="mt-auto">
                <Link to="/properties/14" className="block text-center w-full bg-agency-navy text-white py-3 rounded text-sm font-semibold tracking-wide hover:bg-agency-gold transition-colors">View Listings</Link>
              </div>
            </div>
          </article>
          <article className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
            <div className="relative h-64">
              <img alt="West Hollywood" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvNVYDXl_e2POUUM1D3cIhqOh5Q-D6QgdMkhLTOACfSntDiWM7EXH1jsC3j8Zegg-73LLEFvSxfH1KWsVrZMWXs98eVj7kGFY8JnQTjcnpOox7ltpb0d2G42y5dNrtcxnjQaFatPTSEH8tE6VOBAbvWFSSBUQO6u0uRrnS4KEA0VdhbzsME1YQzQxgZVJeyvaK7zse7Vcdb2hcjo85YAZVuC6AF645yjqEfHTtIr1mQxWL0G8y34s6vJYFoCI2gM5e-OVXzgkzgMKq" />
              <span className="absolute top-4 left-4 bg-agency-navy/80 text-white text-[10px] px-3 py-1 rounded-sm uppercase tracking-widest">Entertainment Heart</span>
            </div>
            <div className="p-8 flex flex-col flex-grow text-agency-navy">
              <h3 className="text-2xl font-bold mb-4">WEST HOLLYWOOD</h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">The epicenter of LA nightlife, trendy dining, and chic modern residences.</p>
              <div className="mt-auto">
                <Link to="/properties/15" className="block text-center w-full bg-agency-navy text-white py-3 rounded text-sm font-semibold tracking-wide hover:bg-agency-gold transition-colors">View Listings</Link>
              </div>
            </div>
          </article>
        </div>
      </section>
      {/*  END: NeighborhoodExplorer  */}
      <Footer />
    </>
  );
};

export default LosAngelesExplorer;
