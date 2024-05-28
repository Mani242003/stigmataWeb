import React,{useRef} from "react";
import "./Video.scss";
import blueDots from "../../assets/images/blue-dots.png"
// import VideoPlayer from 'react-video-js-player';
// import video from "../../video/video.mp4";
// import { Player,BigPlayButton  } from 'video-react';
// import Thubmail from "../../Images/thubmail.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
// import { Player } from 'video-react';
import { FaAngleRight } from "react-icons/fa6";

const Video = ({link,name,num,title,des,url}) => {
  // const src =video
  return (
    <section className="video_wrapper">
      <div className="video_container">
       
      
        <div className="video_left">
          <ReactPlayer
            // width='200%'
            height='350px'
            url={link}
            //  playing={true} // Enable autoplay
             muted={true}
          />
        
        </div>
        <div className="video_right"data-aos="fade-up">
       
            <div className="P_S-btnTitelcontaner">
              <span className="P_S-btnTitelNumber">{num}</span>
                <span className="P_S-btnTitelText">{name}</span>
            </div>
            <span className="P_S-left-text1">{title}</span>
            <span className="P_S-left-text2"> {des}</span>
         <div className="P_S-linkContainer">
         <Link to={url} >Know more  </Link>

         <FaAngleRight />
         
        {/* <img src={blueDots} alt=""  /> */}


         </div>
        
      
      
        </div>
      </div>
    </section>
  );
};

export default Video;
