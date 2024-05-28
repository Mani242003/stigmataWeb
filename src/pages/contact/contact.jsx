import React from "react";
import "./contact.scss";
import Navigation from "../../component/Navigation/Navigation";
import Footer from "../../component/footer/Footer";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
const contact = () => {
  return (
    <section className="contactPage_wrapper">
      <Navigation homeMarque="false"/>

      <div className="contactPage_container">
        <div className="contactPageMainHeader">
          <span className="contactPageHeaderText1">
            We appreciate your interest in Stigmata !
          </span>
          <span className="contactPageHeaderText2">
            Let's have a discussion!!
          </span>
          <div className="contactPageMainSocialContainer">
            <FiPhoneCall />
            <IoMailOutline />
            <TiMessages />
          </div>
        </div>
        <div className="contactPageForm">
          <div className="contactPageFormLeft">
            <span className="contactPageFormLeftText1">
              We’ve helped DHL, Henkel, Kaiser and Republic Services
            </span>
            <span className="contactPageFormLeftText2">  in their digital transformation journey that align with their
            business objectives.</span>
          </div>
          <div className="contactPageFormRight">
            form
          
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default contact;
