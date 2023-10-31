import React, { useState } from "react";
import { Outlet, BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import Sidebar from "./components/Sidebar";


export default function App() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="container-fluid bg-white min-vh-">
      <div className="row">
        {toggle && (
          <div className="col-4 col-md-2 bg-dark vh-100 position-fixed">
            <Sidebar />
          </div>
        )}
        {toggle && <div className="col-4 col-md-2"></div>}
        <div className="col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

