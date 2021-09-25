import { useState, createContext, useContext } from "react";
import "./BetPlacing.css";
import { TextField, Input, createTheme, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import BetMultiplierSelector from "./BetMultiplierSelector";
import { orange } from "@material-ui/core/colors";
import { ThemeProvider } from "@material-ui/styles";
import InputField from "./InputField";
import ConfirmButton from "./ConfirmButton";
import Selector from "./Selector";

import {
  BalanceAmountContext,
  GameRunningContext,
} from "../../Contexts/GameContext";
const BetPlacing = (props: any) => {
  const { isGameRunning, setIsGameRunning } = useContext(GameRunningContext);

  const { balance, setBalance } = useContext(BalanceAmountContext);
  const [userValue, setUserValue] = useState("");
  let betAmt = 0;

  const theme = createTheme({
    palette: { primary: orange },
  });

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
      <p className="balance">
        <p>{`Balance:`}</p>
        <p>{Math.round(balance * 10000) / 10000}</p>
      </p>
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
