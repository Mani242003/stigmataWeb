import React, { useLayoutEffect, useRef } from "react";
import "./home.scss";
import Navbar from "../../component/Navigation/navbar/Navbar";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import ControlledCarousel from "../../component/slider/ControlledCarousel";
import ProductSlider from "../../component/ProductSlider/ProductSlider";
import Service from "../../component/services/Service";
import CustomerSlide from "../../component/customerSlide/CustomerSlide";
import Testimonal from "../../component/Testimonal/Testimonal";
import Blogs from "../../component/Blogs/Blogs";
import Footer from "../../component/footer/Footer";
import TechBrains from "../../component/TechBrain/TechBrains";
// import gsap from "gsap-trial";
// import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
// import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
// import { useGSAP } from "@gsap/react";
import AccordionSection from "../../component/Accordion/AccordionSection";
import CompanySkills from "../../component/CompanySkills/CompanySkills";
import ContactUs from "../../component/ContactUs/ContactUs";
import Navigation from "../../component/Navigation/Navigation";
// gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);
const Home = () => {
  // const main = useRef();
  // const smoother = useRef();

  // const scrollTo = () => {
  //   smoother.current.scrollTo(".box-c", true, "center center");
  // };

  // useGSAP(
  //   () => {
  //     // create the smooth scroller FIRST!
  //     smoother.current = ScrollSmoother.create({
  //       smooth: 1, // seconds it takes to "catch up" to native scroll position
  //       effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
  //     });
  //     ScrollTrigger.create({
  //       trigger: ".box-c",
  //       pin: true,
  //       start: "center center",
  //       end: "+=300",
  //       markers: false,
  //     });
  //   },
  //   { scope: main }
  // );

  return (
    <div
      className="nav_home "
      id="smooth-wrapper"
      style={{ background: "#F5F5F5" }}
    >
      <div >
      <Navigation homeMarque="true" />

        <ControlledCarousel />

        <div className="socialMediaContainer">
          <div className="socialLink1">
            <a href="">
              {" "}
              <FaFacebookF />
            </a>
          </div>
          <div className="socialLink2">
            <a href="">
              <FaTwitter />
            </a>
          </div>
          <div className="socialLink3">
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="socialLink4">
            <a href="#">
              <IoMdMail />
            </a>
          </div>
        </div>
        <ProductSlider />
        <Service />
        <CustomerSlide />
        <Testimonal />
        <TechBrains />
        {/* <Blogs /> */}
        <AccordionSection />
        <CompanySkills />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
