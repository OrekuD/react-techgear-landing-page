import React from "react";
import "./Members.scss";
import electros from "../../assets/images/electros.png";
import spaceplay from "../../assets/images/spaceplay.png";
import predator from "../../assets/images/predator.png";
import teratech from "../../assets/images/teratech.png";
import Title from "../Title/Title";
import { Chevron } from "../../svgs/Svgs";

const members = [
  {
    name: "electros studios",
    image: electros,
  },
  {
    name: "Tera tech lab",
    image: teratech,
  },
  {
    name: "TC predator gaming",
    image: predator,
  },
  {
    name: "SpacePlay",
    image: spaceplay,
  },
];

const Members = () => (
  <div className="members" id="members">
    <Title
      title="members"
      subtitle="We proudly introduce our powerful members"
    />
    <div className="items">
      {members.map(({ name, image }, index) => (
        <div className="wrapper" key={index}>
          <div className="member">
            <img src={image} alt={name} />
            <p>{name}</p>
            {index === 0 && (
              <button className="btn left-icon-button">
                <Chevron size={8} color="#fff" />
              </button>
            )}
            {index === members.length - 1 && (
              <button className="btn right-icon-button">
                <Chevron size={8} color="#fff" />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Members;
