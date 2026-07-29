import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { getPlans, parseFeatures, savePlans } from "./planStorage";

function AddPlan() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    duration: "",
    price: "",
    features: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPlan = {
      id: Date.now(),
      name: formData.name.trim(),
      duration: Number(formData.duration),
      price: Number(formData.price),
      features: parseFeatures(formData.features),
    };

    savePlans([...getPlans(), newPlan]);
    navigate("/admin/plans");
  };

  return (
    <PlanForm
      title="Create Plan"
      submitLabel="Create Plan"
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleSubmit}
    />
  );
}

export function PlanForm({
  title,
  submitLabel,
  formData,
  setFormData,
  onSubmit,
}) {
  const inputClass =
    "w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30";
  const handleChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  return (
    <div className="mx-auto max-w-3xl">
      <header className="mb-6 flex items-center">
        <Link
          to="/admin/plans"
          aria-label="Back to plans"
          className="mr-4 rounded-lg border border-slate-700 p-3 text-slate-400 transition hover:bg-slate-800 hover:text-white"
        >
          <FaArrowLeft />
        </Link>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            Membership management
          </p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        </div>
      </header>

      <form
        onSubmit={onSubmit}
        className="space-y-6 rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-xl sm:p-8"
      >
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-medium text-slate-200"
          >
            Plan Name
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength="60"
            placeholder="e.g. Premium Membership"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="duration"
              className="mb-2 block font-medium text-slate-200"
            >
              Duration (Months)
            </label>
            <input
              id="duration"
              type="number"
              name="duration"
              required
              min="1"
              max="120"
              placeholder="e.g. 6"
              value={formData.duration}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="mb-2 block font-medium text-slate-200"
            >
              Price (₹)
            </label>
            <input
              id="price"
              type="number"
              name="price"
              required
              min="0"
              step="1"
              placeholder="e.g. 5000"
              value={formData.price}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="features"
            className="mb-1 block font-medium text-slate-200"
          >
            Features
          </label>
          <p className="mb-2 text-sm text-slate-400">
            Separate each benefit with a comma.
          </p>
          <textarea
            id="features"
            name="features"
            required
            rows="4"
            placeholder="Cardio, Weights, Personal Trainer"
            value={formData.features}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
          />
        </div>

        <div className="grid grid-cols-2 gap-3 border-t border-slate-700 pt-6">
          <Link
            to="/admin/plans"
            className="rounded-lg border border-slate-600 py-3 text-center font-semibold text-white transition hover:bg-slate-700"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPlan;
