import { Badge, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { images } from "../../../asset/img";
import "./carsoull.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    // items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    // items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    // items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    // items: 3,
  },
};

const SmoothCarsoul = () => {
  return (
    <Container className="my-5">
      <Carousel responsive={responsive} className="">
        <div>
          <div className="position-relative">
            <img
              src={images.img2}
              className="bg-light"
              // style={{ width: "15rem" }}
            />

            {/* <Badge bg="warning" pill className="new">
            New
          </Badge>
          <Badge bg="success" pill className="super-deal">
            Super deal
          </Badge>
        </div>
        <div
          //   style={{ width: "15rem" }}
          className=" d-flex flex-column text-left"
        >
          <small className="product-name">hello</small>

          <small className="product-price">300$</small> */}
          </div>
        </div>
        <div>
          <div className="position-relative">
            <img
              src={images.img2}
              className="bg-light"
              // style={{ width: "15rem" }}
            />

            {/* <Badge bg="warning" pill className="new">
            New
          </Badge>
          <Badge bg="success" pill className="super-deal">
            Super deal
          </Badge>
        </div>
        <div
          //   style={{ width: "15rem" }}
          className=" d-flex flex-column text-left"
        >
          <small className="product-name">hello</small>

          <small className="product-price">300$</small> */}
          </div>
        </div>
        <div>
          <div className="position-relative">
            <img
              src={images.img2}
              className="bg-light"
              // style={{ width: "15rem" }}
            />

            {/* <Badge bg="warning" pill className="new">
            New
          </Badge>
          <Badge bg="success" pill className="super-deal">
            Super deal
          </Badge>
        </div>
        <div
          //   style={{ width: "15rem" }}
          className=" d-flex flex-column text-left"
        >
          <small className="product-name">hello</small>

          <small className="product-price">300$</small> */}
          </div>
        </div>
        <div>
          <div className="position-relative">
            <img
              src={images.img2}
              className="bg-light"
              // style={{ width: "15rem" }}
            />

            {/* <Badge bg="warning" pill className="new">
            New
          </Badge>
          <Badge bg="success" pill className="super-deal">
            Super deal
          </Badge>
        </div>
        <div
          //   style={{ width: "15rem" }}
          className=" d-flex flex-column text-left"
        >
          <small className="product-name">hello</small>

          <small className="product-price">300$</small> */}
          </div>
        </div>
        <div>
          <div className="position-relative">
            <img
              src={images.img2}
              className="bg-light"
              // style={{ width: "15rem" }}
            />

            {/* <Badge bg="warning" pill className="new">
            New
          </Badge>
          <Badge bg="success" pill className="super-deal">
            Super deal
          </Badge>
        </div>
        <div
          //   style={{ width: "15rem" }}
          className=" d-flex flex-column text-left"
        >
          <small className="product-name">hello</small>

          <small className="product-price">300$</small>*/}
          </div>
        </div>
      </Carousel>
    </Container>
  );
};
export default SmoothCarsoul;
