import React from "react";
import "./App.scss";
import {
  Header,
  Banner,
  Products,
  Services,
  Members,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Banner />
        <Products />
        <Services />
        <Members />
      </div>
      <Footer />
    </>
  );
}

export default App;
