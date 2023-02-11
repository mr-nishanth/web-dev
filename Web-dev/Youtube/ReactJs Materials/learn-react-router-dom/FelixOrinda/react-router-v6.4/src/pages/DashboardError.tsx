import { useRouteError } from "react-router-dom";

const DashboardError = () => {
  const error = useRouteError() as any;
  return (
    <div>
      <h1>Oops! something went wrong😔</h1>
      <p>
        <strong>
          Error : {error.statusText} {error.status}
        </strong>
      </p>
    </div>
  );
};
export default DashboardError;
