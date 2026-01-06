import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./components/Media.css";

import Layout from "./components/Layout";

// Pages
import Blog from "./components/Blogs/Blog";
import Home from "./components/home/Home";
import Aboutus from "./components/Aboutmain/Aboutus";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import Pricing from "./components/Pricing/Pricing";
import Data from "./components/Data/Data";
// import Contact from "./components/Contact/Contact";
// import Careers from "./components/Contact/Careers";
import Contact from "./components/Contactus/Contact";
import Careers from "./components/Contactus/Careers";
import Teamdetailpage from "./components/Team/Teamdetailpage";
import Servicesubpage from "./components/Services/Servicesubpage";
import Gallery from "./components/Team/Gallery";
import Notfound from "./components/PageBanner/Notdound";
import BlogDetail from "./components/Blogs/Blogdetail";
function App() {
  return (
    <Routes>

      {/* Routes WITH Navbar & Footer */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/company/about" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/details" element={<Servicesubpage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/gallery" element={<Gallery />} />
        <Route path="/team/:slug" element={<Teamdetailpage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/data" element={<Data />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company/blog" element={<Blog />} />
         <Route path="/blog/blogdetail" element={<BlogDetail />} />
          <Route path="/company/careers" element={<Careers />} />
      </Route>

      {/* 404 Page WITHOUT Navbar & Footer */}
      <Route path="*" element={<Notfound />} />

    </Routes>
  );
}

export default App;
