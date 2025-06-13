'use client';

import { useState } from "react";
import { Phone, Mail, MapPin, User, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row text-white">
      {/* Left Panel with Info */}
      <div className="md:w-1/2 bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 p-10 flex flex-col justify-center space-y-10">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-lg">We're here to help you reach your fitness goals. Contact us anytime!</p>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Phone className="text-white" />
            <span>+1 (123) 456-7890</span>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="text-white" />
            <span>support@flexpulse.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-white" />
            <span>123 Flex Street, Fit City</span>
          </div>
        </div>
      </div>

      {/* Right Panel with Form */}
      <div className="md:w-1/2 bg-black flex items-center justify-center py-16 px-6">
        {submitted ? (
          <div className="text-center bg-yellow-500 text-black p-10 rounded-xl shadow-lg max-w-md">
            <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
            <p>We'll be in touch very soon.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-2xl shadow-2xl border border-yellow-500/30 w-full max-w-lg space-y-6"
          >
            <h2 className="text-2xl font-bold text-yellow-500 text-center">Contact Form</h2>

            <div className="relative">
              <User className="absolute left-3 top-3 text-yellow-500" />
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-neutral-900 border border-neutral-700 rounded-md text-white focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-yellow-500" />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-neutral-900 border border-neutral-700 rounded-md text-white focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-yellow-500" />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 bg-neutral-900 border border-neutral-700 rounded-md text-white focus:ring-2 focus:ring-yellow-500 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-yellow-500/50"
            >
              <Send size={20} /> Send Message
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
