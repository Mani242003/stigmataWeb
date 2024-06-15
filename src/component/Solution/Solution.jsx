import React, { useRef, useEffect } from "react";
import "./Solution.scss";
// import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import ios from "../../assets/images/icons/ios-1.svg";
import android from "../../assets/images/icons/android-1.svg";

import hybrid from "../../assets/images/icons/hybrid-app-1.svg";
import enterPrise from "../../assets/images/icons/enterprise-mobile-app-1.svg";

import { AiOutlineArrowRight } from "react-icons/ai";

const Solution = () => {
  return (
    <section className="solution-wrapper" id="solution">
      <div className="solution-container">
        <div className="solution-header">
          <span className="solution-header-text">
            <span> Our Offerings In</span>
            <br />
            Mobile App Development
          </span>
          <div className="solution-headerDivider"></div>
        </div>
        <div className="solution-main-content-container">
          <div
            className="solution-main-content "
            style={{ background: "#E4F6EF" }}
          >
            <div className="solution-main-content-left ">
              <span className="solution-left-content-text2">
                iOS Application
              </span>
              <span className="solution-left-content-text3">
                The most popular mobile application development platform in the
                US is iOS with millions of downloads on the App Store. With over
                50% market share, reach out to more customers with our iOS
                Application services. Whether you want to build a brand or you
                want to create omnichannel experiences for your customers on
                various iOS devices, with our award-winning designs on iOS, we
                got you covered. We specialize in all kinds of iOS Apps like
                iPhone App, iPad App. We help businesses visualize and bring to
                life their ideas, from Conceptualization to successful
                deployment to the App Store.This separates us from other mobile
                app development companies. Our iOS developers are skilled and
                experienced to bring your ideas to life
              </span>
              <div className="solution-left_buttonContainer">
                <Link>Know more </Link>
                <FaArrowRightLong />
              </div>
            </div>
            <div className="solution-main-content-right">
              <img src={ios} alt="" />
            </div>
          </div>
          <div
            className="solution-main-content content2"
            style={{ background: "#FEF6D6" }}
          >
            <div className="solution-main-content-right">
              <img src={android} alt="" />
            </div>
            <div className="solution-main-content-left ">
              <span className="solution-left-content-text2">
                Android Application
              </span>
              <span className="solution-left-content-text3">
                Explore our suite of Android app development and discover how
                your business can benefit from our proven expertise on Android
                platform. Android is the world's most popular smartphone OS and
                runs on a wide variety of mobile devices. As one of the premier
                mobile app development companies in the world, we help build the
                most customer-oriented solution for your business with our
                custom Android Application development for the US market all
                encompassed in pixel-perfect user experience. If you have an app
                idea, we can help you build it{" "}
              </span>
              <div className="solution-left_buttonContainer">
                <Link>Know more </Link>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
          <div
            className="solution-main-content content2"
            style={{ background: "#E3F5EE" }}
          >
            <div className="solution-main-content-left ">
              <span className="solution-left-content-text2">
                Cross-Platform/Hybrid
              </span>
              <span className="solution-left-content-text3">
                Cross-platform and Hybrid apps can help your business to deliver
                faster updates to customers and reduce business costs as a
                result. Discover our cross-platform mobile app development
                services with React Native, Flutter, and many other
                cross-platform solutions for your business. Unlike native apps,
                with Cross-platform applications and Hybrid apps, you can use a
                single code base to reach out to customers using different
                devices to expand your customer base. <br />
                <br />
                The choice between a cross-platform/hybrid app and a native app
                depends on your specific needs. If your app's core functionality
                is straightforward and a consistent user experience across
                platforms is less critical, a cross-platform or hybrid approach
                might be ideal. On the other hand, if maximizing performance and
                delivering a platform-specific user experience are top
                priorities, native app development might be the better option.
              </span>
              <div className="solution-left_buttonContainer">
                <Link>Know more </Link>
                <FaArrowRightLong />
              </div>
            </div>
            <div className="solution-main-content-right">
              <img src={hybrid} alt="" />
            </div>
          </div>
          <div
            className="solution-main-content content2"
            style={{ background: "#F6FDD6" }}
          >
            <div className="solution-main-content-right">
              <img src={enterPrise} alt="" />
            </div>
            <div className="solution-main-content-left ">
              <span className="solution-left-content-text2">
                Enterprise Mobile Apps
              </span>
              <span className="solution-left-content-text3">
                Make your business totally mobile with our Enterprise mobile
                applications. Wherever your employees and customers are, provide
                safe and secure access to your enterprise data and services. Our
                enterprise mobile application services on major platforms help
                an enterprise to streamline their process. With real-time and
                on-time data available, your business will benefit from timely
                decisions with our native apps and/or hybrid apps for your
                enterprise <br />
                <br />
                In conclusion, investing in enterprise mobile applications is a
                strategic move for businesses of all sizes. Our expertise in
                developing secure, high-performing native and hybrid apps can
                equip your organization with the tools it needs to thrive in
                today's mobile-first world.
              </span>
              <div className="solution-left_buttonContainer">
                <Link>Know more </Link>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
