import React, { useEffect, useRef } from "react";
import "./RoadMap.scss";
// import aws from "../../assets/roadmap/aws.png";
// import EC2 from "../../assets/roadmap/EC2.png";
// import azure from "../../assets/roadmap/azure.png";
// import cloudIaac from "../../assets/roadmap/cloudIaac.png";
// import googlecloud from "../../assets/roadmap/google-cloud.png";
// import cloudTrail from "../../assets/roadmap/cloudTrail.png";
import { BsFillCalendarFill } from "react-icons/bs";
// import {motion,useInView,useAnimation} from "framer-motion";

const RoadMap = () => {
  //   const ref =useRef(null)
  //   const isView =useInView(ref,{once:false})
  //  const mainControls=useAnimation()
  //   useEffect(()=>{
  //     if(isView){
  //       mainControls.start('visible')
  //     }
  //   },[isView])
  return (
    <section className="r-wraper " id="roadMap">
      {/* <div className="roadmap-circle1"></div>
      <div className="roadmap-circle2"></div>
      <div className="roadmap-circle3"></div>
      <div className="roadmap-circle4"></div> */}

      <div className="r-header-titel" style={{ textAlign: "center" }}>
        <span className="primaryText r-header">Our Goal & Roadmap</span>
      </div>

      <div className="r-timeLine-container">
        <div className="r-container r-left-container">
          {/* <img src={aws} alt="" className="r-left-outerImg" /> */}
          <div className="textBoxContainer" style={{ background: "#E4F6EF" }}>
            {/* <div className="textBoxContainer-left" style={{ background: "#E4F6EF" }}>
              <img src={aws} alt="" />
              <small className="r-date"><BsFillCalendarFill  /> SEP,2023</small>
            </div> */}
            <div className="textBoxContainer-right">
              {/* <p className="r-dec" style={{ color: "#5AA8B2" }}>
                1. Excellence in Software Development:
              </p> */}
              <p className="r-decSmall">
              At Stigmata Techno Solutions, our goal is to drive innovation and deliver high-quality software services to our customers. We strive to be at the forefront of technology, creating solutions that not only meet but exceed our clients' expectations.

              </p>
              <span className="left-container-arrow left-container-arrow-modified-1"></span>
            </div>
          </div>
        </div>

        <div className="r-container r-right-container">
          {/* <img src={EC2 } alt="" className="r-left-outerImg" /> */}

          <div className="textBoxContainer" style={{ background: "#F6FDD6" }}>
            <div className="textBoxContainer-right">
           
              {/* <p className="r-dec" style={{ color: "#6F7730"  }}>
                2. Dedicated Customer Support: 
              </p> */}
              <p className="r-decSmall">
              Our focus extends beyond serving customers to contributing value and innovative solutions to society and humanity. We aim to develop products that benefit the community and establish ourselves as a leading competitor in our industry.
              </p>
              <span className="right-container-arrow right-container-arrow-modified-2"></span>
            </div>
          

            {/* <small className="r-date"></small>
            <p className="r-dec">EC2 and EKS dashboard</p> */}
          </div>
        </div>

        <div className="r-container r-left-container">
          {/* <img
            src={cloudIaac}
            alt=""
            className="r-left-outerImg"
          /> */}

          <div className="textBoxContainer" style={{ background: "#FEF6D6" }}>
           
            <div className="textBoxContainer-right">
{/*             
              <p className="r-dec" style={{ color: "#A3894E" }}>
                3. Talented and Motivated Team: 
              </p> */}
              <p className="r-decSmall">
              As part of our roadmap, we seek to expand our client base to 100+ trusted partners, fostering strong relationships built on reliability and excellence. By scaling our operations and increasing our impact, we aim to become a prominent player in our vertical.
              </p>
              <span className="left-container-arrow left-container-arrow-modified-3"></span>
            </div>
          </div>
        </div>

        <div className="r-container  r-right-container">
          {/* <img
            src={cloudTrail}
            alt=""
            className="r-left-outerImg"
          /> */}

          <div className="textBoxContainer" style={{ background: "#E4F6EF" }}>
            <div className="textBoxContainer-right">
             
              {/* <p className="r-dec" style={{ color: "#5AA8B2" }}>
                4. Empowerment and Collaboration: 
              </p> */}
              <p className="r-decSmall">
              Stigmata Techno Solutions is committed to continuous growth and excellence in all that we do, always with an eye towards shaping a better future through technology.
              </p>
              <span className="right-container-arrow right-container-arrow-modified-2"></span>

            </div>
           
          </div>
        </div>

        {/* <div className="r-container r-left-container">
          <img src={azure} alt="" className="r-left-outerImg" />

          <div className="textBoxContainer" style={{ background: "#F6FDD6" }}>
          
            <div className="textBoxContainer-right">
          
              <p className="r-dec" style={{ color: "#6F7730"}}>
                5. Nurturing a Creative Workspace
              </p>
              <p className="r-decSmall">
              Pursuing total quality and delivering on our promises is central to who we are at Stigmata Techno Solutions. We take pride in our work and strive to exceed our clients' expectations with every project.
              </p>
              <span className="left-container-arrow left-container-arrow-modified-5"></span>
            </div>
          </div>
        </div> */}
{/* 
        <div className="r-container  r-right-container">
          <img
            src={googlecloud}
            alt=""
            className="r-left-outerImg"
          />

          <div className="textBoxContainer" style={{ background: "#FEF6D6" }}>
            <div className="textBoxContainer-right">
            
              <p className="r-dec" style={{ color: "#A3894E"}}>
                6. Commitment to Total Quality: 
              </p>
              <p className="r-decSmall">
              Pursuing total quality and delivering on our promises is central to who we are at Stigmata Techno Solutions. We take pride in our work and strive to exceed our clients' expectations with every project.
              </p>
              <span className="right-container-arrow right-container-arrow-modified-6"></span>
            </div>
           
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default RoadMap;
