import React, { useState } from "react";

function Profile() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleRemoveProfilePic = () => {
    setProfilePic(null);
  };

  const handleSave = () => {
    alert("Perubahan profil telah disimpan (dummy).");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 to-pink-100 px-4 py-8 text-gray-900">
      <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-orange-500">Profil Pengguna</h1>

        {/* Foto Profil */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-r from-yellow-100 to-pink-100">
            {profilePic ? (
              <img src={profilePic} alt="Profil" className="w-full h-full object-cover" />
            ) : (
              <div className="flex items-center justify-center h-full text-white">Foto</div>
            )}
          </div>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="mt-2 p-2 rounded-md bg-yellow-50" />
          
          {/* Tombol Hapus Foto Profil */}
          {profilePic && (
            <button
              onClick={handleRemoveProfilePic}
              className="mt-4 text-pink-400 hover:text-pink-500 font-semibold transition duration-300"
            >
              Hapus Foto Profil
            </button>
          )}
        </div>

        {/* Nama dan Deskripsi */}
        <div className="bg-yellow-50 p-6 rounded-xl mb-6 shadow-xl">
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-orange-500">Nama</label>
            <input
              type="text"
              placeholder="Masukkan nama kamu"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded-md border border-orange-200 focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1 text-orange-500">Deskripsi Diri</label>
            <textarea
              placeholder="Contoh: Saya suka memasak menu rumahan..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 rounded-md border border-orange-200 focus:ring-2 focus:ring-orange-400"
              rows={4}
            />
          </div>
        </div>

        {/* Tombol Simpan */}
        <div className="text-right">
          <button
            onClick={handleSave}
            className="bg-gradient-to-r from-orange-300 to-pink-300 text-white px-6 py-2 rounded-md hover:bg-gradient-to-l transition duration-300"
          >
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;