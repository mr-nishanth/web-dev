import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    id: "HomePage",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    id: "AboutPage",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/contact",
    id: "ContactPage",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: "/dashboard",
    id: "DashboardPage",
    element: <Dashboard />,
  },
]);
