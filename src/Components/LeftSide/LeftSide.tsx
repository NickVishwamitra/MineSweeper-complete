import Cashout from "./Cashout";
import ChancePercent from "./ChancePercent";
import "./LeftSide.css";
import WinningMoney from "./WinningMoney";
const LeftSide = () => {
  return (
    <div className="container">
      <ChancePercent className="progressbar" />
      <WinningMoney className="winningMoney" />
      <Cashout className="cash-out" />
    </div>
  );
};
export default LeftSide;
