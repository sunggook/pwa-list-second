import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#000"
    }
  },
  typography: {
    fontFamily: "Comic Sans MS",
    body2: {
      fontFamily: "Times New Roman",
      fontSize: "1.1rem"
    }
  },
  shape: {
    borderRadius: 15
  },
  spacing: 8,
  overrides: {
    // MuiFilledInput: {
    //   root: {
    //     backgroundColor: "gray",
    //     color: "white",
    //     marginTop: "5px"
    //   },
    //   // input: {
    //   //   marginTop: "20px",
    //   //   fontSize: "1.6rem"
    //   // }
    // },
    MuiInputLabel: {
      root: {
        color: "black"
      },
    },
    MuiInputBase: {
      input: {
        color: "black",
        fontSize: "1.6rem"
      }
    },
    MuiButton: {
      root: {
        textTransform: "none",
        padding: "15px",
        margin: "5px",
        size: "large",
      },
      fullWidth: {
        maxWidth: "300px"
      },
      text: {
        fontSize: "1.5rem"
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: "beige",
        color: "black",
        elevation: 0,
      }
    },
    MuiIconButton: {
      colorInherit: {
        color: "white"
      }
    },
    MuiSvgIcon: {
      root: {
        fontSize:"2.0rem"
      }
    },
    MuiFormControl: {
      root: {
        marginLeft: "20px"
      }
    }
  },
  // props: {
  //   MuiButton: {
  //     disableRipple: true,
  //     variant: "contained",
  //     backgroundColor:"green",
  //     color: "white"
  //   },
  //   MuiCheckbox: {
  //     disableRipple: true
  //   },
  //   MuiTextField: {
  //     variant: "filled",
  //     InputLabelProps: {
  //       shrink: true
  //     }
  //   },
  //   MuiCard: {
  //     elevation: 24
  //   }
  // }
});