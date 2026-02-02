import React from "react";
import PageBanner from "../PageBanner/PageBanner";
import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
import FirstSection from "./FirstSection";
import Cardsection from "./Cardsection";
import Ourmission from "./Ourmission";
import OurAssociate from "./OurAssociate";
import ServicesSection from "../Services/Stepdesign";
const Aboutus = () => {
  return (
    <>
      <PageBanner title="About Us" bgImage={bannerImg} />
      <FirstSection />
      <Cardsection />
      <ServicesSection/>
      <Ourmission />
      <OurAssociate />
    </>
  );
};

export default Aboutus;
