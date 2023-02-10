import { Box, styled, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
const StyledNavLinkButton = styled(NavLink)({
  textDecoration: "none",
  background: "#1876d1",
  color: "white",
  fontSize: 20,
  padding: 10,
  borderRadius: 5,
  paddingBlock: 10,
  paddingInline: 40,
  "&.active": {
    background: "blue",
  },
});
const Contact = () => {
  return (
    <>
      <Typography variant="h3">Contact</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, sequi
        dolorum? Tenetur at ipsa sint impedit explicabo amet, voluptatibus ea
        natus nostrum laborum perspiciatis. Non deleniti maxime quas nisi
        nostrum.
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: 5,
          gap: 10,
        }}
      >
        <StyledNavLinkButton to={"mail"}>Mail Us</StyledNavLinkButton>
        <StyledNavLinkButton to={"call"}>Call Us</StyledNavLinkButton>
      </Box>
    </>
  );
};
export default Contact;
