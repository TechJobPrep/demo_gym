'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const classes = [
  {
    title: 'Strength Training',
    desc: 'Build muscle with guided weight sessions.',
    image: '/images/strength.jpg',
  },
  {
    title: 'HIIT',
    desc: 'Burn fat and improve stamina with high-intensity intervals.',
    image: '/images/hiit.jpg',
  },
  {
    title: 'Yoga',
    desc: 'Improve flexibility and calm your mind.',
    image: '/images/yoga.jpg',
  },
  {
    title: 'Zumba',
    desc: 'Fun, dance-based cardio workout.',
    image: '/images/zumba.jpg',
  },
  {
    title: 'CrossFit',
    desc: 'Challenging full-body workouts.',
    image: '/images/crossfit.jpg',
  },
  {
    title: 'Personal Training',
    desc: '1-on-1 coaching tailored to you.',
    image: '/images/personal.jpg',
  },
];

function FlipCard({
  frontContent,
  backContent,
  delay = 0,
}: {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  delay?: number;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="w-full"
    >
      <div
        className="relative w-full h-[360px] cursor-pointer [perspective:1200px] hover:scale-[1.02] transition-transform duration-300"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-full [transform-style:preserve-3d]"
        >
          {/* Front */}
          <div className="absolute w-full h-full rounded-2xl overflow-hidden [backface-visibility:hidden]">
            {frontContent}
          </div>

          {/* Back */}
          <div className="absolute w-full h-full rounded-2xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
            {backContent}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ClassesPage() {
  return (
    <main className="min-h-screen pt-[80px] pb-20 px-4 sm:px-10 bg-gradient-to-br from-black via-neutral-900 to-neutral-800 text-white">
      <section className="max-w-6xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-yellow-500 mb-6"
        >
          Our Classes
        </motion.h1>

        {/* Animated Subtext */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-neutral-300 mb-12"
        >
          Find the right class to match your fitness goals — from strength to cardio to flexibility.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls, i) => (
            <FlipCard
              key={i}
              delay={0.2 + i * 0.1} // staggering delay for each card
              frontContent={
                <div
                  className="relative w-full h-full bg-cover bg-center rounded-2xl"
                  style={{ backgroundImage: `url(${cls.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-0 w-full p-4 bg-white/10 backdrop-blur-md text-left rounded-b-2xl">
                    <h3 className="text-xl font-semibold text-yellow-300">{cls.title}</h3>
                    <p className="text-sm text-neutral-200">Tap to flip</p>
                  </div>
                </div>
              }
              backContent={
                <div className="bg-yellow-500 h-full text-black p-6 flex flex-col justify-center text-left rounded-2xl">
                  <h3 className="text-2xl font-bold mb-2">{cls.title}</h3>
                  <p className="text-md">{cls.desc}</p>
                  <p className="mt-4 text-sm text-yellow-900">Tap to flip back</p>
                </div>
              }
            />
          ))}
        </div>
      </section>
    </main>
  );
}
