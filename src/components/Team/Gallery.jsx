import React, { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import "./Team.css";
import PageBanner from "../PageBanner/PageBanner";
import bannerImg from "../../assets/Images/Aboutus/breadcrumb_bg.jpg";
// Images (replace with your real images)
import g1 from "../../assets/Images/Gallery/gg1.jpg";
import g2 from "../../assets/Images/Gallery/GG2.jpg";
import g3 from "../../assets/Images/Gallery/gg3.png";
import g4 from "../../assets/Images/Gallery/GG4.jpg";
import g5 from "../../assets/Images/Gallery/GG5.jpg";
import g6 from "../../assets/Images/Gallery/gg6.jpg";

const galleryImages = [g1, g2, g3, g4, g5, g6];

const GallerySection = () => {
  useEffect(() => {
    GLightbox({
      selector: ".gallery-lightbox",
      touchNavigation: true,
      loop: true,
      zoomable: true,
    });
  }, []);

  return (
    <>
    <PageBanner title="Gallery" bgImage={bannerImg} />

    <section className="gallery-section">
      <div className="container">
        <div className="team-detail-header">
          {/* <h1>Gallery</h1> */}
          {/* <span>CELEBRATING OUR TEAM AND COMPANY CULTURE</span> */}
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <a
              href={img}
              className="gallery-item gallery-lightbox"
              data-gallery="teamGallery"
              key={index}
            >
              <img src={img} alt={`Gallery ${index + 1}`} />
            </a>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default GallerySection;
