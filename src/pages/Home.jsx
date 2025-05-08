import React, { useState } from 'react';
// Import gambar langsung
import ayam_bakar_kecap from '../assets/ayam_bakar_kecap.jpg';
import semur_daging from '../assets/semur_daging.jpg';
import ikan_goreng_kuning from '../assets/ikan_goreng_kuning.jpg';
import sayur_asem from '../assets/sayur_asem.jpg';
import nasi_goreng_kampung from '../assets/nasi_goreng_kampung.jpg';
import tahu_isi_sayur from '../assets/tahu_isi_sayur.jpg';
import ayam_goreng_lengkuas from '../assets/ayam_goreng_lengkuas.jpg';
import rendang_daging_sapi from '../assets/rendang_daging_sapi.jpg';
import pepes_ikan from '../assets/pepes_ikan.jpg';
import tumis_kangkung from '../assets/tumis_kangkung.jpg';
import nasi_goreng_spesial from '../assets/nasi_goreng_spesial.jpg';
import risol_mayo from '../assets/risol_mayo.jpg';
import ayam_ricarica from '../assets/ayam_ricarica.jpg';
import daging_lada_hitam from '../assets/daging_lada_hitam.jpg';
import ikan_asam_manis from '../assets/ikan_asam_manis.jpg';
import capcay_kuah from '../assets/capcay_kuah.jpg';
import mie_goreng_rumahan from '../assets/mie_goreng_rumahan.jpg';
import bola_bola_mie from '../assets/bola_bola_mie.jpg';
import opor_ayam from '../assets/opor_ayam.jpg';
import empal_gepuk from '../assets/empal_gepuk.jpg';
import cumi_saos_tiram from '../assets/cumi_saos_tiram.jpg';
import sayur_bayam_bening from '../assets/sayur_bayam_bening.jpg';
import bihun_goreng from '../assets/bihun_goreng.jpg';
import bakwan_sayur from '../assets/bakwan_sayur.jpg';
import ayam_kecap_pedas_manis from '../assets/ayam_kecap_pedas_manis.jpg';
import sop_iga_sapi from '../assets/sop_iga_sapi.jpg';
import udang_balado from '../assets/udang_balado.jpg';
import tumis_buncis_wortel from '../assets/tumis_buncis_wortel.jpg';
import nasi_uduk from '../assets/nasi_uduk.jpg';
import cireng_bumbu_rujak from '../assets/cireng_bumbu_rujak.jpg';
import pisang_goreng_coklat from '../assets/pisang_goreng_coklat.jpg';
import kue_cubit from '../assets/kue_cubit.jpg';
import kolak_pisang from '../assets/kolak_pisang.jpg';
import donat_kentang from '../assets/donat_kentang.jpg';
import dadar_gulung from '../assets/dadar_gulung.jpg';

import RecipeCard from '../components/RecipeCard';

const recipes = [
  { id: 1, title: 'Ayam Bakar Kecap', image: ayam_bakar_kecap },
  { id: 2, title: 'Semur Daging', image: semur_daging },
  { id: 3, title: 'Ikan Goreng Kuning', image: ikan_goreng_kuning },
  { id: 4, title: 'Sayur Asem', image: sayur_asem },
  { id: 5, title: 'Nasi Goreng Kampung', image: nasi_goreng_kampung },
  { id: 6, title: 'Tahu Isi Sayur', image: tahu_isi_sayur },
  { id: 7, title: 'Ayam Goreng Lengkuas', image: ayam_goreng_lengkuas },
  { id: 8, title: 'Rendang Daging Sapi', image: rendang_daging_sapi },
  { id: 9, title: 'Pepes Ikan', image: pepes_ikan },
  { id: 10, title: 'Tumis Kangkung', image: tumis_kangkung },
  { id: 11, title: 'Nasi Goreng Spesial', image: nasi_goreng_spesial },
  { id: 12, title: 'Risol Mayo', image: risol_mayo },
  { id: 13, title: 'Ayam Rica Rica', image: ayam_ricarica },
  { id: 14, title: 'Daging Lada Hitam', image: daging_lada_hitam },
  { id: 15, title: 'Ikan Asam Manis', image: ikan_asam_manis },
  { id: 16, title: 'Capcay Kuah', image: capcay_kuah },
  { id: 17, title: 'Mie Goreng Rumahan', image: mie_goreng_rumahan },
  { id: 18, title: 'Bola-Bola Mie', image: bola_bola_mie },
  { id: 19, title: 'Opor Ayam', image: opor_ayam },
  { id: 20, title: 'Empal Gepuk', image: empal_gepuk },
  { id: 21, title: 'Cumi Saos Tiram', image: cumi_saos_tiram },
  { id: 22, title: 'Sayur Bayam Bening', image: sayur_bayam_bening },
  { id: 23, title: 'Bihun Goreng', image: bihun_goreng },
  { id: 24, title: 'Bakwan Sayur', image: bakwan_sayur },
  { id: 25, title: 'Ayam Kecap Pedas Manis', image: ayam_kecap_pedas_manis },
  { id: 26, title: 'Sop Iga Sapi', image: sop_iga_sapi },
  { id: 27, title: 'Udang Balado', image: udang_balado },
  { id: 28, title: 'Tumis Buncis Wortel', image: tumis_buncis_wortel },
  { id: 29, title: 'Nasi Uduk', image: nasi_uduk },
  { id: 30, title: 'Cireng Bumbu Rujak', image: cireng_bumbu_rujak },
  { id: 31, title: 'Pisang Goreng Coklat', image: pisang_goreng_coklat },
  { id: 32, title: 'Kue Cubit', image: kue_cubit },
  { id: 33, title: 'Kolak Pisang', image: kolak_pisang },
  { id: 34, title: 'Donat Kentang', image: donat_kentang },
  { id: 35, title: 'Dadar Gulung', image: dadar_gulung },
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