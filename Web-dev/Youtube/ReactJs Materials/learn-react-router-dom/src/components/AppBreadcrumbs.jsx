import { Breadcrumbs, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const AppBreadcrumbs = () => {
  const location = useLocation();
  // console.log({ location }); // pathname: '/career/1'
  let crumbLink = "";
  const crumbPath = location.pathname
    .split("/")
    .filter((path) => path !== "")
    .map((crumb) => {
      crumbLink += `/${crumb}`;
      return (
        <Link to={crumbLink} key={crumb}>
          {crumb}
        </Link>
      );
    });
  console.log({ crumbPath });
  return <Breadcrumbs aria-label="breadcrumb">{crumbPath}</Breadcrumbs>;
};
export default AppBreadcrumbs;

/*
<Link underline="hover" color="inherit" href="/">
        MUI
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
        Core
      </Link>
      <Typography color="text.primary">Breadcrumbs</Typography>
*/
