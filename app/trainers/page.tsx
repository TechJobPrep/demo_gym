'use client';

import { motion } from 'framer-motion';

const trainers = [
  { name: "Alex Carter", specialty: "Strength & Conditioning", img: "/images/trainers/alex.jpg" },
  { name: "Maya Lee", specialty: "Yoga & Flexibility", img: "/images/trainers/maya.jpg" },
  { name: "Jake Thompson", specialty: "CrossFit & Endurance", img: "/images/trainers/jake.jpg" },
];

export default function TrainersPage() {
  return (
    <main className="min-h-screen pt-[80px] pb-20 px-6 sm:px-10 bg-gradient-to-br from-black via-neutral-900 to-neutral-800 text-white">
      <section className="max-w-6xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-yellow-500 mb-6"
        >
          Meet Our Trainers
        </motion.h1>

        {/* Animated Subtext */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-neutral-300 mb-12"
        >
          Our certified professionals are passionate about helping you reach your fitness goals.
        </motion.p>

        {/* Trainer Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
              viewport={{ once: true }}
              className="animated-border flex flex-col items-center justify-center text-center rounded-xl p-6 transition hover:shadow-yellow-500/10"
            >
              <img
                src={trainer.img}
                alt={trainer.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-yellow-500 mb-4"
              />
              <h3 className="text-xl font-semibold text-yellow-400">{trainer.name}</h3>
              <p className="text-neutral-400">{trainer.specialty}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
