import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
// import { Container } from "@mui/material";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
    </>
  );
};

export default Main;
