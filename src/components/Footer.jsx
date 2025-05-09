import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">&copy; 2025 RasaRapi. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" className="text-white hover:text-blue-500 transition-colors">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-blue-400 transition-colors">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-pink-500 transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" className="text-white hover:text-blue-700 transition-colors">
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-400">Crafted with ❤️ by Team RasaRapi Kelompok 5</p>
      </div>
    </footer>
  );
}

export default Footer;