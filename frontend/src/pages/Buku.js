import React from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const Buku = () => {
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
          Tambah Buku
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
                    ID Penulis
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
                    ID Penerbit
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
                    ID Kategori
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
                    ISBN
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
                    Judul Buku
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
                    Tahun Terbit
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
                    Jumlah Buku
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
          <h4 className="mt-4">Book List</h4>
          <table class="table table-striped">
            <thead className="border">
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID Penulis</th>
                <th scope="col">ID Penerbit</th>
                <th scope="col">ID Kategori</th>
                <th scope="col">ISBN</th>
                <th scope="col">Judul Buku</th>
                <th scope="col">Tahun Terbit</th>
                <th scope="col">Judul Buku</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>111</td>
                <td>Makan - makan</td>
                <td>18/10/2014</td>
                <td>3</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td>222</td>
                <td>Surabi haneut</td>
                <td>17/10/2016</td>
                <td>2</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>3</td>
                <td>3</td>
                <td>3</td>
                <td>333</td>
                <td>Java coffee</td>
                <td>16/10/2021</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default Buku;
