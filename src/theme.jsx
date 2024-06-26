import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2AA7FF",
      contrastText: "#fff",
    },
    background: {
      default: "unset",
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#102851",
      text: "#5C6169",
      specialistText: "#1B3C74",
      blue: "#2AA7FF",
      grey: "#77829D",
      black: "#000000",
      cardText: "#414146",
      green: "#02A401",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    button: {
      textTransform: "none",
    },
  },
});
