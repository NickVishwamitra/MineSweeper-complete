import { Progress } from "antd";
import { useContext, useEffect, useState } from "react";
import {
  CorrectSquaresAmountContext,
  SelectedMineAmountContext,
  GameRunningContext,
  GameOverContext,
} from "../../Contexts/GameContext";

const CheckChance = (mineAmount: any, correctAmount: any) => {
  const chance = (mineAmount + correctAmount) / 25;
  return Math.floor(chance * 100);
};

const ChancePercent = (props: any) => {
  const { correctAmount, setCorrectAmount } = useContext(
    CorrectSquaresAmountContext
  );
  const { mineAmount } = useContext(SelectedMineAmountContext);
  const { isGameRunning } = useContext(GameRunningContext);
  const { isGameOver } = useContext(GameOverContext);
  const [percent, setPercent] = useState(21);

  useEffect(() => {
    let currentperc = percent;
    let newperc = CheckChance(mineAmount, correctAmount);
    // if (isGameRunning) {
    //   for (let i = currentperc; i <= newperc; i++) setPercent(i);
    // }

    var interval = setInterval(() => {
      if (currentperc <= newperc) {
        currentperc++;
        setPercent(currentperc);
      } else {
        clearInterval(interval);
      }
    }, 100);
  }, [correctAmount, mineAmount, isGameRunning, percent]);

  useEffect(() => {
    if (!isGameRunning) {
      setCorrectAmount(0);
      setPercent(21);
    }
  }, [isGameOver, isGameRunning, percent, setCorrectAmount]);
  return (
    <div>
      <Progress
        className={props.className}
        type="circle"
        percent={isGameRunning ? percent : 0}
        status={isGameOver && !isGameRunning ? "exception" : "active"}
      ></Progress>
    </div>
  );
};

export default ChancePercent;
