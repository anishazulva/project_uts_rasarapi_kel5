import React, { useState } from 'react';

function DailyMenu() {
  const [menu, setMenu] = useState({
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: ""
  });

  const handleSelectRecipe = (day, recipe) => {
    setMenu({ ...menu, [day]: recipe });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Menu Harian</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day) => (
          <div key={day} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl">{day.charAt(0).toUpperCase() + day.slice(1)}</h2>
            <button
              onClick={() => handleSelectRecipe(day, "Ayam Bakar")}
              className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
            >
              Pilih Resep
            </button>
            <p className="mt-2">{menu[day] || "Belum ada resep"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyMenu;