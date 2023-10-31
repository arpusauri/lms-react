// Import Router
import { createBrowserRouter } from "react-router-dom";

// Layout
import DashboardLayout from "../layout/Dashboard/DashboardLayout";

// Admin
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Admin from "../pages/Admin/Pegawai/Pegawai";
import Anggota from "../pages/Admin/Anggota/Anggota";
import Buku from "../pages/Admin/Buku/Buku";
import Peminjaman from "../pages/Admin/Peminjaman/Peminjaman";

// CRUD Routing
import TambahAnggota from "../features/Anggota/AddAnggota";
import UpdateAnggota from "../features/Anggota/UpdateAnggota";

// Index Router
import Login from "../pages/Login";
import Home from "../pages";
import Signup from "../pages/Signup";
import NoPage from "../pages/NoPage";

const router = createBrowserRouter([
  // Index Routing
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
  // Dashboard Routing
  {
    element: <DashboardLayout />,
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
