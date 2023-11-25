import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
// import { Container } from "@mui/material";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
