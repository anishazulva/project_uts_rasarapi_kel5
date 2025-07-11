<?php
// Aktifkan error reporting untuk debugging (boleh dihapus nanti saat produksi)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Header CORS
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// DEFINISIKAN METHOD SEBELUM DIPAKAI
$method = $_SERVER['REQUEST_METHOD'];

// Tangani preflight OPTIONS
if ($method == 'OPTIONS') {
    http_response_code(200);
    exit();
}

include 'koneksi.php';

// Handle GET (ambil semua resep)
if ($method == 'GET') {
    $query = mysqli_query($koneksi, "SELECT * FROM resep");
    $data = [];
    while ($row = mysqli_fetch_assoc($query)) {
        $data[] = $row;
    }
    echo json_encode($data);
}

// Handle POST (tambah resep baru)
if ($method == 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);
    $nama = $input['nama'];
    $kategori = $input['kategori'];
    $bahan = $input['bahan'];
    $langkah = $input['langkah'];

    mysqli_query($koneksi, "INSERT INTO resep (nama, kategori, bahan, langkah) VALUES ('$nama', '$kategori', '$bahan', '$langkah')");
    echo json_encode(["message" => "Resep berhasil ditambahkan"]);
}

// Handle DELETE (hapus resep)
if ($method == 'DELETE') {
    parse_str(file_get_contents("php://input"), $_DELETE);
    $id = $_DELETE['id'];
    mysqli_query($koneksi, "DELETE FROM resep WHERE id = $id");
    echo json_encode(["message" => "Resep berhasil dihapus"]);
}

// Handle PUT (update resep)
if ($method == 'PUT') {
    parse_str(file_get_contents("php://input"), $_PUT);
    $id = $_PUT['id'];
    $nama = $_PUT['nama'];
    $kategori = $_PUT['kategori'];
    $bahan = $_PUT['bahan'];
    $langkah = $_PUT['langkah'];

    mysqli_query($koneksi, "UPDATE resep SET nama='$nama', kategori='$kategori', bahan='$bahan', langkah='$langkah' WHERE id = $id");
    echo json_encode(["message" => "Resep berhasil diupdate"]);
}