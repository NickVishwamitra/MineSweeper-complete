import { Card, Select } from "antd";
import { Fragment, useContext } from "react";
import { GameRunningContext } from "../../Contexts/GameContext";
import "./BetPlacing.css";
const Selector = () => {
  const { Option } = Select;
  function handleChange(value: any) {}

  const game = useContext(GameRunningContext);
  return (
    <Select
      showSearch
      style={{
        width: "40%",
        color: "white",
        fontWeight: 700,
        boxShadow: " 0 0 10px rgb(11, 11, 11)",
      }}
      className="selector"
      defaultValue="1"
      optionFilterProp="children"
      filterOption={(input, option: any) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      filterSort={(optionA, optionB) =>
        optionA.children
          .toLowerCase()
          .localeCompare(optionB.children.toLowerCase())
      }
      disabled={game.isGameRunning ? true : false}
    >
      <Option value="1" style={{ color: "white" }}>
        USD
      </Option>
      <Option value="2" style={{ color: "white" }}>
        ETH
      </Option>
      <Option value="3" style={{ color: "white" }}>
        DAI
      </Option>
      <Option value="4" style={{ color: "white" }}>
        USDC
      </Option>
      <Option value="5" disabled style={{ color: "grey" }}>
        ADA
      </Option>
    </Select>
  );
};
export default Selector;
