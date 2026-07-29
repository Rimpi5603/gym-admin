import { useState, useEffect } from "react";
import { FaSpinner, FaDownload } from "react-icons/fa";

function Payments() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        setLoading(true);
        // Using JSONPlaceholder to fetch dummy users to simulate payment records
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        
        const statuses = ["Paid", "Paid", "Paid", "Pending", "Failed"];
        const methods = ["Credit Card", "UPI", "Cash", "Debit Card"];

        // Mock payment data based on users
        const mockPayments = data.map((user, index) => {
          // Generate a random recent date
          const date = new Date();
          date.setDate(date.getDate() - Math.floor(Math.random() * 30));
          
          return {
            id: `TXN-${10000 + user.id * 13}`,
            memberName: user.name,
            amount: (Math.floor(Math.random() * 10) + 1) * 1000,
            date: date.toLocaleDateString(),
            status: statuses[index % statuses.length],
            method: methods[index % methods.length],
          };
        });
        
        setPayments(mockPayments);
      } catch (error) {
        console.error("Failed to fetch payments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case "Paid":
        return <span className="bg-green-900/50 text-green-400 py-1 px-3 rounded-full text-xs font-semibold border border-green-800">Paid</span>;
      case "Pending":
        return <span className="bg-yellow-900/50 text-yellow-400 py-1 px-3 rounded-full text-xs font-semibold border border-yellow-800">Pending</span>;
      case "Failed":
        return <span className="bg-red-900/50 text-red-400 py-1 px-3 rounded-full text-xs font-semibold border border-red-800">Failed</span>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Payments
        </h1>
        <button className="flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700 sm:w-auto">
          <FaDownload className="mr-2" /> Export
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800 p-4 shadow-md sm:p-6">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <FaSpinner className="animate-spin text-4xl text-blue-600" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-[800px] w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-700 text-gray-300 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 font-semibold border-b border-slate-600">Transaction ID</th>
                  <th className="py-3 px-6 font-semibold border-b border-slate-600">Member</th>
                  <th className="py-3 px-6 font-semibold border-b border-slate-600">Amount</th>
                  <th className="py-3 px-6 font-semibold border-b border-slate-600">Date</th>
                  <th className="py-3 px-6 font-semibold border-b border-slate-600">Method</th>
                  <th className="py-3 px-6 font-semibold border-b border-slate-600 text-center">Status</th>
                  <th className="py-3 px-6 font-semibold border-b border-slate-600 text-center">Receipt</th>
                </tr>
              </thead>
              <tbody className="text-gray-300 text-sm font-light">
                {payments.map((payment) => (
                  <tr key={payment.id} className="border-b border-slate-700 hover:bg-slate-700/50 transition">
                    <td className="py-3 px-6 font-medium text-white">
                      {payment.id}
                    </td>
                    <td className="py-3 px-6">
                      {payment.memberName}
                    </td>
                    <td className="py-3 px-6 font-semibold text-white">
                      ₹{payment.amount}
                    </td>
                    <td className="py-3 px-6">
                      {payment.date}
                    </td>
                    <td className="py-3 px-6">
                      {payment.method}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {getStatusBadge(payment.status)}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {payment.status === "Paid" ? (
                        <button className="text-blue-400 hover:text-blue-300 font-medium hover:underline">View</button>
                      ) : (
                        <span className="text-gray-500">-</span>
                      )}
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

export default Payments;
