import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchAndFilterBar from '../components/SearchAndFilterBar';
import { properties } from '../data/properties';
import { useAuth } from '../context/AuthContext';

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, toggleSavedProperty, bookAppointment } = useAuth();
  
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingMessage, setBookingMessage] = useState('');
  
  const property = properties.find(p => p.id === parseInt(id));

  const handleSaveProperty = async () => {
    if (!user) {
      navigate('/signin');
      return;
    }
    try {
      await toggleSavedProperty(property.id);
    } catch (error) {
      console.error('Failed to save property:', error);
    }
  };

  const handleBookViewing = async () => {
    if (!user) {
      navigate('/signin');
      return;
    }
    setBookingLoading(true);
    setBookingMessage('');
    try {
      // Simulate booking an appointment 3 days from now
      const date = new Date();
      date.setDate(date.getDate() + 3);
      
      await bookAppointment({
        propertyId: property.id,
        address: property.address,
        date: date.toISOString().split('T')[0],
        time: '10:00 AM'
      });
      setBookingMessage('Viewing booked successfully! Check your profile.');
    } catch (error) {
      setBookingMessage('Failed to book viewing.');
    } finally {
      setBookingLoading(false);
    }
  };

  if (!property) {
    return (
      <>
        <Navbar />
        <section className="container mx-auto py-32 px-4 text-center">
          <h1 className="text-4xl font-serif text-agency-navy mb-4">Property Not Found</h1>
          <p className="text-gray-500 mb-8">The property you are looking for does not exist or has been removed.</p>
          <Link to="/properties" className="bg-agency-navy text-white px-8 py-3 rounded hover:bg-opacity-90 transition">
            Browse All Properties
          </Link>
        </section>
        <Footer />
      </>
    );
  }

  // Monthly mortgage placeholder (e.g. roughly price / 180)
  const monthlyMortgage = Math.round(property.price / 180).toLocaleString();

  return (
    <>

<Navbar />
{/*  BEGIN: Search Bar  */}
<section className="bg-agency-navy py-12 px-10">
  <SearchAndFilterBar />
</section>
{/*  END: Search Bar  */}
{/*  BEGIN: Back Button  */}
<section className="container mx-auto max-w-6xl px-4 pt-8">
  <button 
    onClick={() => navigate(-1)} 
    className="flex items-center text-agency-navy font-semibold hover:text-agency-gold transition-colors"
  >
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
    </svg>
    Back to Properties
  </button>
</section>
{/*  END: Back Button  */}
{/*  BEGIN: Gallery  */}
<section className="container mx-auto max-w-6xl px-4 py-4">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
{/*  Main Large Image  */}
<div className="md:col-span-2 md:row-span-2">
<img alt={property.address} className="w-full h-full object-cover rounded-lg shadow-sm" src={property.image} />
</div>
{/*  Small Grid Images (Reusing Premium Placeholders)  */}
<div><img alt="Kitchen" className="w-full h-48 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARsOKLzrWHP-_4vc7FftsutRg3HIGq_6QrXb6bF2cbBlh3Bo37RQZhTFCTGSw3cIWhpCUZ6NAY6EGXxFcEYcEMXUl-deRqifTwToDVbjf1mq88h1ojrmavY881m80PgWLsjRL_d3sA7ZgHhFb9K_Juc-iysRgmAScdKDPohCgvMJ6BpOby-uJCP-yUnnoHPuLBkNMNhry_9H4fl_Sh9NLqD-4KUeVwdDXpswOi-7rzn7XrRVtodAeBpBULLxNxHq7zkivzmlSdAiO8" /></div>
<div><img alt="Bathroom" className="w-full h-48 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcm5bVSl0zOV8qMixkV_IvZa70K7_a-HwRKH9184J5bcr5F_q_G95loaZFPIgY_nmLDvlJ38_YO5L5jhTvgZBCWtcirzrmDFLGA46SV_C_vuA6HYaYVfh9q6ChcKtDVG45sgcomVNcfnogK_NcB5DcNGZ03sBjLPBUQcWlPFCYpotBTDM0ltW5fP_NEShgsi5qZfY8nXG5odEEH_YI0NdHZefqXs-ly2Xy4NEczl1_1IYUelqCSVExwQF9y7XrtpsQtZNXQVrzoY1F" /></div>
<div><img alt="Bedroom" className="w-full h-48 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYyDzd2pRGDKSjMNrhVcJsiAg2TVP8ExjPBVwmiMwmgSJU07E2pnA0woy_i8PkyQDAYBHXSErFVyuPm8DixVzrqisTesP9lSpzdYz_e8DIi2-zLHihD6B0m1e8xyElvvldOvHRieH8iH_w9WbR6esrQ3oOcoaU9hrURpkfBdUwmzplX21vMs9SRERcN2AbGV4rz3GJYzM6w9bCaxD6aMzAEDrtRQIFY5hXGpimmk9IeOMRBHXp9xkZ32Me-LzifXEwvllhRpA8TkvO" /></div>
<div><img alt="Living Room" className="w-full h-48 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9hB2Zbv-YA0RcJtUNHpaifu7KLj-pqaJen6Y336fGmiTgChOdCaA1EjoX9shknuSJmJaUT7hmlj0h8fEpZCAmU_A_iwAyp0Ccq_oH0QiHrOO5sX2ZgUSsyFGJDDFpy38U6492IIjScKk1cFH7XLSIIqzF2cbfMV6E8P-dQD6c4IVizJhWsPCAAGreajjlKzvgNB_yOOEyfioJ8zmHuJptW_5dRi354QmhPucQYxv5-nsDOXgQzPn-uGW17kr3yILSR45F6G8Cvhj7" /></div>
<div><img alt="Garage" className="w-full h-48 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-KbhwvqPFYwBl48-g8FDinixcp0yXLQabsy5JBb33cV6zpqNMqxgqgClBloYbmk75nNUfB2tKhbMMhITsTbDWD097gvLxW1hvJLDOkkRxzOLDiBHVZJREKNLwhDJdP4w_P6ekxWkkjGsJb08g5b-iiHybr7GoZM8o39arQt2NzJBXFPMetuu9bvIQrBStIaVB3qaoKpknUDAbIL5IWaUf5GmG_lUHg1C8aNh4GAqEAF_HUeJw3VJr8stD5ggAC0Xgv8QZDvdBtDgR" /></div>
<div><img alt="Office" className="w-full h-48 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZC4b9jgj33IHFBOCtiQ-y7v2DyrytRA2vwzNfSj9nvC7Kh3wvZtedwsGD3PMYVLQOvUPSkQS5yUa-WOcRcMVAIm2jVBCwZqrm_GI7ksDjN29noxf3Ps_yzaS_gjPl69EYc3OOYMQ9xTSxVUzplEHVSC7ZVya0MTqY395jcIsfAx2JsB4oV0mRptYbchvk8APS3hqMLWD84WW1TAhlwqHYmOEKM6z_odYCmeM16TRi8H2Wz59p-0n673eFOk2dc0DB3xq_wwyztv0T" /></div>
</div>
</section>
{/*  END: Gallery  */}
{/*  BEGIN: Property Header  */}
<section className="container mx-auto max-w-6xl px-4 py-8">
<div className="border rounded-2xl p-8 custom-shadow bg-white">
<div className="flex flex-col md:flex-row justify-between items-start border-b border-gray-100 pb-8 mb-8">
<div>
<h1 className="font-serif text-5xl text-agency-navy mb-2 flex items-center">
            {property.address}
            <span 
              className="ml-4 text-2xl cursor-pointer hover:text-agency-gold transition-colors"
              onClick={handleSaveProperty}
            >
              {user?.savedProperties?.includes(property.id) ? '♥' : '♡'}
            </span>
</h1>
<p className="flex items-center text-gray-500 text-xl">
<svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            {property.city}, {property.state} {property.zip}
          </p>
</div>
<div className="text-right mt-4 md:mt-0">
<p className="font-serif text-6xl text-agency-navy">${property.price.toLocaleString()}</p>
{property.type === 'rent' ? (
  <p className="text-gray-400 font-medium mt-2">Per Month</p>
) : (
  <p className="text-gray-400 font-medium mt-2">For Sale</p>
)}
</div>
</div>
{/*  Feature Grid  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="bg-gray-50 rounded-xl p-8 text-center">
<div className="flex justify-center mb-4">
<svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<p className="text-3xl font-medium text-agency-navy mb-1">{property.beds}</p>
<p className="text-xs font-bold uppercase tracking-wider text-gray-500">Beds</p>
</div>
<div className="bg-gray-50 rounded-xl p-8 text-center">
<div className="flex justify-center mb-4">
<svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<p className="text-3xl font-medium text-agency-navy mb-1">{property.baths}</p>
<p className="text-xs font-bold uppercase tracking-wider text-gray-500">Baths</p>
</div>
<div className="bg-gray-50 rounded-xl p-8 text-center">
<div className="flex justify-center mb-4">
<svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<p className="text-3xl font-medium text-agency-navy mb-1">{property.sqft}</p>
<p className="text-xs font-bold uppercase tracking-wider text-gray-500">Sqft</p>
</div>
<div className="bg-gray-50 rounded-xl p-8 text-center">
<div className="flex justify-center mb-4">
<svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<p className="text-3xl font-medium text-agency-navy mb-1">{property.garage}</p>
<p className="text-xs font-bold uppercase tracking-wider text-gray-500">Garage</p>
</div>
</div>
</div>
</section>
{/*  END: Property Header  */}
{/*  BEGIN: About Section  */}
<section className="container mx-auto max-w-6xl px-4 py-8">
<div className="border rounded-2xl p-12 custom-shadow bg-white">
<h2 className="font-serif text-4xl text-agency-navy mb-8">About this Home</h2>
<div className="max-w-4xl space-y-6 text-xl leading-relaxed text-gray-800">
<p>{property.description}</p>
<p>The house is located in a highly sought-after residential area, offering a perfect blend of privacy and accessibility. With top-tier schools, parks, and dining options nearby, this property provides an exceptional lifestyle opportunity.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 mt-12 max-w-4xl">
<div className="flex items-center">
<div className="w-6 h-6 bg-agency-navy rounded-full flex items-center justify-center mr-3">
<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path></svg>
</div>
<span className="font-medium text-gray-700">Smart Home Integration</span>
</div>
<div className="flex items-center">
<div className="w-6 h-6 bg-agency-navy rounded-full flex items-center justify-center mr-3">
<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path></svg>
</div>
<span className="font-medium text-gray-700">Premium Location</span>
</div>
<div className="flex items-center">
<div className="w-6 h-6 bg-agency-navy rounded-full flex items-center justify-center mr-3">
<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path></svg>
</div>
<span className="font-medium text-gray-700">High-Speed Internet Ready</span>
</div>
<div className="flex items-center">
<div className="w-6 h-6 bg-agency-navy rounded-full flex items-center justify-center mr-3">
<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path></svg>
</div>
<span className="font-medium text-gray-700">Modern Appliances</span>
</div>
</div>
</div>
</section>
{/*  END: About Section  */}
{/*  BEGIN: Contact & CTA Section  */}
<section className="container mx-auto max-w-6xl px-4 py-8 mb-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{/*  Agent Profile Card  */}
<div className="space-y-6">
<div className="border rounded-2xl p-8 custom-shadow bg-white flex items-center gap-6">
<img alt="Agent Dave" className="w-20 h-20 rounded-full object-cover" src="/images/agent2.png" />
<div>
<h3 className="text-2xl font-bold text-agency-navy">Dave</h3>
<p className="text-gray-500">Remote Agent.Aura Estate</p>
<p className="text-gray-400">{property.city}, {property.state}</p>
</div>
</div>
<div className="border rounded-2xl p-8 custom-shadow bg-white text-center">
<h3 className="text-2xl font-bold text-agency-navy mb-2">Interested in this home?</h3>
<p className="text-gray-400 mb-8 px-4">Schedule a private showing or request more information.</p>
{bookingMessage && (
  <p className={`mb-4 font-bold ${bookingMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
    {bookingMessage}
  </p>
)}
<button 
  onClick={handleBookViewing}
  disabled={bookingLoading}
  className="w-full bg-agency-navy text-white py-5 rounded-xl flex items-center justify-center gap-3 text-lg font-medium hover:bg-opacity-90 transition-all disabled:opacity-50">
  {bookingLoading ? (
    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
  ) : (
    <>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
      Book a Viewing
    </>
  )}
</button>
</div>
</div>
{/*  Visit Card  */}
<div className="border rounded-2xl p-8 custom-shadow bg-white flex flex-col">
<h3 className="text-2xl font-bold text-agency-navy mb-6">See This Home in Person</h3>
<div className="bg-blue-50 rounded-xl mb-6 flex-grow flex items-center justify-center p-8 overflow-hidden">
{/*  3D House Illustration Placeholder (reused)  */}
<img alt="3D House" className="max-w-full rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjj1QsarqcgfLhdH-LVBhBKbyAjEvQhDpOh2ru1RqrpGFYaf9_vYM4DbSM1xirYISvM-Nz8YK7ZxxbZPm0rMwFcXqxAf_LVThr86S8e8Yz9hhRgg99Rz1QW5srlROO2IClaIbHTQ2FX6HCtTE2n6IEKZM_Z_gnbA5u_pRlNZy1G3gWpZuswQ2wtLpOriY3OuDCvgwC0YdP8PVYwKaaRsf8lizp01zVcaBgeJD60Cko2G3IOwLGCjyWgxK0FxKl78FTqo0D4nDvddVu" />
</div>
<p className="text-gray-600 leading-relaxed text-lg">
          We will connect you with a local agent to show this home, answer your questions, and assist you on your buying journey.
        </p>
</div>
</div>
</section>
{/*  END: Contact & CTA Section  */}
{/*  BEGIN: Bottom Footer  */}
<Footer />
{/*  END: Bottom Footer  */}

    </>
  );
};

export default PropertyDetail;
