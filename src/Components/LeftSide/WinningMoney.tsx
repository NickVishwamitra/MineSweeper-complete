// import { Card } from "@material-ui/core";
import { Card, Divider } from "antd";
import { useContext, useEffect, useState } from "react";
import { BetAmountContext } from "../../Contexts/GameContext";
import { SelectedMineNumContext } from "../../Contexts/GameContext";
const WinningMoney = (props: any) => {
  const { betAmount } = useContext(BetAmountContext);
  const { selectedButton } = useContext(SelectedMineNumContext);
  const [nextAmount, setNextAmount] = useState(betAmount);

  useEffect(() => {
    const calculateNext = (amount: any) => {
      let multiplier = 0;
      switch (selectedButton) {
        case 1:
          multiplier = 1.25;
          break;
        case 2:
          multiplier = 1.5;
          break;
        case 3:
          multiplier = 2;
          break;
      }
      const next = amount * multiplier;
      return next;
    };
    // setBetAmount(nextAmount);
    let finamt = calculateNext(betAmount);
    setNextAmount(finamt);
  }, [betAmount, selectedButton]);

  return (
    <Card className={props.className}>
      <p className="labels">{`CURRENT: ${betAmount}`}</p>
      <Divider className="divider" />
      <p className="labels">NEXT: {Math.round(nextAmount * 10000) / 10000} </p>
    </Card>
  );
};

export default WinningMoney;
