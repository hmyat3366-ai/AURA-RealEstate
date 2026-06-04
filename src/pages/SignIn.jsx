import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';

const SignIn = () => {
  const navigate = useNavigate();
  const { login, socialLogin } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSocialLogin = async (provider) => {
    setError('');
    setLoading(true);
    try {
      await socialLogin(provider);
      navigate('/');
    } catch (err) {
      setError(err.message || `Failed to sign in with ${provider}.`);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      navigate('/'); // Redirect to home on success
    } catch (err) {
      setError(err.message || 'Failed to sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      {/* BEGIN: MainContainer */}
      <main className="min-h-screen flex flex-col md:flex-row overflow-hidden">
          {/* BEGIN: LeftColumn (Form Section) */}
          <section className="w-full md:w-[40%] bg-[#f4f4f4] flex items-center justify-center p-8 md:p-16 lg:p-24" data-purpose="sign-in-form-container">
              <div className="w-full max-w-sm space-y-8">
                  {/* Header Section */}
                  <header className="space-y-2">
                      <h1 className="font-serif text-3xl font-medium text-gray-900">AURA Real Estate</h1>
                      <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
                  </header>
                  
                  {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                      <span className="block sm:inline text-sm">{error}</span>
                    </div>
                  )}

                  {/* Main Sign In Form */}
                  <form onSubmit={handleSubmit} className="space-y-6" method="POST">
                      {/* Email Input */}
                      <div className="relative" data-purpose="input-group">
                          <label className="block text-xs font-medium text-gray-700 absolute top-2 left-4" htmlFor="email">Email Address</label>
                          <input
                              className="block w-full pt-6 pb-2 px-4 bg-[#f4f4f4] border-[1px] border-black rounded-lg focus:ring-0 focus:border-black text-gray-900 transition-colors"
                              id="email" name="email" type="email" 
                              value={email} onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter your email" />
                      </div>
                      
                      {/* Password Input */}
                      <div className="relative" data-purpose="input-group">
                          <label className="block text-xs font-medium text-gray-700 absolute top-2 left-4" htmlFor="password">Password</label>
                          <input
                              className="block w-full pt-6 pb-2 px-4 bg-[#f4f4f4] border-[1px] border-black rounded-lg focus:ring-0 focus:border-black text-gray-900 transition-colors"
                              id="password" name="password" type="password" 
                              value={password} onChange={(e) => setPassword(e.target.value)}
                              placeholder="Enter your password" />
                      </div>
                      
                      {/* Continue Button */}
                      <button
                          className="w-full bg-[#050B33] text-white py-4 rounded-lg font-semibold text-lg hover:bg-black transition-all transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-serif flex items-center justify-center"
                          type="submit" disabled={loading}>
                          {loading ? (
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          ) : 'Continue'}
                      </button>
                  </form>
                  {/* Secondary Navigation */}
                  <div className="text-sm font-medium flex justify-between">
                      <div>
                        <span className="text-gray-600">New to AURA? </span>
                        <Link className="text-[#050B33] font-bold hover:underline" to="/signup">Create Account</Link>
                      </div>
                      <Link className="text-[#050B33] font-semibold hover:underline" to="#">Forgot Password?</Link>
                  </div>
                  {/* Divider Section */}
                  <div className="flex items-center gap-4 py-2">
                      <div className="h-px bg-[#CBD5E1] flex-grow"></div>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">OR</span>
                      <div className="h-px bg-[#CBD5E1] flex-grow"></div>
                  </div>
                  {/* Social Login Buttons */}
                  <div className="space-y-3" data-purpose="social-login-group">
                      {/* Google */}
                      <button
                          onClick={() => handleSocialLogin('Google')} disabled={loading}
                          className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#f4f4f4] border-[1px] border-black rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50">
                          <img alt="Google" className="w-5 h-5"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwbnW5SUcT4V0f1TtagwIcLb7VqMc9buXFBwpawVb4bb64HlWWh0koCE_5rihv_nw-BDGYiFzKjtWeu3IgfOVwnVjXEzLHJKOmyM-NHNARhlV8At79CvXjZyb4uTBsICV5lN2Z5BxrbfnW2OswHaK208TlR4HWLhfXYLanO09flLPM3t4P1w5wV3uz3U4LX2XbvNh4CeSwDX897p4mZngQLs-VAwXiZb23ZMs3OfzFVzB0VM4u4GSnnfoA_MSQcHGcjlRD88kK8DjJ" />
                          <span className="text-sm font-medium text-gray-800">Continue with Google</span>
                      </button>
                      {/* Facebook */}
                      <button
                          onClick={() => handleSocialLogin('Facebook')} disabled={loading}
                          className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#f4f4f4] border-[1px] border-black rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50">
                          <svg className="w-5 h-5 text-blue-600 fill-current" viewBox="0 0 24 24">
                              <path
                                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z">
                              </path>
                          </svg>
                          <span className="text-sm font-medium text-gray-800">Continue with Facebook</span>
                      </button>
                  </div>
                  {/* Footer Legal Text */}
                  <footer className="pt-8">
                      <p className="text-[13px] text-gray-800 leading-snug">
                          By submitting, I accept AURA's <Link className="text-[#050B33] font-bold hover:underline" to="/">terms of use</Link>
                      </p>
                  </footer>
              </div>
          </section>
          {/* END: LeftColumn */}
          {/* BEGIN: RightColumn (Visual Section) */}
          <section className="hidden md:block w-full md:w-[60%] h-64 md:h-auto relative" data-purpose="hero-image-container">
              <img alt="Modern architectural building" className="w-full h-full object-cover absolute inset-0"
                  src="/images/signin-building.png" />
          </section>
          {/* END: RightColumn */}
      </main>
      {/* END: MainContainer */}
      <Footer />
    </>
  );
};

export default SignIn;
