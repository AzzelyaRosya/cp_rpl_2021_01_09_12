import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    flex: 1,
    marginTop: 60,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  visionTxt: {
    color: "#36476B",
    fontSize: 28,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
  visionPrg: {
    color: "#36476B",
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
  },
}));
