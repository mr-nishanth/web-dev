import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <Link to="/">
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="BlackKart"
              className="navbar-logo"
            />
          </Link>
          <div className="navbar-search">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for Products brands and more"
              className="navbar-searchBar"
            />
            <button className="searchBtn">
              <IoSearch />
            </button>
            <button className="navbar-btn">Login</button>
            <div className="navbar-bcs">
              <h3>Become a seller</h3>
            </div>
            <div className="navbar-more">
              <h3>
                More{" "}
                <i className="moreDown">
                  <MdKeyboardArrowDown />
                </i>
              </h3>
            </div>
            <div className="navbar-cart">
              <div className="cart-item">
                <FaShoppingCart />
              </div>
              <Link to={"/cart"} className="cart">
                Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
