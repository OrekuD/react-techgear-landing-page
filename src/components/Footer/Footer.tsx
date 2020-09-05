import React from "react";
import "./Footer.scss";

const products = [
  "Gaming",
  "Graphic Design",
  "Office",
  "Family",
  "Personalized",
];

const showrooms = [
  "Showroom Washington, D.C.",
  "Showroom New York City",
  "Showroom San Francisco",
  "Showroom Houston",
];

const members = [
  "Electros Software",
  "Tera Tech Lab",
  "TC Predator Gaming",
  "SpacePlay",
  "V-Poweration",
  "AX3 AI System",
];

const help = ["FAQs", "Terms of Use", "Privacy Policy"];

const Footer = () => (
  <footer>
    <div className="links">
      <div className="section">
        <p className="heading">Products</p>
        {products.map((link, index) => (
          <p className="link" key={index}>
            {link}
          </p>
        ))}
      </div>
      <div className="section">
        <p className="heading">showrooms</p>
        {showrooms.map((link, index) => (
          <p className="link" key={index}>
            {link}
          </p>
        ))}
      </div>
      <div className="section">
        <p className="heading">family members</p>
        {members.map((link, index) => (
          <p className="link" key={index}>
            {link}
          </p>
        ))}
      </div>
      <div className="section">
        <p className="heading">help center</p>
        {help.map((link, index) => (
          <p className="link" key={index}>
            {link}
          </p>
        ))}
      </div>
    </div>
    <div className="separator" />
    <p className="copyright">
      Copyright &copy; 2020 TechGear Inc. All rights reserved
    </p>
  </footer>
);

export default Footer;
