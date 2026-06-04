import React from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchAndFilterBar from '../components/SearchAndFilterBar';
import { properties } from '../data/properties';
import { useAuth } from '../context/AuthContext';

const PropertyListings = () => {
  const [searchParams] = useSearchParams();
  const propertyType = searchParams.get('type');
  const navigate = useNavigate();
  const { user, toggleSavedProperty } = useAuth();

  const handleSaveProperty = async (e, propertyId) => {
    e.preventDefault();
    if (!user) {
      navigate('/signin');
      return;
    }
    try {
      await toggleSavedProperty(propertyId);
    } catch (error) {
      console.error('Failed to save property:', error);
    }
  };

  // Filter properties by type if specified in URL (buy or rent)
  const filteredProperties = properties.filter(p => {
    if (!propertyType) return true; // Show all if no type specified
    return p.type === propertyType;
  });

  return (
    <>

<Navbar />
{/*  BEGIN: SearchSection  */}
<section className="bg-agency-navy py-12 px-6">
  <SearchAndFilterBar />
</section>
{/*  END: SearchSection  */}
{/*  BEGIN: PropertyGrid  */}
<main className="max-w-7xl mx-auto px-6 pb-20">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {filteredProperties.length > 0 ? (
    filteredProperties.map(property => (
      <Link to={`/properties/${property.id}`} key={property.id} className="block group h-full">
        <div className="bg-agency-gray rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img 
              alt={property.address} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              src={property.image}
            />
            <button 
              className="absolute top-3 right-3 text-white hover:text-agency-gold transition-colors z-10"
              onClick={(e) => handleSaveProperty(e, property.id)}
            >
              <svg className="w-6 h-6" fill={user?.savedProperties?.includes(property.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>
          </div>
          <div className="p-4 bg-[#e5e7eb] text-agency-navy flex-grow flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-1 gap-2">
                <h3 className="font-bold text-sm truncate">{property.address}</h3>
                <span className="font-bold text-sm shrink-0">${property.price.toLocaleString()}</span>
              </div>
              <p className="text-xs text-agency-text-gray">{property.city}, {property.state}</p>
            </div>
            <div className="flex items-center gap-3 mt-3 text-xs text-gray-600 font-medium border-t border-gray-300 pt-3">
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                {property.beds}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                {property.baths}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                {property.sqft} sqft
              </span>
            </div>
          </div>
        </div>
      </Link>
    ))
  ) : (
    <div className="col-span-full py-20 text-center text-agency-navy">
      <h3 className="text-2xl font-bold mb-2">No properties found</h3>
      <p className="text-gray-600">Try adjusting your filters to see more results.</p>
    </div>
  )}
</div>
{/*  Pagination  */}
<div className="mt-16 flex justify-center items-center space-x-4">
<button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-sm hover:bg-agency-gold hover:text-white transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<span className="px-4 py-1 text-sm font-bold border-b-2 border-agency-gold">1</span>
<button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-sm hover:bg-agency-gold hover:text-white transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</main>
{/*  END: PropertyGrid  */}
{/*  BEGIN: MainFooter  */}
<Footer />
{/*  END: MainFooter  */}

    </>
  );
};

export default PropertyListings;
