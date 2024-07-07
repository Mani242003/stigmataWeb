import React, { useState, useEffect } from "react";
import "./App.scss";
// import {useSelector,useDispatch} from "react-redux"
// import { decrement, increment } from './redux/reducer/counterSlices'

import AOS from "aos";
import "aos/dist/aos.css";
import CookieConsent from "react-cookie-consent";
// import Navbar from './component/navbar/Navbar'
// import About from "./pages/about/About";
import Home from "./pages/home/home";
import Services from "./pages/services/Services";
import Blog from "./pages/blog/blog";
import Contact from "./pages/contact/contact";
// import ScrollToTop from "react-scroll-to-top";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import DevOps from "./pages/services/devops/DevOps";
import MobileDevPage from "./pages/services/mobileDevPage/MobileDevPage";
import AIPage from "./pages/services/AI/AIPage";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Plugin from "./pages/services/plugin/Plugin";
import SoftwarePage from "./pages/services/SoftwarePage/SoftwarePage";
import CloudMigrate from "./pages/services/cloudMigrate/CloudMigrate";
import ServerLess from "./pages/services/serverLess/ServerLess";
// import Careers from "./pages/Careers/Careers";
import About from "./pages/about/About";
import Career from "./pages/Career/Career";
import ManiAPI from "./ManiAPI";
import Policy from "./pages/Policy/Policy";
import GoToTop from "./component/GoToTop/GoToTop";
import ScrollToTop1 from "./component/ScrollToTop/ScrollToTop";
const App = () => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <Router>
      <ScrollToTop1 />

      {/* <ManiAPI /> */}
      {/* <div
        className="scroll-to-top-container"
        style={{ position: "fixed", left: "0", bottom: "20px", zIndex: "1000" }}
      >
        <ScrollToTop smooth />
      </div> */}

      {/* <CookieConsent
        location="bottom"
        buttonText="OK"
        cookieName="myAwesomeCookieName2"
        style={{
          background: "#1A74E9",
          width: "75%",
          borderRadius: "5px",
          margin: "10px",
        }}
        buttonStyle={{
          color: "white",
          background: "#1A74E9",
          border: "1px solid white",
          fontSize: "15px",
          padding: "8px 13px",
          borderRadius: "5px",
          fontWeight: "500",
          marginRight: "3rem",
        }}
        expires={150}
      >
        <span
          style={{
            color: "white",
          }}
        >
          {" "}
          We use cookies to deliver the best user experience. By using our
          website, you agree to our{" "}
          <Link style={{ color: "white" }} to="/cookie-policy">
            cookie policy
          </Link>
          .
        </span>
      </CookieConsent> */}

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/mobile-app-development" element={<MobileDevPage />} />

        <Route path="/dev-Ops" element={<ServerLess />} />
        <Route path="/cloud-migration" element={<CloudMigrate />} />
        <Route path="/serverless-computing" element={<DevOps />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/plugin-development" element={<Plugin />} />

        <Route path="/artificial-intelligence" element={<AIPage />} />
        <Route path="/software-development" element={<SoftwarePage />} />
        <Route path="/software-development" element={<SoftwarePage />} />

        <Route path="/careers" element={<Career />} />
        <Route path="/cookie-policy" element={<Policy />} />

        

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
