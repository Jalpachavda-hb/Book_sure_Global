import React from "react";
import PageBanner from "../PageBanner/PageBanner";
import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
import Testimonial from "../../components/home/Testimonial";
import Servicedatasection from "./Servicedatasection";
const Services = () => {
  return (
    <div>
      <PageBanner title="Services" bgImage={bannerImg} />
      <Servicedatasection />
      <Testimonial />
    </div>
  );
};

export default Services;
