export const PLAN_STORAGE_KEY = "gymPlans";

export const defaultPlans = [
  {
    id: 1,
    name: "Basic Monthly",
    duration: 1,
    price: 1500,
    features: ["Cardio area", "Weights area"],
  },
  {
    id: 2,
    name: "Pro Quarterly",
    duration: 3,
    price: 4000,
    features: ["All access", "Personal trainer", "Sauna"],
  },
  {
    id: 3,
    name: "Elite Yearly",
    duration: 12,
    price: 12000,
    features: ["All access", "24/7 entry", "Nutritionist"],
  },
];

const normalizePlan = (plan) => ({
  ...plan,
  features: Array.isArray(plan.features)
    ? plan.features
    : String(plan.features || "")
        .split(",")
        .map((feature) => feature.trim())
        .filter(Boolean),
});

export function getPlans() {
  try {
    const savedPlans = JSON.parse(localStorage.getItem(PLAN_STORAGE_KEY));

    if (Array.isArray(savedPlans)) {
      return savedPlans.map(normalizePlan);
    }
  } catch {
    // Invalid saved data is replaced with the safe defaults below.
  }

  localStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify(defaultPlans));
  return defaultPlans;
}

export function savePlans(plans) {
  localStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify(plans));
}

export function parseFeatures(features) {
  return features
    .split(",")
    .map((feature) => feature.trim())
    .filter(Boolean);
}
