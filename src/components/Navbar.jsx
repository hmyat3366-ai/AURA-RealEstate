import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const typeParam = searchParams.get('type');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Unified property link logic
  const isPropertiesActive = location.pathname.startsWith('/properties');
  const propertyLabel = typeParam === 'rent' ? 'Rent' : 'Buy';
  const propertyUrl = typeParam === 'rent' ? '/properties?type=rent' : '/properties?type=buy';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-agency-navy text-white px-8 py-4 border-b border-white/10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center justify-center" onClick={closeMobileMenu}>
            <img src="/aura-logo-transparent.png" alt="AURA Logo" className="w-12 h-12 hover:scale-105 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase">
          <Link className={isPropertiesActive ? "text-agency-gold transition-colors" : "hover:text-agency-gold transition-colors"} to={propertyUrl}>
            {propertyLabel}
          </Link>
          <NavLink className={({ isActive }) => isActive ? "text-agency-gold transition-colors" : "hover:text-agency-gold transition-colors"} to="/services">Sell</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-agency-gold transition-colors" : "hover:text-agency-gold transition-colors"} to="/agents">Agent</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-agency-gold transition-colors" : "hover:text-agency-gold transition-colors"} to="/regions">Region</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-agency-gold transition-colors" : "hover:text-agency-gold transition-colors"} to="/specialized-services">Service</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-agency-gold transition-colors" : "hover:text-agency-gold transition-colors"} to="/about">About</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-agency-gold transition-colors" : "hover:text-agency-gold transition-colors"} to="/contact">Contact</NavLink>
          
          {isAuthenticated ? (
            <div className="group relative">
              <button className="flex items-center gap-2 text-agency-gold hover:text-white transition-colors">
                <span className="truncate max-w-[100px]">{user?.fullName || 'Profile'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
                <div className="absolute right-0 mt-2 w-48 bg-white text-agency-navy rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="p-4 border-b border-gray-100">
                    <p className="text-sm font-bold truncate">{user?.fullName}</p>
                    <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                  </div>
                  <Link to="/profile" className="block w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors border-b border-gray-100">
                    My Profile
                  </Link>
                  <button onClick={logout} className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 text-red-600 font-bold transition-colors">
                    Sign Out
                  </button>
                </div>
            </div>
          ) : (
            <NavLink className={({ isActive }) => isActive ? "bg-white text-agency-navy border border-white/40 px-6 py-2 rounded-sm transition-all" : "border border-white/40 px-6 py-2 rounded-sm hover:bg-white hover:text-agency-navy transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"} to="/signin">Signin</NavLink>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 text-xs font-semibold tracking-widest uppercase border-t border-white/10 pt-4">
          <Link className={isPropertiesActive ? "text-agency-gold transition-colors" : "hover:text-agency-gold transition-colors"} to={propertyUrl} onClick={closeMobileMenu}>
            {propertyLabel}
          </Link>
          <NavLink className={({ isActive }) => isActive ? "text-agency-gold transition-colors" : "hover:text-agency-gold transition-colors"} to="/services" onClick={closeMobileMenu}>Sell</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-agency-gold transition-colors" : "hover:text-agency-gold transition-colors"} to="/agents" onClick={closeMobileMenu}>Agent</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-agency-gold transition-colors" : "hover:text-agency-gold transition-colors"} to="/regions" onClick={closeMobileMenu}>Region</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-agency-gold transition-colors" : "hover:text-agency-gold transition-colors"} to="/specialized-services" onClick={closeMobileMenu}>Service</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-agency-gold transition-colors" : "hover:text-agency-gold transition-colors"} to="/about" onClick={closeMobileMenu}>About</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-agency-gold transition-colors" : "hover:text-agency-gold transition-colors"} to="/contact" onClick={closeMobileMenu}>Contact</NavLink>
          
          {isAuthenticated ? (
            <div className="flex flex-col gap-4 mt-2 border-t border-white/10 pt-4">
              <div className="text-agency-gold">
                <span className="truncate">{user?.fullName || 'Profile'}</span>
              </div>
              <Link to="/profile" className="hover:text-agency-gold transition-colors" onClick={closeMobileMenu}>
                My Profile
              </Link>
              <button onClick={() => { logout(); closeMobileMenu(); }} className="text-left text-red-400 hover:text-red-300 font-bold transition-colors">
                Sign Out
              </button>
            </div>
          ) : (
            <NavLink className="mt-2 inline-block text-center border border-white/40 px-6 py-2 rounded-sm hover:bg-white hover:text-agency-navy transition-all" to="/signin" onClick={closeMobileMenu}>Signin</NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
