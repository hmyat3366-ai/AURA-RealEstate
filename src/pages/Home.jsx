import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchAndFilterBar from '../components/SearchAndFilterBar';

const Home = () => {
  return (
    <>

<Navbar />
{/*  BEGIN: HeroSection  */}
<section className="hero-bg relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-20 text-white overflow-hidden">
<video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover -z-10">
  <source src="/0604.mp4" type="video/mp4" />
</video>
<div className="absolute inset-0 bg-agency-navy/40 -z-10"></div>
<div className="relative z-10 flex flex-col items-center w-full">
  <h1 className="heading-serif text-5xl md:text-7xl mb-4 italic">Your window to the</h1>
  <h2 className="heading-serif text-5xl md:text-7xl mb-12">world's finest real estate</h2>
  <p className="max-w-3xl text-xl md:text-2xl mb-12 font-light leading-relaxed">
    Discover the nation's most exclusive properties across Brooklyn, Miami, and Alaska. 
    Experience real estate redefined by transparency and local mastery.
  </p>
  {/*  Search Bar  */}
  <SearchAndFilterBar className="mt-8 relative z-20" />
  <Link to="/properties" className="mt-12 bg-agency-navy border border-white/40 px-12 py-3 tracking-widest text-sm uppercase hover:bg-agency-gold hover:text-agency-navy hover:border-agency-gold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-agency-gold/20 active:scale-95">
    Explore Listing
  </Link>
</div>
</section>
{/*  END: HeroSection  */}
{/*  BEGIN: RegionsSection  */}
<section className="py-20 px-8 max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<h3 className="uppercase tracking-[0.2em] text-sm font-bold mb-4">United States Regions</h3>
<p className="heading-serif text-4xl italic leading-tight">Whereever you're going, we can<br/>take you there</p>
</div>
<Link to="/properties" className="bg-agency-navy text-white px-8 py-3 rounded-sm text-xs uppercase tracking-widest hover:bg-agency-gold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-agency-gold/20 active:scale-95">Discover Listing</Link>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Region Card 1 - Brooklyn  */}
<div className="group relative cursor-pointer overflow-hidden rounded-md">
<img alt="Brooklyn" className="w-full aspect-[2/3] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out" src="/region-brooklyn.jpg"/>
<div className="absolute inset-0 bg-agency-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center">
  <span className="text-agency-gold text-xs font-bold tracking-[0.3em] uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">New York</span>
  <h3 className="heading-serif text-white text-4xl italic mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">Brooklyn</h3>
  <Link to="/neighborhoods/brooklyn" className="border border-white/50 text-white text-xs uppercase tracking-widest px-6 py-2 hover:bg-agency-gold hover:border-agency-gold hover:text-agency-navy transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:scale-105 hover:shadow-lg delay-100">Show More</Link>
</div>
</div>
{/*  Region Card 2 - Miami  */}
<div className="group relative cursor-pointer overflow-hidden rounded-md">
<img alt="Miami" className="w-full aspect-[2/3] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out" src="/region-miami.jpg"/>
<div className="absolute inset-0 bg-agency-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center">
  <span className="text-agency-gold text-xs font-bold tracking-[0.3em] uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">Florida</span>
  <h3 className="heading-serif text-white text-4xl italic mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">Miami</h3>
  <Link to="/neighborhoods/miami" className="border border-white/50 text-white text-xs uppercase tracking-widest px-6 py-2 hover:bg-agency-gold hover:border-agency-gold hover:text-agency-navy transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:scale-105 hover:shadow-lg delay-100">Show More</Link>
</div>
</div>
{/*  Region Card 3 - Texas  */}
<div className="group relative cursor-pointer overflow-hidden rounded-md">
<img alt="Texas" className="w-full aspect-[2/3] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out" src="/region-texas.jpg"/>
<div className="absolute inset-0 bg-agency-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center">
  <span className="text-agency-gold text-xs font-bold tracking-[0.3em] uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">United States</span>
  <h3 className="heading-serif text-white text-4xl italic mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">Texas</h3>
  <Link to="/neighborhoods/texas" className="border border-white/50 text-white text-xs uppercase tracking-widest px-6 py-2 hover:bg-agency-gold hover:border-agency-gold hover:text-agency-navy transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:scale-105 hover:shadow-lg delay-100">Show More</Link>
</div>
</div>
</div>
</section>
{/*  END: RegionsSection  */}
{/*  BEGIN: FeaturedListings  */}
<section className="py-20 px-8 bg-agency-light-gray text-agency-navy">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<h3 className="uppercase tracking-[0.2em] text-sm font-bold mb-4">Featured Listings for <span className="italic">Buyer</span></h3>
<p className="heading-serif text-3xl italic">You'll find the home, here for you!</p>
</div>
<Link to="/properties" className="bg-agency-navy text-white px-8 py-3 rounded-sm text-xs uppercase tracking-widest hover:bg-agency-gold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-agency-gold/20 active:scale-95">Discover Listing</Link>
</div>
{/*  Listings Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Listing Card 1  */}
<div className="listing-card group bg-white shadow-sm">
<div className="relative overflow-hidden">
<img alt="Listing" className="w-full aspect-video object-cover" src="/dumbo.png"/>
<button className="absolute top-4 right-4 text-white/80 hover:text-red-500 transition-colors">
<svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h4 className="text-xs font-bold uppercase truncate">85 Adams Street</h4>
<span className="text-xs font-bold">$990,000</span>
</div>
<p className="text-[10px] text-gray-500 uppercase tracking-tighter">DUMBO, Brooklyn, NYA</p>
</div>
</div>
{/*  Listing Card 2  */}
<div className="listing-card group bg-white shadow-sm">
<div className="relative overflow-hidden">
<img alt="Listing" className="w-full aspect-video object-cover" src="/alaska.png"/>
<button className="absolute top-4 right-4 text-white/80 hover:text-red-500">
<svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h4 className="text-xs font-bold uppercase truncate">3225 De Armour Rd, AK 99516</h4>
<span className="text-xs font-bold">$549,000</span>
</div>
<p className="text-[10px] text-gray-500 uppercase tracking-tighter">Anchorage, Alaska</p>
</div>
</div>
{/*  Listing Card 3  */}
<div className="listing-card group bg-white shadow-sm">
<div className="relative overflow-hidden">
<img alt="Listing" className="w-full aspect-video object-cover" src="/dumbo.png"/>
<button className="absolute top-4 right-4 text-white/80">
<svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h4 className="text-xs font-bold uppercase truncate">30 Front Street #20B</h4>
<span className="text-xs font-bold">$1,290,000</span>
</div>
<p className="text-[10px] text-gray-500 uppercase tracking-tighter">DUMBO, Brooklyn, NYA</p>
</div>
</div>
{/*  Listing Card 4  */}
<div className="listing-card group bg-white shadow-sm">
<div className="relative overflow-hidden">
<img alt="Listing" className="w-full aspect-video object-cover" src="/parkslope.png"/>
<button className="absolute top-4 right-4 text-white/80">
<svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h4 className="text-xs font-bold uppercase truncate">445 5th Avenue #4-H</h4>
<span className="text-xs font-bold">$990,000</span>
</div>
<p className="text-[10px] text-gray-500 uppercase tracking-tighter">Park Slope, Brooklyn, NYA</p>
</div>
</div>
{/*  2nd row repeats with more variation (simulated for layout)  */}
<div className="listing-card group bg-white shadow-sm lg:col-span-1">
<img alt="Listing" className="w-full aspect-video object-cover" src="/alaska.png"/>
<div className="p-4">
<div className="flex justify-between items-start mb-2"><h4 className="text-xs font-bold uppercase truncate">1185 Lake Dr, AK</h4><span className="text-xs font-bold">$509,900</span></div>
<p className="text-[10px] text-gray-500 uppercase">NorthPole, Alaska</p>
</div>
</div>
<div className="listing-card group bg-white shadow-sm">
<img alt="Listing" className="w-full aspect-video object-cover" src="/dumbo.png"/>
<div className="p-4">
<div className="flex justify-between items-start mb-2"><h4 className="text-xs font-bold uppercase truncate">184 Kent Avenue #D319</h4><span className="text-xs font-bold">$1,890,000</span></div>
<p className="text-[10px] text-gray-500 uppercase">Williamsburg, Brooklyn, NYA</p>
</div>
</div>
<div className="listing-card group bg-white shadow-sm">
<img alt="Listing" className="w-full aspect-video object-cover" src="/alaska.png"/>
<div className="p-4">
<div className="flex justify-between items-start mb-2"><h4 className="text-xs font-bold uppercase truncate">851 Shellinger St, AK 99705</h4><span className="text-xs font-bold">$320,000</span></div>
<p className="text-[10px] text-gray-500 uppercase">NorthPole, Alaska</p>
</div>
</div>
<div className="listing-card group bg-white shadow-sm">
<img alt="Listing" className="w-full aspect-video object-cover" src="/miami.png"/>
<div className="p-4">
<div className="flex justify-between items-start mb-2"><h4 className="text-xs font-bold uppercase truncate">5845 Collins Ave APT 201</h4><span className="text-xs font-bold">$799,000</span></div>
<p className="text-[10px] text-gray-500 uppercase">Miami Beach, Miami</p>
</div>
</div>
</div>
</div>
</section>
{/*  END: FeaturedListings  */}
{/*  BEGIN: ArtHouseSection  */}
<section className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="flex-1">
<h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">The Next Generation of Art Investment &amp; Collection Has Arrived</h3>
<h2 className="heading-serif text-4xl mb-8">The Agency Art House</h2>
<p className="text-gray-600 leading-relaxed mb-10 text-lg">
        Uniquely accessible and deeply transparent, the future of art collection and investment is at your fingertips. 
        Whether you're looking to build a new class of assets or bring life into your new home, our vetted team of 
        art advisors is at your service. Start building your collection and investing in your future.
      </p>
<button className="bg-agency-navy text-white px-10 py-4 rounded-sm text-xs uppercase tracking-widest hover:bg-agency-gold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-agency-gold/20 active:scale-95">Coming Soon</button>
</div>
<div className="flex-1">
<img alt="Art House Collage" className="w-full shadow-2xl rounded-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR15bKABNlu7b8vZ5yAICsDstOYiiEBr1CPzPKRLkJNDNaoxQhuxvwR7MqZ6db_XVz3L0lQjuAWvhfp09-YJOECIX0V3jiebOmMWO_76nFdCQiU_bYHT4gcZsLiCUjOuIv44DFMwajKRUgbGOlCu2I-TqEFDHqV2XuxW4x8MVrGzVzc0Xq5ZHwpPS6Y9COnHzpRFfwOmOY7uUvKL9CCfcuGYGy9GfTXQPZY8a7W6IV5KcEGae2TEzRKmlse6J2_LpY9EkfTuSQukpA"/>
</div>
</section>
{/*  END: ArtHouseSection  */}
{/*  BEGIN: MagazineSection  */}
<section className="py-24 px-8 bg-agency-light-gray text-agency-navy">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
<div className="flex-1">
<h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">Fall/Winter Issue Out Now!</h3>
<h2 className="heading-serif text-4xl mb-8 italic">The Agency <span className="not-italic font-bold">Magazine</span></h2>
<p className="text-gray-600 leading-relaxed mb-10 text-lg">
          Perspectives on life and luxury
        </p>
<button className="bg-agency-navy text-white px-10 py-4 rounded-sm text-xs uppercase tracking-widest hover:bg-agency-gold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-agency-gold/20 active:scale-95">Coming Soon</button>
</div>
<div className="flex-1">
<img alt="Magazine Issue" className="w-full shadow-2xl rounded-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXhmpgBXM4frD5hJgJPJROdiqZlGD1PkoUHLVL0xKLWnYHxg1wp63eooMUwHMAKVhDiSe9K1OaceEcxypp0jI79fzfoGUM_UoMunTwuWsjT93Xfm5FBDp1cSstPLJG0v7YlMsY_0fbehCoKvu7AivWpNA8xf9JJBm8AX1uka1ywVGTcFesFjbV3H-TJ189DYIde_v3WemwwRgIYXFnr1cnRN48Fn-DNZZ34DPRzt2Y3vqYJ_gpGB0LmjUJJ301Rar8ioWNQOJueDut"/>
</div>
</div>
</section>
{/*  END: MagazineSection  */}
{/*  BEGIN: ContactFormSection  */}
<section className="flex flex-col md:flex-row min-h-[800px]">
{/*  Left Visual  */}
<div className="md:w-1/2 relative flex items-center justify-center p-12 overflow-hidden">
<img alt="Team" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn7TKHvwYg7B8G76Ktafkz055zYam2fMxDSvUouXF4UBekJzm-3bkZf4U4pqKEoDn68P2i84fYQlkg95GFz2jhtnyAum_Xp5uClLa4nU8mpMglgsgzp1_nRdXT0mQVN6pNopWVATqJwLHE2yIQpWK9dZCCPFN6Nh0gb3IZbt8fIK8AUkwRapanV-9ybNVDYdRr9Hsy8WeqFPbsacWdRPNjFFr-GCi4rht2DEn6UFnBPel0xnzN8n930jOYUnk9EQr_8GicpP1wu2Mx"/>
<div className="absolute inset-0 bg-agency-navy/20"></div>
<div className="relative z-10 text-white max-w-md">
<div className="bg-white/20 backdrop-blur-sm p-4 w-16 h-16 mb-8 flex items-center justify-center">
<span className="text-white text-3xl font-serif italic">A</span>
</div>
<h2 className="heading-serif text-5xl mb-6 leading-tight italic">Real Estate isn't<br/>just business.<br/>It's <span className="not-italic">Personal</span></h2>
<div className="w-20 h-px bg-white mb-8"></div>
<Link className="text-xl underline underline-offset-8 hover:text-agency-gold transition-colors" to="/">Let's Connect</Link>
</div>
</div>
{/*  Right Form  */}
<div className="md:w-1/2 bg-white text-agency-navy flex flex-col items-center justify-center p-8 md:p-20">
<h2 className="heading-serif text-4xl mb-12">Send Us A Message</h2>
<form className="w-full max-w-xl space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full border-gray-200 p-4 focus:ring-agency-navy focus:border-agency-navy text-sm" placeholder="Ari" type="text"/>
<input className="w-full border-gray-200 p-4 focus:ring-agency-navy focus:border-agency-navy text-sm" placeholder="John" type="text"/>
</div>
<input className="w-full border-gray-200 p-4 focus:ring-agency-navy focus:border-agency-navy text-sm" placeholder="amichan7@gmail.com" type="email"/>
<div className="grid grid-cols-2 gap-4">
<input className="w-full border-gray-200 p-4 focus:ring-agency-navy focus:border-agency-navy text-sm" placeholder="Phone Number" type="tel"/>
<select className="w-full border-gray-200 p-4 focus:ring-agency-navy focus:border-agency-navy text-sm text-gray-500">
<option>Morning</option>
<option>Afternoon</option>
<option>Evening</option>
</select>
</div>
<select className="w-full border-gray-200 p-4 focus:ring-agency-navy focus:border-agency-navy text-sm text-gray-500">
<option>Select An Agent</option>
</select>
<input className="w-full border-gray-200 p-4 focus:ring-agency-navy focus:border-agency-navy text-sm" placeholder="Brooklynn, DUMBO" type="text"/>
<textarea className="w-full border-gray-200 p-4 focus:ring-agency-navy focus:border-agency-navy text-sm" placeholder="Tell About Yourself" rows="4"></textarea>
<div className="flex items-start gap-3 py-4">
<input className="mt-1 rounded border-gray-300 text-agency-navy focus:ring-agency-navy" id="consent" type="checkbox"/>
<label className="text-[10px] text-gray-500 leading-normal" htmlFor="consent">
            I agree to be contacted by via email, phone, and text to receive real estate services and information. You can reply STOP to unsubscribe or HELP for assistance with text messages. You can also click the unsubscribe link in emails. Message and data rates may apply. Message frequency may vary. Privacy Policy
          </label>
</div>
<div className="text-center pt-4">
<Link to="/" className="border border-agency-navy px-16 py-4 font-bold text-sm uppercase tracking-widest hover:bg-agency-navy hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:scale-95" type="submit">
            Let's Connect
          </Link>
</div>
</form>
</div>
</section>
{/*  END: ContactFormSection  */}
<Footer />

    </>
  );
};

export default Home;
