import "./MineNumButton.css";
import React from "react";
const MineNumButton = (props: {
  className: string | undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  selectedButton: number;
}) => {
  //Function to check which label belongs to which button
  const checkType = (props: {
    className: any;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  }) => {
    if (props.className.includes("minebtn1")) {
      return "5 Mines 💣";
    } else if (props.className.includes("minebtn2")) {
      return "7 Mines 💣";
    } else if (props.className.includes("minebtn3")) {
      return "9 Mines 💣";
    }
  };
  return (
    <button className={props.className} onClick={props.onClick}>
      <p className="label">{checkType(props)}</p>
    </button>
  );
};

export default MineNumButton;
