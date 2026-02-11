import React from "react";
import PageBanner from "../PageBanner/PageBanner";
import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
import FirstSection from "./FirstSection";
import Cardsection from "./Cardsection";
import Ourmission from "./Ourmission";

import ServicesSection from "../Services/Stepdesign";
const Aboutus = () => {
  return (
    <>
      <PageBanner title="About Us" bgImage={bannerImg} />
      <FirstSection />
      <Cardsection />
      <ServicesSection/>
      <Ourmission />
   
    </>
  );
};

export default Aboutus;
