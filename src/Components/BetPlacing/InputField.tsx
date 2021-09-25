import { useState, useContext } from "react";
import "./BetPlacing.css";
import {
  TextField,
  Button,
  Input,
  createTheme,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import BetMultiplierSelector from "./BetMultiplierSelector";
import { deepOrange, orange, red } from "@material-ui/core/colors";
import { ThemeProvider } from "@material-ui/styles";
import BetPlacing from "./BetPlacing";
const useStyles = makeStyles({
  textBox: {
    // transform: "translateX(-50px)",
    display: "flex",
    "& .label": {
      color: "white",
    },
  },
});
const InputField = (props: any) => {
  const classes = useStyles();
  const theme = createTheme({
    palette: { primary: deepOrange },
  });

  return (
    <form className={classes.textBox} noValidate autoComplete="off">
      <ThemeProvider theme={theme}>
        <TextField
          onChange={props.onChange}
          label="Bet Amount"
          variant="filled"
          size="small"
          type="number"
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          value={props.userValue}
          fullWidth
        />
      </ThemeProvider>
    </form>
  );
};

export default InputField;
