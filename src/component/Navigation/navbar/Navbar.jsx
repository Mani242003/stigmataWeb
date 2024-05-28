import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { TfiWorld } from "react-icons/tfi";

import { FaBars, FaChevronDown, FaLocationDot } from "react-icons/fa6";
import { IoSearchOutline, IoTime } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import Marquee from "react-fast-marquee";
import { FaTimes } from "react-icons/fa";

import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import ServicesMenu from "../ServicesMenu/ServicesMenu";
import ProductMenu from "../ProductMenu/ProductMenu";
import ComapnyMenu from "../ComapanyMenu/ServicesMenu";
import Insights from "../Insights/ServicesMenu";

const Navbar = ({ toggleDrawer, toggleGalleryDrawer, routes,homeMarque }) => {
  const [marqueIsOpen, setmarqueIsOpen] = useState(true);
  return (
    <section className="nav_wrapper">
      <div className="nav_container">
       {
        homeMarque ==="true" ?(
          <>
           {marqueIsOpen ? (
          <div className="NavTopAnnouncement">
            <Marquee speed={60} gradient={false}>
              <span className="marqueeText">
                {" "}
                We provide innovative IT solutions for businesses of all sizes.
                Contact us today for expert consultancy, software development,
                and IT support services !!!
              </span>
            </Marquee>
            <div className="NAvTopCloseSvg">
              <FaTimes onClick={()=>{setmarqueIsOpen(false)}} />
            </div>
          </div>
        ) : (
          <></>
        )}
          </>
        ):(<></>)
       }

        <div className="SNavbar">
          <div className="NavConatiner">
            <div className="SNavLogo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="RightNav">
              <div className="NavRoutes">
                {routes.map((route) => {
                  if (route.subRoutes) {
                    switch (route.id) {
                      case 1:
                        return <ServicesMenu route={route} key={route.name} />;
                      case 2:
                        return <ProductMenu route={route} key={route.name} />;
                      case 3:
                        return <ComapnyMenu route={route} key={route.name} />;
                      case 4:
                        return <Insights route={route} key={route.name} />;
                      default:
                        return <p>Unknown status.</p>;
                    }

                    // return ;
                  }
                  return <Link to={route.link}>{route.name}</Link>;
                })}

                {/* <TfiWorld
                  size={20}
                  color="black"
                  opacity={0.6}
                  style={{ cursor: "pointer" }}
                /> */}
                {/* <FaRegUserCircle
                  size={20}
                  color="black"
                  opacity={0.6}
                  style={{ cursor: "pointer" }}
                /> */}

                <button>Schedule a Call</button>
                <div className="NavGAlleryButton" onClick={toggleGalleryDrawer}>
                  <IoMdMenu />
                </div>
              </div>
            </div>
            <div className="NavDrawerButton">
              {/* <TfiWorld
                size={20}
                color="black"
                opacity={0.6}
                style={{ cursor: "pointer" }}
              /> */}
              {/* <FaRegUserCircle
                size={20}
                color="black"
                opacity={0.6}
                style={{ cursor: "pointer" }}
              /> */}

              <div className="NavGAlleryButton" onClick={toggleDrawer}>
                <IoMdMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
