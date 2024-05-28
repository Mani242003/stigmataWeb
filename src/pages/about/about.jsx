import React from "react";
import "./about.scss";
import Logo from "../../assets/images/logo.png";
import { FaArrowRightLong } from "react-icons/fa6";
import ReactPlayer from "react-player/youtube";
import visionAndMission from "../../assets/images/visionAndMission.jpg";
import ourStory from "../../assets/images/ourstory.jpg";

import Footer from "../../component/footer/Footer";
import Navigation from "../../component/Navigation/Navigation";
import Count from "../../component/Count/Count";
import TechBrains from "../../component/TechBrain/TechBrains";
import RoadMap from "../../component/Road-Map/RoadMap";
import Challenges from "../../component/Challenges/Challenges";

const about = () => {
  return (
    <section className="aboutPage_wrapper">
      <Navigation homeMarque="false" />
      <div className="aboutPage_Container">
        <div className="aboutPageMain">
          <div className="aboutPageLeft">
            <span className="aboutPageTitel">
              Welcome To Stigmata Techno Solutions
            </span>
            <br />
            <span className="aboutPageDes">About US</span>
          </div>
        </div>
        <div className="AboutPage_whatWeDo">
          <div className="AboutPage_headerContainer">
            {/* <img src={Logo} alt=""  /> */}
            <span className="AboutPage_whatWeDoTitel">What We Do</span>

            {/* <div data-aos="fade-up"> */}
            {/* <span className="P_S-title">
                Explore how AI expectations can become realities within your
                organization.
              </span> */}
            {/* </div> */}
            {/* <div className="seperateLine"></div> */}
            <div>
              <span className="P_SDec">
                Welcome to Stigmata Techno Solutions, where we make the customer
                and software development journey simple. In a world of
                complexity, our focus on streamlined services, efficient
                processes, and outstanding performance allows us to build strong
                customer relationships and cultivate repeat business.
              </span>
              {/* <br />
              <br /> */}
              {/* <br/> */}

              <span className="P_SDec">
                <span className="P_SDec">
                  Our dedicated team of skilled and passionate professionals is
                  committed to helping clients automate and resolve their
                  challenges in software application development. Whether it's
                  ERP development, web application and e-commerce solutions,
                  mobile app development, cloud migration, DevSecOps, Serverless
                  application development, Plugin and API development, Data
                  analysis, Data processing with visualisation tool, we deliver
                  solutions tailored to your needs.
                </span>
                {/* <br />
                <br /> */}
              </span>
              <span className="P_SDec">
                At Stigmata Techno Solutions, we aim to simplify your technology
                journey and provide innovative, high-quality services that drive
                your success. Let us help you navigate the digital landscape
                with confidence.
              </span>
              <br />
            </div>
            <div className="productButtonConatiner">
              <a href="">Get Started </a>
              <FaArrowRightLong />
            </div>
          </div>
          <div className="AboutPage_whatWeDoLeft">
            <ReactPlayer
              // width='200%'
              height="300px"
              url="https://youtu.be/yJSWMYG8j-A"
              //  playing={true} // Enable autoplay
              //  muted={true}
            />
          </div>
        </div>
        {/* <div className="VisionAndMissionContainer">
          <div className="VisionAndMissionHeaderContainer">
            <span>We believe in The Power of Simple.</span>
          </div>
          <div className="VisionAndMissionMainContainer">
            <div className="VisionAndMissionLeft">
              <span className="VisionAndMissionLeftTitel">
                Mission & Vision
              </span>
              <span className="VisionAndMissionLeftDes">
                Our guiding principle is straightforward: to deliver exceptional
                quality service to our customers by prioritizing their needs and
                ensuring that technology serves as a catalyst for their business
                growth.
                <br />
                <br />
                Stigmata Techno Solutions comprises a vibrant team of dedicated
                professionals and consultants who excel in exceeding customer
                expectations with our deliverables and making a transformative
                impact worldwide.
              </span>
            </div>
            <div className="VisionAndMissionRight">
              <img src={visionAndMission} alt="" />
            </div>
          </div>
        </div> */}

        <div className="ourStoryContainer">
          <div className="ourStoryLeft">
            <img src={ourStory} alt="" />
          </div>
          <div className="ourStoryRight">
            <span className="ourStoryLeRightTitel">OUR STORY</span>
            <span className="ourStoryRzightDes">
            Founded in 2014, Stigmata Techno Solutions emerged with a mission to bridge the technical gap within educational institutions. We offered specialized technical training through guest lectures, workshops, value-added courses, internships, and research projects to empower students and academic institutions.
              <br />
              <br />
              
            In 2019, we evolved, expanding our focus to the dynamic realm of software development. Our expertise now spans creating websites, IT consulting, ERP development, plugin development, automation using web and AI technologies, and offering a range of digital services. We pride ourselves on providing customized IT solutions to customers worldwide.
              <br />
              <br />
              With a commitment to excellence and innovation, we continuously strive to stay ahead of industry trends, delivering cutting-edge technology and personalized services to meet the unique needs of our clients. At Stigmata Techno Solutions, your success is our priority. Let us transform your ideas into reality.
            </span>
          </div>
        </div>

        <div className="VisionAndMissionContainer">
          <div className="VisionAndMissionHeaderContainer">
            <span>We believe in The Power of Simple.</span>
          </div>
          <div className="VisionAndMissionMainContainer">
            <div className="VisionAndMissionLeft">
              <span className="VisionAndMissionLeftTitel">
                Mission & Vision
              </span>
              <span className="VisionAndMissionLeftDes">
                Our guiding principle is straightforward: to deliver exceptional
                quality service to our customers by prioritizing their needs and
                ensuring that technology serves as a catalyst for their business
                growth.
                <br />
                <br />
                Stigmata Techno Solutions comprises a vibrant team of dedicated
                professionals and consultants who excel in exceeding customer
                expectations with our deliverables and making a transformative
                impact worldwide.
              </span>
            </div>
            <div className="VisionAndMissionRight">
              <img src={visionAndMission} alt="" />
            </div>
          </div>
        </div>
      </div>
      <RoadMap />
      <Challenges />

      <Count />
      <TechBrains />
      <Footer />
    </section>
  );
};

export default about;
