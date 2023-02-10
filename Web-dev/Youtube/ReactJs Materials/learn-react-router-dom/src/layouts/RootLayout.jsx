import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ padding: "1rem" }}>
        <Outlet />
      </Container>
    </>
  );
};
export default RootLayout;
