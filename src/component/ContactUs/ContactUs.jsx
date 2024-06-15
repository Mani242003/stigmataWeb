import React from "react";
import "./ContactUs.scss";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import ReactPlayer from "react-player/youtube";
const ContactUs = () => {
    const playerStyle = {
      // border: '15px solid #000',  
        borderRadius: '10px',      // Example: Rounded corners
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Example: Add a shadow
        overflow: 'hidden'         // Ensure content stays within the rounded corners
      };
  return (
    <section className="contactUsWrapper">
      <div className="contactUsContainer">
        <div className="contactUsLeftContainer">
        
              <ReactPlayer
                //   // width='200%'
                //   height="250px"
                width="560px"
                height="360px"
                url="https://youtu.be/yJSWMYG8j-A"
                //  playing={true} // Enable autoplay
                muted={true}
                style={playerStyle}
              />
        </div>
        <div className="contactUsRightContainer">
          <span className="contactUsRightSmallText">
          Reach Out Us
          </span>
          <span className="contactUsRightBigText">
          We are excited to connect with you !
          </span>
          <span className="contactUsRightDes">
          Have questions or need assistance? Our team is here to help! Contact us to learn more about our services and how we can support your needs.
          </span>
          <div className="contactUsRightCallContainer">
            <div className="contactUsLeftIconConatiner">
              <FiPhoneCall />
            </div>
            <div className="contactUsRightTextConatiner">
              <span className="contactUsText1">
                24 HOURS SERVICE AVAILABLE{" "}
              </span>
              <span className="contactUsText2">Call Us: +(666) 888 0000</span>
            </div>
           
          </div>
          <div className="contactUsButtonContainer">
              <Link>ABOUT US</Link>
              <FaAngleRight />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
