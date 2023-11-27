import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { SnackbarProvider, closeSnackbar } from 'notistack';


const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          autoHideDuration={2000}
          maxSnack={3}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          action={(snackbarId) => (
            <button onClick={() => closeSnackbar(snackbarId)}>
              Cerrar
            </button>
          )}
        >
          <App />
        </SnackbarProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);
