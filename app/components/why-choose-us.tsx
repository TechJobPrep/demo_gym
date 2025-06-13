'use client';

import { Dumbbell, ShieldCheck, Users, Clock, Smile } from 'lucide-react';

const features = [
  {
    title: "Certified Trainers",
    description: "Train with professionals who are certified and experienced in fitness coaching.",
    icon: <ShieldCheck className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "Modern Equipment",
    description: "Our facility is equipped with the latest gym machines and tools.",
    icon: <Dumbbell className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "Community Support",
    description: "Join a motivating and supportive fitness community to stay on track.",
    icon: <Users className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "Flexible Hours",
    description: "Open early and late to accommodate your busy schedule.",
    icon: <Clock className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "Personalized Plans",
    description: "Get workout and diet plans tailored just for your goals.",
    icon: <Smile className="w-8 h-8 text-yellow-500" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500 mb-6">
          Why Choose FlexPulse?
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto mb-12">
          At FlexPulse Gym, we go beyond fitness. We provide you with the tools, guidance, and support to transform your lifestyle, not just your body.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 text-left shadow hover:shadow-yellow-500/20 transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">{feature.title}</h3>
              <p className="text-neutral-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
