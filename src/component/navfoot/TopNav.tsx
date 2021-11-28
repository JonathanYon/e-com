import "./nav-foot.css";

import { Navbar, Modal, ListGroup, FormControl, Card } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { useEffect, useState } from "react";

// interface ComProps {
//   title: string;
//   num: number;
// }

const TopNav = () => {
  const [show, setShow] = useState(false);
  const [card, setCard] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCardClose = () => setCard(false);
  const handleCardShow = () => setCard(true);
  const [width, setWidth] = useState(window.innerWidth); //<824
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <>
      <div className="modal-container">
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Body>
            <ListGroup variant="flush">
              <ListGroup.Item action variant="light">
                <div className="d-flex justify-content-between">
                  <h2>Hello 👋</h2>
                  <h5>Login</h5>
                </div>
              </ListGroup.Item>
              <ListGroup.Item action variant="warning">
                Light
              </ListGroup.Item>
            </ListGroup>
          </Modal.Body>
        </Modal>
      </div>
      <div className="">
        <Modal show={card} onHide={handleCardClose} animation={false}>
          <Modal.Body className="d-flex">
            <div
              className="rounded-circle burger close-circle ml-lg-5"
              onClick={handleCardClose}
            >
              <span className="close-x">X</span>
            </div>
            <ListGroup variant="flush">
              <ListGroup.Item action variant="light">
                <div className="d-flex justify-content-between">
                  {/* <h2>Hej! 👋</h2> */}
                  <h5>Login</h5>
                </div>
              </ListGroup.Item>
              <ListGroup.Item action variant="warning">
                Light
              </ListGroup.Item>
            </ListGroup>
          </Modal.Body>
        </Modal>
      </div>
      <Navbar
        bg="light"
        variant="light"
        className="d-flex justify-content-between"
      >
        <div
          className="d-flex"
          onClick={width < 824 ? handleShow : handleCardShow}
        >
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
            <FiShoppingCart className="ml-lg-3" />
          </div>
        </div>
      </Navbar>
    </>
  );
};
export default TopNav;
