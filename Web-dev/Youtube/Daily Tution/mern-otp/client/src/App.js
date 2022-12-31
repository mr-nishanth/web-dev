import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import all Components
import Username from "./components/Username"
import Password from "./components/Password"
import Profile from "./components/Profile"
import Recovery from "./components/Recovery"
import Register from "./components/Register"
import Reset from "./components/Reset"
import PageNotFound from "./components/PageNotFound"

// Root Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Username />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/password",
    element: <Password />
  },
  {
    path: "/profile",
    element: <Profile />
  }, {
    path: "/recovery",
    element: <Recovery />
  },
  {
    path: "/reset",
    element: <Reset />
  },
  {
    path: "*",
    element: <PageNotFound />
  },
])

function App() {
  return (
    <main>
      <RouterProvider router={router
      }></RouterProvider>
    </main>
  );
}

export default App;
