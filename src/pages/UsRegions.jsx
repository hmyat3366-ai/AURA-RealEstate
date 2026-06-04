import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UsRegions = () => {
  return (
    <>

<Navbar />
{/*  BEGIN: HeroSection  */}
<section className="py-20 text-center px-4" data-purpose="hero-title">
<h1 className="text-4xl md:text-6xl text-agencyNavy uppercase tracking-widest mb-4">United Stated Regions</h1>
<p className="text-xl md:text-2xl text-gray-700 italic">Wherever you're going, we can take you there</p>
</section>
{/*  END: HeroSection  */}
{/*  BEGIN: RegionsGrid  */}
<main className="max-w-7xl mx-auto px-6 pb-24">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/*  Card 1: Brooklyn  */}
<Link to="/neighborhoods/brooklyn" className="group cursor-pointer block" data-purpose="region-card">
<div className="overflow-hidden mb-4 rounded-sm">
<img alt="Brooklyn" className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="/region-brooklyn.jpg"/>
</div>
<h2 className="text-3xl text-agencyNavy mb-1">Brookyln</h2>
<p className="text-gray-500 text-sm italic">Lifestyle tag: Urban Apartments</p>
<p className="text-gray-500 text-sm">Property count: 120+ Properties</p>
</Link>
{/*  Card 2: Miami  */}
<Link to="/neighborhoods/miami" className="group cursor-pointer block" data-purpose="region-card">
<div className="overflow-hidden mb-4 rounded-sm">
<img alt="Miami" className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="/region-miami.jpg"/>
</div>
<h2 className="text-3xl text-agencyNavy mb-1">Miami</h2>
<p className="text-gray-500 text-sm italic">Lifestyle tag: Luxury &amp; Beach Living</p>
<p className="text-gray-500 text-sm">Property count: 150+ Properties</p>
</Link>
{/*  Card 3: Alaska  */}
<Link to="/neighborhoods/alaska" className="group cursor-pointer block" data-purpose="region-card">
<div className="overflow-hidden mb-4 rounded-sm">
<img alt="Alaska" className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="/region-alaska.jpg"/>
</div>
<h2 className="text-3xl text-agencyNavy mb-1">Alaska</h2>
<p className="text-gray-500 text-sm italic">Lifestyle tag: Scenic &amp; Nature Retreats</p>
<p className="text-gray-500 text-sm">Property count: 60+ Properties</p>
</Link>
{/*  Card 4: Los Angeles  */}
<Link to="/neighborhoods/los-angeles" className="group cursor-pointer block" data-purpose="region-card">
<div className="overflow-hidden mb-4 rounded-sm">
<img alt="Los-Angeles" className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="/region-la.jpg"/>
</div>
<h2 className="text-3xl text-agencyNavy mb-1">Los-Angeles</h2>
<p className="text-gray-500 text-sm italic">Lifestyle tag: Modern &amp; Entertainment Lifestyle</p>
<p className="text-gray-500 text-sm">Property count: 200+ Properties</p>
</Link>
{/*  Card 5: California  */}
<Link to="/neighborhoods/california" className="group cursor-pointer block" data-purpose="region-card">
<div className="overflow-hidden mb-4 rounded-sm">
<img alt="California" className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="/region-california.jpg"/>
</div>
<h2 className="text-3xl text-agencyNavy mb-1">California</h2>
<p className="text-gray-500 text-sm italic">Lifestyle tag: Coastal &amp; Urban Living</p>
<p className="text-gray-500 text-sm">Property count: 110+ Properties</p>
</Link>
{/*  Card 6: Texas  */}
<Link to="/neighborhoods/texas" className="group cursor-pointer block" data-purpose="region-card">
<div className="overflow-hidden mb-4 rounded-sm">
<img alt="Texas" className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="/region-texas.jpg"/>
</div>
<h2 className="text-3xl text-agencyNavy mb-1">Texas</h2>
<p className="text-gray-500 text-sm italic">Lifestyle tag: Suburban &amp; Ranch Living</p>
<p className="text-gray-500 text-sm">Property count: 160+ Properties</p>
</Link>
</div>
</main>
{/*  END: RegionsGrid  */}
{/*  BEGIN: FooterLinks  */}
<Footer />
{/*  END: FooterLinks  */}

    </>
  );
};

export default UsRegions;
