import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Admin from "../pages/Admin";
import Anggota from "../pages/Anggota";
import TambahAnggota from "../pages/TambahAnggota";
import UpdateAnggota from "../pages/UpdateAnggota";
import Buku from "../pages/Buku";
import Peminjaman from "../pages/Peminjaman";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NoPage from "../pages/NoPage";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/*",
    element: <NoPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    element: <App />,
    children: [
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/admin",
        element: <Admin />,
      },
      {
        path: "/dashboard/anggota",
        element: <Anggota />,
      },
      {
        path: "/create/anggota",
        element: <TambahAnggota />,
      },
      {
        path: "/edit/anggota/:id",
        element: <UpdateAnggota />,
      },
      {
        path: "/dashboard/peminjaman",
        element: <Peminjaman />,
      },
      {
        path: "/dashboard/buku",
        element: <Buku />,
      },
    ],
  },
]);

export default router;
