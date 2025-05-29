export default function MembershipPage() {
  return (
    <main className="min-h-screen pt-[80px] pb-20 px-6 sm:px-10 bg-gradient-to-br from-black via-neutral-900 to-neutral-800 text-white">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-yellow-500 mb-6">Membership Plans</h1>
        <p className="text-lg text-neutral-300 mb-12">
          Choose the plan that fits your lifestyle and start your fitness journey today.
        </p>

        <div className="grid gap-8 sm:grid-cols-3">
          {[
            {
              title: "Basic",
              price: "$29/mo",
              features: [
                "Access to gym equipment",
                "Locker room access",
                "Group classes",
              ],
            },
            {
              title: "Pro",
              price: "$49/mo",
              features: [
                "Everything in Basic",
                "Personal training sessions",
                "Nutrition guidance",
                "Priority class booking",
              ],
            },
            {
              title: "Elite",
              price: "$79/mo",
              features: [
                "Everything in Pro",
                "Unlimited personal training",
                "Spa and massage access",
                "Exclusive workshops",
              ],
            },
          ].map((plan, i) => (
            <div
              key={i}
              className="bg-neutral-800 rounded-xl p-6 border border-yellow-500 shadow-lg hover:shadow-yellow-500/30 transition"
            >
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">{plan.title}</h2>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6 text-neutral-300 text-left list-disc list-inside space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-full font-semibold transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
