import React from "react";
import "./Header.scss";
import { Logo } from "../../svgs/Svgs";

const links = [
  {
    name: "Home",
    path: "/",
  },
  { name: "Products", path: "#products" },
  { name: "Services", path: "#services" },
  { name: "Members", path: "#members" },
  { name: "Contacts", path: "#contact" },
];

const Header = () => (
  <header>
    <Logo size={136} />
    <div className="links">
      {links.map(({ name, path }, index) => (
        <div key={index} className="link">
          <a href={path}>{name}</a>
        </div>
      ))}
      <button>sign in</button>
    </div>
  </header>
);

export default Header;
