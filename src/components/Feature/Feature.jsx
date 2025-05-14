import React from "react";
import "./feature.css";
import { GiFiles } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { FaUserTag } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { AiOutlineSelect } from "react-icons/ai";
const Feature = () => {
  return (
    <>
      <section className="container mt-5" id="feature" >
        <div className="hero-content-left  animated-content position-relative z-index text-white">
          <h4 className="page-tital">Feature</h4>
          <p className="contain-colur">
            "Everything You Need to Organize Smarter"
          </p>
        </div>
      </section>
      <section
        id="target-audience"
        className="advertisers-service-sec pt-5 pb-5"
      >
        <div className="container">
          <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
            <div className="col-lg-4 col-md-6 col-12" id="col-service-product">
              <div className="service-card">
                <div className="icon-wrapper">
                  <GiFiles />
                </div>
                <h3>Create Multiple Box Files</h3>
                <p>
                  Organize your documents efficiently by creating unlimited
                  digital box files. Separate files by category, project, or
                  purpose — just like physical box files, but smarter.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12" id="col-service-product">
              <div className="service-card">
                <div className="icon-wrapper">
                  {/* <img src={card} alt="card" className="card-img" /> */}
                  <MdOutlineSecurity />
                </div>
                <h3>Secure OTP Login</h3>
                <p>
                  Sign in with your mobile number and OTP for quick and secure
                  access. Your privacy is our priority — no passwords, no
                  stress.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12" id="col-service-product">
              <div className="service-card">
                <div className="icon-wrapper">
                  {/* <img src={card} alt="card" className="card-img" /> */}
                  <FaUserTag />
                </div>
                <h3>Custom File Tags & Names</h3>
                <p>
                  Quickly find what you need by assigning custom tags and names
                  to your files. Smart search helps you locate documents
                  instantly.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12" id="col-service-product">
              <div className="service-card">
                <div className="icon-wrapper">
                  {/* <img src={card} alt="card" className="card-img" /> */}
                  <MdOutlinePhoneAndroid />
                </div>
                <h3>Minimal & User-Friendly Interface</h3>
                <p>
                  Smart Box File features a clean, intuitive interface designed
                  for ease of use. Navigate your files effortlessly with a
                  modern, minimal aesthetic.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12" id="col-service-product">
              <div className="service-card">
                <div className="icon-wrapper">
                  {/* <img src={card} alt="card" className="card-img" /> */}
                  <AiFillFileAdd />
                </div>
                <h3>Add & Manage Multiple Files in Each Box</h3>
                <p>
                  Upload, rename, or delete files within each box. You’re in
                  full control — manage documents, images, and notes all in one
                  place.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12" id="col-service-product">
              <div className="service-card">
                <div className="icon-wrapper">
                  {/* <img src={card} alt="card" className="card-img" /> */}
                  <AiOutlineSelect />
                </div>
                <h3>Choose Traditional Box File Themes</h3>
                <p>
                  Personalize your folders with beautifully designed classic
                  themes such as cardboard, wooden, leather, and more. A unique
                  blend of nostalgia and style for your digital workspace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
