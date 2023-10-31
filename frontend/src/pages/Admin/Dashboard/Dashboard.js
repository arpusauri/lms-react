import React from "react";
import Nav from "../../../components/Navbar/Navbar";

function Home({ Toggle }) {
  return (
    <div className="row">
      <Nav Toggle={Toggle} />
      <div className="container-fluid">
        <div className="row g-3 my-2">
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">3</h3>
                <p className="fs-5">Buku</p>
              </div>
              <i className="bi bi-book p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">3</h3>
                <p className="fs-5">Buku Dipinjam</p>
              </div>
              <i className="bi bi-bookmark p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">3</h3>
                <p className="fs-5">Anggota</p>
              </div>
              <i className="bi bi-people p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">3</h3>
                <p className="fs-5">Admin</p>
              </div>
              <i className="bi bi-wrench p-3 fs-1"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h4 className="text-dark fs-4 mx-1 mt-4">Peminjaman Terakhir</h4>
        <table class="table table-striped">
          <thead className="border">
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID Buku</th>
              <th scope="col">ID Anggota</th>
              <th scope="col">ID Pegawai</th>
              <th scope="col">ID Denda</th>
              <th scope="col">Tanggal Pinjam</th>
              <th scope="col">Tanggal Kembali</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">3</th>
              <td>3</td>
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
              <th scope="row">1</th>
              <td>1</td>
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
}

export default Home;
