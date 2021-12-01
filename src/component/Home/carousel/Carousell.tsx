import { images } from "../../../asset/img";
import Slider from "react-slick";
import "./carsoull.css";
import { Container } from "react-bootstrap";

const Carousell = () => {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
        <div className="">
          <img
            src={images.img7}
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
