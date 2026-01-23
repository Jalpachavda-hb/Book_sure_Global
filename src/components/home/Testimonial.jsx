
import Slider from "react-slick";
import "./Hero.css";

import client from "../../assets/Images/ss/h5_testimonial_img.png";
import shape from "../../assets/Images/ss/h5_testimonial_shape01.png";

const Testimonial = () => {
  const sliderSettings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="hero-content-left animated-content position-relative z-index text-white mb-4">
            <h3 className="page-tital mt-1"> Testimonials</h3>
            <p className="contain-colur">“What Our Clients Say”</p>
          </div>
          {/* LEFT IMAGE */}
          <div className="col-lg-6">
            <div className="client-img-wrap">
              <img src={shape} alt="shape" className="shape-bg" />
              <img src={client} alt="Client" className="main-img" />
            </div>
          </div>

          {/* RIGHT CONTENT SLIDER */}
          <div className="col-lg-6">
            <Slider {...sliderSettings} className="testimonial-slider">
              {/* SLIDE 1 */}
              <div>
                <div className="testimonial-content-wrap">
                  <ul className="rating">
                    <li>★</li>
                    <li>★</li>
                    <li>★</li>
                    <li>★</li>
                    <li>★</li>
                  </ul>

                  <p className="testimonial-text">
                    Working with Advanta-Wise has been a game-changer for our
                    organization. They don't just offer services—they become an
                    extension of your team.
                  </p>

                  <div className="author-info">
                    <h4>
                      Emily Davis, <span>CFO</span>
                    </h4>
                    <p>Northfield Medical Center</p>
                    <span className="line"></span>
                  </div>
                </div>
              </div>

              {/* SLIDE 2 */}
              <div>
                <div className="testimonial-content-wrap">
                  <ul className="rating">
                    <li>★</li>
                    <li>★</li>
                    <li>★</li>
                    <li>★</li>
                    <li>★</li>
                  </ul>

                  <p className="testimonial-text">
                    Their RCM expertise improved our revenue flow and
                    operational efficiency. Highly recommended.
                  </p>

                  <div className="author-info">
                    <h4>
                      Michael Brown, <span>Director</span>
                    </h4>
                    <p>Healthcare Group</p>
                    <span className="line"></span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
