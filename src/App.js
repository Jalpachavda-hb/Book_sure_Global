// import './App.css';
// // import Navbar from './components/Navbar/Navbar';
// import Home from './components/home/Home';
// import About from './components/About/About';
// import Feature from './components/Feature/Feature';
// import Contact from './components/contact/Contact';
// import Footer from './components/footer/Fotter';
// import Navbar from './components/Navbar/Navbar';
// import ScreenshotsSection from './components/screenshort/Screenshort';
// // import ScreenshotsSection from './components/screenshort/Screenshort';
// function App() {
//   return (
//     <>
//    <Navbar/>
//     <Home/>
//     <About/>
//     <Feature/>
//     {/* <Screenshort/> */}
//     {/* <ScreenshotsSection/> */}
//     <Contact/>
//     <Footer/>

//   </>
//   );
// }

// export default App;

import "./App.css";
import Home from "./components/home/Home";
import About from "./components/About/About";
import Feature from "./components/Feature/Feature";
import Contact from "./components/contact/Contact";
import Fotter from "./components/footer/Fotter";
import Navbar from "./components/Navbar/Navbar";
import ScreenshotsSection from "./components/screenshort/Screenshort";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Home />
              </section>
              <section id="about">
                <About />
              </section>

              <section id="features">
                <Feature />
              </section>

              <section>
                <ScreenshotsSection id="screenshorts"/>
              </section>
               <section>
                <Contact id="contact"/>
              </section>
               <section>
                <Fotter/>
              </section>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
