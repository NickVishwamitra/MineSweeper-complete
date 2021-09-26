import Card from "./Card";
import "./Background.css";
import Minesweeper from "../Components/Minesweeper/Minesweeper";
import { Fragment } from "react";
import ButtonContainer from "./ButtonContainer";
import BetPlacing from "../Components/BetPlacing/BetPlacing";
// import ChancePercent from "../Components/LeftSide/ChancePercent";
import LeftSide from "../Components/LeftSide/LeftSide";
const Mainarea = (props: any) => {
  return (
    <Card className="mainarea">
      <Fragment>
        <LeftSide />
        <Minesweeper className="gameboard"></Minesweeper>
        <ButtonContainer></ButtonContainer>
        <BetPlacing />
      </Fragment>
    </Card>
  );
};

export default Mainarea;
