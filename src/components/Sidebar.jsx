import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTachometerAlt,
  FaUsers,
  FaClipboardList,
  FaMoneyBillWave,
  FaCalendarCheck,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

function Sidebar({ mobileMenuOpen, setMobileMenuOpen }) {
  const [collapsed, setCollapsed] = useState(false);

  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      title: "Members",
      path: "/members",
      icon: <FaUsers />,
    },
    {
      title: "Plans",
      path: "/plans",
      icon: <FaClipboardList />,
    },
    {
      title: "Subscriptions",
      path: "/subscriptions",
      icon: <FaClipboardList />,
    },
    {
      title: "Payments",
      path: "/payments",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "Attendance",
      path: "/attendance",
      icon: <FaCalendarCheck />,
    },
    {
      title: "Reports",
      path: "/reports",
      icon: <FaChartBar />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`bg-slate-900 text-white flex flex-col transition-all duration-300 min-h-screen
          fixed inset-y-0 left-0 z-50 md:relative md:translate-x-0
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          ${collapsed ? "w-20" : "w-64"}
        `}
      >

      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b border-slate-700">
        {!collapsed && (
          <h2 className="text-xl font-bold">
            🏋 Gym Admin
          </h2>
        )}

        <button
          onClick={() => {
            if (window.innerWidth < 768) {
              setMobileMenuOpen(false);
            } else {
              setCollapsed(!collapsed);
            }
          }}
          className="text-xl"
        >
          <FaBars />
        </button>
      </div>

      {/* Menu */}
<nav className="mt-5 flex-1">
          {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => {
              if (window.innerWidth < 768) {
                setMobileMenuOpen(false);
              }
            }}
            className={({ isActive }) =>
              `flex items-center ${
                collapsed ? "justify-center" : "gap-4"
              } px-5 py-4 transition-all ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>

            {!collapsed && item.title}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
<div className="p-4 mt-auto">   

       <button
  onClick={handleLogout}
  className={`flex items-center ${
    collapsed ? "justify-center" : "gap-3"
  } bg-red-600 hover:bg-red-700 w-full px-4 py-3 rounded-lg transition`}
>
  <FaSignOutAlt />
  {!collapsed && "Logout"}
</button>


      </div>
    </aside>
    </>
  );
}

export default Sidebar;