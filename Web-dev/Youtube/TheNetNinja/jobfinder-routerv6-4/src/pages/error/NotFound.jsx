import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page not Found</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        excepturi unde, cumque, expedita explicabo earum et error provident
        reprehenderit eos quis corporis ipsam omnis ab. Maiores nam minus
        ratione praesentium.
      </p>
      <p>
        Go to <Link to="/">Homepage</Link> .
      </p>
    </div>
  );
};
export default NotFound;
