import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { properties } from '../data/properties';

const Profile = () => {
  const { user, updateUser, changePassword } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  
  // Profile Update State
  const [profileData, setProfileData] = useState({
    fullName: user?.fullName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || ''
  });
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileMessage, setProfileMessage] = useState({ type: '', text: '' });

  // Password Change State
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState({ type: '', text: '' });

  const handleProfileChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setProfileMessage({ type: '', text: '' });
    setProfileLoading(true);
    
    try {
      await updateUser(profileData);
      setProfileMessage({ type: 'success', text: 'Profile updated successfully.' });
    } catch (err) {
      setProfileMessage({ type: 'error', text: err.message || 'Failed to update profile.' });
    } finally {
      setProfileLoading(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setPasswordMessage({ type: '', text: '' });

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordMessage({ type: 'error', text: 'New passwords do not match.' });
      return;
    }

    if (passwordData.newPassword.length < 8) {
      setPasswordMessage({ type: 'error', text: 'Password must be at least 8 characters long.' });
      return;
    }

    setPasswordLoading(true);
    try {
      await changePassword(passwordData.currentPassword, passwordData.newPassword);
      setPasswordMessage({ type: 'success', text: 'Password changed successfully.' });
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err) {
      setPasswordMessage({ type: 'error', text: err.message || 'Failed to change password.' });
    } finally {
      setPasswordLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans text-agency-navy">
      <Navbar />
      
      {/* Page Header */}
      <header className="bg-agency-navy text-white py-12 md:py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 rounded-full bg-agency-gold flex items-center justify-center text-3xl font-serif font-bold shrink-0">
            {user?.fullName?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">{user?.fullName}</h1>
            <p className="text-gray-300 mb-4">{user?.email}</p>
            <p className="text-xs font-semibold tracking-widest uppercase text-agency-gold">Member since {new Date(user?.createdAt || Date.now()).getFullYear()}</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-64 shrink-0">
            <nav className="flex flex-row md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0">
              <button 
                onClick={() => setActiveTab('profile')}
                className={`text-left px-4 py-3 rounded-lg text-sm font-bold transition-colors whitespace-nowrap ${activeTab === 'profile' ? 'bg-agency-navy text-white' : 'text-gray-600 hover:bg-gray-200'}`}>
                Personal Information
              </button>
              <button 
                onClick={() => setActiveTab('security')}
                className={`text-left px-4 py-3 rounded-lg text-sm font-bold transition-colors whitespace-nowrap ${activeTab === 'security' ? 'bg-agency-navy text-white' : 'text-gray-600 hover:bg-gray-200'}`}>
                Security & Password
              </button>
              <button 
                onClick={() => setActiveTab('activity')}
                className={`text-left px-4 py-3 rounded-lg text-sm font-bold transition-colors whitespace-nowrap ${activeTab === 'activity' ? 'bg-agency-navy text-white' : 'text-gray-600 hover:bg-gray-200'}`}>
                My Activity
              </button>
            </nav>
          </aside>

          {/* Tab Content */}
          <div className="flex-grow bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            
            {/* Personal Information Tab */}
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">Personal Information</h2>
                {profileMessage.text && (
                  <div className={`p-4 rounded-lg mb-6 text-sm ${profileMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {profileMessage.text}
                  </div>
                )}
                <form onSubmit={handleProfileSubmit} className="space-y-6 max-w-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                      <input 
                        type="text" name="fullName" value={profileData.fullName} onChange={handleProfileChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agency-gold focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                      <input 
                        type="email" name="email" value={profileData.email} onChange={handleProfileChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agency-gold focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                      <input 
                        type="tel" name="phone" value={profileData.phone} onChange={handleProfileChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agency-gold focus:border-transparent transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Address</label>
                      <input 
                        type="text" name="address" value={profileData.address} onChange={handleProfileChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agency-gold focus:border-transparent transition-all"
                        placeholder="123 Luxury Ave, Beverly Hills, CA 90210"
                      />
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex justify-end">
                    <button 
                      type="submit" disabled={profileLoading}
                      className="bg-agency-gold text-agency-navy px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center disabled:opacity-50 min-w-[140px]">
                      {profileLoading ? (
                        <svg className="animate-spin h-5 w-5 text-agency-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      ) : 'Save Changes'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">Security & Password</h2>
                {passwordMessage.text && (
                  <div className={`p-4 rounded-lg mb-6 text-sm ${passwordMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {passwordMessage.text}
                  </div>
                )}
                <form onSubmit={handlePasswordSubmit} className="space-y-6 max-w-md">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Current Password</label>
                    <input 
                      type="password" name="currentPassword" value={passwordData.currentPassword} onChange={handlePasswordChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agency-gold focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">New Password</label>
                    <input 
                      type="password" name="newPassword" value={passwordData.newPassword} onChange={handlePasswordChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agency-gold focus:border-transparent transition-all"
                      required minLength={8}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Confirm New Password</label>
                    <input 
                      type="password" name="confirmPassword" value={passwordData.confirmPassword} onChange={handlePasswordChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agency-gold focus:border-transparent transition-all"
                      required minLength={8}
                    />
                  </div>
                  <div className="pt-4 flex">
                    <button 
                      type="submit" disabled={passwordLoading}
                      className="bg-agency-navy text-white px-8 py-3 rounded-lg font-bold hover:bg-black transition-colors flex items-center justify-center disabled:opacity-50 min-w-[180px]">
                      {passwordLoading ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      ) : 'Update Password'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Activity Tab */}
            {activeTab === 'activity' && (
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">My Activity</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Saved Properties */}
                  <div className="border border-gray-200 rounded-xl p-6 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                      </div>
                      <h3 className="font-bold text-lg">Saved Properties ({user?.savedProperties?.length || 0})</h3>
                    </div>
                    {user?.savedProperties && user.savedProperties.length > 0 ? (
                      <div className="space-y-4 flex-grow mb-6">
                        {user.savedProperties.map(id => {
                          const prop = properties.find(p => p.id === id);
                          if (!prop) return null;
                          return (
                            <div key={id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                              <img src={prop.image} alt={prop.address} className="w-16 h-16 object-cover rounded" />
                              <div>
                                <h4 className="font-bold text-sm text-agency-navy">{prop.address}</h4>
                                <p className="text-xs text-gray-500">${prop.price.toLocaleString()}</p>
                              </div>
                              <Link to={`/properties/${prop.id}`} className="ml-auto text-agency-gold text-sm font-bold hover:underline">View</Link>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500 mb-6 flex-grow">You haven't saved any properties yet. Start exploring listings to save your favorites here.</p>
                    )}
                    <Link to="/properties" className="text-agency-gold font-bold text-sm hover:underline self-start">Explore Listings →</Link>
                  </div>

                  {/* Appointments */}
                  <div className="border border-gray-200 rounded-xl p-6 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      </div>
                      <h3 className="font-bold text-lg">Upcoming Viewings ({user?.appointments?.length || 0})</h3>
                    </div>
                    {user?.appointments && user.appointments.length > 0 ? (
                      <div className="space-y-4 flex-grow mb-6">
                        {user.appointments.map(apt => (
                          <div key={apt.id} className="flex flex-col p-4 bg-gray-50 rounded-lg border-l-4 border-agency-navy">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-sm text-agency-navy">{apt.address}</h4>
                              <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-800 rounded">{apt.status}</span>
                            </div>
                            <div className="text-xs text-gray-600 flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                {new Date(apt.date).toLocaleDateString()}
                              </span>
                              <span className="flex items-center gap-1">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                {apt.time}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500 mb-6 flex-grow">No upcoming property viewings scheduled.</p>
                    )}
                    <Link to="/agents" className="text-agency-navy font-bold text-sm hover:underline self-start">Contact an Agent →</Link>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
