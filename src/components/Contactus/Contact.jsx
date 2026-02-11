import "./Contact.css";
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

     <div className="map-container">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0989999052067!2d72.53637719999999!3d23.056831799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84a714b887dd%3A0xf1cb61cbf1fd3adf!2sNobles%20Trade%20Center!5e0!3m2!1sen!2sin!4v1770635312475!5m2!1sen!2sin"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Office Location"
  ></iframe>
</div>
    </>
  );
};

export default Contact;
