import React from "react";
import Nav from "../../../components/Navbar/Navbar";

const Peminjaman = () => {
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
          Tambah Peminjaman
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
                  Add Issue
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
                    ID Buku
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
                    ID Anggota
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
                    ID Pegawai
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
                    ID Denda
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
                    Tanggal Peminjaman
                  </label>
                  <input
                    type="date"
                    id="defaultForm-email"
                    class="form-control validate"
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    for="defaultForm-email"
                  >
                    Tanggal Kembali
                  </label>
                  <input
                    type="date"
                    id="defaultForm-email"
                    class="form-control validate"
                  />
                  <label
                    data-error="wrong"
                    data-success="right"
                    for="defaultForm-email"
                  >
                    Status
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
        <h4 className="mt-4">Issue List</h4>
        <table class="table table-striped">
          <thead className="border">
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID Buku</th>
              <th scope="col">ID Anggota</th>
              <th scope="col">ID Pegawai</th>
              <th scope="col">ID Denda</th>
              <th scope="col">Tanggal Peminjaman</th>
              <th scope="col">Tanggal Kembali</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>-</td>
              <td>11/10/2023</td>
              <td>18/10/2023</td>
              <td>Belum Kembali</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>-</td>
              <td>10/10/2023</td>
              <td>17/10/2023</td>
              <td>Sudah Kembali</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>3</td>
              <td>3</td>
              <td>1</td>
              <td>-</td>
              <td>9/10/2023</td>
              <td>16/10/2023</td>
              <td>Belum Kembali</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Peminjaman;
