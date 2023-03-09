import { Link, useRouteError } from "react-router-dom";

const CareersError = () => {
  const error = useRouteError();
  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>Message : {error.message}</p>
      Go back to <Link to={"/careers"}>Career Page</Link>
    </div>
  );
};
export default CareersError;
