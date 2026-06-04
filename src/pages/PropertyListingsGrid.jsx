import React from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchAndFilterBar from '../components/SearchAndFilterBar';
import { properties } from '../data/properties';
import { useAuth } from '../context/AuthContext';

const PropertyListingsGrid = () => {
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
<main>
{/*  BEGIN: SearchSection  */}
<section className="bg-agency-navy py-12 px-10">
  <SearchAndFilterBar />
</section>
{/*  END: SearchSection  */}
{/*  BEGIN: ListingsGrid  */}
<section className="pb-20 px-10">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {filteredProperties.length > 0 ? (
    filteredProperties.map(property => (
      <Link to={`/properties/${property.id}`} key={property.id} className="block group">
        <div className="group cursor-pointer h-full flex flex-col">
          <div className="relative overflow-hidden rounded-md bg-gray-200 aspect-property">
            <img 
              alt={property.address} 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
              src={property.image}
            />
            <button 
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-agency-navy transition-all duration-300"
              onClick={(e) => handleSaveProperty(e, property.id)}
            >
              <svg className="w-5 h-5" fill={user?.savedProperties?.includes(property.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>
          </div>
          <div className="mt-4 flex justify-between items-start text-agency-navy flex-grow">
            <div>
              <p className="text-sm font-semibold">{property.address}</p>
              <p className="text-xs text-gray-600">{property.city}, {property.state}</p>
            </div>
            <span className="text-sm font-bold shrink-0">${property.price.toLocaleString()}</span>
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
</section>
{/*  END: ListingsGrid  */}
{/*  BEGIN: Pagination  */}
<section className="py-10 flex justify-center items-center space-x-6">
<button className="w-8 h-8 flex items-center justify-center rounded bg-gray-200 text-gray-500 hover:bg-agency-gold hover:text-white transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<span className="text-sm font-medium border-b-2 border-agency-gold px-2">1</span>
<button className="w-8 h-8 flex items-center justify-center rounded bg-gray-200 text-gray-500 hover:bg-agency-gold hover:text-white transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</section>
{/*  END: Pagination  */}
</main>
{/*  BEGIN: MainFooter  */}
<Footer />
{/*  END: MainFooter  */}

    </>
  );
};

export default PropertyListingsGrid;
