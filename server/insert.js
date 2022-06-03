// script yang mengarah ke database
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cwa_devtour",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Terhubung!");
  var sql = "INSERT INTO language (gambar, materi, deskripsi) VALUES ?";
  var values = [
    [
      "https://cdn-icons-png.flaticon.com/256/1051/1051277.png",
      "HTML",
      "Bahasa ini digunakan untuk membuat kerangka atau struktur pembuatan aplikasi dan website",
    ],
    [
      "https://cdn-icons-png.flaticon.com/256/732/732190.png",
      "CSS",
      "CSS ini digunakan untuk mendesain tiap class atau id didalam aplikasi yang kita buat supaya tertata rapih dan lebih berwarna",
    ],
    [
      "https://cdn-icons-png.flaticon.com/256/5968/5968292.png",
      "Javascript",
      "Memberikan interaksi terhadap apa yang sudah kita buat sebelumnya dibagian HTML dan CSS agar lebih aktif lagi",
    ],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
