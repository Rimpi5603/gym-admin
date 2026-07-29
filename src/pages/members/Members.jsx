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
      <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
        Members
      </h1>

      <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800 p-4 shadow-md sm:p-6">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <FaSpinner className="animate-spin text-4xl text-blue-600" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-[650px] w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-700 text-gray-300 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 font-semibold border-b border-slate-600">Name</th>
                  <th className="py-3 px-6 font-semibold border-b border-slate-600">Email</th>
                  <th className="py-3 px-6 font-semibold border-b border-slate-600">Phone</th>
                  <th className="py-3 px-6 font-semibold border-b border-slate-600">City</th>
                  <th className="py-3 px-6 font-semibold border-b border-slate-600 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-300 text-sm font-light">
                {members.map((member) => (
                  <tr key={member.id} className="border-b border-slate-700 hover:bg-slate-700/50 transition">
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
                      <span className="bg-green-900/50 text-green-400 py-1 px-3 rounded-full text-xs font-semibold border border-green-800">
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
