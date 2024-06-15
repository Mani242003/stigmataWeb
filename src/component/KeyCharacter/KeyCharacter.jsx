import React, { useRef, useEffect } from "react";
import "./KeyCharacter.scss";
import accesscontrol from "../../assets/images/icons/storage.webp";
import insights from "../../assets/images/icons/load-balancer.webp";
import compliance from "../../assets/images/icons/scaling.webp";

import { BsFillRecord2Fill } from "react-icons/bs";
import { IoMdArrowRoundForward } from "react-icons/io";

const KeyCharacter = () => {
  return (
    <section className="KeyCharacter-wrapper" id="fea">
      <div className="FeaPage-Container">
        <div className="feaPage-header">
          <span className="feaPage-header-text1">
            Key characteristics of DevOps
          </span>
        </div>
        <div className="feaPage-main-content">
          <div className="feaPage-col-1">
            <div className="feaPage-col-1-img-container">
              <img src={accesscontrol} alt="" />
            </div>
            <span className="feaPage-col-1-text-1">
              {" "}
              Automation and DevOps Tools{" "}
            </span>
            <span className="feaPage-col-1-text-2">
              High-performing teams leverage a shared set of DevOps tools to
              crystallize and streamline collaborative processes, ensuring a
              comprehensive understanding of software delivery from start to
              finish.
            </span>
            <span className="feaPage-col-1-text-3"> Included with...</span>
            <div className="feaPage-col-1-bottom-container">
              <BsFillRecord2Fill color="#5E6FEC" size={26} />

              <span className="feaPage-col-1-text-4">Access Control</span>
            </div>
            <div className="feaPage-col-1-bottom-container">
              <BsFillRecord2Fill color="#5E6FEC" size={26} />
              <span className="feaPage-col-1-text-4">
                Executive Security Dashboard
              </span>
            </div>
            <div className="feaPage-col-1-bottom-container">
              <BsFillRecord2Fill color="#5E6FEC" size={26} />
              <span className="feaPage-col-1-text-4">Compliance Dashboard</span>
            </div>
            <div className="feaPage-col-1-bottom-container">
              <BsFillRecord2Fill color="#5E6FEC" size={26} />
              <span className="feaPage-col-1-text-4">
                Effective Suppress Management
              </span>
            </div>
          </div>
          <div className="feaPage-col-1">
            <div className="feaPage-col-1-img-container">
              <img src={insights} alt="" />
            </div>
            <span className="feaPage-col-1-text-1">
              {" "}
              DevOps Training and Processes{" "}
            </span>
            <span className="feaPage-col-1-text-2">
              Synergistically pursue accurate initiatives without economically
              sound imperatives. Professionally architect unique process
              improvements via optimal.
            </span>
            <span className="feaPage-col-1-text-3"> Included with...</span>
            <div className="feaPage-col-1-bottom-container">
              <BsFillRecord2Fill color="#5E6FEC" size={26} />

              <span className="feaPage-col-1-text-4">Access Control</span>
            </div>
            <div className="feaPage-col-1-bottom-container">
              <BsFillRecord2Fill color="#5E6FEC" size={26} />
              <span className="feaPage-col-1-text-4">
                Executive Security Dashboard
              </span>
            </div>
            <div className="feaPage-col-1-bottom-container">
              <BsFillRecord2Fill color="#5E6FEC" size={26} />
              <span className="feaPage-col-1-text-4">Compliance Dashboard</span>
            </div>
            <div className="feaPage-col-1-bottom-container">
              <BsFillRecord2Fill color="#5E6FEC" size={26} />
              <span className="feaPage-col-1-text-4">
                Effective Suppress Management
              </span>
            </div>
          </div>
          <div className="feaPage-col-1">
            <div className="feaPage-col-1-img-container">
              <img src={compliance} alt="" />
            </div>
            <span className="feaPage-col-1-text-1"> Culture </span>
            <span className="feaPage-col-1-text-2">
              At its core, DevOps is a cultural transformation that involves all
              stakeholders, ranging from engineers and IT staff to CIOS, CFOs,
              salespeople, and end users.
            </span>
            <span className="feaPage-col-1-text-3"> Included with...</span>
            <div className="feaPage-col-1-bottom-container">
              <BsFillRecord2Fill color="#5E6FEC" size={26} />

              <span className="feaPage-col-1-text-4">Access Control</span>
            </div>
            <div className="feaPage-col-1-bottom-container">
              <BsFillRecord2Fill color="#5E6FEC" size={26} />
              <span className="feaPage-col-1-text-4">
                Executive Security Dashboard
              </span>
            </div>
            <div className="feaPage-col-1-bottom-container">
              <BsFillRecord2Fill color="#5E6FEC" size={26} />
              <span className="feaPage-col-1-text-4">Compliance Dashboard</span>
            </div>
            <div className="feaPage-col-1-bottom-container">
              <BsFillRecord2Fill color="#5E6FEC" size={26} />
              <span className="feaPage-col-1-text-4">
                Effective Suppress Management
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyCharacter;
