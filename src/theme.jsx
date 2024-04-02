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
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});
