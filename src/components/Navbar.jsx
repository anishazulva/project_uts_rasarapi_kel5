import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-semibold">RasaRapi</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="/kategori" className="text-white">Kategori</Link></li>
          <li><Link to="/menu-harian" className="text-white">Menu Harian</Link></li>
          <li><Link to="/profil" className="text-white">Profil</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;