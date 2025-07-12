import React, { useState, useEffect } from 'react';

const API_URL = 'http://localhost/kategori.php';

const KelolaKategori = () => {
  const [kategori, setKategori] = useState([]);
  const [namaKategori, setNamaKategori] = useState('');
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Ambil data kategori
  const fetchKategori = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
if (!res.ok) throw new Error('Respon tidak OK');
const data = await res.json();
setKategori(data);
    } catch (err) {
      setError('Gagal mengambil data kategori');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchKategori();
  }, []);

  // Handle submit form (tambah/edit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      if (editId) {
        // Edit kategori
        await fetch(API_URL, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id_kategori: editId, nama_kategori: namaKategori }),
        });
      } else {
        // Tambah kategori
        await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nama_kategori: namaKategori }),
        });
      }
      setNamaKategori('');
      setEditId(null);
      fetchKategori();
    } catch (err) {
      setError('Gagal menyimpan data');
    }
    setLoading(false);
  };

  // Handle hapus kategori
  const handleDelete = async (id) => {
    if (!window.confirm('Yakin hapus kategori ini?')) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch(API_URL, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_kategori: id })
      });
      if (res.ok) {
        alert('Kategori berhasil dihapus');
        setKategori(prev => prev.filter(item => item.id_kategori !== id));
      } else {
        setError('Gagal menghapus data');
      }
    } catch (err) {
      setError('Gagal menghapus data');
    }
    setLoading(false);
  };

  // Handle klik edit
  const handleEdit = (item) => {
    setEditId(item.id_kategori);
    setNamaKategori(item.nama_kategori);
  };

  // Handle batal edit
  const handleCancelEdit = () => {
    setEditId(null);
    setNamaKategori('');
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Kelola Kategori</h2>
      <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
        <input
          type="text"
          className="border px-2 py-1 flex-1"
          placeholder="Nama kategori"
          value={namaKategori}
          onChange={e => setNamaKategori(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-1 rounded"
          disabled={loading}
        >
          {editId ? 'Update' : 'Tambah'}
        </button>
        {editId && (
          <button
            type="button"
            className="bg-gray-400 text-white px-3 py-1 rounded"
            onClick={handleCancelEdit}
            disabled={loading}
          >
            Batal
          </button>
        )}
      </form>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      {loading && <div>Loading...</div>}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">ID</th>
            <th className="border px-2 py-1">Nama Kategori</th>
            <th className="border px-2 py-1">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {kategori.length === 0 && (
            <tr>
              <td colSpan="3" className="text-center py-2">Belum ada data</td>
            </tr>
          )}
          {kategori.map(item => (
            <tr key={item.id_kategori}>
              <td className="border px-2 py-1 text-center">{item.id_kategori}</td>
              <td className="border px-2 py-1">{item.nama_kategori}</td>
              <td className="border px-2 py-1 text-center">
                <button
                  className="bg-yellow-400 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleEdit(item)}
                  disabled={loading}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(item.id_kategori)}
                  disabled={loading}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KelolaKategori; 