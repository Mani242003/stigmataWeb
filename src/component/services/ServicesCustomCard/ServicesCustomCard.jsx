import React from "react";
import "./ServicesCustomCard.scss";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
const ServicesCustomCard = ({ name, img, des1, des2, des3, des4 }) => {
  return (
    //    <Link to="./blog" style={{textDecoration:'none'}}>
    <div className="ServicesCustomCardContainer" data-aos="fade-up">
      <div className="Scard_bottom">
        <div className="ScardRight">
          <img src={img} alt="" />
        </div>

        <span className="ServicesTitle">{name}</span>

        <div className="ServiceDesContainer">
          <span>
            {" "}
            {des1}
          </span>
        </div>
        <div className="ServiceButtonContainer">
          <Link>
            Read More {" "}
          </Link>
          <FaAngleRight />
        </div>
        {/* <div className="ServiceDesContainer"><FaArrowRight /><span > {des4}</span></div> */}
      </div>
    </div>
    //    </Link>
  );
};

export default ServicesCustomCard;
