import React, { useState, useRef } from "react";
import "./ProductSlider.scss";
import Slider from "react-slick";

import blueDot from "../../assets/images/icons/blueBullet.png";
import orangeDot from "../../assets/images/icons/orangeBullet.png";

import { FaQuoteLeft } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

import Video from "./Video/Video";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

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
      <div className="P_S-container" >
        
        <div className="P_S-headerContainer">
         
          <div className="cloudMigrateMainSection2">
            <div className="cloudMigrateSection2Header">
              <span>
              Unlock the full potential of your digital journey with Stigmata Techno Solutions
              </span>
            </div>
            <>
         
              <div className="cloudMigrateSection2innerConatiner">
                <div className="cloudMigrateSection2innerLeft">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={orangeDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      Cloud Deployment Solutions: Transform outdated manual
                      operations into efficient, automated processes,
                      significantly reducing maintenance overheads.
                    </span>
                  </div>
                </div>
                <div className="cloudMigrateSection2innerRight">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={blueDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      Cloud Migration Consulting: Overcoming performance issues
                      from resource-intensive legacy systems.
                    </span>
                  </div>
                </div>
              </div>
              <div className="cloudMigrateSection2innerConatiner">
                <div className="cloudMigrateSection2innerLeft">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={orangeDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      Cloud Deployment Solutions: Transform outdated manual
                      operations into efficient, automated processes,
                      significantly reducing maintenance overheads.
                    </span>
                  </div>
                </div>
                <div className="cloudMigrateSection2innerRight">
                  <div className="cloudMigrateSection1LeftBottomContainer">
                    <img src={blueDot} alt="" />

                    <span className="feaPage-col-1-text-4">
                      Cloud Migration Consulting: Overcoming performance issues
                      from resource-intensive legacy systems.
                    </span>
                  </div>
                </div>
              </div>
            </>
            <div className="cloudMigrateSection2BottomContainer">
              <span className="cloudMigrateSection2BottomText">
              Stigmata Techno Solutions Is A 9+ Year Aged Firm Rendering Software, IT Development Services To Global Customers. We Are Specialized In Developing Applications, Digital Transformation For Specific Industries Like Heavy Construction Companies, Power Transmission & Distribution, Financial Institutions (Governance & Compliance Handling PII Data) And Securing Organisations Cloud Environment (ClouSec : CSPM Tool – Cloud Security). Our Key Focus Is To Provide World-Class Quality Service To Our Customers With Utmost Focus On Their Needs And To Ensure That Technology Supports Their Business Growth. We Would Be Happy To Get Associated With Your Esteemed Organization On Your Digital Transformation / Automation Reducing Manual Efforts And Cost.
              </span>
              <div className="cloudMigrateSection2BottomButton">
                <Link to="/contact">Get Started</Link>
                <FaArrowRightLong />
              </div>
            </div>
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
