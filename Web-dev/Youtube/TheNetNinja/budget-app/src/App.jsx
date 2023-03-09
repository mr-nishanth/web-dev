import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: dashboardLoader,
  },
  {
    path: "/about",
    element: <Dashboard />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
