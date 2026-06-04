import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const typeParam = searchParams.get('type');

  // Unified property link logic
  const isPropertiesActive = location.pathname.startsWith('/properties');
  const propertyLabel = typeParam === 'rent' ? 'Rent' : 'Buy';
  const propertyUrl = typeParam === 'rent' ? '/properties?type=rent' : '/properties?type=buy';

  return (
    <nav className="sticky top-0 z-50 bg-agency-navy text-white px-8 py-4 flex justify-between items-center border-b border-white/10">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center justify-center">
          <img src="/aura-logo-transparent.png" alt="AURA Logo" className="w-12 h-12 hover:scale-105 transition-transform" />
        </Link>
      </div>
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
    </nav>
  );
};

export default Navbar;
