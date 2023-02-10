import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)({
  textDecoration: "none",
  color: "white",
  fontSize: 20,
  "&.active": {
    background: "navy",
    padding: 10,
    borderRadius: 5,
  },
});
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h3" sx={{ flexGrow: 1 }}>
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
              <StyledNavLink to={"/"}>Home</StyledNavLink>
              <StyledNavLink to={"about"}>About</StyledNavLink>
              <StyledNavLink to={"contact"}>Contact</StyledNavLink>
              <StyledNavLink to={"career"}>Career</StyledNavLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
