import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCheck,
  FaClock,
  FaEdit,
  FaPlus,
  FaTrash,
} from "react-icons/fa";
import { getPlans, savePlans } from "./planStorage";

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function Plans() {
  const [plans, setPlans] = useState(getPlans);
  const [planToDelete, setPlanToDelete] = useState(null);

  const handleDelete = () => {
    const updatedPlans = plans.filter((plan) => plan.id !== planToDelete.id);
    savePlans(updatedPlans);
    setPlans(updatedPlans);
    setPlanToDelete(null);
  };

  return (
    <div className="mx-auto max-w-7xl">
      <header className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-400">
            Membership management
          </p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Plans</h1>
          <p className="mt-2 text-sm text-slate-400">
            Create plans and keep pricing, duration, and benefits up to date.
          </p>
        </div>
        <Link
          to="/admin/plans/add"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <FaPlus /> Create Plan
        </Link>
      </header>

      {plans.length === 0 ? (
        <section className="rounded-2xl border border-dashed border-slate-600 bg-slate-800/60 px-6 py-16 text-center">
          <h2 className="text-xl font-semibold text-white">No plans yet</h2>
          <p className="mt-2 text-slate-400">Create your first membership plan to get started.</p>
          <Link
            to="/admin/plans/add"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500"
          >
            <FaPlus /> Create Plan
          </Link>
        </section>
      ) : (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className="flex flex-col rounded-xl border border-slate-700 bg-slate-800 p-4 shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:border-slate-600"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-bold text-white">{plan.name}</h2>
                <span className="flex shrink-0 items-center gap-1 rounded-full border border-blue-800 bg-blue-950/60 px-2 py-1 text-[11px] font-semibold text-blue-300">
                  <FaClock /> {plan.duration} {plan.duration === 1 ? "month" : "months"}
                </span>
              </div>

              <p className="mt-3 text-xl font-extrabold text-white">
                {currency.format(plan.price)}
                <span className="ml-1 text-sm font-normal text-slate-400">/ plan</span>
              </p>

              <div className="my-3 h-px bg-slate-700" />
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Included features
              </p>
              <ul className="mb-3 space-y-1.5">
                {plan.features.map((feature, index) => (
                  <li key={`${plan.id}-${index}`} className="flex gap-2 text-xs text-slate-300">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-[9px] text-emerald-400">
                      <FaCheck />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto grid grid-cols-2 gap-2 border-t border-slate-700 pt-3">
                <Link
                  to={`/admin/plans/edit/${plan.id}`}
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-600 bg-slate-700 px-2 py-2 text-sm font-semibold text-white transition hover:bg-slate-600"
                >
                  <FaEdit /> Edit
                </Link>
                <button
                  type="button"
                  onClick={() => setPlanToDelete(plan)}
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-red-900 bg-red-950/40 px-2 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-900/50"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </article>
          ))}
        </section>
      )}

      {planToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
          <div role="dialog" aria-modal="true" aria-labelledby="delete-title" className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-2xl">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-red-500/15 text-red-400">
              <FaTrash />
            </div>
            <h2 id="delete-title" className="text-xl font-bold text-white">Delete this plan?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              <span className="font-semibold text-slate-200">{planToDelete.name}</span> will be permanently removed. This action cannot be undone.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button type="button" onClick={() => setPlanToDelete(null)} className="rounded-lg border border-slate-600 px-4 py-2.5 font-semibold text-white hover:bg-slate-700">
                Cancel
              </button>
              <button type="button" onClick={handleDelete} className="rounded-lg bg-red-600 px-4 py-2.5 font-semibold text-white hover:bg-red-500">
                Delete Plan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Plans;
