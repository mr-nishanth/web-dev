import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const About = () => {
  const [user, setUser] = useState(true);
  // const navigate = useNavigate();
  if (!user) return <Navigate to={"/"} replace={true} />; // by default the routes are stored in history, replace={true} used to remove the history
  return (
    <>
      <Typography variant="h3">About</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, sequi
        dolorum? Tenetur at ipsa sint impedit explicabo amet, voluptatibus ea
        natus nostrum laborum perspiciatis. Non deleniti maxime quas nisi
        nostrum.
      </Typography>
      <Button variant="contained" onClick={() => setUser(false)}>
        Logout
      </Button>
    </>
  );
};
export default About;
