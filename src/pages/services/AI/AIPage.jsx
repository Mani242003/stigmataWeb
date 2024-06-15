import React from 'react'
import "./AIPage.scss"
import Navigation from "../../../component/Navigation/Navigation";
import Footer from "../../../component/footer/Footer";
import ContactForm from "../../../component/ContactForm/ContactForm";
import HoverCard from "../../../component/CustomHoverCard/HoverCard";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import AccordionSection from '../../../component/DroneTech/AccordionSection';

const AIPage = () => {
  return (
    <section className="AI_wrapper">
        <Navigation />
        <div className="AI_container">
        <div className="AIMainHeader">
          <span className="AIPageHeaderText1">
          DevOps Service Rapid and<br/>  Reliable App Delivery
          </span>
          

          <span className="AIPageHeaderText2">
          Experience the Future of Agile Operations with Cloud DevOps Services! Embrace innovation and efficiency as Cyfuture Cloud integrates cutting-edge technology into your development and operations workflows.
          </span>
          <div className="AIPageButtonContainer">
          <Link   href="">HIRE OUR AI ENGINEERS! </Link>
          <FaArrowRightLong />
          </div>
        </div>
        <HoverCard />
        <AccordionSection />

        </div>
        <ContactForm />
        <Footer />
    
      </section>
  )
}

export default AIPage