import "./BetPlacing.css";
import { Button } from "antd";
const BetMultiplierSelector = (props: any) => {
  const [userValue, setUserValue] = [props.userValue, props.setUserValue];

  // const ColorButton = withStyles((theme: Theme) => ({
  //   root: {
  //     backgroundColor: "#ff7315",
  //     "&:hover": {
  //       backgroundColor: orange[500],
  //     },
  //     "& .MuiButton-label": {
  //       fontSize: "1rem",
  //       fontFamily: "ubuntu",
  //       fontWeight: 500,
  //       color: "white",
  //     },
  //   },
  // }))(Button);

  const handler = (val: any) => {
    switch (val) {
      case null:
        break;
      case 1:
        setUserValue(userValue * 0.25);
        break;
      case 2:
        setUserValue(userValue * 0.5);
        break;
      case 3:
        setUserValue(userValue * 0.75);
        break;
      case 4:
        setUserValue(userValue * 2);
        break;
    }
  };

  return (
    <div className="buttonContainerbets">
      <Button
        type="primary"
        shape="round"
        size="small"
        onClick={() => handler(1)}
        style={{ minWidth: "20%", display: "flex", justifyContent: "center" }}
      >
        1/4x
      </Button>

      <Button
        type="primary"
        shape="round"
        size="small"
        style={{ minWidth: "20%", display: "flex", justifyContent: "center" }}
        onClick={() => handler(2)}
      >
        1/2x
      </Button>
      <Button
        type="primary"
        shape="round"
        size="small"
        onClick={() => handler(3)}
        style={{ minWidth: "20%", display: "flex", justifyContent: "center" }}
      >
        3/4x
      </Button>
      <Button
        type="primary"
        shape="round"
        size="small"
        onClick={() => handler(4)}
        style={{ minWidth: "20%", display: "flex", justifyContent: "center" }}
      >
        2x
      </Button>
    </div>
  );
};

export default BetMultiplierSelector;
