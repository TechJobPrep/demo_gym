'use client';

import { motion } from 'framer-motion';
import { Sparkles, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-[80px] pb-20 px-6 sm:px-10 bg-black text-white">
      <section className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-white text-center mb-20 tracking-tight"
        >
          Our Purpose at <span className="text-yellow-500">FlexPulse</span>
        </motion.h1>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 hover:border-yellow-500/40 transition duration-300"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Sparkles size={32} className="text-yellow-500" />
              <h2 className="text-2xl font-semibold">Our Vision</h2>
            </div>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Inspire transformation through community, consistency, and strength — both mental and physical.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 hover:border-yellow-500/40 transition duration-300"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Target size={32} className="text-yellow-500" />
              <h2 className="text-2xl font-semibold">Our Mission</h2>
            </div>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Equip individuals with the tools, environment, and motivation to reach their peak potential — every day.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
