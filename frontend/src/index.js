import React from "react"
import ReactDOM from "react-dom/client"
import {RouterProvider} from "react-router-dom";
import router from "./router/Router";

export default function App() {
  return <RouterProvider router={router} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
