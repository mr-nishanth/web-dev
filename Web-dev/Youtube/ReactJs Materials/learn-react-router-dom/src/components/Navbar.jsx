import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h4" sx={{ flexGrow: 1 }}>
              Blackly
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5rem",
              }}
            >
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"about"}>About</NavLink>
              <NavLink to={"contact"}>Contact</NavLink>
              <NavLink to={"career"}>Career</NavLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
