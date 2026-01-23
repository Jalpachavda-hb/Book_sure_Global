import heroBg from "../../assets/Images/Hero/hero.jpg";
import "./Hero.css";
import Help from "../home/Help";
import About from "../home/About/About";
import Software from "./Software";
import Strength from "./Strength";
import Testimonial from "./Testimonial";

export default function Hero() {
  return (
    <>
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container">
          <div className="row align-items-center min-vh-80">
            <div className="col-lg-6">
              <h1>
                CLEAN NUMBERS <br />
                CLEAN BOOKS!
              </h1>
              <p>Financial clarity backed by regulatory expertise</p>
              <a href="/company/about">
                <button className="btn hero_btn px-4 py-2  mt-3">
                  Explore More →
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Help />
      <Software />
      <Strength />
      <Testimonial />
    </>
  );
}
