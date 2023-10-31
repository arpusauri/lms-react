import React from "react"
import ReactDOM from "react-dom/client"
import {RouterProvider} from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import router from "./router/Router";

export default function App() {
  return <RouterProvider router={router} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
