import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaAngleDoubleRight,
  FaCalendarCheck,
  FaChartBar,
  FaClipboardList,
  FaCog,
  FaIdCard,
  FaMoneyBillWave,
  FaSignOutAlt,
  FaTachometerAlt,
  FaUsers,
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import BrandLogo from "./BrandLogo";

const menuItems = [
  { title: "Dashboard", path: "/dashboard", icon: FaTachometerAlt },
  { title: "Members", path: "/members", icon: FaUsers },
  { title: "Plans", path: "/admin/plans", icon: FaIdCard },
  { title: "Subscriptions", path: "/subscriptions", icon: FaClipboardList },
  { title: "Payments", path: "/payments", icon: FaMoneyBillWave },
  { title: "Attendance", path: "/attendance", icon: FaCalendarCheck },
  { title: "Reports", path: "/reports", icon: FaChartBar },
  { title: "Settings", path: "/settings", icon: FaCog },
];

function Sidebar({ mobileMenuOpen, setMobileMenuOpen }) {
  const [collapsed, setCollapsed] = useState(false);
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  const closeMobileMenu = () => {
    if (window.innerWidth < 768) setMobileMenuOpen(false);
  };

  return (
    <>
      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-screen flex-col bg-slate-900 text-white transition-all duration-300 md:relative md:translate-x-0 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } ${collapsed ? "w-20" : "w-64"}`}
      >
        <div className={`flex min-h-[72px] items-center border-b border-slate-700 p-5 ${collapsed ? "justify-center" : "justify-between"}`}>
          {!collapsed && (
            <BrandLogo className="h-14 w-24" />
          )}
          <button
            type="button"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            onClick={() => {
              if (window.innerWidth < 768) setMobileMenuOpen(false);
              else setCollapsed((value) => !value);
            }}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-lg text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            {collapsed ? (
              <FaAngleDoubleRight aria-hidden="true" />
            ) : (
              <FaBars aria-hidden="true" />
            )}
          </button>
        </div>

        <nav className="mt-5 flex-1 overflow-hidden">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                title={collapsed ? item.title : undefined}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `flex items-center px-5 py-4 transition-colors ${
                    collapsed ? "justify-center" : "gap-4"
                  } ${isActive ? "bg-blue-600 text-white" : "text-slate-200 hover:bg-slate-800 hover:text-white"}`
                }
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center text-lg">
                  <Icon />
                </span>
                {!collapsed && <span>{item.title}</span>}
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-auto p-4">
          <button
            type="button"
            onClick={handleLogout}
            title={collapsed ? "Logout" : undefined}
            className={`flex w-full items-center rounded-lg bg-red-600 px-4 py-3 transition hover:bg-red-700 ${
              collapsed ? "justify-center" : "gap-3"
            }`}
          >
            <FaSignOutAlt className="shrink-0" />
            {!collapsed && "Logout"}
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
