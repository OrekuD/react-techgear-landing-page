import React from "react";
import "./Services.scss";
import Title from "../Title/Title";
import price from "../../assets/images/price.png";
import support from "../../assets/images/support.png";
import software from "../../assets/images/software.png";
import shield from "../../assets/images/shield.png";

const services = [
  {
    title: "Lifetime Guarantee",
    image: shield,
  },
  {
    title: "Good price",
    image: price,
  },
  {
    title: "Free Software Updates",
    image: software,
  },
  {
    title: "24/7 Support",
    image: support,
  },
];

const Services = () => (
  <div className="services" id="services">
    <Title
      title="services"
      subtitle="We provide more than high-tech products!"
    />
    <div className="items">
      {services.map(({ title, image }, index) => (
        <div className="wrapper" key={index}>
          <div className="service">
            <img src={image} alt={title} />
            <div className="content">
              <p className="title">{title}</p>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
