import React from "react";
import { Link } from "react-router-dom";
import "./PageBanner.css";

// replace with your image path
import NotFoundImg from "../../assets/Images/404.png";

export default function Notfound() {
  return (
    <section className="notfound-wrapper">
      <div className="notfound-content">
        <img src={NotFoundImg} alt="404 Not Found" />

        <h1>404</h1>
        <h3>Page Not Found</h3>

        <p>
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link to="/" className="home-btn">
          Go To Home
        </Link>
      </div>
    </section>
  );
}
