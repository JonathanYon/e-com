import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopNav from "./component/navfoot/TopNav";
import IndividualCategory from "./component/Home/category/IndividualCateg";
import InfinitWords from "./component/Home/infiniteWords/InfiniteWords";
import Carousell from "./component/Home/carousel/Carousell";

function App() {
  return (
    <div className="App">
      <TopNav />
      <IndividualCategory />
      <InfinitWords />
      <Carousell />
    </div>
  );
}

export default App;
