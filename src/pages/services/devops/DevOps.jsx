import React from "react";
import "./DevOps.scss";
import Navigation from "../../../component/Navigation/Navigation";
import Footer from "../../../component/footer/Footer";
import ContactForm from "../../../component/ContactForm/ContactForm";
import HoverCard from "../../../component/CustomHoverCard/HoverCard";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import ReactPlayer from "react-player/youtube";
import KeyCharacter from "../../../component/KeyCharacter/KeyCharacter";
import TechBrains from "../../../component/TechBrain/TechBrains";
import Problem from "../../../component/DevChallenges/Problem";
import CommonAccordian from "../../../component/commonAccordian/CommonAccordian";
import { devOpsFaq } from "../../../constant";
import AccordionSection from "../../../component/Accordion/AccordionSection";
import devopsLogo from "../../../assets/images/devopsLogo.png"
import Count from "../../../component/Count/Count"
import { FaChevronRight } from "react-icons/fa";
const DevOps = () => {
  return (
    <section className="DevOps_wrapper">
      <Navigation />
      <div className="DevOps_container">
        <div className="DevOpsMainHeader">
          <span className="DevOpsPageHeaderText1">
            DevOps Service Rapid and
            <br /> Reliable App Delivery
          </span>

          <span className="DevOpsPageHeaderText2">
            Experience the Future of Agile Operations with Cloud DevOps
            Services! Embrace innovation and efficiency as Cyfuture Cloud
            integrates cutting-edge technology into your development and
            operations workflows.
          </span>
          <div className="DevOpsPageButtonContainer">
            <Link href="">Talk to Experts </Link>
            <FaChevronRight />
          </div>
        </div>
        <HoverCard />
        <div className="devopsOverviewContainer">
          <div className="devopsOverviewSection1">
            <div className="devopsOverviewSection1LeftContainer">
              <img src={devopsLogo} alt="" width={600} />
              {/* <ReactPlayer
                //   // width='200%'
                //   height="250px"
                width="560px"
                height="360px"
                url="https://www.youtube.com/watch?v=bY1OCCrNhXM"
                //  playing={true} // Enable autoplay
                // muted={true}
                // style={playerStyle}
              /> */}
            </div>
            <div className="devopsOverviewSection1RightContainer">
              <span className="devopsOverviewSection1BigText">
                Transform Your DevOps Strategy with Stigmata Cloud
              </span>
              <span className="devopsOverviewSection1Des">
                Are you ready to supercharge your DevOps journey with the power
                of the cloud? Look no further than Cyfuture Cloud, your trusted
                DevOps service provider in unlocking the full potential of your
                applications and infrastructure. With Cyfuture Cloud's
                cutting-edge technologies, robust security measures, and
                unparalleled scalability, you can seamlessly integrate your
                DevOps practices into a cloud-native environment. Experience
                unmatched agility, efficiency, and cost savings as you
                streamline your development processes, automate deployments, and
                leverage advanced monitoring and management tools. Take your
                DevOps game to new heights and explore the possibilities of
                Cyfuture Cloud today!
              </span>
            </div>
          </div>
          <div className="devopsOverviewSection2">
            <span className="devopsOverviewSection2Titel">What is DevOps?</span>
            <span className="devopsOverviewSection2Des">
              DevOps is a collection of development practices that integrates
              software development (Dev) and IT operations (Ops) while
              incorporating automation. Its primary objective is to break down
              barriers between Dev and Ops teams in order to expedite the
              process of building, testing, and releasing high-quality software.
              The implementation of a cloud DevOps services pipeline involves
              continuous integration and continuous delivery (CI/CD), enabling
              the swift delivery of new software features and facilitating
              business growth.
              <br />
              <br /> To succeed in DevOps, it is essential to foster a culture
              that promotes efficient application development and accelerated
              release of new applications and software features. The
              collaborative relationship between Dev and Ops spans across all
              stages of the DevOps lifecycle, encompassing initial software
              planning, build and test processes, provisioning and
              configuration, deployment, as well as ongoing management.
            </span>
          </div>
          <div className="devopsOverviewSection3">
            <span className="devopsOverviewSection3Titel">
              History of DevOps
            </span>
            <span className="devopsOverviewSection3Des">
              In the traditional enterprise setup, separate software development
              (Dev) and IT operations (Ops) teams have typically operated
              independently. This segregation often leads to disconnects,
              resulting in complex, manual, slow, and error-prone processes.
              Challenges arise during software development, testing, and
              deployment, causing friction and mistrust between the teams. The
              introduction of continuous delivery (CD) further intensifies this
              friction, as developers are incentivized to deliver features
              quickly, which contradicts the IT operations' objective of
              maintaining stability. To preserve stability in such an
              environment, IT ops resorts to limiting changes, which is less
              than ideal in today's fast-paced digital landscape.
              <br />
              <br /> Cloud DevOps services emerged from the lean thinking and
              agile development movement. Agile practices prioritize
              self-organization and continuous adaptation of working methods.
              With time, agility expanded to encompass efficiency and quality in
              operations. DevOps builds upon this foundation by bridging the gap
              between traditional product development and IT operations. It
              achieves this through fostering empathy, promoting effective
              communication, and embracing joint responsibility for the
              successful delivery of applications and services.
            </span>
          </div>
          <KeyCharacter />
        </div>
      </div>
      <Problem />
      <Count />

      <TechBrains />
      <div className="devopsPageFqa">
        <span className="devopsPageFqaHeaderText">
          Cloud DevOps Service FAQs
        </span>
      
       {/* {
          devOpsFaq.map((item)=><CommonAccordian key={item.id} data ={item} />)

          
        } */}
        <AccordionSection array={devOpsFaq}/>
       
      </div>
      <ContactForm />
      <Footer />
    </section>
  );
};

export default DevOps;
