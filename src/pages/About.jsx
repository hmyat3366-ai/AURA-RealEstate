import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      
      {/* BEGIN: Header Section */}
      <div className="bg-agency-navy text-white px-8 py-6 rounded-b-[40px]">
        <div className="max-w-4xl mx-auto text-center pb-24 pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-sm mb-8">
            <span className="text-agency-gold">●</span> Our Ambition
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Redefining the Geography of Luxury.
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light">
            Founded in 2010, Aura Estate was born from a singular vision: to unify the nation's most diverse landscapes through elite remote expertise and cutting-edge transparency.
          </p>
        </div>
      </div>
      {/* END: Header Section */}

      {/* BEGIN: StorySection */}
      <section className="bg-gray-50 max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              alt="Frank Portrait" 
              className="w-full rounded-2xl object-cover shadow-xl aspect-[4/5]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPliYVD6P9KSutFLFa6d8ID7MEhnWPNUgNEza9sl27m2FfUQ2f0P6m52Ut2UVaVAfDiA_RtmyojKwJgRcBKZU4JzWeLBaIP1nd3BWNbFt1k-p-IHqjCW9ETqWQSP6noQJyZOZ3hxDU17EDkx8nCDQ-lldRyhnszyzlDIk2Cmw_fWvQ3l3fndmyUQ2Um4OlZfUk1PCR3iP7m_FvANBWBKBYh6E2qftSazfgOgnFXmDjt4Rvj_U-sivD5X3827S7U8rrXnPfgrNB5fen" 
            />
            <div className="absolute -bottom-6 right-6 bg-agency-navy text-white px-6 py-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm opacity-80">Years of Vision</div>
            </div>
          </div>
          <div>
            <h3 className="text-agency-navy font-semibold uppercase tracking-wider mb-2">The Story of Frank</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-agency-navy mb-8 leading-tight">
              From a Brooklyn Loft to a <span className="italic">National Icon</span>.
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              In 2010, Frank left a high-stakes career in finance with a radical idea: Real estate shouldn't be limited by local office hours. He founded Aura Estate in a small **Brooklyn loft**, which today serves as our **Global Headquarters and Flagship Office.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Frank's mission was simple: Find the most talented local experts and give them the freedom to operate remotely while maintaining the soul of the community.
            </p>
            <div className="border border-gray-200 rounded-xl p-4 flex items-center gap-4 bg-white shadow-sm">
              <div className="bg-agency-navy p-3 rounded-lg text-agency-gold">
                <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-agency-navy">Main Office</h4>
                <p className="text-sm text-gray-500">Brooklyn, New York - The heart of Aura.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: StorySection */}

      {/* BEGIN: CollectiveAmbition */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex justify-center items-center bg-agency-navy p-4 rounded-xl mb-8">
            <svg className="transform -rotate-45" fill="none" height="24" stroke="#D4AF37" strokeWidth="2" viewBox="0 0 24 24" width="24">
              <path d="M12 2L2 22L12 18L22 22L12 2Z"></path>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-agency-navy mb-4">Our Team Collective Ambition</h2>
          <p className="text-lg text-gray-700 font-medium mb-16">
            One vision, four experts, three regions. We are unified by the standard of excellence.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Card 1 */}
            <div className="border border-gray-200 p-8 rounded-2xl text-left hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-agency-navy">
                  <svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M2 12h20"></path>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-agency-navy text-lg">Local Mastery</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our ambition is to remain "locals in every sense," living in the pulse of Brooklyn, the sun of Miami, and the wild of Alaska.
              </p>
            </div>
            {/* Card 2 */}
            <div className="border border-gray-200 p-8 rounded-2xl text-left hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-agency-navy">
                  <svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
                    <path d="M23 6l-9.5 9.5-5-5L1 18"></path>
                    <path d="M17 6h6v6"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-agency-navy text-lg">Elite Performance</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                To consistently deliver a 5.0/5.0 experience, ensuring that every relocation is a seamless life upgrade, not just a transaction.
              </p>
            </div>
            {/* Card 3 */}
            <div className="border border-gray-200 p-8 rounded-2xl text-left hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-agency-navy">
                  <svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="font-bold text-agency-navy text-lg">Lifestyle Discovery</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                To act as discovery guides, uncovering the hidden gems of our regions that only a long-term resident could know.
              </p>
            </div>
            {/* Card 4 */}
            <div className="border border-gray-200 p-8 rounded-2xl text-left hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-agency-navy">
                  <svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="20">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-agency-navy text-lg">Trust Pillars</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                To build an unbreakable bond of trust with every client through absolute financial and structural transparency.
              </p>
            </div>
          </div>
          {/* Unified Standard Banner */}
          <div className="mt-16 max-w-3xl mx-auto border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-center gap-6 shadow-sm bg-white">
            <div className="flex -space-x-4">
              <img alt="Team member" className="w-12 h-12 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdRdYLDzG5u9GT7KG8_f9IZDFE4kFY-rzLH_brib6z_TmuyZIPz93DCSnmnKauFCx2GXrpP1bcLwawCKyl3rjBxRcL3Q1Iq5qsPlO8rid4ayQtYHk9yxpyTFsgO16fDLDiBd_aGdLwst1aDs_lEC-nsxJmN8biLqn3VhWsWYjTbFmOsQW_ThLenc-qZbJCHLDDTp-9igNipXv6H17l1ybMzA9wOcqjvYE4uXnrFx991UDfAuGXV0A_DyQfq8pFjV-Jzp7wNV1XQ94o" />
              <img alt="Team member" className="w-12 h-12 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0zgkWIdbvnNYLHSBnKk41tt2xdLco0DqramfeW7xIeSKCUukCAqHRIpEEh397Lr7U64q6XkhGH6abh-3Su3T2EHtEqSr9HPHqMUIzVSRrnrPd88vsYiKZ9eJHmVZYEqf8wSoocuc6fXgPsWmOij1LH3Tij1WrU_E8xOJgIfD04R5TlDbxEK8vdVwypkf2zA-c52wXtr2rmLEniDdYIZyMNzBfALgxnEiimHphV3Y8yhy20_hDHJx25MBL47WSdgUjwsU6EVQto7-J" />
              <img alt="Team member" className="w-12 h-12 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPWgjAhKaCKAbzn91NDB7FiJIChkMcD_ryNiiymZhdv_NIPGd44xmNkV5nwXN28AihzeC9cii_fUOuMwMCh-yc3zkmZDJW3ZOIEhmbo2LStIW1DLNY6EywNRIJVLeM-M-1gXeNm6BclZgofebISiWJS_DN2cnK2NjZTDthfDcPYk6pGOm9iNWJ733WD20Rakkm3udNHYafhbUYNuWJVu67i0Fd_gGfGOImBw34gjAo9BL86Vrnp7gWpzfvMeiy3pPcE4D239YSuXRo" />
              <img alt="Team member" className="w-12 h-12 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBfT2ehAqJxDLqTbWnlIX80OEKpyQGLhNod6uI-Csa3SIl1l5HND8IN_3_-LFPgULtr72va4raic1Nb9wdhdNmkUMRBvgqPtDgmIRmtm1gs9A9boncFGmlizsd3PSRPOdUD7RIT0Wdc9TZvFghcI8mtsOkC6opt7x9JV90bcKbYnByAaBrtm6jFR5GfwNCW-tobrdlKR2PICl96Rtqf4MAGA26d4aO5dKYIK7KIVRpIoTCc7vwAjZEPQ_wVW5_4lhhxp2guISaRePi" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-agency-navy text-lg">The Unified Aura Standard</h4>
              <p className="text-gray-500 text-sm italic">"Different locations, one shared heartbeat of excellence."</p>
            </div>
          </div>
        </div>
      </section>
      {/* END: CollectiveAmbition */}

      {/* BEGIN: ThreePillars */}
      <section className="bg-gray-50 max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-agency-navy mb-4">The Three Pillars strategy</h2>
        <p className="text-xl text-gray-600 mb-16">Why we chose Brooklyn, Miami, and Alaska as our founding regions.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm text-left">
            <div className="w-12 h-12 bg-agency-navy rounded-xl flex items-center justify-center text-agency-gold mb-6">
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
                <rect height="20" rx="2" ry="2" width="16" x="4" y="2"></rect>
                <path d="M9 22v-4h6v4"></path>
                <path d="M8 6h.01"></path>
                <path d="M16 6h.01"></path>
                <path d="M12 6h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M16 10h.01"></path>
                <path d="M16 14h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M8 14h.01"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-agency-navy mb-4">Urban Energy</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong className="text-agency-navy">**Brooklyn**</strong> represents the cultural and economic pulse of the city. It is our headquarters and the testing ground for our most innovative urban relocation strategies.
            </p>
          </div>
          {/* Pillar 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm text-left">
            <div className="w-12 h-12 bg-agency-navy rounded-xl flex items-center justify-center text-agency-gold mb-6">
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
                <path d="M12 2v20"></path>
                <path d="M12 2l-4 4"></path>
                <path d="M12 2l4 4"></path>
                <path d="M12 7l-4 4"></path>
                <path d="M12 7l4 4"></path>
                <path d="M12 12l-4 4"></path>
                <path d="M12 12l4 4"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-agency-navy mb-4">Coastal Wealth</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong className="text-agency-navy">**Miami**</strong> was selected to bridge the gap between high-yield investment and the coastal lifestyle, serving as our gateway to international luxury markets.
            </p>
          </div>
          {/* Pillar 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm text-left">
            <div className="w-12 h-12 bg-agency-navy rounded-xl flex items-center justify-center text-agency-gold mb-6">
              <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24">
                <path d="M8 3l4 8 5-5 5 15H2L8 3z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-agency-navy mb-4">Wilderness Peace</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong className="text-agency-navy">**Alaska**</strong> represents the soul of our firm—a sanctuary for those seeking raw beauty and tranquility away from the noise of the modern world.
            </p>
          </div>
        </div>
      </section>
      {/* END: ThreePillars */}

      {/* BEGIN: BehindThePlatform */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex justify-center items-center bg-agency-navy p-4 rounded-xl mb-8">
            <svg className="w-6 h-6 text-agency-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-agency-navy mb-4">Behind the Platform</h2>
          <p className="text-lg text-gray-700 font-medium mb-16 max-w-2xl mx-auto">
            Meet the creative minds and technical wizards who designed and engineered the AURA Real Estate experience.
          </p>
          
          {/* UI/UX Team */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-agency-navy uppercase tracking-widest mb-8 border-b-2 border-agency-gold inline-block pb-2">UI / UX Design Team</h3>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex flex-col items-center">
                <img src="https://api.dicebear.com/7.x/bottts/svg?seed=WonderWoman&backgroundColor=D4AF37" alt="KyiKyiKhinSint" className="w-24 h-24 rounded-full border-4 border-agency-navy shadow-lg mb-4 bg-gray-100" />
                <h4 className="font-bold text-agency-navy text-lg">KyiKyiKhinSint</h4>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Lead Designer</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://api.dicebear.com/7.x/bottts/svg?seed=HarleyQuinn&backgroundColor=1f2937" alt="Clovie" className="w-24 h-24 rounded-full border-4 border-agency-navy shadow-lg mb-4 bg-gray-100" />
                <h4 className="font-bold text-agency-navy text-lg">Clovie</h4>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">UX Researcher</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Flash&backgroundColor=D4AF37" alt="Hookai" className="w-24 h-24 rounded-full border-4 border-agency-navy shadow-lg mb-4 bg-gray-100" />
                <h4 className="font-bold text-agency-navy text-lg">Hookai</h4>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Interaction Designer</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Batman&backgroundColor=1f2937" alt="Gouki" className="w-24 h-24 rounded-full border-4 border-agency-navy shadow-lg mb-4 bg-gray-100" />
                <h4 className="font-bold text-agency-navy text-lg">Gouki</h4>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">UI Specialist</p>
              </div>
            </div>
          </div>

          {/* Dev Team */}
          <div>
            <h3 className="text-xl font-bold text-agency-navy uppercase tracking-widest mb-8 border-b-2 border-agency-gold inline-block pb-2">Engineering</h3>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex flex-col items-center">
                <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Batman&backgroundColor=1f2937" alt="Gouki" className="w-28 h-28 rounded-full border-4 border-agency-gold shadow-lg mb-4 bg-gray-100" />
                <h4 className="font-bold text-agency-navy text-xl">Gouki</h4>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Lead Full-Stack Developer</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* END: BehindThePlatform */}

      {/* BEGIN: ExpansionSection */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-agency-navy rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Abstract globe lines */}
          <div className="absolute -right-20 -bottom-20 opacity-30">
            <svg fill="none" height="300" stroke="#D4AF37" strokeWidth="2" viewBox="0 0 300 300" width="300">
              <circle cx="150" cy="150" r="140"></circle>
              <ellipse cx="150" cy="150" rx="70" ry="140"></ellipse>
              <path d="M10 150h280"></path>
              <path d="M50 80h200"></path>
              <path d="M50 220h200"></path>
            </svg>
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl text-agency-gold font-bold mb-6">The 2026 Expansion.</h2>
            <p className="text-xl md:text-2xl text-agency-gold/90 font-light leading-snug">
              Our remote-first success in 2024 has paved the way for our next chapter. We are currently scouting local experts in **Texas** and **California** to bring the Aura Experience to the West Coast by Q3 2026.
            </p>
          </div>
        </div>
      </section>
      {/* END: ExpansionSection */}

      <Footer />
    </>
  );
};

export default About;
