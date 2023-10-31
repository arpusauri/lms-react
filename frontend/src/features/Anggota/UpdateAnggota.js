import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../../components/Navbar/Navbar";

function UpdateAnggota() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8001/read/" + id)
      .then((res) => {
        console.log(res);
        setValues({
          ...values,
          nama_anggota: res.data[0].nama_anggota,
          username: res.data[0].username,
          email: res.data[0].email,
          password: res.data[0].password,
          no_telp: res.data[0].no_telp,
          tgl_bergabung: res.data[0].tgl_bergabung,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const [values, setValues] = useState({
    nama_anggota: "",
    username: "",
    email: "",
    password: "",
    no_telp: "",
    tgl_bergabung: "",
  });

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:8001/update/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/dashboard/anggota");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="row">
      <Nav />
      <div className="d-flex vh-100 bg-white justify-content-center">
        <div className="shadow p-3 mb-5 bg-white rounded w-50 bg-white rounded p-3">
          <form onSubmit={handleUpdate}>
            <h2>Update Anggota</h2>
            <div className="mb-2">
              <label htmlFor="">Nama</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                name="nama_anggota"
                value={values.nama_anggota}
                onChange={(e) =>
                  setValues({ ...values, nama_anggota: e.target.value })
                }
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Username</label>
              <input
                type="text"
                placeholder="Enter Username"
                className="form-control"
                name="username"
                value={values.username}
                onChange={(e) =>
                  setValues({ ...values, username: e.target.value })
                }
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                name="email"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                name="password"
                value={values.password}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">No Telepon</label>
              <input
                type="number"
                placeholder="Enter Telepon"
                className="form-control"
                name="no_telp"
                value={values.no_telp}
                onChange={(e) =>
                  setValues({ ...values, no_telp: e.target.value })
                }
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Tanggal Bergabung</label>
              <input
                type="date"
                placeholder="Enter Tanggal"
                className="form-control"
                name="tgl_bergabung"
                value={values.tgl_bergabung}
                onChange={(e) =>
                  setValues({ ...values, tgl_bergabung: e.target.value })
                }
              />
            </div>
            <button className="btn btn-success">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateAnggota;
