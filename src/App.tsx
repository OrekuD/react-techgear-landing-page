import React from "react";
import "./App.scss";
import { Header, Banner } from "./components";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Banner />
      </div>
    </>
  );
}

export default App;
