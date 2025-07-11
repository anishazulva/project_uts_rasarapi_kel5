import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import RecipeDetail from "./pages/RecipeDetail";
import DailyMenu from "./pages/DailyMenu";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index";
import KelolaKategori from "./pages/KelolaKategori";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar tetap di atas */}
        <Navbar />
        
        {/* Konten utama dengan padding-top agar tidak tertutup oleh Navbar */}
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kategori" element={<Categories />} />
            <Route path="/resep/:id" element={<RecipeDetail />} />
            <Route path="/menu-harian" element={<DailyMenu />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/kelola-kategori" element={<KelolaKategori />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;