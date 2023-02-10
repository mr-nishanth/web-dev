import { Container, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import Career from "../screens/Career";

const CareerLayout = () => {
  return (
    <>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        neque excepturi consectetur tempora facilis est doloremque laudantium
        culpa, labore voluptatum quos, quia tenetur vel modi perferendis quidem
        voluptates, vitae quisquam?
      </Typography>
      <Container sx={{ p: 5 }}>
        <Outlet />
      </Container>
    </>
  );
};
export default CareerLayout;
