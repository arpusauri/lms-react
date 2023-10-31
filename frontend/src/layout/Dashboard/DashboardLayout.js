import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";

export default function Dashboard() {
  return (
    <div className="container-fluid bg-white min-vh-100">
      <div className="row">
        <div className="col-4 col-md-2 bg-dark vh-100 position-fixed">
          <Sidebar />
        </div>
        <div className="col-4 col-md-2"></div>
        <div className="col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
