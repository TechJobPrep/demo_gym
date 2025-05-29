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
}: {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-[360px] cursor-pointer [perspective:1200px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        <div className="absolute w-full h-full rounded-2xl overflow-hidden [backface-visibility:hidden]">
          {frontContent}
        </div>
        <div className="absolute w-full h-full rounded-2xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {backContent}
        </div>
      </motion.div>
    </div>
  );
}

export default function ClassesPage() {
  return (
    <main className="min-h-screen pt-[80px] pb-20 px-6 sm:px-10 bg-gradient-to-br from-black via-neutral-900 to-neutral-800 text-white">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-yellow-500 mb-6">Our Classes</h1>
        <p className="text-lg text-neutral-300 mb-12">
          Find the right class to match your fitness goals — from strength to cardio to flexibility.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls, i) => (
            <FlipCard
              key={i}
              frontContent={
                <div
                  className="relative w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${cls.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-0 w-full p-4 bg-white/10 backdrop-blur-md text-left rounded-b-2xl">
                    <h3 className="text-xl font-semibold text-yellow-300">{cls.title}</h3>
                    <p className="text-sm text-neutral-200">Click to see more</p>
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
