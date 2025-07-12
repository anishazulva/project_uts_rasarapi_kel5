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

$method = $_SERVER['REQUEST_METHOD'];

// Tangani preflight OPTIONS
if ($method == 'OPTIONS') {
    http_response_code(200);
    exit();
}

include 'koneksi.php';

// Handle GET (ambil semua kategori)
if ($method == 'GET') {
    $query = mysqli_query($koneksi, "SELECT * FROM kategori");
    $data = [];
    while ($row = mysqli_fetch_assoc($query)) {
        $data[] = $row;
    }
    echo json_encode($data);
}

// Handle POST (tambah kategori baru)
if ($method == 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);
    $nama_kategori = $input['nama_kategori'];
    mysqli_query($koneksi, "INSERT INTO kategori (nama_kategori) VALUES ('$nama_kategori')");
    echo json_encode(["message" => "Kategori berhasil ditambahkan"]);
}

// Handle DELETE (hapus kategori)
if ($method == 'DELETE') {
    $input = json_decode(file_get_contents("php://input"), true);

    if (isset($input['id_kategori'])) {
        $id = $input['id_kategori'];
        mysqli_query($koneksi, "DELETE FROM kategori WHERE id_kategori = $id");
        echo json_encode(["message" => "Kategori berhasil dihapus"]);
    } else {
        http_response_code(400);
        echo json_encode(["message" => "ID kategori tidak ditemukan dalam permintaan."]);
    }
}

// Handle PUT (update kategori)
if ($method == 'PUT') {
    $input = json_decode(file_get_contents("php://input"), true);
    $id_kategori = $input['id_kategori'];
    $nama_kategori = $input['nama_kategori'];
    mysqli_query($koneksi, "UPDATE kategori SET nama_kategori='$nama_kategori' WHERE id_kategori = $id_kategori");
    echo json_encode(["message" => "Kategori berhasil diupdate"]);
} 