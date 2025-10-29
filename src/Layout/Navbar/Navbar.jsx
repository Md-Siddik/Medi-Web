import { ShoppingCart, User, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-semibold text-emerald-600 tracking-tight">
          PharmaHub
        </h1>

        {/* Center Nav Links */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          <Link to="/" className="hover:text-emerald-600 font-medium">
            Home
          </Link>
          <Link to="/pharmacies" className="hover:text-emerald-600 font-medium">
            Pharmacies
          </Link>
          <a href="#" className="hover:text-emerald-600 font-medium">
            Doctors
          </a>
          <a href="#" className="hover:text-emerald-600 font-medium">
            About
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Search size={20} />
          </button>
          {/* Cart Icon */}
          <button className="p-2 rounded-full hover:bg-gray-100">
            <ShoppingCart size={20} />
          </button>
          {/* Login */}
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition">
            <User size={18} className="inline mr-1" />
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
