
// import PageBanner from "../PageBanner/PageBanner";
// import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
// import Faq from "./Faq";
// import ExpertsSection from "./Expertsection";
// import GetInTouch from "./Getintouch";
// const Contact = () => {
//   return (
//     <>
//       <PageBanner title="Contact Us" bgImage={bannerImg} />
//       <ExpertsSection/>
//       <GetInTouch/>
//       <Faq/>
//     </>
//   );
// };

// export default Contact;


import React from 'react'
import PageBanner from "../PageBanner/PageBanner";
import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
import Expertsection from "../Contact/Expertsection";
import GetInTouch from "../Contact/Getintouch"
import Faq from "../Contact/Faq";
const Contact = () => {
  return (
   <>
    <PageBanner title="Contact Us" bgImage={bannerImg} />
    <Expertsection/>
    <GetInTouch/>
    <Faq/>
   </>
  )
}

export default Contact
