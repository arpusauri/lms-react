import React from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="row">
      <Nav />
      <div className="container-fluid">
        <button
          type="button"
          className="btn btn-dark mt-4"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Tambah Admin
        </button>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Add Buku
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body mx-3">
                <div class="md-form mb-5">
                  <i class="fas fa-envelope prefix grey-text"></i>
                  <label
                    data-error="wrong"
                    data-success="right"
                    for="defaultForm-email"
                  >
                    Nama Pegawai
                  </label>
                  <input
                    type="text"
                    id="defaultForm-email"
                    class="form-control validate"
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    for="defaultForm-email"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="defaultForm-email"
                    class="form-control validate"
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    for="defaultForm-email"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="defaultForm-email"
                    class="form-control validate"
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    for="defaultForm-email"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="defaultForm-email"
                    class="form-control validate"
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    for="defaultForm-email"
                  >
                    Telepon
                  </label>
                  <input
                    type="text"
                    id="defaultForm-email"
                    class="form-control validate"
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    for="defaultForm-email"
                  >
                    Alamat
                  </label>
                  <input
                    type="text"
                    id="defaultForm-email"
                    class="form-control validate"
                  />
                </div>
              </div>
              <div class="modal-footer d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-outline-success w-25"
                  data-bs-dismiss="modal"
                >
                  Enter
                </button>
              </div>
            </div>
          </div>
        </div>
        <h4 className="mt-4">Admin List</h4>
        <table class="table table-striped">
          <thead className="border">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama Pegawai</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Telepon</th>
              <th scope="col">Alamat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Asep</td>
              <td>Cepz</td>
              <td>cepz123@yahoo.com</td>
              <td>081295714925</td>
              <td>Jl. Cihanjuang No. 134</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Agus</td>
              <td>Gusz</td>
              <td>guz123@yahoo.com</td>
              <td>081294214925</td>
              <td>Jl. Cigotik No. 420</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Budi</td>
              <td>budz</td>
              <td>budzzz123@yahoo.com</td>
              <td>081829514925</td>
              <td>Jl. Cikaresang No. 69</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
