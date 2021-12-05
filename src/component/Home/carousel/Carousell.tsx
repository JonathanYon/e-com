import { images } from "../../../asset/img";
import Slider from "react-slick";
import "./carsoull.css";
import { Badge, Container } from "react-bootstrap";

const Carousell = () => {
  // function SampleNextArrow(props: any) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         display: "block",
  //         background: "black",
  //         borderRadius: "50%",
  //       }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function SamplePrevArrow(props: any) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         display: "block",
  //         background: "black",
  //         borderRadius: "50%",
  //       }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <h2> Responsive </h2>
      <Slider {...settings}>
        <div>
          <div className="position-relative">
            <img
              src={images.img7}
              className="bg-light"
              style={{ width: "15rem" }}
            />

            <Badge bg="warning" pill className="new">
              New
            </Badge>
            <Badge bg="success" pill className="super-deal">
              Super deal
            </Badge>
          </div>
          <div
            style={{ width: "15rem" }}
            className=" d-flex flex-column text-left"
          >
            <small className="product-name">hello</small>

            <small className="product-price">300$</small>
          </div>
        </div>
        <div>
          <img
            src={images.img8}
            className="bg-light"
            style={{ width: "15rem" }}
          />
        </div>
        <div>
          <img
            src={images.img8}
            className="bg-light"
            style={{ width: "15rem" }}
          />
        </div>
        <div>
          <img
            src={images.img8}
            className="bg-light"
            style={{ width: "15rem" }}
          />
        </div>
        <div>
          <img
            src={images.img8}
            className="bg-light"
            style={{ width: "15rem" }}
          />
        </div>
        <div>
          <img
            src={images.img8}
            className="bg-light"
            style={{ width: "15rem" }}
          />
        </div>
        <div>
          <img
            src={images.img8}
            className="bg-light"
            style={{ width: "15rem" }}
          />
        </div>
        <div>
          <img
            src={images.img8}
            className="bg-light"
            style={{ width: "15rem" }}
          />
        </div>
      </Slider>
    </Container>
  );
};
export default Carousell;
