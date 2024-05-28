import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import sli3 from "../../../assets/Vector.png";
// import sli4 from "../../../assets/Vectorff.png";
import sli1 from "../../../assets/HomeBg1.png";
import sli2 from "../../../assets/homeBg2f.png";
import sli3 from "../../../assets/homeBg3.png";
import sli4 from "../../../assets/hero-1-1.jpg";




import ExampleCarouselImage from "../ExampleCarouselImage";

const BgSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 1500, // Adjust the speed as you need
    autoplay: true,
    autoplaySpeed: 5000, // Adjust the interval as you need
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div style={{ height: "680px", width: "100%", overflow: "hidden" }}>
      <Slider {...settings}>
        <div>
          <ExampleCarouselImage
            text="Super charge your Business with "
            text2="Artificial Intelligences."
            text3="We Can Unlock next - level business growth with mind-blowing AI solutions, Let's Go!"
            link="/blog"
            img={sli1}
          />
        </div>
        <div>
          <ExampleCarouselImage
            text="Thinking of Cloud Migration, DevOps,"
            text2=" Serverless framework Architecture?"
            text3="OUR Experts are Waiting!"
            link="/blog"
            img={sli2}
          />
        </div>
        <div>
          <ExampleCarouselImage
            text="Expert in Software "
            text2="Development"
            text3="ERP, Workflow, Plugins, API development."
            link="/blog"
            img={sli3}
          />
        </div>
        <div>
          <ExampleCarouselImage
            text="You Imagine a Digital Future, "
            text2="We make it a Reality!"
            text3="Data Analytics, Image / Video Analytics, Agile methodology."
            link="/blog"
            img={sli4}
          />
        </div>
      </Slider>
      {/* <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 9 }}>
        {Array.from({ length: 4 }).map((_, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: currentSlide === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
              margin: '0 5px',
              cursor: 'pointer',
              transition: 'background 0.3s ease', // Smooth transition for indicator
            }}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default BgSlider;