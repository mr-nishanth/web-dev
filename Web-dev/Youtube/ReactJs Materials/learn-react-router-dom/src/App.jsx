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
import Home from "./screens/Home";
import Mail from "./screens/Mail";
import PageNotFound from "./screens/PageNotFound";
import CareerLayout from "./layouts/CareerLayout";
import Career, { careerLoader } from "./screens/Career";
import CareerError from "./components/CareerError";
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
      <Route path="career" element={<CareerLayout />}>
        {/* Career component render once the reach career route with help of [index attribute]*/}
        <Route
          index
          element={<Career />}
          loader={careerLoader}
          errorElement={<CareerError />}
        />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
function App() {
  // Setup provider step 3
  return <RouterProvider router={router} />;
}

export default App;
