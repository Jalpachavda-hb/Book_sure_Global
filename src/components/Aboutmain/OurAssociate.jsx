import "./Aboutus.css";
import founder1 from "../../assets/Images/Hero/f1.png";
import founder2 from "../../assets/Images/Hero/f2.png";
const OurAssociate = () => {
  return (
    <section className="our-associate-section">
      <div className="associate-overlay">
        <div className="container">
          <div className="associate-header">
            <h2>Our Associates</h2>
            <p>Leadership That Builds Trust & Excellence</p>
          </div>
          <div className="associate-grid">
            <div className="associate-card">
              <div className="associate-image">
                <img src={founder1} alt="Trupal J. Patel" />
              </div>
              <div className="associate-content">
                <h4>Trupal J. Patel</h4>
                <span>Founder & Chartered Accountant</span>
                <p>
                  Founder of Trupal J. Patel & Co., Trupal Patel brings over 20
                  years of expertise in audit, taxation, and advisory services.
                  Known for precision and integrity, he delivers tailored
                  financial solutions across diverse industries.
                </p>
              </div>
            </div>
            <div className="associate-card">
              <div className="associate-image">
                <img src={founder2} alt="Co-Founder" />
              </div>
              <div className="associate-content">
                <h4>Associate Partner Name</h4>
                <span>Co-Founder / Partner</span>
                <p>
                  With strong expertise in compliance, accounting, and financial
                  advisory, our associate partner supports businesses with
                  strategic insights, operational efficiency, and sustainable
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAssociate;
