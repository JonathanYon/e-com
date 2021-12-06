import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { images } from "../../../asset/img";
import "./carsoull.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    // items: 6,
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    // items: 5,
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    // items: 4,
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    // items: 4,
    items: 3,
  },
};

const SmallCarsoul = () => {
  return (
    <Carousel responsive={responsive} className="">
      {/* <div> */}
      <div>
        <img className="" src={images.img6} alt="" width="50" height="80" />
      </div>
      <img className="" src={images.img6} alt="" width="50" height="80" />
      <img className="" src={images.img6} alt="" width="50" height="80" />
      <img className="" src={images.img6} alt="" width="50" height="80" />
      <img className="" src={images.img6} alt="" width="50" height="80" />
      {/* </div> */}
    </Carousel>
  );
};
export default SmallCarsoul;
