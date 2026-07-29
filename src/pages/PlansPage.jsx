import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";

const plans = [
  {
    name: "Starter",
    price: "999",
    description: "A simple plan to start building a healthier routine.",
    features: ["Gym floor access", "Cardio equipment", "Locker room access", "Fitness assessment"],
  },
  {
    name: "Pro Fitness",
    price: "1,499",
    description: "Our most popular membership for consistent training.",
    featured: true,
    features: ["Everything in Starter", "Unlimited group classes", "Personal training session", "Custom workout plan", "Nutrition consultation"],
  },
  {
    name: "Elite",
    price: "2,499",
    description: "Premium coaching and complete support for your goals.",
    features: ["Everything in Pro Fitness", "4 PT sessions every month", "Priority class booking", "Monthly body composition scan", "Dedicated fitness coach"],
  },
];

function PlansPage() {
  return (
    <main className="min-h-screen bg-[#171717] px-5 py-8 text-white sm:px-6 sm:py-10 md:px-12 md:py-14">
      <div className="mx-auto max-w-7xl">
        <Link to="/" className="inline-flex text-sm font-semibold text-zinc-300 transition hover:text-white">← Back to Home</Link>

        <header className="mx-auto max-w-3xl py-12 text-center md:py-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#ff4657]">Membership plans</p>

          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">Find the plan that fits your goals.</h1> 

          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Flexible gym memberships with everything you need to train better, feel stronger, and stay consistent.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => <PlanCard key={plan.name} plan={plan} />)}
        </section>

        <p className="mt-10 text-center text-sm text-zinc-500">All plans include a free gym tour. Cancel or upgrade your plan anytime.</p>
      </div>
    </main>
  );
}

function PlanCard({ plan }) {
  return (
    <article className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 md:p-10 ${plan.featured ? "border-[#ff4657] bg-[#ff4657]" : "border-white/10 bg-[#222222]"}`}>
      {plan.featured && <span className="absolute right-7 top-0 rounded-b-lg bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#171717]">Most popular</span>}
      <h2 className="text-3xl font-extrabold">{plan.name}</h2>
      <p className={`mt-4 min-h-14 leading-relaxed ${plan.featured ? "text-white/90" : "text-zinc-400"}`}>{plan.description}</p>
      <div className="my-8 flex items-end gap-2">
        <span className="text-2xl font-bold">₹</span>
        <span className="text-5xl font-extrabold leading-none sm:text-6xl">{plan.price}</span>
        <span className={plan.featured ? "text-white/90" : "text-zinc-400"}>/ month</span>
      </div>
      <ul className="mb-9 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <span className={`flex h-5 w-5 items-center justify-center rounded-full text-xs ${plan.featured ? "bg-white text-[#ff4657]" : "bg-[#ff4657] text-white"}`}><FaCheck /></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link to="/contacts" className={`mt-auto rounded-lg px-6 py-3 text-center font-bold transition ${plan.featured ? "bg-white text-[#171717] hover:bg-zinc-100" : "bg-[#ff4657] text-white hover:bg-[#e63c4c]"}`}>
        Choose {plan.name}
      </Link>
    </article>
  );
}

export default PlansPage;
