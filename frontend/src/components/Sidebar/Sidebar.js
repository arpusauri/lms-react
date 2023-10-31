import React from "react";
import { Link } from "react-router-dom";
import "../../style/Sidebar.css"

function Sidebar() {
  return (
    <div className="bg-dark sidebar p-2">
      <div className="m-2">
        <i className="bi bi-substack me-3 fs-5 text-white"></i>
        <span className="brand-name fs-5 text-white">Sumeru Library</span>
      </div>
      <hr className="text-white" />
      <div className="list-group list-group-flush bg-dark">
        <Link to="/dashboard">
          <a className="list-group-item py-2 bg-dark border-0">
            <i className="bi bi-speedometer2 fs-5 me-3"></i>
            <span className="text-white">Dashboard</span>
          </a>
        </Link>
        <Link to="/dashboard/anggota">
          <a className="list-group-item py-2 bg-dark border-0">
            <i className="bi bi-person fs-5 me-3"></i>

            <span className="text-white">Anggota</span>
          </a>
        </Link>
        <Link to="/dashboard/buku">
          <a className="list-group-item py-2 bg-dark border-0">
            <i className="bi bi-book fs-5 me-3"></i>
            <span className="text-white">Buku</span>
          </a>
        </Link>
        <Link to="/dashboard/peminjaman">
          <a className="list-group-item py-2 bg-dark border-0">
            <i className="bi bi-bookmark fs-5 me-3"></i>
            <span className="text-white">Peminjaman</span>
          </a>
        </Link>
        <Link to="/dashboard/admin">
          <a className="list-group-item py-2 bg-dark border-0">
            <i className="bi bi-wrench fs-5 me-3"></i>
            <span className="text-white">Admin</span>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
