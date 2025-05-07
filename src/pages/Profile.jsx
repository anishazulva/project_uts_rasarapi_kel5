import React from "react";
import { useState } from "react";

const savedRecipes = [
  { id: 1, title: "Ayam Bakar", image: "https://source.unsplash.com/400x300/?grilled-chicken" },
  { id: 2, title: "Sayur Asem", image: "https://source.unsplash.com/400x300/?vegetables" },
];

function Profile() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen px-4 py-8 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Profil & Favorit</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-orange-500 text-white rounded-xl shadow hover:bg-orange-600"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-4">Resep yang Disimpan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {savedRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
              <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{recipe.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;