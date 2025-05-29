'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-10 bg-gradient-to-br from-black via-neutral-900 to-neutral-800 text-white pt-[96px] sm:pt-[112px] pb-12 sm:pb-16">

      
      {/* Left Side - Image */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0"
      >
        <img
          src="/images/gym-hero.png" // Replace with your actual PNG image path
          alt="Fitness Hero"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain animate-bounce-slow drop-shadow-2xl"
        />
      </motion.div>

      {/* Right Side - Text Block */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2 text-center lg:text-left space-y-9"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-yellow-500">
          FlexPulse Gym
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-[family-name:var(--font-geist-mono)]">
          Build strength, boost energy, and achieve your fitness goals with expert guidance and a state-of-the-art facility.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="/membership"
            className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-full px-8 py-3 text-base sm:text-lg font-semibold transition-all shadow-lg flex items-center justify-center leading-none"
          >
            Join Now
          </a>
          <a
            href="/classes"
            className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-100 dark:hover:bg-yellow-900 rounded-full px-8 py-3 text-base sm:text-lg font-semibold transition-all shadow-md flex items-center justify-center leading-none"
          >
            Explore Classes
          </a>
        </div>
      </motion.div>
    </section>
  );
}
