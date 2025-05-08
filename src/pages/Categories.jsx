import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Kategori Resep</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">🐔 Olahan Ayam</h2>
          <ul className="mt-2">
            <Link to="/resep/1">
              <li>Ayam Bakar Kecap</li>
            </Link>
            <Link to="/resep/2">
              <li>Ayam Goreng Lengkuas</li>
            </Link>
            <Link to="/resep/3">
              <li>Ayam Rica-Rica</li>
            </Link>
            <Link to="/resep/4">
              <li>Opor Ayam</li>
            </Link>
            <Link to="/resep/5">
              <li>Ayam Kecap Pedas Manis</li>
            </Link>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">🐄 Olahan Daging</h2>
          <ul className="mt-2">
            <Link to="/resep/10">
              <li>Semur Daging</li>
            </Link>
            <Link to="/resep/11">
              <li>Rendang Daging Sapi</li>
            </Link>
            <Link to="/resep/12">
              <li>Daging Lada Hitam</li>
            </Link>
            <Link to="/resep/13">
              <li>Empal Gepuk</li>
            </Link>
            <Link to="/resep/14">
              <li>Sop Iga Sapi</li>
            </Link>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">🐟 Olahan Ikan & Seafood</h2>
          <ul className="mt-2">
            <Link to="/resep/15">
              <li>Ikan Goreng Kuning</li>
            </Link>
            <Link to="/resep/16">
              <li>Pepes Ikan</li>
            </Link>
            <Link to="/resep/17">
              <li>Ikan Asam Manis</li>
            </Link>
            <Link to="/resep/18">
              <li>Cumi Saos Tiram</li>
            </Link>
            <Link to="/resep/19">
              <li>Udang Balado</li>
            </Link>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">🥦 Sayur & Tumisan</h2>
          <ul className="mt-2">
            <Link to="/resep/20">
              <li>Sayur Asem</li>
            </Link>
            <Link to="/resep/21">
              <li>Tumis Kangkung</li>
            </Link>
            <Link to="/resep/22">
              <li>Capcay Kuah</li>
            </Link>
            <Link to="/resep/23">
              <li>Sayur Bayam Bening</li>
            </Link>
            <Link to="/resep/24">
              <li>Tumis Buncis Wortel</li>
            </Link>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">🍚 Nasi & Mie</h2>
          <ul className="mt-2">
            <Link to="/resep/25">
              <li>Nasi Goreng Kampung</li>
            </Link>
            <Link to="/resep/26">
              <li>Nasi Goreng Spesial</li>
            </Link>
            <Link to="/resep/27">
              <li>Mie Goreng Rumahan</li>
            </Link>
            <Link to="/resep/28">
              <li>Bihun Goreng</li>
            </Link>
            <Link to="/resep/29">
              <li>Nasi Uduk</li>
            </Link>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">🧆 Cemilan</h2>
          <h3 className="text-lg font-semibold mt-2">🧀 Cemilan Asin</h3>
          <ul className="mt-2">
            <Link to="/resep/30">
              <li>Tahu Isi Sayur</li>
            </Link>
            <Link to="/resep/31">
              <li>Risol Mayo</li>
            </Link>
            <Link to="/resep/32">
              <li>Bola-Bola Mie</li>
            </Link>
            <Link to="/resep/33">
              <li>Bakwan Sayur</li>
            </Link>
            <Link to="/resep/34">
              <li>Cireng Bumbu Rujak</li>
            </Link>
          </ul>
          <h3 className="text-lg font-semibold mt-4">🍮 Cemilan Manis</h3>
          <ul className="mt-2">
            <Link to="/resep/35">
              <li>Pisang Goreng Coklat</li>
            </Link>
            <Link to="/resep/36">
              <li>Kue Cubit</li>
            </Link>
            <Link to="/resep/37">
              <li>Kolak Pisang</li>
            </Link>
            <Link to="/resep/38">
              <li>Donat Kentang</li>
            </Link>
            <Link to="/resep/39">
              <li>Dadar Gulung</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;