import React from "react";
import "./About.css";
import bgImage from "../../assets/Images/bgabout.jpg";
import aboutphone from "../../assets/Images/aboutphone.png";

const Home = () => {
  return (
    <section
      id="about"
      className="hero-equal-height mt-5 ptb "
      style={{
        background: `url(${bgImage}) no-repeat top center / cover`,
      }}
    >
      <div className="container">
        <div className="hero-content-left  animated-content position-relative z-index text-white">
          <h4 className="page-tital">About us</h4>
          <p className="contain-colur">
            "Inspired by the past. Built for your present. Ready for the
            future."
          </p>
        </div>
        <div className="row  ">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="animated-down paraabout ">
              <p className="mt-4 contain-colur ">
                Digital organization with a touch of tradition.{" "}
              </p>

              <p>
                Smart Box File was born from a simple idea: to bring the
                familiarity of traditional box file organization into the
                digital world. In a time where everything is stored online, we
                wanted to offer users a system that feels intuitive, personal,
                and visually satisfying.
              </p>
              <p>
                Our app allows users to create and manage digital box files,
                each customizable with classic themes like cardboard, leather,
                and wood — bringing a nostalgic twist to modern file management.
                Whether you're organizing work documents, personal records, or
                creative files, Smart Box File gives you the tools to do it
                beautifully and efficiently.
              </p>
              <p>
                We are a team of designers and developers who believe that
                digital storage doesn't have to be dull. With Smart Box File,
                we're redefining the way people experience organization —
                blending utility with design, and structure with style.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12 img-fluid animated-down">
            <img
              src={aboutphone}
              alt="about-figma"
              className="  about-phone "
            />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Home;
