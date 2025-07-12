<?php
// Koneksi ke database
$koneksi = mysqli_connect("localhost", "root", "", "rasarapi");

// Tambah Resep
if (isset($_POST['tambah'])) {
    $nama = $_POST['nama'];
    $kategori = $_POST['kategori'];
    $bahan = $_POST['bahan'];
    $langkah = $_POST['langkah'];
    mysqli_query($koneksi, "INSERT INTO resep (nama, kategori, bahan, langkah) VALUES ('$nama', '$kategori', '$bahan', '$langkah')");
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}

// Hapus Resep
if (isset($_GET['hapus'])) {
    $id = $_GET['hapus'];
    mysqli_query($koneksi, "DELETE FROM resep WHERE id = $id");
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}

// Edit Resep
if (isset($_POST['update'])) {
    $id = $_POST['id'];
    $nama = $_POST['nama'];
    $kategori = $_POST['kategori'];
    $bahan = $_POST['bahan'];
    $langkah = $_POST['langkah'];
    mysqli_query($koneksi, "UPDATE resep SET nama='$nama', kategori='$kategori', bahan='$bahan', langkah='$langkah' WHERE id = $id");
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}
?>


<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Manajemen Resep</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        table { border-collapse: collapse; width: 100%; margin-top: 20px; }
        th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
        th { background-color: #eee; }
        form textarea { width: 100%; height: 60px; }
    </style>
</head>
<body>

<h2>Tambah Resep Baru</h2>
<form method="post">
    <label>Nama Resep:</label><br>
    <input type="text" name="nama" required><br><br>

    <label>Kategori:</label><br>
    <input type="text" name="kategori" required><br><br>

    <label>Bahan:</label><br>
    <textarea name="bahan" required></textarea><br><br>

    <label>Langkah:</label><br>
    <textarea name="langkah" required></textarea><br><br>

    <button type="submit" name="tambah">Simpan</button>
</form>

<h2>Daftar Resep</h2>
<table>
    <tr>
        <th>ID</th>
        <th>Nama</th>
        <th>Kategori</th>
        <th>Bahan</th>
        <th>Langkah</th>
        <th>Aksi</th>
    </tr>
    <?php
    $resep = mysqli_query($koneksi, "SELECT * FROM resep");
    while ($row = mysqli_fetch_assoc($resep)) {
        echo "<tr>
            <td>{$row['id']}</td>
            <td>{$row['nama']}</td>
            <td>{$row['kategori']}</td>
            <td>{$row['bahan']}</td>
            <td>{$row['langkah']}</td>
            <td>
                <a href='?edit={$row['id']}'>Edit</a> | 
                <a href='?hapus={$row['id']}' onclick=\"return confirm('Hapus resep ini?')\">Hapus</a>
            </td>
        </tr>";
    }
    ?>
</table>

<?php
// Tampilkan form edit jika klik tombol edit
if (isset($_GET['edit'])):
    $id = $_GET['edit'];
    $data = mysqli_fetch_assoc(mysqli_query($koneksi, "SELECT * FROM resep WHERE id = $id"));
?>
    <h2>Edit Resep</h2>
    <form method="post">
        <input type="hidden" name="id" value="<?= $data['id'] ?>">
        <label>Nama Resep:</label><br>
        <input type="text" name="nama" value="<?= $data['nama'] ?>" required><br><br>

        <label>Kategori:</label><br>
        <input type="text" name="kategori" value="<?= $data['kategori'] ?>" required><br><br>

        <label>Bahan:</label><br>
        <textarea name="bahan" required><?= $data['bahan'] ?></textarea><br><br>

        <label>Langkah:</label><br>
        <textarea name="langkah" required><?= $data['langkah'] ?></textarea><br><br>

        <button type="submit" name="update">Update</button>
    </form>
<?php endif; ?>
    <a href="../index.php">Kembali</a>
</body>
</html>
