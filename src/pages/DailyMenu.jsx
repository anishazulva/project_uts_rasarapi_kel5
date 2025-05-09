import React, { useState, useEffect } from 'react';

const recipeList = [
  'Ayam Bakar Kecap', 'Semur Daging', 'Ikan Goreng Kuning', 'Sayur Asem', 'Nasi Goreng Kampung',
  'Tahu Isi Sayur', 'Ayam Goreng Lengkuas', 'Rendang Daging Sapi', 'Pepes Ikan', 'Tumis Kangkung',
  'Nasi Goreng Spesial', 'Risol Mayo', 'Ayam Rica Rica', 'Daging Lada Hitam', 'Ikan Asam Manis',
  'Capcay Kuah', 'Mie Goreng Rumahan', 'Bola-Bola Mie', 'Opor Ayam', 'Empal Gepuk',
  'Cumi Saos Tiram', 'Sayur Bayam Bening', 'Bihun Goreng', 'Bakwan Sayur', 'Ayam Kecap Pedas Manis',
  'Sop Iga Sapi', 'Udang Balado', 'Tumis Buncis Wortel', 'Nasi Uduk', 'Cireng Bumbu Rujak',
  'Pisang Goreng Coklat', 'Kue Cubit', 'Kolak Pisang', 'Donat Kentang', 'Dadar Gulung'
];

const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

function DailyMenu() {
  const [menu, setMenu] = useState(() =>
    Object.fromEntries(days.map(day => [day, []]))
  );

  useEffect(() => {
    const savedMenu = localStorage.getItem("dailyMenu");
    if (savedMenu) {
      setMenu(JSON.parse(savedMenu));
    }
  }, []);

  const handleToggleRecipe = (day, recipe) => {
    const isSelected = menu[day].includes(recipe);
    const updatedMenu = isSelected
      ? menu[day].filter(item => item !== recipe)
      : [...menu[day], recipe];
    setMenu({ ...menu, [day]: updatedMenu });
  };

  const handleResetAll = () => {
    const emptyMenu = Object.fromEntries(days.map(day => [day, []]));
    setMenu(emptyMenu);
    localStorage.removeItem("dailyMenu");
  };

  const handleSave = () => {
    localStorage.setItem("dailyMenu", JSON.stringify(menu));
    alert("Menu harian berhasil disimpan!");
  };

  return (
    <div className="relative min-h-screen container mx-auto p-4 pb-24">
      <h1 className="text-4xl font-bold mb-6 text-center text-orange-600">Menu Harian</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {days.map((day) => (
          <div key={day} className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-orange-700">{day}</h2>

            <div className="h-48 overflow-y-auto border rounded p-2 mb-3 bg-white shadow-md">
              {recipeList.map((recipe, index) => (
                <button
                  key={index}
                  onClick={() => handleToggleRecipe(day, recipe)}
                  className={`block w-full text-left py-2 px-3 rounded-lg mb-2 
                    ${menu[day].includes(recipe) ? 'bg-orange-300 text-orange-800 font-semibold' : 'hover:bg-orange-200'}`}
                >
                  {recipe}
                </button>
              ))}
            </div>

            <ul className="list-disc list-inside text-gray-700">
              {menu[day].length > 0 ? (
                menu[day].map((item, idx) => (
                  <li key={idx} className="text-orange-700">{item}</li>
                ))
              ) : (
                <li className="italic text-gray-400">Belum ada resep</li>
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="fixed bottom-4 right-4 flex flex-col gap-4">
  <button
    onClick={handleResetAll}
    className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-md shadow"
  >
    Reset Semua Menu
  </button>
  <button
    onClick={handleSave}
    className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md shadow"
  >
    Simpan Menu
  </button>
    </div>
  </div>
  );
}

export default DailyMenu;