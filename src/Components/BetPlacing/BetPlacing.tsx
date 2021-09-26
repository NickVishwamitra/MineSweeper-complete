import { useState, useContext } from "react";
import "./BetPlacing.css";
import BetMultiplierSelector from "./BetMultiplierSelector";

import InputField from "./InputField";
import ConfirmButton from "./ConfirmButton";
import Selector from "./Selector";

import {
  BalanceAmountContext,
  GameRunningContext,
} from "../../Contexts/GameContext";
const BetPlacing = (props: any) => {
  const { isGameRunning } = useContext(GameRunningContext);

  const { balance } = useContext(BalanceAmountContext);
  const [userValue, setUserValue] = useState("");

  const handleChange = (event: any) => {
    !isGameRunning
      ? setUserValue(
          event.target.value < 0 ? (event.target.value = 0) : event.target.value
        )
      : setUserValue(userValue);
  };

  return (
    <div className="betPlacing">
      <Selector />
      <div className="balance">
        <p>{`Balance:`}</p>
        <p>{Math.round(balance * 10000) / 10000}</p>
      </div>
      <InputField onChange={handleChange} userValue={userValue}></InputField>
      <BetMultiplierSelector
        setUserValue={setUserValue}
        userValue={userValue}
      />
      <ConfirmButton userValue={userValue} />
    </div>
  );
};

export default BetPlacing;
