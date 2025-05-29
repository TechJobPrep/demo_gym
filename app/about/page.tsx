'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-[80px] pb-20 px-6 sm:px-10 bg-gradient-to-br from-black via-neutral-900 to-neutral-800 text-white">
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left - Animated Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-yellow-500 text-center lg:text-left">
            About FlexPulse Gym
          </h1>

          <p className="text-lg sm:text-xl leading-relaxed text-neutral-300 font-mono">
            Founded in 2024, FlexPulse Gym is dedicated to helping you reach your fitness goals in a welcoming and modern environment. Our mission is to empower every individual to build strength, boost energy, and live healthier lives.
          </p>

          <div className="text-center lg:text-left mt-6">
            <a
              href="/join"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black rounded-full px-10 py-4 font-semibold text-lg transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-yellow-600"
            >
              Join Our Community
            </a>
          </div>
        </motion.div>

        {/* Right - Animated Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-full flex items-center justify-center"
        >
          <img
            src="/images/about-gym.jpg" // Replace with your actual image path
            alt="Gym Overview"
            className="rounded-3xl shadow-2xl border border-yellow-500/20 hover:scale-105 transition-transform duration-500 object-cover w-full max-h-[550px]"
          />
        </motion.div>
      </section>
    </main>
  );
}
