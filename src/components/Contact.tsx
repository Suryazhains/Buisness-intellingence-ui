import React from 'react';
import Header from './Header';
import LandingPageThree from './Landingthree';
import { CONTACT_CONTENT, THEME } from './constants';

const ContactPage: React.FC = () => {
  const { header, form } = CONTACT_CONTENT;

  return (
    <div className="relative antialiased selection:bg-blue-100 bg-[#08090A]">
      {/* 1. HEADER SECTION */}
      <div className="bg-[#08090A]">
        <Header />
        <section className="pt-10 pb-24 text-center px-6" />
      </div>

      {/* 2. CONTACT FORM SECTION */}
      <section className="bg-white pt-24 pb-32 px-6 rounded-t-[2px] font-dm">
        <div className="max-w-3xl mx-auto text-center">
          
          <h2 className="text-5xl md:text-6xl font-medium text-gray-900 mb-6 tracking-tight">
            {header.title}
          </h2>

          <p className="text-gray-500 text-lg font-medium mb-12 max-w-xl mx-auto leading-relaxed">
            {header.description}
          </p>

          <form className="space-y-6 text-left font-medium" onSubmit={(e) => e.preventDefault()}>
            
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {form.fullName.label} <span className="text-red-500">{form.requiredAsterisk}</span>
              </label>
              <input
                type="text"
                placeholder={form.fullName.placeholder}
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder:text-gray-300"
                required
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {form.contactNumber.label} <span className="text-red-500">{form.requiredAsterisk}</span>
              </label>
              <input
                type="tel"
                placeholder={form.contactNumber.placeholder}
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder:text-gray-300"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {form.message.label} <span className="text-red-500">{form.requiredAsterisk}</span>
              </label>
              <textarea
                rows={5}
                placeholder={form.message.placeholder}
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl font-medium focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all placeholder:text-gray-300 resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-[#4F7CFF] text-white font-medium py-4 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
            >
              {form.submitButton}
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <div className="bg-[#08090A]">
        <LandingPageThree />
      </div>
    </div>
  );
};

export default ContactPage;