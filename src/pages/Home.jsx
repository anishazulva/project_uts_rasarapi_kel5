import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import RecipeCard from '../components/RecipeCard';

// Import gambar langsung
import ayam_bakar_kecap from '../assets/ayam_bakar_kecap.jpg';
import semur_daging from '../assets/semur_daging.jpeg';
import ikan_goreng_kuning from '../assets/ikan_goreng_kuning.jpeg';
import sayur_asem from '../assets/sayur_asem.jpeg';
import nasi_goreng_kampung from '../assets/nasi_goreng_kampung.jpeg';
import tahu_isi_sayur from '../assets/tahu_isi_sayur.jpeg';
import ayam_goreng_lengkuas from '../assets/ayam_goreng_lengkuas.jpeg';
import rendang_daging_sapi from '../assets/rendang_daging_sapi.jpeg';
import pepes_ikan from '../assets/pepes_ikan.jpeg';
import tumis_kangkung from '../assets/tumis_kangkung.jpeg';
import nasi_goreng_spesial from '../assets/nasi_goreng_spesial.jpg';
import risol_mayo from '../assets/risol_mayo.jpeg';
import ayam_ricarica from '../assets/ayam_ricarica.jpeg';
import daging_lada_hitam from '../assets/daging_lada_hitam.jpeg';
import ikan_asam_manis from '../assets/ikan_asam_manis.jpeg';
import capcay_kuah from '../assets/capcay_kuah.jpg';
import mie_goreng_rumahan from '../assets/mie_goreng_rumahan.jpeg';
import bola_bola_mie from '../assets/bola_bola_mie.jpeg';
import opor_ayam from '../assets/opor_ayam.jpg';
import empal_gepuk from '../assets/empal_gepuk.jpeg';
import cumi_saos_tiram from '../assets/cumi_saos_tiram.jpeg';
import sayur_bayam_bening from '../assets/sayur_bayam_bening.jpg';
import bihun_goreng from '../assets/bihun_goreng.jpeg';
import bakwan_sayur from '../assets/bakwan_sayur.jpg';
import ayam_kecap_pedas_manis from '../assets/ayam_kecap_pedas_manis.jpeg';
import sop_iga_sapi from '../assets/sop_iga_sapi.jpeg';
import udang_balado from '../assets/udang_balado.jpeg';
import tumis_buncis_wortel from '../assets/tumis_buncis_wortel.jpeg';
import nasi_uduk from '../assets/nasi_uduk.jpeg';
import cireng_bumbu_rujak from '../assets/cireng_bumbu_rujak.jpeg';
import pisang_goreng_coklat from '../assets/pisang_goreng_coklat.jpg';
import kue_cubit from '../assets/kue_cubit.jpeg';
import kolak_pisang from '../assets/kolak_pisang.jpeg';
import donat_kentang from '../assets/donat_kentang.jpeg';
import dadar_gulung from '../assets/dadar_gulung.jpeg';

const staticRecipes = [
  { id: 1, nama: 'Ayam Bakar Kecap', image: ayam_bakar_kecap },
  { id: 2, nama: 'Semur Daging', image: semur_daging },
  { id: 3, nama: 'Ikan Goreng Kuning', image: ikan_goreng_kuning },
  { id: 4, nama: 'Sayur Asem', image: sayur_asem },
  { id: 5, nama: 'Nasi Goreng Kampung', image: nasi_goreng_kampung },
  { id: 6, nama: 'Tahu Isi Sayur', image: tahu_isi_sayur },
  { id: 7, nama: 'Ayam Goreng Lengkuas', image: ayam_goreng_lengkuas },
  { id: 8, nama: 'Rendang Daging Sapi', image: rendang_daging_sapi },
  { id: 9, nama: 'Pepes Ikan', image: pepes_ikan },
  { id: 10, nama: 'Tumis Kangkung', image: tumis_kangkung },
  { id: 11, nama: 'Nasi Goreng Spesial', image: nasi_goreng_spesial },
  { id: 12, nama: 'Risol Mayo', image: risol_mayo },
  { id: 13, nama: 'Ayam Rica Rica', image: ayam_ricarica },
  { id: 14, nama: 'Daging Lada Hitam', image: daging_lada_hitam },
  { id: 15, nama: 'Ikan Asam Manis', image: ikan_asam_manis },
  { id: 16, nama: 'Capcay Kuah', image: capcay_kuah },
  { id: 17, nama: 'Mie Goreng Rumahan', image: mie_goreng_rumahan },
  { id: 18, nama: 'Bola-Bola Mie', image: bola_bola_mie },
  { id: 19, nama: 'Opor Ayam', image: opor_ayam },
  { id: 20, nama: 'Empal Gepuk', image: empal_gepuk },
  { id: 21, nama: 'Cumi Saos Tiram', image: cumi_saos_tiram },
  { id: 22, nama: 'Sayur Bayam Bening', image: sayur_bayam_bening },
  { id: 23, nama: 'Bihun Goreng', image: bihun_goreng },
  { id: 24, nama: 'Bakwan Sayur', image: bakwan_sayur },
  { id: 25, nama: 'Ayam Kecap Pedas Manis', image: ayam_kecap_pedas_manis },
  { id: 26, nama: 'Sop Iga Sapi', image: sop_iga_sapi },
  { id: 27, nama: 'Udang Balado', image: udang_balado },
  { id: 28, nama: 'Tumis Buncis Wortel', image: tumis_buncis_wortel },
  { id: 29, nama: 'Nasi Uduk', image: nasi_uduk },
  { id: 30, nama: 'Cireng Bumbu Rujak', image: cireng_bumbu_rujak },
  { id: 31, nama: 'Pisang Goreng Coklat', image: pisang_goreng_coklat },
  { id: 32, nama: 'Kue Cubit', image: kue_cubit },
  { id: 33, nama: 'Kolak Pisang', image: kolak_pisang },
  { id: 34, nama: 'Donat Kentang', image: donat_kentang },
  { id: 35, nama: 'Dadar Gulung', image: dadar_gulung },
];

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({ id: null, nama: '', kategori: '', bahan: '', langkah: '' });
  const [isEditing, setIsEditing] = useState(false);

  const fetchRecipes = async () => {
    try {
      const response = await fetch('http://localhost/rasarapi-api/resep.php');
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('Gagal mengambil data resep:', error);
    }
  };

  useEffect(() => {
    fetchRecipes();
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

  const combinedRecipes = [...staticRecipes, ...recipes];

  const filteredRecipes = combinedRecipes.filter(recipe =>
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
            <input type="text" name="kategori" placeholder="Kategori" value={newRecipe.kategori} onChange={handleChange} required className="border p-3 rounded-lg" />
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
                {recipe.image === undefined && (
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
                )}
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