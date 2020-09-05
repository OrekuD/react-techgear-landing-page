import React from "react";
import "./Header.scss";
import { Logo } from "../../svgs/Svgs";

const links = ["Home", "Products", "Services", "Members", "Contacts"];

const Header = () => (
  <header>
    <Logo size={136} />
    <div className="links">
      {links.map((link, index) => (
        <div key={index} className="link">
          <p>{link}</p>
        </div>
      ))}
      <button>sign in</button>
    </div>
  </header>
);

export default Header;
