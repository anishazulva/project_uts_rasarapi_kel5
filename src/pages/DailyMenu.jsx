import React, { useState } from 'react';

const recipeList = [
  "Ayam Bakar Kecap", "Semur Daging", "Ikan Goreng Kuning", "Sayur Asem", "Nasi Goreng Kampung",
  "Tahu Isi Sayur", "Ayam Goreng Lengkuas", "Rendang Daging Sapi", "Pepes Ikan", "Tumis Kangkung",
  "Nasi Goreng Spesial", "Risol Mayo", "Ayam Rica Rica", "Daging Lada Hitam", "Ikan Asam Manis",
  "Capcay Kuah", "Mie Goreng Rumahan", "Bola Bola Mie", "Opor Ayam", "Empal Gepuk",
  "Cumi Saos Tiram", "Sayur Bayam Bening", "Bihun Goreng", "Bakwan Sayur", "Ayam Kecap Pedas Manis",
  "Sop Iga Sapi", "Udang Balado", "Tumis Buncis Wortel", "Nasi Uduk", "Cireng Bumbu Rujak",
  "Pisang Goreng Coklat", "Kue Cubit", "Kolak Pisang", "Donat Kentang", "Dadar Gulung"
];

function DailyMenu() {
  const initialMenu = {
    Senin: [],
    Selasa: [],
    Rabu: [],
    Kamis: [],
    Jumat: [],
    Sabtu: [],
    Minggu: []
  };

  const [menu, setMenu] = useState(initialMenu);
  const [showSelector, setShowSelector] = useState({
    Senin: true,
    Selasa: true,
    Rabu: true,
    Kamis: true,
    Jumat: true,
    Sabtu: true,
    Minggu: true
  });

  const handleToggleRecipe = (day, recipe) => {
    const updatedRecipes = menu[day].includes(recipe)
      ? menu[day].filter((r) => r !== recipe)
      : [...menu[day], recipe];
    setMenu({ ...menu, [day]: updatedRecipes });
  };

  const handleDone = (day) => {
    setShowSelector({ ...showSelector, [day]: false });
  };

  const handleEdit = (day) => {
    setShowSelector({ ...showSelector, [day]: true });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Menu Harian</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Object.keys(menu).map((day) => (
          <div key={day} className="bg-white p-4 rounded-lg shadow-md max-h-[500px] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-2">{day}</h2>

            {showSelector[day] ? (
              <>
                <div className="space-y-1">
                  {recipeList.map((recipe, index) => (
                    <label key={index} className="block">
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={menu[day].includes(recipe)}
                        onChange={() => handleToggleRecipe(day, recipe)}
                      />
                      {recipe}
                    </label>
                  ))}
                </div>
                <button
                  className="mt-4 bg-green-600 text-white px-3 py-1 rounded"
                  onClick={() => handleDone(day)}
                >
                  Selesai Pilih
                </button>
              </>
            ) : (
              <>
                <ul className="list-disc pl-5 text-gray-800 text-sm mb-2">
                  {menu[day].length > 0 ? (
                    menu[day].map((item, idx) => <li key={idx}>{item}</li>)
                  ) : (
                    <li className="text-gray-500 italic">Belum ada menu</li>
                  )}
                </ul>
                <button
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                  onClick={() => handleEdit(day)}
                >
                  Edit Ulang
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyMenu;