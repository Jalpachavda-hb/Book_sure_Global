import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import "./Blog.css";
import Author from "../../assets/Images/Aboutus/Trupal_Patel_1.png"
export default function BlogCard({ image, category, date, title, author }) {
  return (
    <div className="blog-card">
      <div className="blog-img">
        <img src={image} alt={title} />
      </div>

      <div className="blog-content">
        <div className="blog-meta">
          <span className="tag">{category}</span>
          <span className="date">
            <FaCalendarAlt /> {date}
          </span>
        </div>

        <h3 className="blog-title">{title}</h3>

        <div className="blog-author">
          <img
            src={Author}
            alt="author"
          />
          <span>
            By <strong>{author}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
