import React from "react";
import "./App.scss";
import { Header, Banner, Products } from "./components";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Banner />
        <Products />
      </div>
    </>
  );
}

export default App;
