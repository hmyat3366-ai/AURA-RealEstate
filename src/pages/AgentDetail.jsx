import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { agents } from '../data/agents';
import { useAuth } from '../context/AuthContext';

const AgentDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user, bookAppointment } = useAuth();
  
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingMessage, setBookingMessage] = useState('');

  const agent = agents.find(a => a.id === parseInt(id));

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      navigate('/signin');
      return;
    }
    setBookingLoading(true);
    setBookingMessage('');
    try {
      // Simulate booking an appointment with the agent
      const date = new Date();
      date.setDate(date.getDate() + 5);
      
      await bookAppointment({
        propertyId: 'Agent ' + agent.name,
        address: 'Meeting with ' + agent.name,
        date: date.toISOString().split('T')[0],
        time: '02:00 PM'
      });
      setBookingMessage('Message sent! An appointment has been scheduled.');
    } catch (error) {
      setBookingMessage('Failed to send message.');
    } finally {
      setBookingLoading(false);
    }
  };

  if (!agent) {
    return (
      <>
        <Navbar />
        <section className="container mx-auto py-32 px-4 text-center">
          <h1 className="text-4xl font-serif text-agency-navy mb-4">Agent Not Found</h1>
          <p className="text-gray-500 mb-8">The agent you are looking for does not exist or has been removed.</p>
          <button onClick={() => navigate(-1)} className="bg-agency-navy text-white px-8 py-3 rounded hover:bg-opacity-90 transition">
            Go Back
          </button>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>

<Navbar />
{/*  BEGIN: AgentSelector  */}
<div className="bg-agency-light-gray py-6 px-8 flex items-center justify-between border-b border-gray-200">
<div className="flex space-x-4">
{agents.map(a => (
  <Link 
    key={a.id} 
    to={`/agents/${a.id}`} 
    className={`${a.id === agent.id ? 'bg-agency-navy text-white' : 'bg-white text-slate-800'} px-6 py-2 rounded-sm font-semibold text-sm`}
  >
    {a.name}
  </Link>
))}
</div>
<div className="w-10 h-10 bg-agency-navy text-white rounded-full flex items-center justify-center">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
{/*  END: AgentSelector  */}
<main>
{/*  BEGIN: Back Button  */}
<section className="max-w-7xl mx-auto px-8 pt-8">
  <button 
    onClick={() => navigate('/agents')} 
    className="flex items-center text-agency-navy font-semibold hover:text-agency-gold transition-colors"
  >
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
    </svg>
    Back to Agents
  </button>
</section>
{/*  END: Back Button  */}
{/*  BEGIN: AgentProfile  */}
<section className="max-w-7xl mx-auto py-16 px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
{/*  Agent Photo  */}
<div className="md:col-span-5">
<div className="rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
<img alt={`${agent.name} Agent Profile`} className="w-full h-auto grayscale-0 hover:grayscale transition-all duration-500" src={agent.image}/>
</div>
</div>
{/*  Agent Info  */}
<div className="md:col-span-7 flex flex-col justify-center">
<span className="bg-agency-gold text-agency-navy font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full inline-block w-fit mb-4">{agent.label}</span>
<h1 className="text-6xl font-bold text-agency-gold mb-4 serif-font">{agent.name}</h1>
<h2 className="text-2xl font-semibold text-white mb-8">Aura Real Estate . {agent.role}</h2>
<div className="flex flex-wrap gap-4 mb-8">
<div className="flex items-center space-x-2 border border-gray-400 px-4 py-2 rounded-lg text-sm font-medium text-white">
<svg className="w-4 h-4 text-agency-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>{agent.location}</span>
</div>
<div className="flex items-center space-x-2 border border-gray-400 px-4 py-2 rounded-lg text-sm font-medium text-white">
<svg className="w-4 h-4 text-agency-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>{agent.experience}</span>
</div>
</div>
<p className="text-gray-300 leading-relaxed mb-8 max-w-xl">
  {agent.about}
</p>
<button className="bg-white border border-slate-200 shadow-sm flex items-center space-x-3 px-8 py-4 rounded-lg w-fit hover:bg-gray-100 transition-colors font-semibold group">
<span className="text-agency-navy">Send Message</span>
<svg className="w-5 h-5 text-agency-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</section>
{/*  END: AgentProfile  */}
{/*  BEGIN: StatsSection  */}
<section className="max-w-7xl mx-auto py-12 px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
{/*  Homes Sold  */}
<div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center">
<div className="w-16 h-16 bg-agency-navy text-agency-gold rounded-full flex items-center justify-center mb-4">
<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-4xl font-bold text-slate-900 serif-font">{agent.homesSold}</div>
<div className="text-sm text-slate-500 mt-1 uppercase tracking-wider font-semibold">Homes Sold</div>
</div>
{/*  Sales Volume  */}
<div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center">
<div className="w-16 h-16 bg-agency-navy text-agency-gold rounded-full flex items-center justify-center mb-4">
<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-4xl font-bold text-slate-900 serif-font">{agent.salesVolume}</div>
<div className="text-sm text-slate-500 mt-1 uppercase tracking-wider font-semibold">Sales Volume</div>
</div>
{/*  Rating  */}
<div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center">
<div className="w-16 h-16 bg-agency-navy text-agency-gold rounded-full flex items-center justify-center mb-4">
<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.383-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-4xl font-bold text-slate-900 serif-font">{agent.rating}</div>
<div className="text-sm text-slate-500 mt-1 uppercase tracking-wider font-semibold">Client Rating</div>
</div>
{/*  Awards  */}
<div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center">
<div className="w-16 h-16 bg-agency-navy text-agency-gold rounded-full flex items-center justify-center mb-4">
<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-4xl font-bold text-slate-900 serif-font">{agent.awards}</div>
<div className="text-sm text-slate-500 mt-1 uppercase tracking-wider font-semibold">Awards Won</div>
</div>
</section>
{/*  END: StatsSection  */}
{/*  BEGIN: FeaturedListings  */}
<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-8">
<div className="text-center mb-12">
<h2 className="text-5xl font-bold mb-4 serif-font">Featured Listings</h2>
<p className="text-xl text-slate-600">Hand-picked properties by <span className="text-agency-gold font-bold">Araon</span> in Brooklyn's finest areas.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Card 1  */}
<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-lg mb-4">
<img alt="Listing 1" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBir-DDanhw8LUl_effbfQvmw9aGc-jCmydD4d2FNFkq3sQAgH5dmMBqiydJWFEeZCkwEmhxohMgPo2s4pS0et_flOF8Z06GWYsOOAOmqrD7j1AKtXUh6WkLpX6bH2fa33t8zS1NcfY09BF8FMwqClJwEAld5q5wcJy5Oz1_KYMcbiSqgVy16cl5cGJPoGIlbMZGDfQeo0jrrub3I15SCvYWzMlIH9un6aozIB90VGAC5naU_hqOqsIFLVacbRE1q_ilO0PiIIHX2D"/>
<div className="absolute top-4 left-4 bg-agency-navy/80 text-white text-[10px] px-3 py-1 rounded-sm uppercase font-bold backdrop-blur-sm">Luxury and views</div>
<button className="absolute top-4 right-4 text-white hover:text-red-500">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-bold text-lg">85 Adams Street</h3>
<p className="text-slate-500 text-sm">DUMBO, Brooklyn, NYA</p>
</div>
<p className="font-bold">$990,000</p>
</div>
</div>
{/*  Card 2  */}
<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-lg mb-4">
<img alt="Listing 2" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTPSBmOVn2CaEGwc5Q1vewAgFFyEXdzZMQC2p3QKRyUVBzy2uXdoGvnkWfIJi5TzNO8eYEp0kwpaarzbge2WJimhUCu_8HPc3RDRyKU70kHYgfGTz9tPWDJaVdLKzvw0CecXfEQsAAtv3DQ5BzaWkJttRGXomYxCDIplkEep1j064_zHeZ8Zvi2dQU-JgfhwbdYs0zgjNsy5W_oUYEtAmUAtR9WRPkvCBO-BWpMwy7OAVvHbhARPh_FKpMIU4_37rPkxyEJmYYxERO"/>
<div className="absolute top-4 left-4 bg-agency-navy/80 text-white text-[10px] px-3 py-1 rounded-sm uppercase font-bold backdrop-blur-sm">Trendy</div>
<button className="absolute top-4 right-4 text-white hover:text-red-500">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-bold text-lg">445 5th Avenue #4-H</h3>
<p className="text-slate-500 text-sm">Park Slope, Brooklyn, NYA</p>
</div>
<p className="font-bold">$990,000</p>
</div>
</div>
{/*  Card 3  */}
<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-lg mb-4">
<img alt="Listing 3" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAag9nQM3Y6J4Tu7iNL_j3P-RiAGVctZoSKHZF9VXmOEUj1kmn8vgjG0ubBuDT_eCwRHzj1DGQDdzi2PaleD1u5uHWqUP1e2RMrXbYotMpcs_o6rk7p8J0vF1o4uEKMq7NldQ6IGsPVQNtoSbs0UmBTPgKQbu4-pi3uf1MXUNgQl21C7Rrm921koPExcnC5eJRubIdCmK2jLFla6YgNRmSiy_y6oagFGG0A50-SsKzi_fxniphW7_Tuq5eM64rRvpvo7eBTl3Qa1xVi"/>
<div className="absolute top-4 left-4 bg-agency-navy/80 text-white text-[10px] px-3 py-1 rounded-sm uppercase font-bold backdrop-blur-sm">Classic</div>
<button className="absolute top-4 right-4 text-white hover:text-red-500">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-bold text-lg">30 Front Street #20B</h3>
<p className="text-slate-500 text-sm">DUMBO, Brooklyn, NYA</p>
</div>
<p className="font-bold">$1,290,000</p>
</div>
</div>
</div>
</div>
</section>
{/*  END: FeaturedListings  */}
{/*  BEGIN: ClientTestimonialsAndContact  */}
<section className="bg-agency-navy py-24">
<div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
{/*  Testimonials  */}
<div className="flex flex-col justify-between">
<div>
<h2 className="text-5xl font-bold text-agency-gold serif-font mb-12">What Clients Say</h2>
<div className="border border-agency-gold/30 p-10 rounded-xl bg-agency-navy/50 relative">
<div className="flex space-x-1 mb-6">
<span className="text-agency-gold text-2xl">★</span>
<span className="text-agency-gold text-2xl">★</span>
<span className="text-agency-gold text-2xl">★</span>
<span className="text-agency-gold text-2xl">★</span>
<span className="text-agency-gold text-2xl">★</span>
</div>
<blockquote className="text-2xl italic text-agency-gold serif-font leading-relaxed mb-8">
                "Araon made the impossible happen. We were looking for a 2-bedroom in Brooklyn on a tight budget, and she found us a place before it even hit the market."
              </blockquote>
<div className="flex items-center space-x-4">
<img alt="Client" className="w-12 h-12 rounded-full border-2 border-agency-gold" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6rrxcM_tR_dQ8QoeieKJSNgGJ9oJBbu5mD1eV_bPWTaEgNGRu3DzG7R4YudZdi-B2tu1SrjhDxZyHG92h9zJhhQYrclbWdFHfChVQnoKzyPYVmv7ZLnAuxoDcYEzGMcH5qs4BostklcmVp0k0v5nPTZtEJmrN_XrzVDNWmbZ6-FmSeJu6DIwPVtQOpUHwy03rjqqHsdTms5ac0con_OD9_2wcTyIdHp6MLRLQtDAkXEI8PI7Trg7bISWQH0EGQ2W5Loh347cNgQru"/>
<div>
<h4 className="text-white font-bold">Sarah &amp; James K.</h4>
<p className="text-slate-400 text-sm">Buyers in Park Slope</p>
</div>
</div>
</div>
</div>
<div className="mt-16 flex items-center space-x-4">
<div className="flex -space-x-3">
<img className="w-10 h-10 rounded-full border-2 border-agency-navy ring-1 ring-white/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFc-buujF_fjn1Gflq0TPQpP1hOepaxTpGtl_PfvtTxeGgWx9TR27sSdUII-55G3WBnA_0fAVY4dK7ToAUb0loS7q669fNwE4p9hLMZHgO2OS5AiSNnAVf_26XVx7HqdGr2EDdP2Y_-PdELiKYvtFMFtHZYMNWVreXpFC_C2jtgLUglWOVrFxTcCM1Yu3mOOjzDft6vWL0M7P0JOH73jCS1pQjGR9MeORNyUs5jdPeEZwMqbV9UPec3GVgB08NKxqfZijyCT7tRdun"/>
<img className="w-10 h-10 rounded-full border-2 border-agency-navy ring-1 ring-white/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAprSwCGWZnumqmfhImSaObcr8-02i-WPtoEpd5d61BUnnEXktP6Z7oGNarvCu6RFp7unZjlYqLycWKHt1g-FnkgoxnY-tbBKnRrkqTl0rhp4cIVzna6kQkDwuox3TaMRC-JVIAmuXd-_Ie7nNv_LbSajOuHYlGyxne1pH3rPBP6PzJC7h7xu-cnQx-mcc80drmlhKA_rJ420b8GQU8hwUcY8HPh9ImPfGqKx6RSTxm5EGakW7qQaHvB1GX5tL4FqkWSUYZ_KhtLvBA"/>
<img className="w-10 h-10 rounded-full border-2 border-agency-navy ring-1 ring-white/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwQmTYjEyZNuk4ueqLOFYHV5MwRCt0dNOejfdcvjB7F8zUBDdOjMNR8CmGs2dR9lhcI_b35CUJVJlsOgw7NgftLTbdRWWFoRY85LOPUkslqiAX53fSj2GbGIdXTNT3zcNztbJ5LaQGbN4tRXXvly1Z3fHp2FFvO2pS1m_RlZLNRX04MtRM2TvC-Se2XhnyNR1Lsf2sD7K-Uuz3QkMbp4M-LUcHLd5nGGT5CcmbcvBgiqWnquf7FMcDVEYc7WmTOEPCbhPDZicMhDEC"/>
<img className="w-10 h-10 rounded-full border-2 border-agency-navy ring-1 ring-white/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHir3ItRTD2rm3GBhrLp7Z9Hp61Uq2LhBvgfecbBeLkbIMQylBPgNBGqtEX-OQWhgVU96Pn3dZzLYAyeR-Ul8juRE_ghPMRquhtfQWJx5aTCDxXISkcTzSDR_1jdq0UEOndOhevOqOj0EpGbOvt4BWnb7NVwOBJurxKEeLyxK-1bV7LsbBPIRtSFmH9ZBOoSRhthaW12jxC503a_gRVxYkOMvUNegtVgoydZdvkv3GXnpRIyQlfThe9EPn0HYLorzV1ApBwCnfFEjR"/>
</div>
<p className="text-white font-medium">Join 240+ happy Alaska homeowners.</p>
</div>
</div>
{/*  Contact Form  */}
<div className="bg-agency-navy/40 border-2 border-agency-gold/20 p-12 rounded-2xl">
<h2 className="text-5xl font-bold text-agency-gold serif-font mb-4">Work With Araon</h2>
<p className="text-agency-gold/80 mb-10">Ready to sell your property or find your dream home in Brooklyn? Send a message below.</p>
<form onSubmit={handleContactSubmit} className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-agency-gold text-xs font-bold uppercase tracking-widest">Full Name</label>
<input className="w-full bg-white border-0 py-3 px-4 focus:ring-2 focus:ring-agency-gold" placeholder="John" type="text" defaultValue={user?.fullName || ''} required/>
</div>
<div className="space-y-2">
<label className="text-agency-gold text-xs font-bold uppercase tracking-widest">Email</label>
<input className="w-full bg-white border-0 py-3 px-4 focus:ring-2 focus:ring-agency-gold" placeholder="John123@gmail.com" type="email" defaultValue={user?.email || ''} required/>
</div>
</div>
<div className="space-y-2">
<label className="text-agency-gold text-xs font-bold uppercase tracking-widest">Interest</label>
<select className="w-full bg-white border-0 py-3 px-4 focus:ring-2 focus:ring-agency-gold">
<option>Buying a Property</option>
<option>Selling a Property</option>
<option>Renting a Property</option>
</select>
</div>
<div className="space-y-2">
<label className="text-agency-gold text-xs font-bold uppercase tracking-widest">Message</label>
<textarea className="w-full bg-white border-0 py-3 px-4 focus:ring-2 focus:ring-agency-gold" placeholder="Tell us about your property goals" rows="4" required></textarea>
</div>
{bookingMessage && (
  <p className={`font-bold ${bookingMessage.includes('sent') ? 'text-green-500' : 'text-red-500'}`}>
    {bookingMessage}
  </p>
)}
<button type="submit" disabled={bookingLoading} className="w-full bg-agency-gold text-agency-navy font-bold py-5 rounded hover:bg-agency-gold/90 transition-all uppercase tracking-widest flex items-center justify-center disabled:opacity-50">
  {bookingLoading ? (
    <svg className="animate-spin h-5 w-5 text-agency-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
  ) : 'Send Message'}
</button>
</form>
</div>
</div>
</section>
{/*  END: ClientTestimonialsAndContact  */}
</main>
{/*  BEGIN: MainFooter  */}
<Footer />
{/*  END: MainFooter  */}

    </>
  );
};

export default AgentDetail;
