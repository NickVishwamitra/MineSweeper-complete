import "./Background.css";

import MineNumButton from "../Components/MineButton/MineNumButton";
import { useState } from "react";
import React from "react";
const ButtonContainer = (props: { selectedButton: number; handler: any }) => {
  const [selectedBtn, setSelectedBtn] = useState(props.selectedButton);
  //Set Selected button on click
  const clickHandler = (btnNum: number) => {
    switch (btnNum) {
      case 1:
        props.handler(1);
        setSelectedBtn(1);
        break;
      case 2:
        props.handler(2);
        setSelectedBtn(2);
        break;
      case 3:
        props.handler(3);
        setSelectedBtn(3);
        break;
    }
  };

  return (
    // Container for choosing amount of mines
    <div className="btncontainer">
      <MineNumButton
        className={`minebtn minebtn1 ${selectedBtn == 1 ? "selected" : null}`}
        onClick={() => clickHandler(1)}
        selectedButton={selectedBtn}
      ></MineNumButton>
      <MineNumButton
        className={`minebtn minebtn2 ${selectedBtn == 2 ? "selected" : null}`}
        onClick={() => clickHandler(2)}
        selectedButton={selectedBtn}
      ></MineNumButton>
      <MineNumButton
        className={`minebtn minebtn3 ${selectedBtn == 3 ? "selected" : null}`}
        onClick={() => clickHandler(3)}
        selectedButton={selectedBtn}
      ></MineNumButton>
    </div>
  );
};

export default ButtonContainer;
