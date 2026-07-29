import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DashboardCard from "../components/DashboardCard";
import { FaSpinner } from "react-icons/fa";

function Dashboard() {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalMembers: 0,
    activePlans: 0,
    revenue: "₹0",
    attendance: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from a real dummy API
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        // Hitting a real dummy API endpoint
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        
        // Using the API response to generate our dashboard stats dynamically
        const totalUsers = users.length; // usually 10

        const dynamicData = {
          totalMembers: totalUsers * 55, // e.g. 550
          activePlans: totalUsers * 12,  // e.g. 120
          revenue: `₹${(totalUsers * 8500).toLocaleString()}`, // e.g. ₹85,000
          attendance: totalUsers * 30,   // e.g. 300
        };
        
        setStats(dynamicData);
      } catch (error) {
        console.error("Failed to fetch dashboard data from dummy API", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <>
      {/* Page Heading */}
      <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:mb-8">
        Dashboard
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <FaSpinner className="animate-spin text-4xl text-blue-600" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          <DashboardCard title="Total Members" value={stats.totalMembers} />
          <DashboardCard title="Active Plans" value={stats.activePlans} />
          <DashboardCard title="Revenue" value={stats.revenue} />
          <DashboardCard title="Attendance" value={stats.attendance} />
        </div>
      )}
    </>
  );
}

export default Dashboard;
