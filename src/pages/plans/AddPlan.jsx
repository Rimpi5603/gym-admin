import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function AddPlan() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    duration: "",
    price: "",
    features: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get existing plans
    const storedPlans = JSON.parse(localStorage.getItem("gymPlans")) || [];
    
    // Create new plan with unique ID
    const newPlan = {
      id: Date.now(), // Generate unique ID
      name: formData.name,
      duration: parseInt(formData.duration),
      price: parseInt(formData.price),
      features: formData.features,
    };
    
    // Save to local storage
    localStorage.setItem("gymPlans", JSON.stringify([...storedPlans, newPlan]));
    
    // Navigate back to plans list
    navigate("/plans");
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <Link to="/plans" className="text-gray-500 hover:text-blue-600 transition mr-4">
          <FaArrowLeft className="text-xl" />
        </Link>
        <h1 className="text-4xl font-bold text-gray-800">
          Add New Plan
        </h1>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="block mb-2 font-medium text-gray-700">Plan Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Premium Membership"
              value={formData.name}
              onChange={handleChange}
              className="w-full box-border rounded-lg border border-gray-300 py-3 px-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium text-gray-700">Duration (Months)</label>
              <input
                type="number"
                name="duration"
                required
                min="1"
                placeholder="e.g. 6"
                value={formData.duration}
                onChange={handleChange}
                className="w-full box-border rounded-lg border border-gray-300 py-3 px-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>
            
            <div>
              <label className="block mb-2 font-medium text-gray-700">Price (₹)</label>
              <input
                type="number"
                name="price"
                required
                min="0"
                placeholder="e.g. 5000"
                value={formData.price}
                onChange={handleChange}
                className="w-full box-border rounded-lg border border-gray-300 py-3 px-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">Features (comma separated)</label>
            <textarea
              name="features"
              required
              rows="3"
              placeholder="e.g. Cardio, Weights, Personal Trainer"
              value={formData.features}
              onChange={handleChange}
              className="w-full box-border rounded-lg border border-gray-300 py-3 px-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
            ></textarea>
          </div>

          <div className="flex gap-4 pt-4">
            <Link 
              to="/plans"
              className="flex-1 text-center bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Save Plan
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddPlan;
