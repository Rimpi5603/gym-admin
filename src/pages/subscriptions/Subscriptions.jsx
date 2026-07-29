import { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

function Subscriptions() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        setLoading(true);
        // Using JSONPlaceholder to fetch dummy users to simulate subscriptions
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        
        const plans = ["Monthly Plan", "Quarterly Plan", "Half-Yearly Plan", "Yearly Plan"];
        const statuses = ["Active", "Expiring Soon", "Expired"];

        // Mock subscription data based on users
        const mockSubscriptions = data.map((user, index) => {
          const startDate = new Date();
          startDate.setMonth(startDate.getMonth() - Math.floor(Math.random() * 6));
          
          const endDate = new Date(startDate);
          endDate.setMonth(endDate.getMonth() + (index % 4 === 0 ? 1 : index % 4 === 1 ? 3 : index % 4 === 2 ? 6 : 12));

          const status = endDate < new Date() ? "Expired" : (endDate.getTime() - new Date().getTime()) < (15 * 24 * 60 * 60 * 1000) ? "Expiring Soon" : "Active";

          return {
            id: user.id,
            memberName: user.name,
            plan: plans[index % plans.length],
            startDate: startDate.toLocaleDateString(),
            endDate: endDate.toLocaleDateString(),
            status: status,
          };
        });
        
        setSubscriptions(mockSubscriptions);
      } catch (error) {
        console.error("Failed to fetch subscriptions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case "Active":
        return <span className="bg-green-900/50 text-green-400 py-1 px-3 rounded-full text-xs font-semibold border border-green-800">Active</span>;
      case "Expiring Soon":
        return <span className="bg-yellow-900/50 text-yellow-400 py-1 px-3 rounded-full text-xs font-semibold border border-yellow-800">Expiring Soon</span>;
      case "Expired":
        return <span className="bg-red-900/50 text-red-400 py-1 px-3 rounded-full text-xs font-semibold border border-red-800">Expired</span>;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-6">
        Subscriptions
      </h1>

      <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-md p-6 overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <FaSpinner className="animate-spin text-4xl text-blue-600" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-700 text-gray-300 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 font-semibold border-b border-slate-600">Member</th>
                  <th className="py-3 px-6 font-semibold border-b border-slate-600">Plan</th>
                  <th className="py-3 px-6 font-semibold border-b border-slate-600">Start Date</th>
                  <th className="py-3 px-6 font-semibold border-b border-slate-600">End Date</th>
                  <th className="py-3 px-6 font-semibold border-b border-slate-600 text-center">Status</th>
                  <th className="py-3 px-6 font-semibold border-b border-slate-600 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-300 text-sm font-light">
                {subscriptions.map((sub) => (
                  <tr key={sub.id} className="border-b border-slate-700 hover:bg-slate-700/50 transition">
                    <td className="py-3 px-6 font-medium text-white">
                      {sub.memberName}
                    </td>
                    <td className="py-3 px-6">
                      {sub.plan}
                    </td>
                    <td className="py-3 px-6">
                      {sub.startDate}
                    </td>
                    <td className="py-3 px-6">
                      {sub.endDate}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {getStatusBadge(sub.status)}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <button className="text-blue-400 hover:text-blue-300 font-medium">Manage</button>
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

export default Subscriptions;