import Card from "./Card";
import "./Background.css";
import Minesweeper from "../Components/Minesweeper/Minesweeper";
import MineNumButton from "../Components/MineButton/MineNumButton";
import { useEffect, useState } from "react";
import ButtonContainer from "./ButtonContainer";
import React from "react";
import BetPlacing from "../Components/BetPlacing/BetPlacing";
const Mainarea = () => {
  const [selectedBtn, setSelectedBtn] = useState(1);
  useEffect(() => {
    // console.log(selectedBtn);
  }, [selectedBtn]);
  const selectHandler = (btnNum: number) => {
    setSelectedBtn(btnNum);
  };

  return (
    <Card className="mainarea">
      <Minesweeper
        className="gameboard"
        selectedButton={selectedBtn}
      ></Minesweeper>

      <ButtonContainer
        selectedButton={selectedBtn}
        handler={selectHandler}
      ></ButtonContainer>
      <button className="cashout">
        <p className="label cash">Cashout</p>
      </button>
      <BetPlacing />
    </Card>
  );
};

export default Mainarea;
