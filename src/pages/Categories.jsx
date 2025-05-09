import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Data kategori dan resep tetap sama
const categories = [
  'Olahan Ayam',
  'Olahan Daging',
  'Olahan Ikan & Seafood',
  'Sayur & Tumisan',
  'Nasi & Mie',
  'Cemilan Asin',
  'Cemilan Manis',
];

const recipes = [
  // Olahan Ayam
  { id: 1, name: 'Ayam Bakar Kecap', image: '/images/ayam_bakar_kecap.jpg', category: 'Olahan Ayam' },
  { id: 7, name: 'Ayam Goreng Lengkuas', image: '/images/ayam_goreng_lengkuas.jpeg', category: 'Olahan Ayam' },
  { id: 13, name: 'Ayam Rica-Rica', image: '/images/ayam_ricarica.jpeg', category: 'Olahan Ayam' },
  { id: 19, name: 'Opor Ayam', image: '/images/opor_ayam.jpg', category: 'Olahan Ayam' },
  { id: 25, name: 'Ayam Kecap Pedas Manis', image: '/images/ayam_kecap_pedas_manis.jpeg', category: 'Olahan Ayam' },

  // Olahan Daging
  { id: 2, name: 'Semur Daging', image: '/images/semur_daging.jpeg', category: 'Olahan Daging' },
  { id: 8, name: 'Rendang Daging Sapi', image: '/images/rendang_daging_sapi.jpeg', category: 'Olahan Daging' },
  { id: 14, name: 'Daging Lada Hitam', image: '/images/daging_lada_hitam.jpeg', category: 'Olahan Daging' },
  { id: 20, name: 'Empal Gepuk', image: '/images/empal_gepuk.jpeg', category: 'Olahan Daging' },
  { id: 26, name: 'Sop Iga Sapi', image: '/images/sop_iga_sapi.jpeg', category: 'Olahan Daging' },

  // Olahan Ikan & Seafood
  { id: 3, name: 'Ikan Goreng Kuning', image: '/images/ikan_goreng_kuning.jpeg', category: 'Olahan Ikan & Seafood' },
  { id: 9, name: 'Pepes Ikan', image: '/images/pepes_ikan.jpeg', category: 'Olahan Ikan & Seafood' },
  { id: 15, name: 'Ikan Asam Manis', image: '/images/ikan_asam_manis.jpeg', category: 'Olahan Ikan & Seafood' },
  { id: 21, name: 'Cumi Saos Tiram', image: '/images/cumi_saos_tiram.jpeg', category: 'Olahan Ikan & Seafood' },
  { id: 27, name: 'Udang Balado', image: '/images/udang_balado.jpeg', category: 'Olahan Ikan & Seafood' },

  // Sayur & Tumisan
  { id: 4, name: 'Sayur Asem', image: '/images/sayur_asem.jpeg', category: 'Sayur & Tumisan' },
  { id: 10, name: 'Tumis Kangkung', image: '/images/tumis_kangkung.jpeg', category: 'Sayur & Tumisan' },
  { id: 16, name: 'Capcay Kuah', image: '/images/capcay_kuah.jpg', category: 'Sayur & Tumisan' },
  { id: 22, name: 'Sayur Bayam Bening', image: '/images/sayur_bayam_bening.jpg', category: 'Sayur & Tumisan' },
  { id: 28, name: 'Tumis Buncis Wortel', image: '/images/tumis_buncis_wortel.jpeg', category: 'Sayur & Tumisan' },

  // Nasi & Mie
  { id: 5, name: 'Nasi Goreng Kampung', image: '/images/nasi_goreng_kampung.jpeg', category: 'Nasi & Mie' },
  { id: 11, name: 'Nasi Goreng Spesial', image: '/images/nasi_goreng_spesial.jpg', category: 'Nasi & Mie' },
  { id: 17, name: 'Mie Goreng Rumahan', image: '/images/mie_goreng_rumahan.jpeg', category: 'Nasi & Mie' },
  { id: 23, name: 'Bihun Goreng', image: '/images/bihun_goreng.jpeg', category: 'Nasi & Mie' },
  { id: 29, name: 'Nasi Uduk', image: '/images/nasi_uduk.jpeg', category: 'Nasi & Mie' },

  // Cemilan Asin
  { id: 6, name: 'Tahu Isi Sayur', image: '/images/tahu_isi_sayur.jpeg', category: 'Cemilan Asin' },
  { id: 12, name: 'Risol Mayo', image: '/images/risol_mayo.jpeg', category: 'Cemilan Asin' },
  { id: 18, name: 'Bola-Bola Mie', image: '/images/bola_bola_mie.jpeg', category: 'Cemilan Asin' },
  { id: 24, name: 'Bakwan Sayur', image: '/images/bakwan_sayur.jpg', category: 'Cemilan Asin' },
  { id: 30, name: 'Cireng Bumbu Rujak', image: '/images/cireng_bumbu_rujak.jpeg', category: 'Cemilan Asin' },

  // Cemilan Manis
  { id: 31, name: 'Pisang Goreng Coklat', image: '/images/pisang_goreng_coklat.jpg', category: 'Cemilan Manis' },
  { id: 32, name: 'Kue Cubit', image: '/images/kue_cubit.jpeg', category: 'Cemilan Manis' },
  { id: 33, name: 'Kolak Pisang', image: '/images/kolak_pisang.jpeg', category: 'Cemilan Manis' },
  { id: 34, name: 'Donat Kentang', image: '/images/donat_kentang.jpeg', category: 'Cemilan Manis' },
  { id: 35, name: 'Dadar Gulung', image: '/images/dadar_gulung.jpeg', category: 'Cemilan Manis' },
];

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredRecipes = recipes.filter((r) => r.category === selectedCategory);

  return (
    <div className="bg-gradient-to-b from-orange-50 to-white min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">Kategori Resep</h1>

        {/* Kotak Kategori */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`cursor-pointer p-6 rounded-xl text-center text-white font-semibold shadow-xl transition-transform transform hover:scale-105 ${
                selectedCategory === category ? 'bg-orange-600' : 'bg-orange-500'
              } hover:bg-orange-400`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          ))}
        </div>

        {/* Daftar Resep */}
        {selectedCategory && (
          <>
            <h2 className="text-2xl font-semibold text-center mb-4">Resep: {selectedCategory}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe) => (
                <div key={recipe.id} className="bg-white rounded-xl shadow-lg p-4 transition-transform hover:scale-105">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-40 object-cover rounded-lg mb-3"
                  />
                  <h3 className="text-lg font-semibold mb-2">{recipe.name}</h3>
                  <button
                    onClick={() => navigate(`/resep/${recipe.id}`)}
                    className="w-full bg-orange-500 text-white p-2 rounded-md hover:bg-orange-400 transition"
                  >
                    Lihat Resep
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Categories;