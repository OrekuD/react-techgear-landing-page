import React from "react";
import "./App.scss";
import {
  Header,
  Banner,
  Products,
  Services,
  Members,
  Footer,
  Contact,
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
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
