import "./Hero.css";
import bgImage from "../../assets/Images/bgabout.jpg";
import service from "../../assets/Images/Aboutus/services_details_inner02.jpg";

const Help = () => {
  return (
    <section
      id="about"
      className="hero-equal-height mt-5 ptb "
      style={{
        background: `url(${bgImage}) no-repeat top center / cover`,
      }}
    >
      <div className="container">
        <div className="row align-items-center  ">
          <div className="hero-content-left  animated-content position-relative z-index text-white">
            <h4 className="page-tital mt-1 ">The Problem We Solve</h4>
          </div>
        </div>
        <div className="hero-content-left  animated-content position-relative z-index text-white">
          {/* <h4 className="page-tital">Discover Integrity Data Services</h4> */}
        </div>
        <div className="row  ">
          <div className="col-lg-6 col-md-12 col-12">
          <div className="animated-down paraabout">


  <p>
    Many businesses and CPA firms struggle with disorganized, inaccurate, and
    non-compliant financial records due to limited time, high staffing costs,
    and complex regulatory requirements across the USA, Australia, and the UAE.
  </p>

  <p>
    Common issues include backlogged bookkeeping, reconciliation errors, poor
    chart of accounts structure, payroll and tax recording mistakes, and books
    that are not ready for audits or tax filings.
  </p>

  <p>
    These challenges increase compliance risk, waste valuable time, and prevent
    confident financial decision-making.
  </p>

  <p>
    At <strong>Booksure Global</strong>, we ensure these problems are
    systematically identified, corrected, and permanently resolved through our
    compliance-driven processes.
  </p>
</div>

          </div>
          <div className="col-lg-6 col-md-12 col-12 img-fluid animated-down">
            <img src={service} alt="about-figma" className="about-phone" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
