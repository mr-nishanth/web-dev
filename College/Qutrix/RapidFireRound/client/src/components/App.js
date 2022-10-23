import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom"

/**
 * React routes
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Root Element</div>
  },
  {
    path: "/quiz",
    element: <div>QUiz components</div>
  },
  {
    path: "/result",
    element: <div>Result components</div>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
