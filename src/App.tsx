import React from "react";
import "./App.scss";
import { Header, Banner, Products, Services } from "./components";

function App() {
  return (
    <>
      <div className="container">
        {/* <Header />
        <Banner /> */}
        <Products />
        <Services />
      </div>
    </>
  );
}

export default App;
