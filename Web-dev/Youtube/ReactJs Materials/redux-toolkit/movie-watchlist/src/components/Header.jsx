import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              style={{ fontWeight: "700", marginLeft: "40px" }}
              sx={{ flexGrow: 1 }}
            >
              <Link to="/" style={{ fontSize: "32px" }}>
                Movie Watch List
              </Link>
            </Typography>
            <Link to="/" style={{ textDecoration: "none", fontSize: "20px" }}>
              <Button
                color="inherit"
                style={{ fontWeight: "600", marginLeft: "20px" }}
              >
                Watch List
              </Button>
            </Link>
            <Link
              to="/watched"
              style={{ textDecoration: "none", fontSize: "20px" }}
            >
              <Button
                color="inherit"
                style={{ fontWeight: "600", marginLeft: "20px" }}
              >
                Watched
              </Button>
            </Link>
            <Link
              to="/add"
              style={{ textDecoration: "none", fontSize: "20px" }}
            >
              <Button
                color="inherit"
                style={{ fontWeight: "600", marginLeft: "20px" }}
              >
                Add
              </Button>
            </Link>
            {/* <Link to="/">
              <Button
                color="inherit"
                style={{ fontWeight: "600", fontSize: "20px" }}
              >
                WatchList
              </Button>
            </Link> */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Header;
