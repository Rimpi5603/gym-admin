import { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

function Members() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        // Using JSONPlaceholder to fetch dummy users to simulate members
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error("Failed to fetch members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Members
      </h1>

      <div className="bg-white rounded-xl shadow-md p-6 overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <FaSpinner className="animate-spin text-4xl text-blue-600" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 font-semibold">Name</th>
                  <th className="py-3 px-6 font-semibold">Email</th>
                  <th className="py-3 px-6 font-semibold">Phone</th>
                  <th className="py-3 px-6 font-semibold">City</th>
                  <th className="py-3 px-6 font-semibold text-center">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {members.map((member) => (
                  <tr key={member.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                    <td className="py-3 px-6">
                      <div className="flex items-center">
                        <span className="font-medium">{member.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6">
                      {member.email}
                    </td>
                    <td className="py-3 px-6">
                      {member.phone}
                    </td>
                    <td className="py-3 px-6">
                      {member.address.city}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="bg-green-100 text-green-700 py-1 px-3 rounded-full text-xs font-semibold">
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Members;