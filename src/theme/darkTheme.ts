import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1e1e2f",
      paper: "#1e1e2f",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

export default darkTheme;
