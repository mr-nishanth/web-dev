
import './App.css';
import { Link, Outlet } from "react-router-dom"
function App() {
  return (
    <div className="container mx-auto">
      <nav className='bg-gray-100 flex gap-4'>
        {/* <a href="/invoice"><span>Invoice</span></a> */}
        {/* <a href="/expenses"><span>Expenses</span></a> */}

        <Link to="/invoice" >
          <span>Invoice</span>
        </Link>
        <Link to="/expenses" >
          <span>Expenses</span>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
