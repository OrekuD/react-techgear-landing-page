import React from "react";
import "./Banner.scss";
import image from "../../assets/images/banner.png";
import { Cart, Info } from "../../svgs/Svgs";

const Banner = () => (
  <div className="banner">
    <div className="content">
      <p className="title">G502 HERO WIRELESS</p>
      <p className="subtitle">
        Logitech's High Performance Wireless Gaming Mouse
      </p>
      <p className="description">
        The Razer Ouroboros is outfitted with the most advanced & configurable
        sensor yet, the all-new 8200dpi 4G laser sensor. It tracks so precisely,
        you always hit targets exactly where you need to.
      </p>
      <p className="price">USD 99.99</p>
      <div className="buttons">
        <button className="cart">
          <Cart size={18} color="#fff" />
          <p>Add to cart</p>
        </button>
        <button className="info">
          <Info size={18} color="#fff" />
          <p>more details</p>
        </button>
      </div>
    </div>
    <img src={image} alt="Banner" />
  </div>
);

export default Banner;
