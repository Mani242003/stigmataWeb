import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/logo.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import ytLogo from "../../assets/images/icons/youtube.png";
import fbLogo from "../../assets/images/icons/facebook.png";
import instaLog from "../../assets/images/icons/instagram.png";
import xLogo from "../../assets/images/icons/twitter-x.png";
import linkInLogo from "../../assets/images/icons/linkedin.png";

const Footer = () => {
  return (
    <section className="footer_wrapper">
      <div className="footer_container">
        <div className="footerSection1">
          <span className="F_section1Titel">Ready to do your best work?</span>
          <span className="F_section1SubTitel">Let's get you started.</span>
          <div className="F_section1ButtonContainer">
            <Link>SIGN UP NOW</Link>
            <MdKeyboardArrowRight />
          </div>
        </div>
        <div className="footerSection2">
          <div className="F_subSection2.1 F_subSection2">
            <span className="F_subSection2Titel">Our Services</span>
            <Link>Serverless Computing</Link>
            <Link>Dev Ops</Link>
            <Link>Mobile App Development</Link>
            <Link>Plugin Development</Link>
            <Link>Software Application Development</Link>
            <Link>Cloud Migration</Link>

          </div>
          <div className="F_subSection2.2 F_subSection2">
            <span className="F_subSection2Titel">Our Product</span>
            <Link>ClouSec</Link>
            <Link>Happiedinner</Link>
            <Link>PII Protector</Link>
           
          </div>
          <div className="F_subSection2.3 F_subSection2">
            <span className="F_subSection2Titel">Comapany</span>
            <Link>Home</Link>
            <Link>About Us</Link>
            <Link>Services</Link>
            <Link>Blog</Link>
            <Link>Contact US</Link>
          </div>
          <div className="F_subSection2.4 F_subSection2">
            <span className="F_subSection2Titel">Help</span>
            <Link>Privacy Policy</Link>
            <Link>Support</Link>
            <Link>Managing security Vulnerabilities</Link>
            <Link>Terms & Conditions</Link>
          </div>
          <div className="F_subSection2_5 F_subSection2">
            <span className="F_subSection2Titel">Contact Sales</span>
            <span className="F_subSection2SubTitel">Phone</span>
           
            <Link>1800 103 1123</Link>
            <Link>1800 572 3535</Link>
            <span className="F_subSection2SubTitel">Email</span>
           
           <Link>jerome@stigmata.co.in</Link>
           <div className="F_subSection2DottedBorder"></div>
           <div className="F_subSection2ButtonConatiner">
            <Link>Support</Link>
            <MdKeyboardArrowRight />
          </div>
          <div className="F_subSection2ButtonConatiner">
            <Link>Talk to Concierge</Link>
            <MdKeyboardArrowRight />
          </div>
           

          </div>
        </div>
        <div className="footerSection3">
          <div className="F_section3SocialMediaContainer">
            <Link>
              <img src={xLogo} alt="" />
            </Link>
            <Link>
              <img src={fbLogo} alt="" />
            </Link>
            <Link>
              <img src={instaLog} alt="" />
            </Link>
            <Link>
              <img src={linkInLogo} alt="" />
            </Link>
            <Link>
              <img src={ytLogo} alt="" />
            </Link>
          </div>
          <div className="F_section3Quillinks">
            <Link>Text here</Link>
            <div className="section3TextDivider"></div>
            <Link>Text here</Link>
            <div className="section3TextDivider"></div>

            <Link>Text here</Link>
            <div className="section3TextDivider"></div>

            <Link>Text here</Link>
            <div className="section3TextDivider"></div>

            <Link>Text here</Link>
            <div className="section3TextDivider"></div>

            <Link>Text here</Link>
            <div className="section3TextDivider"></div>

            <Link>Text here</Link>

          
          </div>
          <div className="F_section3Quillinks">
            <Link>Text here</Link>
            <div className="section3TextDivider"></div>
            <Link>Text here</Link>
            <div className="section3TextDivider"></div>

            <Link>Text here</Link>


          
          </div>
        </div>

        <div className="footerSection4">
          <img src={logo} alt="" />
          <span className="f_Section4CopyRightsText">© 2024, Stigmata Techno Solution. Ltd. All Rights Reserved.</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
