import React from "react";
import "./Title.scss";
import { ArrowRight } from "../../svgs/Svgs";
import { blue } from "../../constants/colors";

interface Props {
  title: string;
  subtitle: string;
}

const Title = ({ title, subtitle }: Props) => (
  <div className="title-container">
    <p className="title">{title}</p>
    <p className="subtitle">{subtitle}</p>
    <div className="row">
      <p>View more</p>
      <ArrowRight size={20} color={blue} />
    </div>
  </div>
);

export default Title;
