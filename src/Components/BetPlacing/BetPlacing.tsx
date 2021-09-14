import { useState } from "react";
import "./BetPlacing.css";

const BetPlacing = () => {
  let betAmt = 0;
  const [userValue, setUserValue] = useState("");
  const handleChange = (event: any) => {
    setUserValue(event.target.value);
  };
  return (
    <div className="betPlacing">
      <form className="betForm">
        <label htmlFor={`${betAmt}`}>Bet Amount</label>
        <input
          type="text"
          id="betamt"
          value={userValue}
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
};

export default BetPlacing;
