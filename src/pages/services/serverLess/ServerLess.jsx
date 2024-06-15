import React from "react";
import "./serverLess.scss";
import Navigation from "../../../component/Navigation/Navigation";
import Footer from "../../../component/footer/Footer";
import ContactForm from "../../../component/ContactForm/ContactForm";
import HoverCard from "../../../component/CustomHoverCard/HoverCard";
import { Link } from "react-router-dom";

import blueDot from "../../../assets/images/icons/blueBullet.png";
import orangeDot from "../../../assets/images/icons/orangeBullet.png";
import acc1 from "../../../assets/acc1.png";
import acc2 from "../../../assets/acc2.png";
import { FaChevronRight } from "react-icons/fa";
import { BsFillRecord2Fill } from "react-icons/bs";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { devOpsFaq } from "../../../constant";
import TechBrains from "../../../component/TechBrain/TechBrains";
import Count from "../../../component/Count/Count";
import AccordionSection from "../../../component/Accordion/AccordionSection";

const ServerLess = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const getImage = () => {
    // if (expanded) {
    switch (expanded) {
      case "panel1":
        return <img src={acc2} alt="" />;
      case "panel2":
        return <img src={acc1} alt="" />;
      case "panel3":
        return <img src={acc2} alt="" />;

      default:
        return <img src={acc1} alt="" />;
    }

    // return ;
    // }
  };
  return (
    <section className="serverLessWrapper">
      <Navigation />
      <div className="serverLessContainer">
      <div className="serverLessMainHeader">
          <span className="serverLessHeaderText1">
          DevOps Service Rapid and<br/>  Reliable App Delivery
          </span>
          

          <span className="serverLessHeaderText2">
          Experience the Future of Agile Operations with Cloud DevOps Services! Embrace innovation and efficiency as Cyfuture Cloud integrates cutting-edge technology into your development and operations workflows.
          </span>
          <div className="serverLessButtonContainer">
          <Link   href="">Talk to Experts </Link>
          <FaChevronRight />
          </div>
        </div>
        <div className="serverLessMainHeaderSection">
          <div className="cloudMigrateMainSection1">
            <div className="cloudMigrateMainSection1Left">
              <span className="cloudMigrateSection1LeftTitel">
                Maximize the Value of Cloud with Expert Cloud Services
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
          <div className="cloudMigrateMainSection2">
            <div className="cloudMigrateSection2Header">
              <span>
                Tackling your Toughest Challenges with Stigmata Techno
                Solution's
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
                Stigmata Techno Solution's utilize cloud hyperscalers to create
                collaborative, interactive, and transparent business
                architecture ready to tackle technology challenges.
              </span>
              <div className="cloudMigrateSection2BottomButton">
                <Link href="">Discuss With Our Experts</Link>
                <FaChevronRight />
              </div>
            </div>
          </div>
          <div className="cloudMigrateMainSection3">
            <div className="cloudMigrateMainSection3Top">
              <span className="cloudMigrateMainSection3Titel">What We Do</span>
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
                            Cloud Transformation
                          </h1>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
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
                            Cloud Infrastructure
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
                            Cloud AWS and Azure services
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
                    <div
                      style={{
                        width: "100%",
                        height: "20px",
                        marginLeft: "33px",
                        borderLeft: "1px dashed rgba(0,0,0,0.9)",
                        display: expanded === "panel3" ? "none" : "flex",
                      }}
                    ></div>
                  </div>
                  <div>
                    <Accordion
                      expanded={expanded === "panel4"}
                      onChange={handleChange("panel4")}
                      sx={{
                        backgroundColor: "transparent",
                        border: "none",
                        boxShadow: "none",
                      }}
                    >
                      <AccordionSummary
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <div
                          style={{
                            border:
                              expanded === "panel4" ? "none" : "1px solid gray",
                            width: "2.5rem",
                            height: "2.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "5px",
                            padding: "1rem",
                            fontSize: "17px",
                            background:
                              expanded === "panel4" ? "#1A74E9" : "transparent",
                            color: expanded === "panel4" ? "white" : "black",
                          }}
                        >
                          <span>04</span>
                        </div>
                        <div>
                          <h1
                            style={{
                              marginLeft: "32px",
                              color:
                                expanded === "panel4"
                                  ? "#1A74E9"
                                  : "rgba(0,0,0,0.7)",
                              fontWeight: "800",
                            }}
                          >
                            Cloud Migration
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
          <Count />
          
          <div className="cloudMigrateeFqa">
        <span className="cloudMigrateFqaHeaderText">
          Serverless computing Service FAQs
        </span>
      
       {/* {
          devOpsFaq.map((item)=><CommonAccordian key={item.id} data ={item} />)

          
        } */}
        <AccordionSection array={devOpsFaq}/>
        
        
       
      </div>

     
          
        </div>
      </div>
      <ContactForm />
      <Footer />
    </section>
  );
};

export default ServerLess;
