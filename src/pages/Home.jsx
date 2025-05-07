import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';

const recipes = [
  { id: 1, title: 'Ayam Bakar', image: 'https://source.unsplash.com/400x300/?grilled-chicken' },
  { id: 2, title: 'Sayur Asem', image: 'https://source.unsplash.com/400x300/?vegetables' },
  { id: 3, title: 'Nasi Goreng', image: 'https://source.unsplash.com/400x300/?fried-rice' },
  { id: 4, title: 'Mie Goreng', image: 'https://source.unsplash.com/400x300/?fried-noodles' },
  { id: 5, title: 'Sate', image: 'https://source.unsplash.com/400x300/?satay' },
];

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter recipes based on search term
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Selamat datang di RasaRapi</h1>
      <p className="text-lg mb-8">Temukan resep terbaik dan atur menu harianmu tanpa ribet!</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Cari resep..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded mb-6 w-full md:w-1/3"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} title={recipe.title} image={recipe.image} id={recipe.id} />
          ))
        ) : (
          <p className="col-span-3 text-center">Resep tidak ditemukan</p>
        )}
      </div>
    </div>
  );
}

export default Home;