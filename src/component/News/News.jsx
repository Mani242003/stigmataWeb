import React from "react";
import "./News.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsCustomCard from "./NewsCustomCard/NewsCustomCard";
import img1 from "../../assets/images/news/img1.jpg";
import img2 from "../../assets/images/news/img2.jpg";
import img3 from "../../assets/images/news/img3.jpg";
import img4 from "../../assets/images/news/img4.jpg";
import img5 from "../../assets/images/news/img5.jpg";
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
              titel="Data analytics & designing Power BI dashboard for dairy farm in North Holland"
              date="10 Aug, 2024"
              name="Jerome Melkisidak"
              link=""
            />
          </div>
          <div >
            <NewsCustomCard
              img={img2}
              titel="Data analytics & designing Power BI dashboard for dairy farm in North Holland"
              date="10 Aug, 2024"
              name="Jerome Melkisidak"
              link=""
            />
          </div>

          <div  >
            <NewsCustomCard
              img={img3}
              titel="Data analytics & designing Power BI dashboard for dairy farm in North Holland"
              date="10 Aug, 2024"
              name="Jerome Melkisidak"
              link=""
            />
          </div>

          <div  >
            <NewsCustomCard
              img={img4}
              titel="Data analytics & designing Power BI dashboard for dairy farm in North Holland"
              date="10 Aug, 2024"
              link=""
              name="Jerome Melkisidak"
            />
          </div>

          <div>
            <NewsCustomCard
              img={img5}
              titel="Data analytics & designing Power BI dashboard for dairy farm in North Holland"
              date="10 Aug, 2024"
              name="Jerome Melkisidak"
              link=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default News;
