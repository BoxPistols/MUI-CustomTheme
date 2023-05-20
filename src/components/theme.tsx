import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display1: true;
    display2: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: "Futura,Helvetica Neue, Arial, sans-serif"
  },
  palette: {
    primary: {
      main: "#4488aa"
    },
    text: {
      primary: "#234"
    }
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "display1" },
          style: {
            display: "block",
            fontSize: "2.4rem",
            fontWeight: 700,
            lineHeight: 1.5,
            color: "tomato"
          }
        },
        {
          props: { variant: "display2" },
          style: {
            fontSize: "2.2rem",
            fontWeight: 700,
            color: "tomato",
            lineHeight: 1.5
          }
        }
      ]
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: 44
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 44,
          "@media(min-width:0px)": {
            minHeight: 44
          }
        }
      }
    }
  }
});
