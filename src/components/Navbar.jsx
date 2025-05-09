import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaListAlt, FaCalendarAlt, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-orange-100 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Judul */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="Logo" className="w-8 h-8 rounded-full" />
          <span className="text-orange-600 text-2xl font-bold">RasaRapi</span>
        </Link>

        {/* Menu */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="flex items-center gap-1 text-gray-700 hover:text-orange-500 transition">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/kategori" className="flex items-center gap-1 text-gray-700 hover:text-orange-500 transition">
              <FaListAlt /> Kategori
            </Link>
          </li>
          <li>
            <Link to="/menu-harian" className="flex items-center gap-1 text-gray-700 hover:text-orange-500 transition">
              <FaCalendarAlt /> Menu Harian
            </Link>
          </li>
          <li>
            <Link to="/profil" className="flex items-center gap-1 text-gray-700 hover:text-orange-500 transition">
              <FaUser /> Profil
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;