import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopNav from "./component/navfoot/TopNav";
import IndividualCategory from "./component/Home/category/IndividualCateg";

function App() {
  return (
    <div className="App">
      <TopNav />
      <IndividualCategory />
    </div>
  );
}

export default App;
