import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "../components/Nav";

function Anggota() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    alert("Apakah anda yakin ingin menghapusnya?");
    axios.delete("http://localhost:8001/delete/" + id)
      .then(res => {
        window.location.reload();
      })
    .catch(err => console.log(err))
}

  return (
    <div className="row">
      <Nav />
      <div className="container-fluid">
          <Link to="/create/anggota" type="button" className="shadow btn btn-dark mt-4 rounded">
            Tambah Anggota
          </Link>
        <h4 className="mt-4">Member List</h4>
        <table className="shadow table table-striped">
          <thead className="border">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Telepon</th>
              <th scope="col">Tanggal Bergabung</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((anggota, index) => {
              return (
                <tr key={index}>
                  <td>{anggota.id_anggota}</td>
                  <td>{anggota.nama_anggota}</td>
                  <td>{anggota.username}</td>
                  <td>{anggota.email}</td>
                  <td>{anggota.no_telp}</td>
                  <td>{anggota.tgl_bergabung}</td>
                  <td>
                    <Link
                      to={`/edit/anggota/${anggota.id_anggota}`}
                      className="btn btn-sm btn-primary"
                    >
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(anggota.id_anggota)} className="btn btn-sm btn-danger mx-2">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Anggota;
