import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      
      <main className="flex-grow bg-white text-gray-900">
        {/* BEGIN: PageTitle */}
        <section className="py-24 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-wide text-agency-navy mb-6 uppercase">
            Contact The Agency
          </h1>
          <p className="text-2xl md:text-3xl font-serif italic text-gray-800">
            Wherever you're going, we can take you there.
          </p>
        </section>
        {/* END: PageTitle */}

        {/* BEGIN: ContactFormSection */}
        <section className="bg-gray-100 py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-medium font-serif text-center mb-12">Send Us A Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    className="w-full border-gray-300 rounded px-4 py-3 focus:ring-agency-navy focus:border-agency-navy bg-white"
                    placeholder="First Name" type="text" 
                  />
                </div>
                <div>
                  <input
                    className="w-full border-gray-300 rounded px-4 py-3 focus:ring-agency-navy focus:border-agency-navy bg-white"
                    placeholder="Last Name" type="text" 
                  />
                </div>
              </div>
              <div>
                <input
                  className="w-full border-gray-300 rounded px-4 py-3 focus:ring-agency-navy focus:border-agency-navy bg-white"
                  placeholder="Email Address" type="email" 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    className="w-full border-gray-300 rounded px-4 py-3 focus:ring-agency-navy focus:border-agency-navy bg-white"
                    placeholder="Phone Number" type="tel" 
                  />
                </div>
                <div>
                  <select
                    className="w-full border-gray-300 rounded px-4 py-3 focus:ring-agency-navy focus:border-agency-navy bg-white text-gray-500">
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                  </select>
                </div>
              </div>
              <div>
                <select
                  className="w-full border-gray-300 rounded px-4 py-3 focus:ring-agency-navy focus:border-agency-navy bg-white text-gray-500">
                  <option value="">Select An Agent</option>
                  <option value="araon">Araon - Brooklyn</option>
                  <option value="dave">Dave - Miami</option>
                  <option value="anna">Anna - Alaska</option>
                </select>
              </div>
              <div>
                <input
                  className="w-full border-gray-300 rounded px-4 py-3 focus:ring-agency-navy focus:border-agency-navy bg-white"
                  placeholder="Location of interest (e.g. Brooklyn, DUMBO)" type="text" 
                />
              </div>
              <div>
                <textarea
                  className="w-full border-gray-300 rounded px-4 py-3 focus:ring-agency-navy focus:border-agency-navy bg-white resize-none"
                  placeholder="Tell About Yourself" rows="6"></textarea>
              </div>
              <div className="flex items-start space-x-3 max-w-3xl mx-auto">
                <div className="flex items-center h-5">
                  <input 
                    className="focus:ring-agency-navy h-4 w-4 text-agency-navy border-gray-300 rounded mt-1"
                    id="consent" type="checkbox" 
                  />
                </div>
                <label className="text-sm text-gray-600 leading-relaxed" htmlFor="consent">
                  I agree to be contacted via email, phone, and text to receive real estate services and
                  information. You can reply STOP to unsubscribe or HELP for assistance with text messages.
                  You can also click the unsubscribe link in emails. Message and data rates may apply. Message
                  frequency may vary. Privacy Policy
                </label>
              </div>
              <div className="text-center pt-8">
                <button
                  className="bg-white border-2 border-agency-navy text-agency-navy font-semibold px-12 py-4 rounded hover:bg-agency-navy hover:text-white transition-colors text-lg"
                  type="submit">
                  Let's Connect
                </button>
              </div>
            </form>
          </div>
        </section>
        {/* END: ContactFormSection */}
      </main>

      <Footer />
    </>
  );
};

export default Contact;
