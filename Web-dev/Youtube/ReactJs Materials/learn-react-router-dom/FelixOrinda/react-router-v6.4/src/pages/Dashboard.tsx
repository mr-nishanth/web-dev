import { Outlet } from "react-router-dom";
import DashBoardLayout from "../components/DashBoardLayout";

const Dashboard = () => {
  return (
    <DashBoardLayout>
      <Outlet />
    </DashBoardLayout>
  );
};
export default Dashboard;
