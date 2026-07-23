import { FaBell, FaUserCircle, FaBars } from "react-icons/fa";

function Navbar({ setMobileMenuOpen }) {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-4">
        <button 
          className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
          onClick={() => setMobileMenuOpen(true)}
        >
          <FaBars size={24} />
        </button>
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-gray-500 hover:text-blue-600">
          <FaBell size={20} />
        </button>

        <div className="flex items-center gap-2">
          <FaUserCircle
            size={28}
            className="text-blue-600"
          />

          <span className="font-medium">
            Admin
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;