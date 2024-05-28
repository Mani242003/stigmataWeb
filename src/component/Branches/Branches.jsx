import React from "react";
import "./Branches.scss";
import img1 from "../../assets/images/brains/brain1.jpeg";
import img2 from "../../assets/images/branches2.jpeg";
import img3 from "../../assets/images/branches3.jpeg";

const Branches = () => {
  return (
    <section className="branches-wrapper">
      <div className="branchesContainer">
        <div className="TB_headerConatiner">
          <span className="TB_headerSmallTitel">GREAT TEAM MEMBERS</span>
          <span className="TB_headerBigTitel">WE HAVE EXPERT TEAM</span>
        </div>
        <div className="profileConainer">
          <B_CustomCard
            name="Jerome Melkisidak, B.E, M.B.A CEO"
            url={img1}
            position="Board of Study Member, SRM Valliammai Engineering College : "
            boldText="CSE /
          MCA Ex-TNQ"
          />
          <B_CustomCard
            name="Mr. Youssef Azad"
            url={img2}
            position="Business Development & Client relationship - "
            boldText="Canada"
          />
          <B_CustomCard
            name="Mr. Lawrence"
            url={img3}
            position="Business Development Head & Client Relationship - "
            boldText="Zimbabwe"
          />
        </div>
      </div>
    </section>
  );
};

export default Branches;

const B_CustomCard = ({ name, url, position, boldText }) => {
  return (
    <div className="B_CustomCardContainer">
      <div className="gradiant"></div>
      <div className="profileDown">
        <img src={url} alt="" />
        <div className="profileIntro">
          <span className="profileName">{name}</span>
          <span className="profileDes">
            {position}
            <span>{boldText}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
