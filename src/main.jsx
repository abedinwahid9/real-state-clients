import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AuthContext from "./AuthProvider/AuthContext.jsx";

export const themeContext = createTheme({
  palette: {
    primary: {
      main: "#2F4F4F", // Replace with your primary color
    },
    secondary: {
      main: "#F3F4F9", // Replace with your secondary color
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
    <QueryClientProvider client={queryClient}>
      <AuthContext>
        <ThemeProvider theme={themeContext}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </AuthContext>
    </QueryClientProvider>
  </React.StrictMode>
);
