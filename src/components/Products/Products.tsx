import React from "react";
import "./Products.scss";
import Title from "../Title/Title";
import gaming from "../../assets/images/gaming.png";
import office from "../../assets/images/office.png";
import design from "../../assets/images/design.png";

const products = [
  {
    name: "Gaming",
    image: gaming,
  },
  {
    name: "Graphic design",
    image: design,
  },
  {
    name: "Office & others",
    image: office,
  },
];

const Products = () => (
  <div className="products">
    <Title
      title="products"
      subtitle="Which type of gear are you looking for?"
    />
    <div className="items">
      {products.map(({ name, image }, index) => (
        <div className="wrapper" key={index}>
          <div className="product">
            <img src={image} alt={name} />
            <p>{name}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Products;
