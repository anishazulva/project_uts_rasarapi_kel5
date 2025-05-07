import React from 'react';

function RecipeDetail() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Ayam Bakar</h1>
      <img src="https://source.unsplash.com/400x300/?grilled-chicken" alt="Ayam Bakar" className="w-full h-64 object-cover mb-4" />
      <h2 className="text-2xl mb-4">Bahan-bahan</h2>
      <ul className="list-disc pl-6">
        <li>Ayam</li>
        <li>Minyak Goreng</li>
        <li>Garam</li>
        <li>Merica</li>
      </ul>
      <h2 className="text-2xl mt-6 mb-4">Langkah-langkah</h2>
      <ol className="list-decimal pl-6">
        <li>Siapkan ayam dan bumbu.</li>
        <li>Masak ayam hingga matang.</li>
        <li>Angkat dan sajikan.</li>
      </ol>
    </div>
  );
}

export default RecipeDetail;