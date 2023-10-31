import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

function TambahAnggota() {
  const [values, setValues] = useState({
    nama_anggota: "",
    username: "",
    email: "",
    password: "",
    no_telp: "",
    tgl_bergabung: "",
  });
  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8001/anggota", values)
      .then(res => {
        console.log(res);
        navigate('/dashboard/anggota')
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="row">
      <Nav />
      <div className="d-flex vh-100 bg-white justify-content-center">
        <div className="shadow p-3 mb-5 bg-white rounded w-50 bg-white rounded p-3">
          <form onSubmit={handleSubmit}>
            <h2>Add Anggota</h2>
            <div className="mb-2">
              <label htmlFor="">Nama</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                name="nama_anggota"
                onChange={handleDataChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Username</label>
              <input
                type="text"
                placeholder="Enter Username"
                className="form-control"
                name="username"
                onChange={handleDataChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                name="email"
                onChange={handleDataChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                name="password"
                onChange={handleDataChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">No Telepon</label>
              <input
                type="number"
                placeholder="Enter Telepon"
                className="form-control"
                name="no_telp"
                onChange={handleDataChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Tanggal Bergabung</label>
              <input
                type="date"
                placeholder="Enter Tanggal"
                className="form-control"
                name="tgl_bergabung"
                onChange={handleDataChange}
              />
            </div>
            <button className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TambahAnggota;
