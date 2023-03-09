import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  console.log({ pathname });

  let currentLink = ``;
  //   Split the path eg:  /help/faq/ => ["help","faq",""]
  //   Filtering empty string eg:   ["help","faq",""] =>  ["help","faq"]
  //    Map the pathname
  let crumbs = pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      console.log({ currentLink });
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
};
export default Breadcrumbs;
