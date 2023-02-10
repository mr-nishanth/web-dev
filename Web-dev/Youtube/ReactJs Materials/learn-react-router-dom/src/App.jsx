import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import About from "./screens/About";
import Career from "./screens/Career";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
// step 2
const router = createBrowserRouter(
  createRoutesFromElements(
    // Setup parent routes
    <Route path="/" element={<RootLayout />}>
      // Setup children routes
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="career" element={<Career />} />
    </Route>
  )
);
function App() {
  // Setup provider step 3
  return <RouterProvider router={router} />;
}

export default App;
