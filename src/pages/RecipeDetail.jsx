import React from 'react';
import { useParams } from 'react-router-dom';

const recipes = {
  1: {
    title: "Ayam Bakar",
    image: "https://source.unsplash.com/400x300/?grilled-chicken",
    ingredients: ["Ayam", "Minyak Goreng", "Garam", "Merica"],
    steps: [
      "Siapkan ayam dan bumbu.",
      "Masak ayam hingga matang.",
      "Angkat dan sajikan."
    ]
  },
  2: {
    title: "Sayur Asem",
    image: "https://source.unsplash.com/400x300/?vegetable-soup",
    ingredients: [
      "Melinjo", "Jagung manis", "Labu siam", "Kacang panjang", "Asam jawa",
      "Gula merah", "Bawang merah", "Bawang putih", "Lengkuas", "Garam"
    ],
    steps: [
      "Rebus air dan masukkan bumbu.",
      "Masukkan melinjo dan jagung.",
      "Tambahkan sayuran dan bumbu lainnya.",
      "Masak hingga matang dan sajikan."
    ]
  }
};

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes[id];

  if (!recipe) return <p>Resep tidak ditemukan</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4" />
      <h2 className="text-2xl mb-4">Bahan-bahan</h2>
      <ul className="list-disc pl-6">
        {recipe.ingredients.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <h2 className="text-2xl mt-6 mb-4">Langkah-langkah</h2>
      <ol className="list-decimal pl-6">
        {recipe.steps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;