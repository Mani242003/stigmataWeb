import React from "react";
import "./Drawer.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Drawer = ({ isOpen, toggleDrawer }) => {
  return (
    <>
      {isOpen && <div className="backDrop" onClick={toggleDrawer}></div>}
  
      <div
        className="sDrawer"
        style={
          isOpen
            ? { transform: "translateX(0)" }
            : { transform: "translateX(-100%)" }
        }
      >
        <div className="SNavLogo" onClick={toggleDrawer}>
          <img src={logo} alt="" />
        </div>
        
        <div className="NavDrawerRoutes">
          {/* {routes.map((route) => (
                  <Link to={route.link}>{route.name}</Link>
                ))} */}
          <Link to="/" onClick={toggleDrawer}>
            Home
          </Link>
          <Link to="/products" onClick={toggleDrawer}>
            Products
          </Link>

          <Link to="/about" onClick={toggleDrawer}>
            About us
          </Link>

          <Link to="/services" onClick={toggleDrawer}>
            Services
          </Link>
          <Link to="/blog" onClick={toggleDrawer}>
            Blog
          </Link>

          <Link to="/contact" onClick={toggleDrawer}>
            Contact us
          </Link>

          <button>Schedule a Call</button>
        </div>
      </div>
     
    </>
  );
};

export default Drawer;