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
        <div className="mr-4 rounded-circle burger ml-5">
          <FaBars />
        </div>
        <div className="mt-2">
          <FiSearch className="search mr-2" />
          <small>Search</small>
        </div>
      </div>
      <div>
        <h2>e-com</h2>
      </div>
      <div>
        <div className="mr-5">
          <small>Login</small>
          <BiUser />
          <FiShoppingCart className="ml-2" />
        </div>
      </div>
    </Navbar>
  );
};
export default TopNav;
