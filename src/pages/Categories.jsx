import React from 'react';

function Categories() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Kategori Resep</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">Ayam</div>
        <div className="bg-white p-4 rounded-lg shadow-md">Sayuran</div>
        <div className="bg-white p-4 rounded-lg shadow-md">Mie</div>
      </div>
    </div>
  );
}

export default Categories;