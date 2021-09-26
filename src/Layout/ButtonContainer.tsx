import "./Background.css";

import MineNumButton from "../Components/MineButton/MineNumButton";
import { useContext } from "react";
import { SelectedMineNumContext } from "../Contexts/GameContext";
const ButtonContainer = () => {
  const { selectedButton } = useContext(SelectedMineNumContext);

  return (
    // Container for choosing amount of mines
    <div className="btncontainer">
      <MineNumButton
        className={`minebtn minebtn1 ${
          selectedButton === 1 ? "selected" : null
        }`}
        selectedBtn={selectedButton === 1}
        btntype={selectedButton === 1 ? "primary" : "ghost"}
        btnNum={1}
      ></MineNumButton>
      <MineNumButton
        className={`minebtn minebtn2 ${
          selectedButton === 2 ? "selected" : null
        }`}
        selectedBtn={selectedButton === 2}
        btntype={selectedButton === 2 ? "primary" : "ghost"}
        btnNum={2}
      ></MineNumButton>
      <MineNumButton
        className={`minebtn minebtn3 ${
          selectedButton === 3 ? "selected" : null
        }`}
        btntype={selectedButton === 3 ? "primary" : "ghost"}
        selectedBtn={selectedButton === 3}
        btnNum={3}
      ></MineNumButton>
    </div>
  );
};

export default ButtonContainer;
