import { Button, message } from "antd";
import { Fragment, useContext, useEffect, useState } from "react";
import {
  GameRunningContext,
  GameOverContext,
  CorrectSquaresAmountContext,
  BalanceAmountContext,
  MinesVisibleContext,
} from "../../Contexts/GameContext";
import { BetAmountContext } from "../../Contexts/GameContext";
import "./Confirm.less";
const ConfirmButton = (props: any) => {
  const { isGameRunning, setIsGameRunning } = useContext(GameRunningContext);
  const { setCorrectAmount } = useContext(CorrectSquaresAmountContext);
  const { isGameOver } = useContext(GameOverContext);
  const { balance, setBalance } = useContext(BalanceAmountContext);

  const [isDisabled, setIsDisabled] = useState(true);
  const { setBetAmount } = useContext(BetAmountContext);
  const { setMinesVisible } = useContext(MinesVisibleContext);
  const userValue = props.userValue;

  useEffect(() => {
    if (userValue == null || userValue <= 0 || isGameRunning) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [isGameRunning, userValue]);

  const clickHandler = () => {
    setCorrectAmount(0);
    if (userValue > balance) {
      message.error("Please deposit more to place bet.");
    } else {
      const tempBalance = balance - userValue;
      setBalance(tempBalance);
      setMinesVisible(false);
      if (!isGameOver) {
        setIsGameRunning(true);
        setBetAmount(userValue);
      } else if (isGameOver) {
        setIsGameRunning(true);
        setBetAmount(userValue);
      }
    }
  };
  return (
    <Fragment>
      <Button
        type="primary"
        disabled={isDisabled}
        danger
        onClick={clickHandler}
      >
        Confirm Bet
      </Button>
    </Fragment>
  );
};

export default ConfirmButton;
