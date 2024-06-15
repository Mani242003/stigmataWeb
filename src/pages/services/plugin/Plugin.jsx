import React from "react";
import "./Plugin.scss";
import Navigation from "../../../component/Navigation/Navigation";
import Footer from "../../../component/footer/Footer";
import ContactForm from "../../../component/ContactForm/ContactForm";
import HoverCard from "../../../component/CustomHoverCard/HoverCard";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import PluginSample from "../../../component/PluginSample/PluginSample";
import Count from "../../../component/Count/Count";
import CustomerSlide from "../../../component/customerSlide/CustomerSlide";
import TechBrains from "../../../component/TechBrain/TechBrains";
import { devOpsFaq } from "../../../constant";
import AccordionSection from "../../../component/Accordion/AccordionSection";
import { FaChevronRight } from "react-icons/fa";
const Plugin = () => {
  return (
    <section className="pluginWrapper">
      <Navigation />
      <div className="pluginContainer">
        <div className="pluginMainHeader">
          <span className="pluginHeaderText1">
            DevOps Service Rapid and
            <br /> Reliable App Delivery
          </span>

          <span className="pluginHeaderText2">
            Experience the Future of Agile Operations with Cloud DevOps
            Services! Embrace innovation and efficiency as Cyfuture Cloud
            integrates cutting-edge technology into your development and
            operations workflows.
          </span>
          <div className="pluginButtonContainer">
            <Link href="">HIRE OUR PLUGIN ENGINEERS! </Link>
            <FaChevronRight />
          </div>
        </div>
        <HoverCard />
        <div className="PluginPageSample">
          <div className="PluginPageSampleheader">
            <span>Our Sample Work</span>
            <div className="PluginPageSampleDivider"></div>
          </div>
          

          <PluginSample />
        </div>
        <TechBrains />
        <CustomerSlide />
        <div className="pluginPageFqa">
        <span className="mobilePageFqaHeaderText">
          Cloud DevOps Service FAQs
        </span>
        <AccordionSection  array={devOpsFaq}/>
        
      </div>

        
      </div>
      <ContactForm />
      <Footer />
    </section>
  );
};

export default Plugin;
