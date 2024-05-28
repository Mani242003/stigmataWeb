import React, { useState, useRef } from "react";
import "./ProductSlider.scss";
import Slider from "react-slick";
import { FaArrowRightLong } from "react-icons/fa6";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import clouSec from "../../assets/images/cloud-security-1.jpg";
// import digitalMenu from "../../assets/images/happiedinner.jpg";
import piiProtector from "../../assets/images/PiiProtector.png";
import blueDots from "../../assets/images/blue-dots.png";
import Logo from "../../assets/images/logo.png";
import Pman from "../../assets/images/Pman.png";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import CustomSlide from "./CustomSlider/CustomSlide";
import Video from "../Video/Video";

const ProductSlider = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000, // Adjusted for smoother slide transitions
    // autoplay: true,
    autoplaySpeed: 4000, // Adjusted for smoother autoplay transitions
    slidesToShow: 1,
    slidesToScroll: 1,
    // beforeChange: (current, next) => setCurrentSlide(next),
    // pauseOnHover: true, // Pause autoplay on hover
  };
  return (
    <section className="P_S-wrapper">
      <div className="P_S-container">
        <div className="P_S-headerContainer">
          <img src={Logo} alt="" data-aos="fade-up" />
          <div data-aos="fade-up">
            <span className="P_S-title">
            Unlock the full potential of your digital journey with Stigmata Techno Solutions
            </span>
          </div>
          {/* <div className="seperateLine"></div> */}
          <div>
            <span className="P_SDec">
            Stigmata Techno Solutions is a 9+ year aged firm rendering software, IT development services to global customers. We are specialized in developing applications, digital transformation for specific industries like heavy construction companies, power transmission & distribution, financial institutions (governance & compliance handling PII data) and securing organisations cloud environment (ClouSec : CSPM tool – Cloud Security). Our key focus is to provide world-class quality service to our customers with utmost focus on their needs and to ensure that technology supports their business growth. We would be happy to get associated with your esteemed organization on your digital transformation / automation reducing manual efforts and cost.
            </span>
          </div>
          <div className="productButtonConatiner">
            <a href="">Get Started </a>
            <FaArrowRightLong />
          </div>
        </div>
        <div className="productBackground">
          <div className="video_header">
            <span data-aos="fade-up">
              Happy customers. Energized employees. <br /> That’s impact.
            </span>
          </div>
          <div
            style={{ textAlign: "end", marginRight: "100px" }}
            className="ProductNextBackButtonContainer"
          >
            <button className="button" onClick={previous}>
              <FaArrowLeft />
            </button>
            <button className="button" onClick={next}>
              <FaArrowRight />
            </button>
          </div>

          <div style={{ height: "100vh", width: "100%", overflow: "hidden" }}>
            <Slider
              {...settings}
              ref={(slider) => {
                sliderRef = slider;
              }}
            >
              <div>
                <Video
                  key={1}
                  num="01"
                  name="ClouSec"
                  title="Modernize Cloud Security. Outsmart Attackers."
                  des=" ClouSec in an AI/Pass based cloud security platform Posture management tool to analyze your, Security, Regulatory misconfigurations ,Suppression workflow, Cloud Inventory smart monitoring, Sensitive information handling,  Periodic reports & Alerts."
                  link="https://youtu.be/-vLYTijz370"
                  url="https://clousec.io/"
                />
              </div>
              <div>
                <Video
                  key={2}
                  num="02"
                  name="Happiedineer"
                  title="Modernize your Restaurants with Automation & Data driven recommendation."
                  des="Happiedinner is a Light weight Serverless architecture framework Providing
                  digitalized Wow experience to end customers through, Digital menu's with ordering, Data Driven Recommendation, Digitalized Kictens,Last minute deals,Digital Payments."
                  link="https://youtu.be/jEwftk8SNuA?si=spx8pH619psPFTQf"
                  url="https://clousec.io/"
                />
              </div>
              <div>
                <Video
                  key={3}
                  num="03"
                  name="PII Protector"
                  title="SAFEguard Personally Identifiable Information (PII) & be Compliant."
                  des="In this data driven age, ensuring security and safeguarding individual's data have become Paramount concerns.  We handle PII information through, We  Define, Detect, User Acters, Mask, Send email Alert's ,Required logs for Auditing, Reports."
                  link="https://youtu.be/-vLYTijz370"
                  url="https://clousec.io/"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
