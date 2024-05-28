import React, { useState } from "react";
import "./AccordionSection.scss";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import client2 from "../../Images/features/client2main.png";
// import faqsmall from "../../assets/images/faqSmall.jpg";
import faqBig from "../../assets/images/Vectorqa.png";

import { TbLicense } from "react-icons/tb";
import {MdOutlineContactSupport} from "react-icons/md"
import {BsHeadset} from "react-icons/bs"
import {BiImages} from "react-icons/bi"

const AccordionSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false); 
  };
  return (
    <section className="accordion_wrapper" id="Q&A">
      <div className="accordion_container">
        <div className="accordionBg1"></div>
        <div className="accordionBg2"></div>
        <div className="accordionBg3"></div>
        <div  className="accordion_left_img1"> 
        <img src={faqBig} alt="" /></div>

          
        
      <div className="accordion_left">
          <div className="accordion_left_imgs" data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2500">
           
             
          </div>
        </div>
        <div className="accordion_right" >
        <div className="accordionRightHeader">
        <span className="accordion_left_text1">
          TALK ABOUT SOMETHING
          </span>
          <span className="accordion_left_text2">
          HOW CAN WE HELP YOU?
          </span>
        </div>

          {/* <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{marginBottom:'20px'}}
            // data-aos="fade-down"
            //   data-aos-easing="ease-out-cubic"
            //   data-aos-duration="1000"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <span className="accordion_icon">
                <TbLicense style={{ marginRight: "2rem" }} />
              </span>
              <span className="accordion_title">
              How do I reset my password?
              </span>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              To reset your password, simply go to the login page and click on the "Forgot Password" link. Follow the instructions provided, and you will receive an email with a link to reset your password. Make sure to choose a strong and secure password to enhance the security of your account.
              </Typography>
            </AccordionDetails>
          </Accordion> */}
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{marginBottom:'15px'}}
            // data-aos="fade-down"
            // data-aos-easing="ease-out-cubic"
            // data-aos-duration="1500"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel1bh-header"
            >
              <span className="accordion_icon">
                <MdOutlineContactSupport  style={{ marginRight: "2rem" }} />
              </span>
              <span className="accordion_title">
              What payment methods do you accept?
              </span>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Easy and hassle-free payments! Pay directly at the restaurant, and once your payment is successful, your order is marked as completed for a seamless dining experience.              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{marginBottom:'20px'}}
            // data-aos="fade-down"
            // data-aos-easing="ease-out-cubic"
            // data-aos-duration="2000"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel1bh-header"
            >
              <span className="accordion_icon">
                <BiImages style={{ marginRight: "2rem" }} />
              </span>
              <span className="accordion_title">
              How can I track my order?
              </span>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Seamless order tracking at your fingertips! From preparation to serving, receive real-time updates on our order details page, including a comprehensive view of the entire bill for your convenience.              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            sx={{marginBottom:'20px'}}
            // data-aos="fade-down"
            // data-aos-easing="ease-out-cubic"
            // data-aos-duration="2000"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel1bh-header"
            >
              <span className="accordion_icon">
                <BsHeadset style={{ marginRight: "2rem" }} />
              </span>
              <span className="accordion_title">
              Is customer support available 24/7?
              </span>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Yes, our customer support team is available 24/7 to assist you. Whether you have questions about our products, need help with an order, or encounter any issues, you can reach out to our dedicated support team through live chat on our website or by email at jerome@stigmata.co.in. We are committed to providing timely and helpful assistance to ensure a positive customer experience.
              </Typography>
            </AccordionDetails>
          </Accordion>
        
        </div>
      
      </div>
    </section>
  );
};

export default AccordionSection;
