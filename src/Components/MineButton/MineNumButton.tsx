import "./MineNumButton.css";
import React, { useContext } from "react";
import { Button } from "antd";
import {
  SelectedMineNumContext,
  SelectedMineAmountContext,
  GameRunningContext,
  GameOverContext,
} from "../../Contexts/GameContext";

import useSound from "use-sound";
import sound from "../../sounds/tap.mp3";

const MineNumButton = (props: any) => {
  const { setSelectedButton } = useContext(SelectedMineNumContext);
  const { isGameRunning } = useContext(GameRunningContext);
  const { setIsGameOver } = useContext(GameOverContext);
  const [play] = useSound(sound);
  const { setMineAmount } = useContext(SelectedMineAmountContext);
  //Function to check which label belongs to which button
  const checkType = (props: any) => {
    if (props.className.includes("minebtn1")) {
      return "5 Mines 💣";
    } else if (props.className.includes("minebtn2")) {
      return "7 Mines 💣";
    } else if (props.className.includes("minebtn3")) {
      return "9 Mines 💣";
    }
  };

  const clickHandler = (props: any) => {
    if (!isGameRunning) {
      setSelectedButton(props.btnNum);
      switch (props.btnNum) {
        case 1:
          setMineAmount(5);
          setIsGameOver(false);
          break;
        case 2:
          setMineAmount(7);
          setIsGameOver(false);
          break;
        case 3:
          setMineAmount(9);
          setIsGameOver(false);
          break;
      }
    }
  };

  return (
    <Button
      className={props.className}
      onClick={() => {
        clickHandler(props);
        play();
      }}
      type={props.btntype}
    >
      <p className="label">{checkType(props)}</p>
    </Button>
  );
};

export default MineNumButton;
