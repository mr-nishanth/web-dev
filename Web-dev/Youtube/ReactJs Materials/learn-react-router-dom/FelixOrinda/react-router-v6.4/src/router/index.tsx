import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Protected from "../components/Protected";
import postLoader from "../loaders/postLoader";
import statsLoader from "../loaders/statsLoader";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import DashboardError from "../pages/DashboardError";
import DashboardStats from "../pages/DashboardStats";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Post from "../pages/Post";
import Posts from "../pages/Posts";
import Settings from "../pages/Settings";
import User from "../pages/User";
import Users from "../pages/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    id: "Home",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    id: "About",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/contact",
    id: "Contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: "/dashboard",
    id: "Dashboard",
    element: (
      <Protected>
        <Dashboard />
      </Protected>
    ),
    children: [
      {
        errorElement: <DashboardError />,
        children: [
          {
            index: true,
            element: <DashboardStats />,
            loader: statsLoader,
          },
          {
            path: "/dashboard/users",
            id: "DashboardUsers",
            element: <Users />,
          },
          {
            path: "/dashboard/posts",
            id: "DashboardPosts",
            element: <Posts />,
            loader: statsLoader,
          },
          {
            path: "/dashboard/settings",
            id: "DashboardSettings",
            element: <Settings />,
          },
          {
            path: "/dashboard/users/:id",
            id: "DashboardUser",
            element: <User />,
          },
          {
            path: "/dashboard/posts/:id",
            id: "DashboardPost",
            element: <Post />,
            loader: postLoader,
          },
        ],
      },
    ],
  },
]);
