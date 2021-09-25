import { Button, Spin, message } from "antd";
import { SendOutlined, LoadingOutlined } from "@ant-design/icons";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import {
  GameRunningContext,
  GameOverContext,
  CorrectSquaresAmountContext,
  InitializeBoardContext,
  BalanceAmountContext,
  MinesVisibleContext,
} from "../../Contexts/GameContext";
import { BetAmountContext } from "../../Contexts/GameContext";
import "./Confirm.less";
import Squares from "../Minesweeper/Components/Squares";
const ConfirmButton = (props: any) => {
  const antIcon = <LoadingOutlined spin />;
  const [isLoading, setIsLoading] = useState(false);
  const { isGameRunning, setIsGameRunning } = useContext(GameRunningContext);
  const { correctAmount, setCorrectAmount } = useContext(
    CorrectSquaresAmountContext
  );
  const { isGameOver, setIsGameOver } = useContext(GameOverContext);
  const { balance, setBalance } = useContext(BalanceAmountContext);

  const [isDisabled, setIsDisabled] = useState(true);
  const { betAmount, setBetAmount } = useContext(BetAmountContext);
  const { minesVisible, setMinesVisible } = useContext(MinesVisibleContext);
  const userValue = props.userValue;

  useEffect(() => {
    if (userValue == null || userValue <= 0 || isGameRunning) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [isGameRunning, userValue]);

  const childRef = useRef();

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
