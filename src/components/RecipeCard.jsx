import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ title, image, id }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {image ? (
        <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 mb-4">
          Tidak ada gambar
        </div>
      )}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">Resep yang enak dan mudah dibuat di rumah.</p>
      <Link to={`/resep/${id}`} className="text-blue-500 mt-4 block">
        Lihat Resep
      </Link>
    </div>
  );
}

export default RecipeCard;