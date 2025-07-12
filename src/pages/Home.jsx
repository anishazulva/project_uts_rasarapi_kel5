import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import RecipeCard from '../components/RecipeCard';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [kategori, setKategori] = useState([]);
  const [newRecipe, setNewRecipe] = useState({ id: null, nama: '', kategori: '', bahan: '', langkah: '' });
  const [isEditing, setIsEditing] = useState(false);

  const fetchRecipes = async () => {
    try {
      const response = await fetch('http://localhost/resep.php');
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('Gagal mengambil data resep:', error);
    }
  };

  const fetchKategori = async () => {
    try {
      const response = await fetch('http://localhost/rasarapi-api/kategori.php');
      const data = await response.json();
      setKategori(data);
    } catch (error) {
      console.error('Gagal mengambil data kategori:', error);
    }
  };

  useEffect(() => {
    fetchRecipes();
    fetchKategori();
  }, []);

  const handleChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      try {
        await fetch('http://localhost/rasarapi-api/resep.php', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams(newRecipe)
        });
        setIsEditing(false);
        setNewRecipe({ id: null, nama: '', kategori: '', bahan: '', langkah: '' });
        fetchRecipes();
      } catch (error) {
        console.error('Gagal mengedit resep:', error);
      }
    } else {
      try {
        await fetch('http://localhost/rasarapi-api/resep.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newRecipe)
        });
        setNewRecipe({ id: null, nama: '', kategori: '', bahan: '', langkah: '' });
        fetchRecipes();
      } catch (error) {
        console.error('Gagal menambahkan resep:', error);
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin menghapus resep ini?')) {
      try {
        await fetch('http://localhost/rasarapi-api/resep.php', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({ id })
        });
        fetchRecipes();
      } catch (error) {
        console.error('Gagal menghapus resep:', error);
      }
    }
  };

  const handleEdit = (recipe) => {
    setNewRecipe(recipe);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-orange-50 to-white min-h-screen pb-10">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-orange-600 mb-4">Selamat Datang di RasaRapi</h1>
          <p className="text-gray-700 text-lg">Temukan resep terbaik dan atur menu harianmu tanpa ribet!</p>
        </div>

        {/* Form Tambah/Edit Resep */}
        <div className="mb-10 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-orange-600">{isEditing ? 'Edit Resep' : 'Tambah Resep'}</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="nama" placeholder="Nama Resep" value={newRecipe.nama} onChange={handleChange} required className="border p-3 rounded-lg" />
            <select name="kategori" value={newRecipe.kategori} onChange={handleChange} required className="border p-3 rounded-lg">
              <option value="">Pilih Kategori</option>
              {kategori.map((kat) => (
                <option key={kat.id_kategori} value={kat.nama_kategori}>
                  {kat.nama_kategori}
                </option>
              ))}
            </select>
            <textarea name="bahan" placeholder="Bahan-bahan" value={newRecipe.bahan} onChange={handleChange} required className="border p-3 rounded-lg md:col-span-2"></textarea>
            <textarea name="langkah" placeholder="Langkah-langkah" value={newRecipe.langkah} onChange={handleChange} required className="border p-3 rounded-lg md:col-span-2"></textarea>
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-xl md:col-span-2">
              {isEditing ? 'Update Resep' : 'Simpan Resep'}
            </button>
          </form>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full md:w-1/2">
            <span className="absolute inset-y-0 left-3 flex items-center text-orange-500">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Cari resep favoritmu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full rounded-xl border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
            />
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <div className="bg-white rounded-xl shadow-md p-4 hover:scale-[1.02] transition-transform duration-200" key={recipe.id}>
                <RecipeCard title={recipe.nama} image={recipe.image || null} id={recipe.id} />
                <div className="mt-4 flex justify-between">
                  <button
                    className="text-blue-600 hover:underline text-sm"
                    onClick={() => handleEdit(recipe)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:underline text-sm"
                    onClick={() => handleDelete(recipe.id)}
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">Resep tidak ditemukan</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
