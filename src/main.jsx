import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const themeContext = createTheme({
  palette: {
    primary: {
      main: "#2F4F4F", // Replace with your primary color
    },
    secondary: {
      main: "#eae6eb", // Replace with your secondary color
    },
    Third: {
      main: "#f09b3b", // Replace with your secondary color
    },
    error: {
      main: "#FF5722", // Replace with your error color
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={themeContext}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
