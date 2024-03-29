import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CareerDetails from "./components/careers/CareerDetails";
import Careers from "./components/careers/Careers";
import CareersError from "./components/careers/CareersError";
import Contact from "./components/help/Contact";
import Faq from "./components/help/Faq";
import { contactAction } from "./form-action/contactAction";
import CareersLayout from "./Layouts/CareersLayout";
import HelpLayout from "./Layouts/HelpLayout";
import RootLayout from "./Layouts/RootLayout";
import { careerDetailsLoader, careersLoader } from "./loaders/careersLoader";
import About from "./pages/About";
import NotFound from "./pages/error/NotFound";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        {/* /help/faq */}
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index loader={careersLoader} element={<Careers />} />
        <Route
          path=":id"
          loader={careerDetailsLoader}
          element={<CareerDetails />}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
