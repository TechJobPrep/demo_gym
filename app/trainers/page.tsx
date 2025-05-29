'use client';

export default function TrainersPage() {
  return (
    <main className="min-h-screen pt-[80px] pb-20 px-6 sm:px-10 bg-gradient-to-br from-black via-neutral-900 to-neutral-800 text-white">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-yellow-500 mb-6">Meet Our Trainers</h1>
        <p className="text-lg text-neutral-300 mb-12">
          Our certified professionals are passionate about helping you reach your fitness goals.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Alex Carter", specialty: "Strength & Conditioning", img: "/images/trainers/alex.jpg" },
            { name: "Maya Lee", specialty: "Yoga & Flexibility", img: "/images/trainers/maya.jpg" },
            { name: "Jake Thompson", specialty: "CrossFit & Endurance", img: "/images/trainers/jake.jpg" },
          ].map((trainer, i) => (
            <div
              key={i}
              className="animated-border flex flex-col items-center justify-center text-center rounded-xl p-6 transition hover:shadow-yellow-500/10"
            >
              <img
                src={trainer.img}
                alt={trainer.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-yellow-500 mb-4"
              />
              <h3 className="text-xl font-semibold text-yellow-400">{trainer.name}</h3>
              <p className="text-neutral-400">{trainer.specialty}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
