import React from "react";
import "./SoftwarePage.scss";
import Navigation from "../../../component/Navigation/Navigation";
import ContactForm from "../../../component/ContactForm/ContactForm";
import Footer from "../../../component/footer/Footer";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import s_vendor1 from "../../../assets/sAmazonVendor.png";
import s_vendor2 from "../../../assets/s_vendor2.png";
import s_vendor3 from "../../../assets/images/trustCustomer/LandT1.jpg";
import s_vendor4 from "../../../assets/images/trustCustomer/landT2.jpg";
// import blueDot from "../../../assets/images/icons/blueBullet.png";
// import orangeDot from "../../../assets/images/icons/orangeBullet.png";
import { FaChevronRight } from "react-icons/fa";
import { BsFillRecord2Fill } from "react-icons/bs";
import acc1 from "../../../assets/acc1.png";
import acc2 from "../../../assets/acc2.png";
import eCommerWeb1 from "../../../assets/images/eCommersBg.png";
import javaWeb from "../../../assets/images/javaWeb.png"
import phpWeb from "../../../assets/images/ph3F.png"


import webClients from "../../../assets/images/webClients.png";


import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Solution from "../../../component/softwareSample/Solution";
const SoftwarePage = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const getImage = () => {
    // if (expanded) {
    switch (expanded) {
      case "panel1":
        return <img src={eCommerWeb1} alt="" />;
      case "panel2":
        return <img src={javaWeb} alt="" />;
      case "panel3":
        return <img src={phpWeb} alt="" />;

      default:
        return <img src={webClients} alt="" width={400} />;
    }

    // return ;
    // }
  };
  return (
    <section className="softwarePageWrapper">
      <Navigation />
      <div className="softwarePageContainer">
        <div className="softwarePageMainHeader">
          <span className="softwarePageHeaderText1">
            DevOps Service Rapid and
            <br /> Reliable App Delivery
          </span>

          <span className="softwarePageText2">
            Experience the Future of Agile Operations with Cloud DevOps
            Services! Embrace innovation and efficiency as Cyfuture Cloud
            integrates cutting-edge technology into your development and
            operations workflows.
          </span>
          <div className="softwarePageButtonContainer">
            <Link href="">HIRE OUR AI ENGINEERS! </Link>
            <FaArrowRightLong />
          </div>
        </div>
        <div className="s_VendorContainer">
          <span>Software Development Vendor of</span>
          <div className="s_vendorDivider"></div>
          <div className="s_VendorImgContainer">
            <img src={s_vendor4} alt="" />

            <img src={s_vendor1} alt="" />
            <img src={s_vendor3} alt="" />

            <img src={s_vendor2} alt="" />
          </div>
        </div>
        <div className="softwarePageMainSection">
          <div className="cloudMigrateMainSection1">
            <div className="cloudMigrateMainSection1Left">
              <span className="cloudMigrateSection1LeftTitel">
                Maximize the Value of Software with Expert Services
              </span>
              <div className="cloudMigrateSection1LeftBottomContainer">
                <BsFillRecord2Fill color="#5E6FEC" size={26} />

                <span className="feaPage-col-1-text-4">
                  Boost efficiency by 60%
                </span>
              </div>
              <div className="cloudMigrateSection1LeftBottomContainer">
                <BsFillRecord2Fill color="#5E6FEC" size={26} />

                <span className="feaPage-col-1-text-4">
                  Automate tasks by 40%
                </span>
              </div>

              <div className="cloudMigrateSection1LeftBottomContainer">
                <BsFillRecord2Fill color="#5E6FEC" size={26} />

                <span className="feaPage-col-1-text-4">
                  10x faster time to market
                </span>
              </div>
            </div>
            <div className="cloudMigrateMainSection1Right">
              <span>
                Transform your enterprise’s operational dynamics, eliminate
                latency, and improve infrastructure efficiency, with Integra’s
                cloud migration consulting services, designed to enhance
                performance while reducing total cost of ownership (TCO).
                <br />
                <br />
                Our cloud architecture services are tailored to ensure security,
                scalability, and continuity, integrating seamlessly with
                top-tier platforms like cloud AWS services and Azure services.
                By leveraging cloud deployment solutions that focus on
                infrastructure efficiency and innovative pricing models like
                pay-per-use, Integra enhances cloud ROI and delivers consistent,
                on-demand user experiences.
              </span>
            </div>
          </div>
        
          <div className="cloudMigrateMainSection3">
            <div className="cloudMigrateMainSection3Top">
            <div className="solution-header">
          <span className="solution-header-text">
            <span> Our Sample Work in</span>
            <br />
            Web Application Development
          </span>
          <div className="solution-headerDivider"></div>
        </div>
              <span className="cloudMigrateMainSection3Des">
                Stigmata offers a comprehensive suite of business-focused cloud
                transformation services, spanning across private, public,
                hybrid, and multi-cloud environments. Our team specializes in
                cloud consulting services, assessing legacy architectures and
                crafting strategic roadmaps for transformation. With expertise
                in cloud application development, we facilitate seamless
                migrations to advanced cloud environments, incorporating cloud
                AWS services and Azure services for robust, scalable solutions.
                As a cloud solutions provider, we provide 24/7 managed support
                to help businesses accelerate technology adoption. Our
                innovative use of cloud AI/ML technologies and custom cloud
                products further enhances operational efficiency and agility on
                the cloud.
              </span>
            </div>

            <div className="cloudMigrateMainSection3Bottom">
              <div className="cloudMigrateMainSection3BottomLeft">
                <>
                  <div>
                    <Accordion
                      expanded={expanded === "panel1"}
                      onChange={handleChange("panel1")}
                      sx={{
                        backgroundColor: "transparent",
                        border: "none",
                        boxShadow: "none",
                      }}
                    >
                      <AccordionSummary
                         expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <div
                          style={{
                            border:
                              expanded === "panel1" ? "none" : "1px solid gray",
                            width: "2.5rem",
                            height: "2.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "5px",
                            padding: "1rem",
                            fontSize: "17px",
                            background:
                              expanded === "panel1" ? "#1A74E9" : "transparent",
                            color: expanded === "panel1" ? "white" : "black",
                          }}
                        >
                          <span>01</span>
                        </div>
                        <div>
                          <h1
                            style={{
                              marginLeft: "30px",
                              color:
                                expanded === "panel1"
                                  ? "#1A74E9"
                                  : "rgba(0,0,0,0.7)",
                              fontWeight: "800",
                            }}
                          >
                            E-COMMERCE Development
                          </h1>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails >
                        <div style={{ marginLeft: "70px" }}>
                          <span style={{ color: "rgba(0,0,0,0.8)" }}>
                            Leverage our cloud transformation solutions to
                            advance towards robust, end-to-end, multi-tier cloud
                            platforms
                          </span>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <div
                      style={{
                        width: "100%",
                        height: "20px",
                        marginLeft: "33px",
                        borderLeft: "1px dashed rgba(0,0,0,0.9)",
                        display: expanded === "panel1" ? "none" : "flex",
                      }}
                    ></div>
                  </div>
                  <div>
                    <Accordion
                      expanded={expanded === "panel2"}
                      onChange={handleChange("panel2")}
                      sx={{
                        backgroundColor: "transparent",
                        border: "none",
                        boxShadow: "none",
                      }}
                    >
                      <AccordionSummary
                       expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        style={{ paddingTop: "0", paddingBottom: "0" }}
                      >
                        <div
                          style={{
                            border:
                              expanded === "panel2" ? "none" : "1px solid gray",
                            width: "2.5rem",
                            height: "2.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "5px",
                            padding: "1rem",
                            fontSize: "17px",
                            background:
                              expanded === "panel2" ? "#1A74E9" : "transparent",
                            color: expanded === "panel2" ? "white" : "black",
                          }}
                        >
                          <span>02</span>
                        </div>
                        <div>
                          <h1
                            style={{
                              marginLeft: "32px",
                              color:
                                expanded === "panel2"
                                  ? "#1A74E9"
                                  : "rgba(0,0,0,0.7)",
                              fontWeight: "800",
                            }}
                          >
                            Java Based Website Development

                          </h1>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div
                          style={{
                            marginLeft: "70px",
                            paddingTop: "0",
                            paddingBottom: "0",
                          }}
                        >
                          <span style={{ color: "rgba(0,0,0,0.8)" }}>
                            Our cloud infrastructure services, including SaaS,
                            PaaS, and microservices-based environments, create a
                            serverless architecture for data management and
                            operation optimization.
                          </span>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                    <div
                      style={{
                        width: "100%",
                        height: "20px",
                        marginLeft: "33px",
                        borderLeft: "1px dashed rgba(0,0,0,0.9)",
                        display: expanded === "panel2" ? "none" : "flex",
                      }}
                    ></div>
                  </div>
                  <div>
                    <Accordion
                      expanded={expanded === "panel3"}
                      onChange={handleChange("panel3")}
                      sx={{
                        backgroundColor: "transparent",
                        border: "none",
                        boxShadow: "none",
                      }}
                    >
                      <AccordionSummary
                       expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <div
                          style={{
                            border:
                              expanded === "panel3" ? "none" : "1px solid gray",
                            width: "2.5rem",
                            height: "2.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "5px",
                            padding: "1rem",
                            fontSize: "17px",
                            background:
                              expanded === "panel3" ? "#1A74E9" : "transparent",
                            color: expanded === "panel3" ? "white" : "black",
                          }}
                        >
                          <span>03</span>
                        </div>
                        <div>
                          <h1
                            style={{
                              marginLeft: "32px",
                              color:
                                expanded === "panel3"
                                  ? "#1A74E9"
                                  : "rgba(0,0,0,0.7)",
                              fontWeight: "800",
                            }}
                          >
                            PHP Based Website Development

                          </h1>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div style={{ marginLeft: "70px" }}>
                          <span style={{ color: "rgba(0,0,0,0.8)" }}>
                            Boost ROI and modernize operations with our cloud
                            migration services, transitioning from legacy
                            architecture to an efficient cloud setup leveraging
                            Cloud AWS and Azure services for a modernized cloud
                            experience.
                          </span>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                 
                  </div>
           
                </>
              </div>
              <div className="cloudMigrateMainSection3BottomRight">
                {getImage()}
              </div>
            </div>
            <div className="cloudMigrateSection3BottomButtonOutter">
              <div className="cloudMigrateSection3BottomButton">
                <Link href="">Talk to Experts</Link>
                <FaChevronRight />
              </div>
            </div>
          </div>
        </div>
        <Solution />
      </div>
      <ContactForm />
      <Footer />
    </section>
  );
};

export default SoftwarePage;
