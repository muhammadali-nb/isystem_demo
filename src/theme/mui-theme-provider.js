import React from 'react';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {createTheme} from "@/theme/index";

function MuiThemeProvider(props) {
  const {
    children
  } = props;

  const theme = createTheme({
    mode: "light",
    direction: "ltr",
    responsiveFontSizes: true
  })

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
      </ThemeProvider>
  );
}

export default MuiThemeProvider;