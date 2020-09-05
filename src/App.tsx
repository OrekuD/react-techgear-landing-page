import React from "react";
import "./App.scss";
import { Header, Banner, Products, Services, Members } from "./components";

function App() {
  return (
    <>
      <div className="container">
        {/* <Header />
        <Banner /> */}
        <Products />
        <Services />
        <Members />
      </div>
    </>
  );
}

export default App;
