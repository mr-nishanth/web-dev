import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/super-heroes">Traditional Super Heroes</Link>
        </li>
        <li>
          <Link to="/rq-super-heroes">RQ Super Heroes</Link>
        </li>
        {/* <li>
          <Link to="/rq-parallel">RQ Parallel Queries</Link>
        </li>
        <li>
          <Link to="/drq-parallel">RQ Dynamic PQ</Link>
        </li>
        <li>
          <Link to="/dependent-queries">DependentQueries</Link>
        </li>
        <li>
          <Link to="/paginated">Paginated</Link>
        </li> */}
      </ul>
    </nav>
  );
};
export default NavBar;
