import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

function Plans() {
  const [plans, setPlans] = useState([]);

  // Load plans from local storage or set initial defaults
  useEffect(() => {
    const storedPlans = JSON.parse(localStorage.getItem("gymPlans"));
    
    if (storedPlans && storedPlans.length > 0) {
      setPlans(storedPlans);
    } else {
      // Default dummy data if empty
      const initialPlans = [
        { id: 1, name: "Basic Monthly", duration: 1, price: 1500, features: "Cardio, Weights" },
        { id: 2, name: "Pro Quarterly", duration: 3, price: 4000, features: "All Access, Trainer, Sauna" },
        { id: 3, name: "Elite Yearly", duration: 12, price: 12000, features: "All Access, 24/7, Nutritionist" },
      ];
      setPlans(initialPlans);
      localStorage.setItem("gymPlans", JSON.stringify(initialPlans));
    }
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this plan?")) {
      const updatedPlans = plans.filter((plan) => plan.id !== id);
      setPlans(updatedPlans);
      localStorage.setItem("gymPlans", JSON.stringify(updatedPlans));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Membership Plans
        </h1>
        <Link
          to="/plans/add"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center transition"
        >
          <FaPlus className="mr-2" /> Add Plan
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.length === 0 ? (
            <p className="text-gray-500">No plans found. Add a new plan.</p>
          ) : (
            plans.map((plan) => (
              <div key={plan.id} className="border border-gray-200 rounded-lg p-5 hover:shadow-lg transition flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {plan.duration} Month{plan.duration > 1 ? "s" : ""}
                    </span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-4">
                    ₹{plan.price}
                  </p>
                  <p className="text-sm text-gray-600 mb-6">
                    <span className="font-semibold">Features:</span> {plan.features}
                  </p>
                </div>
                
                <div className="flex space-x-2 border-t pt-4">
                  <Link
                    to={`/plans/edit/${plan.id}`}
                    className="flex-1 bg-yellow-100 text-yellow-700 font-medium py-2 rounded flex items-center justify-center hover:bg-yellow-200 transition"
                  >
                    <FaEdit className="mr-2" /> Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(plan.id)}
                    className="flex-1 bg-red-100 text-red-700 font-medium py-2 rounded flex items-center justify-center hover:bg-red-200 transition"
                  >
                    <FaTrash className="mr-2" /> Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Plans;