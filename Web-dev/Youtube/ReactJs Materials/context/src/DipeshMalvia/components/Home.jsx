import { Button } from "react-bootstrap";

Button;
const Home = () => {
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        <div className="d-grid gap-2">
          <Button variant="primary">Log out</Button>
        </div>
      </div>
    </>
  );
};
export default Home;
