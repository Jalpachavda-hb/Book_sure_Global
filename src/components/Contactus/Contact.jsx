import React from "react";
import PageBanner from "../PageBanner/PageBanner";
import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
import Expert from "./Expert";
import GetInTouch from "./GetInTouch";
import Faq from "./Faq";
const Contact = () => {
  return (
    <>
      <PageBanner title="Contact Us" bgImage={bannerImg} />
      <Expert />
      <GetInTouch />
      <Faq />
    </>
  );
};

export default Contact;
