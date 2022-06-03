// panggil semua data yang sudah di install [mysql & express]
const express = require("express");
const mysql = require("mysql");

// use express untuk membuat server backend nya
const app = express();

// Konfigurasi Index.ejs
app.set("view engine", "ejs");
app.set("views", "./views");

// Konfigurasi MySql
// Aplikasi ini nantinya akan mengambil data dari database berikut
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pokemon",
});

// View engine tampilan yang akan ada diweb
db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Telah Terhubung");

  //  Select nama tabel disini
  const sql = "SELECT * FROM mytable";

  // Tampilkan data yang ada di tabel
  db.query(sql, (err, result) => {
    // Teknik Parsing Data Untuk Keseluruhan Data Yang Ada Di Tabel
    const users = JSON.parse(JSON.stringify(result));
    console.log("Isi Data Terkini -> ", users);
    app.get("/", (req, res) => {
      res.send(users);
    });
  });
});

// respon aplikasinya ketika server berhasil di jalankan
app.listen(8000, () => {
  console.log("Selamat Jalan Di Comment.js | Developed by : codewitharif");
  console.log("Server Jalan Di port 8000");
  console.log("Jalankan Di http://localhost:8000", "Untuk Melihat Data");
});
