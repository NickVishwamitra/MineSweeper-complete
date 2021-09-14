import "./Card.css";
import React from "react";
const Card = (props: {
  className: any;
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return <div className={`card ${props.className}`}>{props.children}</div>;
};

export default Card;
