import "./BetPlacing.css";
import { TextField, createTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import { ThemeProvider } from "@material-ui/styles";
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
            className: "inputfield",
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
