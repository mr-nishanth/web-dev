import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ContactLayout from "./layouts/ContactLayout";
import RootLayout from "./layouts/RootLayout";
import About from "./screens/About";
import Call from "./screens/Call";
import Career from "./screens/Career";
import Contact from "./components/Contact";
import Home from "./screens/Home";
import Mail from "./screens/Mail";
import PageNotFound from "./screens/PageNotFound";
// step 2
const router = createBrowserRouter(
  createRoutesFromElements(
    // Setup parent routes for app
    <Route path="/" element={<RootLayout />}>
      // Setup children routes app
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      // Setup parent routes for contact
      <Route path="contact" element={<ContactLayout />}>
        // Setup children routes for contact
        <Route path="mail" element={<Mail />} />
        <Route path="call" element={<Call />} />
      </Route>
      <Route path="career" element={<Career />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
function App() {
  // Setup provider step 3
  return <RouterProvider router={router} />;
}

export default App;
