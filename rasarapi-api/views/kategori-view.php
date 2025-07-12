<?php
// Koneksi ke database
$koneksi = mysqli_connect("localhost", "root", "", "rasarapi");

// Tambah Kategori
if (isset($_POST['tambah'])) {
    $nama_kategori = $_POST['nama_kategori'];
    mysqli_query($koneksi, "INSERT INTO kategori (nama_kategori) VALUES ('$nama_kategori')");
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}

// Hapus Kategori
if (isset($_GET['hapus'])) {
    $id = $_GET['hapus'];
    mysqli_query($koneksi, "DELETE FROM kategori WHERE id_kategori = $id");
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}

// Update Kategori
if (isset($_POST['update'])) {
    $id = $_POST['id_kategori'];
    $nama_kategori = $_POST['nama_kategori'];
    mysqli_query($koneksi, "UPDATE kategori SET nama_kategori='$nama_kategori' WHERE id_kategori = $id");
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Manajemen Kategori</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        table { border-collapse: collapse; width: 100%; margin-top: 20px; }
        th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
        th { background-color: #eee; }
    </style>
</head>
<body>

<h2>Tambah Kategori Baru</h2>
<form method="post">
    <label>Nama Kategori:</label><br>
    <input type="text" name="nama_kategori" required><br><br>
    <button type="submit" name="tambah">Simpan</button>
</form>

<h2>Daftar Kategori</h2>
<table>
    <tr>
        <th>ID</th>
        <th>Nama Kategori</th>
        <th>Aksi</th>
    </tr>
    <?php
    $kategori = mysqli_query($koneksi, "SELECT * FROM kategori");
    while ($row = mysqli_fetch_assoc($kategori)) {
        echo "<tr>
            <td>{$row['id_kategori']}</td>
            <td>{$row['nama_kategori']}</td>
            <td>
                <a href='?edit={$row['id_kategori']}'>Edit</a> | 
                <a href='?hapus={$row['id_kategori']}' onclick=\"return confirm('Hapus kategori ini?')\">Hapus</a>
            </td>
        </tr>";
    }
    ?>
</table>

<?php
// Tampilkan form edit jika klik tombol edit
if (isset($_GET['edit'])):
    $id = $_GET['edit'];
    $data = mysqli_fetch_assoc(mysqli_query($koneksi, "SELECT * FROM kategori WHERE id_kategori = $id"));
?>
    <h2>Edit Kategori</h2>
    <form method="post">
        <input type="hidden" name="id_kategori" value="<?= $data['id_kategori'] ?>">
        <label>Nama Kategori:</label><br>
        <input type="text" name="nama_kategori" value="<?= $data['nama_kategori'] ?>" required><br><br>
        <button type="submit" name="update">Update</button>
    </form>
<?php endif; ?>
<a href="../index.php">kembali</a>

</body>
</html>
