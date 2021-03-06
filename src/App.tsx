import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopNav from "./component/navfoot/TopNav";
import IndividualCategory from "./component/Home/category/IndividualCateg";
import InfinitWords from "./component/Home/infiniteWords/InfiniteWords";
import Carousell from "./component/Home/carousel/Carousell";
import NewInfo from "./component/Home/newInfo/NewInfo";
import Footer from "./component/navfoot/Footer";
import SmallCarsoul from "./component/Home/carousel/SmallCarsoul";
import SmoothCarsoul from "./component/Home/carousel/SmoothCarsoul";

function App() {
  return (
    <div className="App">
      <TopNav />
      <IndividualCategory />
      <NewInfo photo={`${process.env.PUBLIC_URL}/fashion.jpg`} />
      <SmoothCarsoul />
      <InfinitWords />
      <Carousell />
      <SmallCarsoul />
      <NewInfo photo={`${process.env.PUBLIC_URL}/xmas.webp`} />
      <Footer />
    </div>
  );
}

export default App;
