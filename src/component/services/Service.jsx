import React from "react";
import "./Services.scss";
import ServicesCustomCard from "./ServicesCustomCard/ServicesCustomCard";
import cloud from "../../assets/images/services/migration.png";
import mobile from "../../assets/images/services/setting-mobile.png";
import software from "../../assets/images/services/monitor-setting.png";
import plugin from "../../assets/images/services/website-plug-in (1).png";
import severless from "../../assets/images/services/server.png";
import deops from "../../assets/images/services/development.png";

const Service = () => {
  return (
    <div>
      <section className="serviceWrapper">
        <div className="servicesContainer">
          <div className="ServicesHeaderContainer" data-aos="fade-up">
            <span className="seviceTitleSmall"> A GLOBAL LEADER IN</span>

            <span className="seviceTitle">Hyperautomation Services</span>
            <div className="services-seperateLine"></div>

            <span className="seviceDec">
              {" "}
              Stigmata empowers enterprises with the power of Hyperautomation
              services through its ‘Empathy First, Technology Next’ approach.
              Our people have been accelerating enterprise growth by delivering
              100% success and customer value since 2011.
            </span>
            {/* Delivering integrated value through assets, services, and partnership models */}
          </div>
          <div className="servicesRow-1 servicesContentConatiner">
            <ServicesCustomCard
              name="Serverless Computing"
              des1="We specialize in serverless computing, enabling you to build app functionality without the hassle of infrastructure management. Let the cloud provider handle setup, capacity planning, and server management. We architect serverless applications to be highly scalable and event-driven, utilizing resources only when a specific function or trigger occurs."
            
              img={severless}
            />
            <ServicesCustomCard
              name="DevOps"
              des1="At Stigmata Techno Solutions, we offer agile DevOps services that intelligently automate your entire development and operations process. Our approach ensures the creation of high-quality, secure code by providing agile development, continuous integration, continuous security, continuous testing, and continuous delivery."
             
              img={deops}
            />
                <ServicesCustomCard
              name="Artificial Intelligence"
              des1="At Stigmata Techno Solutions, we harness cutting-edge artificial intelligence technologies to drive innovation and efficiency. Our AI solutions are designed to optimize processes, enhance decision-making, and deliver personalized customer experiences. Whether you need machine learning models, natural language processing, or predictive analytics, we have the expertise to help you unlock AI's full potential."
            
              img={software}
            />{" "}
          </div>
          <div className="servicesRow-2 servicesContentConatiner">
            <ServicesCustomCard
              name="Cloud Migration"
              des1="Thinking about moving your workloads to the cloud, whether it's your applications, database, or server? Unsure where to start? Stigmata Techno Solutions is here to assist your organization in migrating servers, databases, applications, and emails to cloud, dedicated, and virtual environments, with a strong focus on security."
              
              img={cloud}
            />
            <ServicesCustomCard
              name="Web Portals & Mobile App Development"
              des1="Our team excels in developing robust and scalable web portals tailored to your enterprise's unique needs. By combining innovative technology with user-centric design, we deliver portals that enhance collaboration, streamline workflows, and improve overall efficiency."
             
              img={mobile}
            />
            
            <ServicesCustomCard
              name="Plugin Development"
              des1="We develop customized plugins for business applications, utilizing innovative approaches throughout our development lifecycle. With extensive experience in creating plugins for Atlassian products (Confluence, JIRA, BitBucket, DevOps, SonarQube, Jenkins), we ensure governance and compliance are maintained."
             
              img={plugin}
            />
          </div>
        
        </div>
      </section>
    </div>
  );
};

export default Service;
