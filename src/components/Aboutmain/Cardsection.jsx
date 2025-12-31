import React from "react";
import { FaRegSmile } from "react-icons/fa";
import "./Aboutus.css";
import { GoTrophy } from "react-icons/go";
import { IoMdGlobe } from "react-icons/io";
import { GoStopwatch } from "react-icons/go";
const Cardsection = () => {
  return (
    <section className="stats-row-section">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <GoTrophy className="stat-icon" />
              <div className="stat-content">
                <h4>45+</h4>
                <p>Successfully<br />Completed Projects</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <FaRegSmile className="stat-icon" />
              <div className="stat-content">
                <h4>92K</h4>
                <p>Satisfied<br />100% Our Clients</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <IoMdGlobe className="stat-icon" />
              <div className="stat-content">
                <h4>19+</h4>
                <p>All Over The World<br />We Are Available</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <GoStopwatch  className="stat-icon" />
              <div className="stat-content">
                <h4>25+</h4>
                <p>Years of Experiences<br />To Run This Company</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Cardsection;