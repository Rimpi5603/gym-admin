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
        return <span className="bg-green-100 text-green-700 py-1 px-3 rounded-full text-xs font-semibold">Paid</span>;
      case "Pending":
        return <span className="bg-yellow-100 text-yellow-700 py-1 px-3 rounded-full text-xs font-semibold">Pending</span>;
      case "Failed":
        return <span className="bg-red-100 text-red-700 py-1 px-3 rounded-full text-xs font-semibold">Failed</span>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Payments
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center transition">
          <FaDownload className="mr-2" /> Export
        </button>
      </div>

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
                  <th className="py-3 px-6 font-semibold">Transaction ID</th>
                  <th className="py-3 px-6 font-semibold">Member</th>
                  <th className="py-3 px-6 font-semibold">Amount</th>
                  <th className="py-3 px-6 font-semibold">Date</th>
                  <th className="py-3 px-6 font-semibold">Method</th>
                  <th className="py-3 px-6 font-semibold text-center">Status</th>
                  <th className="py-3 px-6 font-semibold text-center">Receipt</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {payments.map((payment) => (
                  <tr key={payment.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                    <td className="py-3 px-6 font-medium text-gray-800">
                      {payment.id}
                    </td>
                    <td className="py-3 px-6">
                      {payment.memberName}
                    </td>
                    <td className="py-3 px-6 font-semibold text-gray-900">
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
                        <button className="text-blue-600 hover:text-blue-800 font-medium hover:underline">View</button>
                      ) : (
                        <span className="text-gray-400">-</span>
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