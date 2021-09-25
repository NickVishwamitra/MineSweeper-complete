import { Button, message } from "antd";
import { useContext } from "react";
import { Collapse } from "antd";
// import "./Minesweeper.css";
import "./LeftSide.css";
import {
  GameRunningContext,
  GameOverContext,
  BalanceAmountContext,
  BetAmountContext,
} from "../../Contexts/GameContext";

const Cashout = (props: any) => {
  const { isGameRunning, setIsGameRunning } = useContext(GameRunningContext);

  const { isGameOver, setIsGameOver } = useContext(GameOverContext);
  const { balance, setBalance } = useContext(BalanceAmountContext);
  const { betAmount, setBetAmount } = useContext(BetAmountContext);
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

  const successfulCashout = () => {
    if (isGameRunning) {
      message.success({
        className: "successBox",
        content: `Sucessful Cashout Of: ${betAmount}`,
      });
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
