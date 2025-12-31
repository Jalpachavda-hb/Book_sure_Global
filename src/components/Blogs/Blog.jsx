import React from "react";
import BlogCard from "./Blogcard";
import "./Blog.css";
import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
import PageBanner from "../PageBanner/PageBanner";
import BlogImg1 from "../../assets/Images/ss/blog_img06.jpg";
import BlogImg2 from "../../assets/Images/ss/blog_img01.jpg";
import BlogImg3 from "../../assets/Images/ss/blog_img04.jpg";
import { useNavigate } from "react-router-dom";
export default function Blog() {
      const navigate = useNavigate();
  const blogData = [
    {
      image: BlogImg1,
      category: "Business",
      date: "Dec 31, 2023",
      title: "Marketing Your Area Business Downturn Now A Days",
      author: "supperadmin",
    },
    {
      image: BlogImg2,
      category: "Audit",
      date: "Nov 19, 2024",
      title: "Designing Web Design Often Of Documentation",
      author: "supperadmin",
    },
    {
      image: BlogImg3,
      category: "Finance",
      date: "Jan 18, 2025",
      title: "How Financial Planning Helps Your Business Grow",
      author: "supperadmin",
    },
  ];
const handleCardClick = (id) => {
    // Navigate to the detail page, optionally pass ID or slug
    navigate(`/blog/blogdetail`);
  };
  return (
    <>   
    <PageBanner title="Blog" bgImage={bannerImg} />
 <section className="blog-section">
      <div className="container">
        {/* <div className="team-detail-header">
          <h1>Blogs</h1>
          <span>LEARN, EXPLORE, AND STAY UPDATED</span>
        </div> */}

          <div className="blog-grid">
      {blogData.map((item, index) => (
        <div key={index} onClick={() => handleCardClick(item.id)}>
          <BlogCard {...item} />
        </div>
      ))}
    </div>
      </div>
    </section>
    </>

  );
}
