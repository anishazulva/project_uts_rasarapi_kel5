import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';

const recipes = [
  { id: 1, title: 'Ayam Bakar', image: 'https://source.unsplash.com/400x300/?grilled-chicken' },
  { id: 2, title: 'Sayur Asem', image: 'https://source.unsplash.com/400x300/?vegetables' },
  { id: 3, title: 'Nasi Goreng', image: 'https://source.unsplash.com/400x300/?fried-rice' },
  { id: 4, title: 'Mie Goreng', image: 'https://source.unsplash.com/400x300/?fried-noodles' },
  { id: 5, title: 'Sate', image: 'https://source.unsplash.com/400x300/?satay' },
  { id: 6, title: 'Ayam Goreng Lengkuas', image: 'https://source.unsplash.com/400x300/?fried-chicken' },
  { id: 7, title: 'Ayam Rica-Rica', image: 'https://source.unsplash.com/400x300/?spicy-chicken' },
  { id: 8, title: 'Opor Ayam', image: 'https://source.unsplash.com/400x300/?chicken-curry' },
  { id: 9, title: 'Ayam Kecap Pedas Manis', image: 'https://source.unsplash.com/400x300/?sweet-spicy-chicken' },
  { id: 10, title: 'Semur Daging', image: 'https://source.unsplash.com/400x300/?beef-stew' },
  { id: 11, title: 'Rendang Daging Sapi', image: 'https://source.unsplash.com/400x300/?beef-rendang' },
  { id: 12, title: 'Daging Lada Hitam', image: 'https://source.unsplash.com/400x300/?black-pepper-beef' },
  { id: 13, title: 'Empal Gepuk', image: 'https://source.unsplash.com/400x300/?beef-empal' },
  { id: 14, title: 'Sop Iga Sapi', image: 'https://source.unsplash.com/400x300/?beef-ribs-soup' },
  { id: 15, title: 'Ikan Goreng Kuning', image: 'https://source.unsplash.com/400x300/?fried-fish' },
  { id: 16, title: 'Pepes Ikan', image: 'https://source.unsplash.com/400x300/?pepper-fish' },
  { id: 17, title: 'Ikan Asam Manis', image: 'https://source.unsplash.com/400x300/?sweet-sour-fish' },
  { id: 18, title: 'Cumi Saos Tiram', image: 'https://source.unsplash.com/400x300/?squid-oyster-sauce' },
  { id: 19, title: 'Udang Balado', image: 'https://source.unsplash.com/400x300/?shrimp-balado' },
  { id: 20, title: 'Sayur Asem', image: 'https://source.unsplash.com/400x300/?vegetable-soup' },
  { id: 21, title: 'Tumis Kangkung', image: 'https://source.unsplash.com/400x300/?water-spinach' },
  { id: 22, title: 'Capcay Kuah', image: 'https://source.unsplash.com/400x300/?capcay' },
  { id: 23, title: 'Sayur Bayam Bening', image: 'https://source.unsplash.com/400x300/?spinach-soup' },
  { id: 24, title: 'Tumis Buncis Wortel', image: 'https://source.unsplash.com/400x300/?stir-fried-beans' },
  { id: 25, title: 'Nasi Goreng Kampung', image: 'https://source.unsplash.com/400x300/?kampung-fried-rice' },
  { id: 26, title: 'Nasi Goreng Spesial', image: 'https://source.unsplash.com/400x300/?special-fried-rice' },
  { id: 27, title: 'Mie Goreng Rumahan', image: 'https://source.unsplash.com/400x300/?home-made-noodles' },
  { id: 28, title: 'Bihun Goreng', image: 'https://source.unsplash.com/400x300/?fried-bihun' },
  { id: 29, title: 'Nasi Uduk', image: 'https://source.unsplash.com/400x300/?nasi-uduk' },
  { id: 30, title: 'Tahu Isi Sayur', image: 'https://source.unsplash.com/400x300/?stuffed-tofu' },
  { id: 31, title: 'Risol Mayo', image: 'https://source.unsplash.com/400x300/?risol-mayo' },
  { id: 32, title: 'Bola-Bola Mie', image: 'https://source.unsplash.com/400x300/?noodle-balls' },
  { id: 33, title: 'Bakwan Sayur', image: 'https://source.unsplash.com/400x300/?vegetable-fritter' },
  { id: 34, title: 'Cireng Bumbu Rujak', image: 'https://source.unsplash.com/400x300/?cireng' },
  { id: 35, title: 'Pisang Goreng Coklat', image: 'https://source.unsplash.com/400x300/?chocolate-fried-bananas' },
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