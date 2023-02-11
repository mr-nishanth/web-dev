import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import AppBreadcrumbs from "../components/AppBreadcrumbs";
import Navbar from "../components/Navbar";
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ p: 3 }}>
        <AppBreadcrumbs />
      </Container>
      <Container sx={{ p: 5 }}>
        <Outlet />
      </Container>
    </>
  );
};
export default RootLayout;
