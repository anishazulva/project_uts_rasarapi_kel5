# Fitur Upload Gambar Resep

## Overview
Fitur ini memungkinkan user untuk mengupload gambar untuk setiap resep yang ditambahkan. Gambar akan disimpan di folder `rasarapi-api/uploads/` dan ditampilkan di halaman utama.

## Fitur yang Ditambahkan

### 1. Frontend (React)
- ✅ Input file upload dengan preview gambar
- ✅ Validasi tipe file (JPG, JPEG, PNG, GIF)
- ✅ Preview gambar sebelum upload
- ✅ FormData untuk mengirim data dan gambar ke backend
- ✅ Tampilan gambar dengan fallback "Tidak ada gambar"

### 2. Backend (PHP)
- ✅ Handle upload file dengan `$_FILES`
- ✅ Validasi tipe dan ukuran file (max 5MB)
- ✅ Generate nama file unik untuk menghindari konflik
- ✅ Simpan nama file ke database
- ✅ Hapus file gambar saat resep dihapus
- ✅ Return URL lengkap gambar saat fetch data

### 3. Database
- ✅ Kolom `gambar` VARCHAR(255) untuk menyimpan nama file
- ✅ Script SQL untuk menambahkan kolom jika belum ada

## Cara Penggunaan

### 1. Setup Database
Jalankan script SQL di `rasarapi-api/update_database.sql` untuk menambahkan kolom gambar:

```sql
ALTER TABLE resep ADD COLUMN gambar VARCHAR(255) NULL AFTER langkah;
```

### 2. Pastikan Folder Uploads Ada
Folder `rasarapi-api/uploads/` sudah dibuat dengan file `.htaccess` untuk mengizinkan akses file gambar.

### 3. Upload Gambar
1. Buka form "Tambah Resep"
2. Isi semua field yang diperlukan
3. Klik "Choose File" untuk memilih gambar (opsional)
4. Preview gambar akan muncul
5. Klik "Simpan Resep"
6. Gambar akan diupload dan ditampilkan di halaman utama

## Validasi File
- **Tipe file**: JPG, JPEG, PNG, GIF
- **Ukuran maksimal**: 5MB
- **Nama file**: Otomatis generate unik (contoh: `64f8a1b2c3d4e.jpg`)

## Struktur File
```
rasarapi-api/
├── uploads/           # Folder penyimpanan gambar
│   └── .htaccess     # Konfigurasi akses file
├── resep.php         # Backend API (updated)
└── update_database.sql # Script SQL
```

## Error Handling
- File terlalu besar → Alert "Ukuran file terlalu besar (max 5MB)"
- Tipe file tidak valid → Alert "Tipe file tidak diizinkan"
- Upload gagal → Alert "Gagal mengupload file"

## Tips
1. Pastikan folder `uploads` memiliki permission write
2. Jika gambar tidak muncul, cek URL di browser developer tools
3. Gambar akan otomatis dihapus saat resep dihapus
4. Preview gambar membantu user memastikan file yang benar

## Testing
1. Upload gambar dengan berbagai ukuran dan tipe
2. Test tanpa upload gambar
3. Test edit resep (gambar tidak berubah saat edit)
4. Test hapus resep (gambar harus terhapus dari folder)
5. Test tampilan di berbagai browser 