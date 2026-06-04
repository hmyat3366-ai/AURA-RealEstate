import React from 'react';
import { Search, MapPin, DollarSign, Home, ChevronDown } from 'lucide-react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

const SearchAndFilterBar = ({ className = '' }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [localType, setLocalType] = React.useState(searchParams.get('type') || '');

  React.useEffect(() => {
    setLocalType(searchParams.get('type') || '');
  }, [searchParams]);

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setLocalType(newType);
    
    // If on properties page, instantly update URL to trigger filtering
    if (location.pathname.startsWith('/properties')) {
      const newParams = new URLSearchParams(searchParams);
      if (newType) {
        newParams.set('type', newType);
      } else {
        newParams.delete('type');
      }
      navigate(`${location.pathname}?${newParams.toString()}`);
    }
  };

  const handleSearch = () => {
    // If not on properties page, navigate there when search is clicked
    if (!location.pathname.startsWith('/properties')) {
      navigate(`/properties${localType ? `?type=${localType}` : ''}`);
    }
  };

  return (
    <div className={`w-full max-w-6xl mx-auto ${className}`}>
      <div className="bg-agency-navy/95 backdrop-blur-xl p-3 md:p-4 rounded-2xl shadow-2xl border border-white/10 flex flex-col md:flex-row items-center gap-3 transition-all">
        
        {/* Search Input */}
        <div className="flex-[2] flex items-center bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-xl px-4 py-3.5 w-full group focus-within:border-agency-gold/50 focus-within:bg-white/10 focus-within:ring-1 focus-within:ring-agency-gold/30">
          <Search className="w-5 h-5 text-agency-gold/80 group-focus-within:text-agency-gold mr-3 transition-colors" />
          <input 
            className="bg-transparent border-none focus:ring-0 text-white w-full placeholder-white/50 text-sm font-medium outline-none p-0" 
            placeholder="Search neighborhood, city, or zip..." 
            type="text"
          />
        </div>

        {/* Filters Container */}
        <div className="flex-[3] flex flex-col sm:flex-row w-full gap-3">
          {/* Location Dropdown */}
          <div className="flex-1 relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <MapPin className="w-4 h-4 text-agency-gold/80 group-hover:text-agency-gold transition-colors" />
            </div>
            <select className="w-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-xl text-white text-sm font-medium pl-10 pr-10 py-3.5 appearance-none focus:ring-1 focus:ring-agency-gold/30 focus:border-agency-gold/50 focus:bg-white/10 cursor-pointer outline-none">
              <option value="" className="bg-agency-navy">All Locations</option>
              <option value="new-york" className="bg-agency-navy">New York, NY</option>
              <option value="brooklyn" className="bg-agency-navy">Brooklyn, NY</option>
              <option value="miami" className="bg-agency-navy">Miami, FL</option>
              <option value="anchorage" className="bg-agency-navy">Anchorage, AK</option>
            </select>
          </div>

          {/* Property Type Dropdown */}
          <div className="flex-1 relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Home className="w-4 h-4 text-agency-gold/80 group-hover:text-agency-gold transition-colors" />
            </div>
            <select 
              value={localType}
              onChange={handleTypeChange}
              className="w-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-xl text-white text-sm font-medium pl-10 pr-10 py-3.5 appearance-none focus:ring-1 focus:ring-agency-gold/30 focus:border-agency-gold/50 focus:bg-white/10 cursor-pointer outline-none"
            >
              <option value="" className="bg-agency-navy">Property Type</option>
              <option value="buy" className="bg-agency-navy">Buy</option>
              <option value="rent" className="bg-agency-navy">Rent</option>
              <option value="sold" className="bg-agency-navy">Recently Sold</option>
            </select>
          </div>

          {/* Price Range Dropdown */}
          <div className="flex-1 relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <DollarSign className="w-4 h-4 text-agency-gold/80 group-hover:text-agency-gold transition-colors" />
            </div>
            <select className="w-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-xl text-white text-sm font-medium pl-10 pr-10 py-3.5 appearance-none focus:ring-1 focus:ring-agency-gold/30 focus:border-agency-gold/50 focus:bg-white/10 cursor-pointer outline-none">
              <option value="" className="bg-agency-navy">Price Range</option>
              <option value="0-500k" className="bg-agency-navy">Under $500K</option>
              <option value="500k-1m" className="bg-agency-navy">$500K - $1M</option>
              <option value="1m-5m" className="bg-agency-navy">$1M - $5M</option>
              <option value="5m+" className="bg-agency-navy">$5M+</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <button onClick={handleSearch} className="w-full md:w-auto bg-agency-gold hover:bg-[#ffbe3b] text-agency-navy font-bold py-3.5 px-8 rounded-xl flex items-center justify-center transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-agency-gold/20">
          <Search className="w-5 h-5 mr-2" />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchAndFilterBar;
