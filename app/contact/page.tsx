'use client';

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-[80px] pb-20 px-6 sm:px-10 bg-gradient-to-br from-black via-neutral-900 to-neutral-800 text-white">
      <section className="max-w-4xl mx-auto space-y-12">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-yellow-500 text-center">Contact Us</h1>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-neutral-800 hover:bg-neutral-700 transition rounded-xl p-6 shadow-lg border border-yellow-500/40 hover:scale-105 transform duration-300">
            <Phone className="mx-auto text-yellow-500" size={32} />
            <h3 className="mt-4 font-semibold">Call Us</h3>
            <p className="text-sm text-neutral-400 mt-2">+1 (123) 456-7890</p>
          </div>
          <div className="bg-neutral-800 hover:bg-neutral-700 transition rounded-xl p-6 shadow-lg border border-yellow-500/40 hover:scale-105 transform duration-300">
            <Mail className="mx-auto text-yellow-500" size={32} />
            <h3 className="mt-4 font-semibold">Email Us</h3>
            <p className="text-sm text-neutral-400 mt-2">support@gymhub.com</p>
          </div>
          <div className="bg-neutral-800 hover:bg-neutral-700 transition rounded-xl p-6 shadow-lg border border-yellow-500/40 hover:scale-105 transform duration-300">
            <MapPin className="mx-auto text-yellow-500" size={32} />
            <h3 className="mt-4 font-semibold">Visit Us</h3>
            <p className="text-sm text-neutral-400 mt-2">123 Gym Street, Fit City</p>
          </div>
        </div>

        {/* Contact Form */}
        {submitted ? (
          <div className="bg-yellow-500 text-black p-6 rounded-lg text-center font-semibold shadow-lg">
            Thank you for reaching out! We will get back to you shortly.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-md bg-white/5 border border-yellow-500/20 rounded-xl shadow-2xl p-8 space-y-6 transition-all duration-300"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white resize-none transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition-all duration-300 shadow-md hover:shadow-yellow-600"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
