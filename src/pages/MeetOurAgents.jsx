import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { agents } from '../data/agents';

const MeetOurAgents = () => {
  return (
    <>

<Navbar />
{/*  BEGIN: HeroSection  */}
<section className="py-16 px-6 text-center max-w-4xl mx-auto">
<h1 className="text-5xl md:text-6xl mb-6">Meet Our Agents</h1>
<h2 className="text-xl md:text-2xl font-semibold mb-8">Who You Work With to Buy or Sell Your Home Matters</h2>
<p className="text-agency-gray leading-relaxed max-w-2xl mx-auto">
      Quality over quantity is our non-negotiable. The Agency carefully selects our real estate partners ensuring our agents are the best experts, advocates and advisors in the business.
    </p>
</section>
{/*  END: HeroSection  */}
{/*  BEGIN: AgentsGrid  */}
<section className="pb-24 px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
{agents.map((agent) => (
  <Link to={`/agents/${agent.id}`} key={agent.id} className="block group h-full">
    <div className="overflow-hidden rounded-xl shadow-lg flex flex-col h-full bg-white transition-transform hover:-translate-y-2">
      <div className="aspect-[4/5] overflow-hidden bg-gray-200">
        <img alt={agent.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={agent.image}/>
      </div>
      <div className="bg-agency-navy p-8 text-white flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-2xl text-agency-gold mb-4">{agent.name}</h3>
          <p className="text-sm opacity-80 mb-1">Aura Real Estate . {agent.role}</p>
          <p className="text-sm opacity-80">{agent.experience}</p>
        </div>
        <div className="mt-8">
          <button className="w-full md:w-auto border border-white px-8 py-3 text-sm font-medium tracking-wide hover:bg-white hover:text-agency-navy transition-all rounded-md">View Profile</button>
        </div>
      </div>
    </div>
  </Link>
))}
</div>
</section>
{/*  END: AgentsGrid  */}
{/*  BEGIN: MainFooter  */}
<Footer />
{/*  END: MainFooter  */}

    </>
  );
};

export default MeetOurAgents;
