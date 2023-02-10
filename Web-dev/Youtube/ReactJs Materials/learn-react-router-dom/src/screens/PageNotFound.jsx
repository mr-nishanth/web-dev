import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <Typography variant="h4">Page not found</Typography>
      <Typography variant="body1" color={"grey"}>
        Go to <Link to={"/"}>Home Page</Link>
      </Typography>
    </>
  );
};
export default PageNotFound;
