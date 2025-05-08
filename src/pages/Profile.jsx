import React, { useState } from "react";

function Profile() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [password, setPassword] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    alert("Perubahan profil telah disimpan (dummy).");
  };

  return (
    <div className="min-h-screen px-4 py-8 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Profil Pengguna</h1>

        {/* Foto Profil */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
            {profilePic ? (
              <img src={profilePic} alt="Profil" className="w-full h-full object-cover" />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">Foto</div>
            )}
          </div>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>

        {/* Nama dan Deskripsi */}
        <div className="bg-gray-100 p-6 rounded-xl mb-6 shadow">
          <div className="mb-4">
            <label className="block font-semibold mb-1">Nama</label>
            <input
              type="text"
              placeholder="Masukkan nama kamu"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded border border-gray-300"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1">Deskripsi Diri</label>
            <textarea
              placeholder="Contoh: Saya suka memasak menu rumahan..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 rounded border border-gray-300"
              rows={3}
            />
          </div>
        </div>

        {/* Ganti Password */}
        <div className="bg-gray-100 p-6 rounded-xl mb-6 shadow">
          <label className="block font-semibold mb-2">Ganti Password</label>
          <input
            type="password"
            placeholder="Masukkan password baru"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>

        {/* Tombol Simpan */}
        <div className="text-right">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;