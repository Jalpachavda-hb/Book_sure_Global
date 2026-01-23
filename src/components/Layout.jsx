import Navbar from "./Navbar/Navbar";
import Footer from "./footer/Fotter";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/Navbar/ScrollToTop";
// import Xyz from "./xyz/Xyz";
export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
