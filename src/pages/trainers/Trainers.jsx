import { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

function Trainers() {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        setLoading(true);
        // Using JSONPlaceholder to fetch dummy users to simulate trainers
        // Limiting to 5 to show fewer trainers than members
        const response = await fetch("https://jsonplaceholder.typicode.com/users?_limit=5");
        const data = await response.json();
        
        // Mocking some trainer-specific fields
        const specialties = ["Yoga", "CrossFit", "Bodybuilding", "Cardio", "Weightlifting"];
        
        const mappedTrainers = data.map((user, index) => ({
          ...user,
          specialty: specialties[index % specialties.length],
          experience: `${Math.floor(Math.random() * 10) + 2} Years`,
        }));
        
        setTrainers(mappedTrainers);
      } catch (error) {
        console.error("Failed to fetch trainers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainers();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Trainers
      </h1>

      <div className="bg-white rounded-xl shadow-md p-6 overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <FaSpinner className="animate-spin text-4xl text-blue-600" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="border border-gray-200 rounded-lg p-5 hover:shadow-lg transition">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                    {trainer.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{trainer.name}</h3>
                    <p className="text-sm text-gray-500">{trainer.specialty}</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-semibold">Email:</span> {trainer.email}</p>
                  <p><span className="font-semibold">Phone:</span> {trainer.phone}</p>
                  <p><span className="font-semibold">Experience:</span> {trainer.experience}</p>
                </div>
                
                <button className="mt-5 w-full bg-blue-50 text-blue-600 font-medium py-2 rounded hover:bg-blue-600 hover:text-white transition">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Trainers;
