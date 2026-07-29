import { FaBell, FaUserCircle, FaBars } from "react-icons/fa";

function Navbar({ setMobileMenuOpen }) {
  return (
    <header className="h-16 bg-slate-800 border-b border-slate-700 shadow flex items-center justify-between gap-3 px-4 md:px-6">
      <div className="flex items-center gap-4">
        <button 
          className="md:hidden text-gray-400 hover:text-blue-500 focus:outline-none"
          onClick={() => setMobileMenuOpen(true)}
        >
          <FaBars size={24} />
        </button>
        <h1 className="text-xl md:text-2xl font-bold text-white">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-3 sm:gap-6">
        <button className="text-gray-400 hover:text-blue-400">
          <FaBell size={20} />
        </button>

        <div className="flex items-center gap-2">
          <FaUserCircle
            size={28}
            className="text-blue-500"
          />

          <span className="hidden font-medium text-gray-200 sm:inline">
            Admin
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
