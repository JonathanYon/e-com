import "./nav-foot.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";

// interface ComProps {
//   title: string;
//   num: number;
// }

const TopNav = () => {
  return (
    <Navbar
      bg="light"
      variant="light"
      className="d-flex justify-content-between"
    >
      <div className="d-flex">
        <div className="mr-lg-4 rounded-circle burger ml-lg-5">
          <FaBars />
        </div>
        <div className="mt-lg-2 d-flex">
          <FiSearch className="search mr-lg-2" />
          <small className="d-none d-lg-block search-word">Search</small>
        </div>
      </div>
      <div>
        <h2>e-com</h2>
      </div>
      <div>
        <div className="mr-lg-5 d-flex">
          <small className="d-none d-lg-block">Login</small>
          <BiUser className="d-none d-lg-block" />
          <FiShoppingCart className="ml-lg-2" />
        </div>
      </div>
    </Navbar>
  );
};
export default TopNav;
