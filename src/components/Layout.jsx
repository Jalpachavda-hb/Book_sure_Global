import Navbar from "./Navbar/Navbar";
import Footer from "./footer/Fotter";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}