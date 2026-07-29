import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PlanForm } from "./AddPlan";
import { getPlans, parseFeatures, savePlans } from "./planStorage";

function EditPlan() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(() => {
    const plan = getPlans().find((item) => String(item.id) === id);
    return plan ? {
      name: plan.name,
      duration: String(plan.duration),
      price: String(plan.price),
      features: plan.features.join(", "),
    } : null;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedPlans = getPlans().map((plan) =>
      String(plan.id) === id
        ? {
            ...plan,
            name: formData.name.trim(),
            duration: Number(formData.duration),
            price: Number(formData.price),
            features: parseFeatures(formData.features),
          }
        : plan,
    );

    savePlans(updatedPlans);
    navigate("/admin/plans");
  };

  if (!formData) {
    return (
      <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8 text-center">
        <h1 className="text-2xl font-bold text-white">Plan not found</h1>
        <p className="mt-2 text-slate-400">This plan may have already been deleted.</p>
        <Link to="/admin/plans" className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500">
          Back to Plans
        </Link>
      </div>
    );
  }

  return (
    <PlanForm
      title="Edit Plan"
      submitLabel="Save Changes"
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleSubmit}
    />
  );
}

export default EditPlan;
