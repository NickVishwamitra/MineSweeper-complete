import { Button, message } from "antd";
import { useContext } from "react";
// import "./Minesweeper.css";
import "./LeftSide.css";
import {
  GameRunningContext,
  GameOverContext,
  BalanceAmountContext,
  BetAmountContext,
} from "../../Contexts/GameContext";

import useSound from "use-sound";
import sound from "../../sounds/cashout.mp3";

const Cashout = (props: any) => {
  const { isGameRunning, setIsGameRunning } = useContext(GameRunningContext);

  const { setIsGameOver } = useContext(GameOverContext);
  const { balance, setBalance } = useContext(BalanceAmountContext);
  const { betAmount } = useContext(BetAmountContext);
  // const isDisabled = () => {
  //   if (!isGameRunning) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  const clickHandler = () => {
    successfulCashout();
  };

  const [play] = useSound(sound);

  const successfulCashout = () => {
    if (isGameRunning) {
      message.success({
        className: "successBox",
        content: `Sucessful Cashout Of: ${betAmount}`,
      });
      play();
      setIsGameRunning(false);
      setIsGameOver(false);
      const tempBalance = balance + Number(betAmount);
      console.log(betAmount);
      setBalance(Number(tempBalance));
    }
  };

  return (
    <div className={props.className}>
      <Button
        type="default"
        size="large"
        shape="round"
        className="cashoutButton"
        disabled={!isGameRunning ? true : false}
        onClick={clickHandler}
      >
        Cashout
      </Button>
    </div>
  );
};
export default Cashout;
