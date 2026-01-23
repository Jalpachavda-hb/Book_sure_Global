import "./Blog.css";
import Blogimage from "../../assets/Images/ss/blog_img01.jpg";
import Author from "../../assets/Images/Aboutus/Trupal_Patel_1.png";
import { FaUserCircle, FaCalendarAlt, FaComment } from "react-icons/fa";

const BlogDetail = () => {
  return (
    <>


    <section className="blog-detail-page">
      {/* HERO IMAGE */}
      <div className="blog-header-section">
        <div className="container">
          {/* CATEGORY */}
          <div className="team-detail-header">
            <h1>Building Strong Business Relationships in Modern Agencies</h1>
          </div>

          {/* META */}
          <div className="blog-meta">
            <span>
              <FaUserCircle /> By superadmin
            </span>
            <span>
              <FaCalendarAlt /> Nov 19, 2023
            </span>
            <span>
              <FaComment /> No Comments
            </span>
          </div>

          {/* IMAGE */}
          <div className="blog-image-wrapper">
            <img src={Blogimage} alt="Blog" />
          </div>
        </div>
      </div>
      {/* BLOG CONTENT */}
      <div className="blog-content-wrapper">
        <div className="blog-content">
          <p>
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book, it survived not only five centuries but
            also the leap into electronic typesetting.
          </p>

          <blockquote>
            “Urabitur Varius Eros Rutrum Consequat Mauris Aewa Sollicitudin Enim
            Condimentum Luctus Enim Justo Non Molestie Nisl”
          </blockquote>

          <h3>Speed Optimized</h3>
          <p>
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book has not only five centuries.
          </p>

          <h3>Conduct replied off whether arrived adapted</h3>
          <p>
            Remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets.
          </p>

          <ul>
            <li>Medicare Advantage Plans</li>
            <li>Analysis & Research</li>
            <li>100% Secure Money Back</li>
          </ul>
        </div>

        {/* AUTHOR BOX */}
        <div className="author-box">
          <img src={Author} alt="Author" />
          <div>
            <h5>Trupal Patel</h5>
            <span>Senior Consultant</span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default BlogDetail;
