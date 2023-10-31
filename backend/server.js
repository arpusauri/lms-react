import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "library_ms"
})

app.get('/', (req, res) => {
  const sql = "SELECT * FROM anggota";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  })
})

app.post('/anggota', (req, res) => {
  const sql = "INSERT INTO anggota (`nama_anggota`,`username`,`email`,`password`,`no_telp`,`tgl_bergabung`) VALUES (?)";
  const values = [
    req.body.nama_anggota,
    req.body.username,
    req.body.email,
    req.body.password,
    req.body.no_telp,
    req.body.tgl_bergabung
  ];
  db.query(sql, [values], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  })
})

app.get("/read/:id", (req, res) => {
  const sql = "SELECT * FROM anggota WHERE id_anggota = ?";
  const id = req.params.id;

  db.query(sql,[id], (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});

app.put('/update/:id', (req, res) => {
  const sql =
    "UPDATE anggota SET `nama_anggota`=?, `username`=?, `email`=?, `password`=?, `no_telp`=?, `tgl_bergabung`=? WHERE id_anggota=?";
  const id = req.params.id;
  db.query(
    sql,
    [
      req.body.nama_anggota,
      req.body.username,
      req.body.email,
      req.body.password,
      req.body.no_telp,
      req.body.tgl_bergabung,
      id
    ],
    (err, result) => {
      if (err) return res.json({ Message: "Error inside server" });
      return res.json(result);
    }
  );
})

app.delete('/delete/:id', (req, res) => {
  const sql = "DELETE FROM anggota WHERE id_anggota=?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
})

app.listen(8001, () => {
  console.log("Server is listening to port 8001");
})