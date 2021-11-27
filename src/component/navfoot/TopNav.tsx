import { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

// interface ComProps {
//   title: string;
//   num: number;
// }

const TopNav = () => {
  return (
    <Navbar bg="light" variant="light">
      <div className="mr-2 rounded-circle">
        <FaBars />
      </div>
      <div>
        <FiSearch />
        <small>Search</small>
      </div>
      {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
      {/* <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav> */}
      <Form></Form>
    </Navbar>
  );
};
export default TopNav;
