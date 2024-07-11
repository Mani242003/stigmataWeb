import React from "react";
import "./News.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsCustomCard from "./NewsCustomCard/NewsCustomCard";

import img1 from "../../assets/images/news/img3.jpg";
import img2 from "../../assets/images/news/news2.jpg";
import img3 from "../../assets/images/news/news3.jpg";
import img4 from "../../assets/images/news/news4.jpg";
import img5 from "../../assets/images/news/img2.jpg";






import { Link } from "react-router-dom";

const News = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",

    responsive: [
      {
        breakpoint: 430, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          // Show 1 slide
        },
      },
      {
        breakpoint: 885, // Tablets
        settings: {
          slidesToShow: 2,

          // speed: 500,
          slidesToScroll: 1,

          // Show 3 slides
        },
      },
      {
        breakpoint: 1024, // Laptops
        settings: {
          slidesToShow: 3, // Show 5 slides
        },
      },
      {
        breakpoint: Infinity, // Larger screens
        settings: {
          slidesToShow: 1, // Show 7 slides
        },
      },
    ],
  };
  return (
    <div className="Newscontainer">
      <div className="NewsMiddel">
        <div className="NewsMiddelHeaderContainer" data-aos="fade-up">
          <span className="NewsMiddelHeadertext1">WEEKLY UPDATES</span>
          <span className="NewsMiddelHeadertext2">LATEST NEWS</span>
          <div className="NewsMiddelHeaderdivider"></div>
        </div>
        <Slider {...settings}>
        <div  >
            <NewsCustomCard
              img={img1}
              titel="Thrilled & with grateful, we would like to share that we were the L1 bidder in getting a new digital / strategic development project from L&T power transmission & distribution IC to perform 'Management Information System : Phase I' for entire PT&D EDRC IC . "
              // date="10 Aug, 2024"
              // name="Jerome Melkisidak"
              link="https://www.linkedin.com/posts/jerome-melkisidak-970b635b_thrilled-with-grateful-we-would-like-to-activity-7189237868052078592-blOi?utm_source=share&utm_medium=member_android"
            />
            
          </div>
          <div  >
            <NewsCustomCard
              img={img2}
              titel=" ST. JOSEPH'S INSTITUTE OF TECHNOLOGY, OMR (AI & data science department) on developing few scalable POC’s together. "
              // date="10 Aug, 2024"
              // name="Jerome Melkisidak"
              link="https://www.linkedin.com/posts/jerome-melkisidak-970b635b_mou-activity-7178795486856818690-CX6E?utm_source=share&utm_medium=member_android"
            />
            
          </div>
     
          <div  >
            <NewsCustomCard
              img={img3}
              titel="Board of Study Member of SRM Valliammai Engineering College CSE department was excited to welcome students for an industrial visit at our humble office "
              // date="10 Aug, 2024"
              // name="Jerome Melkisidak"
              link="https://www.linkedin.com/posts/jerome-melkisidak-970b635b_industrialvisit-technology-activity-7176994628116623360-Vndk?utm_source=share&utm_medium=member_android"
            />
            
          </div>
          <div  >
            <NewsCustomCard
              img={img4}
              titel=" St. Joseph's College Of Engineering !! Touched up on the entrepreneurial thought process, insights on the essential entrepreneurial qualities (Strong passion, hardwork and consistency) !
"
              // date="10 Aug, 2024"
              // name="Jerome Melkisidak"
              link="https://www.linkedin.com/posts/jerome-melkisidak-970b635b_entrepreneurialjourney-motivation-careerguidance-activity-7161913429081964546-Q3D3?utm_source=share&utm_medium=member_android"
            />
            
          </div>
          <div  >
            <NewsCustomCard
              img={img5}
              titel=" New project launch on 'Data analytics & designing Power BI dashboard for dairy farm in North Holland'"

              // date="10 Aug, 2024"
              // name="Jerome Melkisidak"
              link="https://www.linkedin.com/posts/jerome-melkisidak-970b635b_dataanalytics-dataprocessing-powerbi-activity-7151050480301817856-MpYk?utm_source=share&utm_medium=member_android"
            />
            
          </div>
          
          {/* <div  >
            <NewsCustomCard
              img={img1}
              titel="Data analytics & designing Power BI dashboard for dairy farm in North Holland"
              date="10 Aug, 2024"
              name="Jerome Melkisidak"
              link=""
            />
          </div>
          <div >
            <NewsCustomCard
              img={img1}
              titel="Data analytics & designing Power BI dashboard for dairy farm in North Holland"
              date="10 Aug, 2024"
              name="Jerome Melkisidak"
              link=""
            />
          </div> */}

         

          {/* <div  >
            <NewsCustomCard
              img={img4}
              titel="Data analytics & designing Power BI dashboard for dairy farm in North Holland"
              date="10 Aug, 2024"
              link=""
              name="Jerome Melkisidak"
            />
          </div> */}
{/* 
          <div>
            <NewsCustomCard
              img={img5}
              titel="Data analytics & designing Power BI dashboard for dairy farm in North Holland"
              date="10 Aug, 2024"
              name="Jerome Melkisidak"
              link=""
            />
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default News;
