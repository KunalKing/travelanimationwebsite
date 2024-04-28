import StyleServices from "./Services.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import destinationSliderone from "../assets/destinationSliderone.svg";
import bookingSlidertwo from "../assets/bookingSlidertwo.svg";

const Services = () => {
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2.2,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 499,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
    ]
  };

  return (
    <div className={StyleServices.Mainbox}>
          <style jsx>{`
          .slick-slide > div {
            margin: 0 3%;
          }
           .wrapperSlider .slick-current > div {
            border-radius: 10%;
            -webkit-transition: all 1s -0.25s ease-out;
            -moz-transition: all 1s -0.25s ease-out;
              -o-transition: all 1s -0.25s ease-out;
             -ms-transition: all 1s -0.25s ease-out;
                 transition: all 1s -0.25s ease-out;
          }
         .slick-current .Tranheight:hover {
            -webkit-transition: all 1s ease;
            -moz-transition: all 1s ease;
              -o-transition: all 1s ease;
             -ms-transition: all 1s ease;
                 transition: all 1s ease ;
          height: 230px;
            box-shadow: 0px 41px 89px 0px #800020;
            padding:20% 0%;
          }
          .wrapperSlider .slick-list{
            padding: 2% 0% 11% 0%;
          }
         
        `}</style>
      <div className={StyleServices.Wrappertext}>
        <p>Services</p>
        <h2> Our top value categories for you</h2>
      </div>
      <div className={`${StyleServices.SliderWrapper} wrapperSlider`}>
        <Slider {...settings}>
          <div className={`${StyleServices.Styleproperties} Tranheight`}>
            <img className={StyleServices.imageAlignment} src={destinationSliderone} alt="destinationSliderone" />
            <p className={StyleServices.BoxHeading}>Best Tour Guide</p>
            <p className={StyleServices.BoxPara}>
              What looked like a small patch of purple grass, above five feet.
            </p>
          </div>
          <div  className={`${StyleServices.Styleproperties} Tranheight`}>
            <img className={StyleServices.imageAlignment} src={bookingSlidertwo} alt="bookingSlidertwo" />
            <p className={StyleServices.BoxHeading}>Easy Booking</p>
            <p className={StyleServices.BoxPara}>Square, was moving across the sand in their direction.</p>
          </div>
          <div  className={`${StyleServices.Styleproperties} Tranheight`}>
            <img  className={StyleServices.imageAlignment} src={destinationSliderone} alt="destinationSliderone" />
            <p className={StyleServices.BoxHeading} >Best Tour Guide</p>
            <p className={StyleServices.BoxPara}>
              What looked like a small patch of purple grass, above five feet.
            </p>
          </div>
          <div  className={`${StyleServices.Styleproperties} Tranheight`}>
            <img className={StyleServices.imageAlignment} src={bookingSlidertwo} alt="bookingSlidertwo" />
            <p className={StyleServices.BoxHeading}>Easy Booking</p>
            <p className={StyleServices.BoxPara}>Square, was moving across the sand in their direction.</p>
          </div>
          <div  className={`${StyleServices.Styleproperties} Tranheight`}>
            <img  className={StyleServices.imageAlignment} src={destinationSliderone} alt="destinationSliderone" />
            <p className={StyleServices.BoxHeading}>Best Tour Guide</p>
            <p className={StyleServices.BoxPara}>
              What looked like a small patch of purple grass, above five feet.
            </p>
          </div >
          <div  className={`${StyleServices.Styleproperties} Tranheight`}>
            <img  className={StyleServices.imageAlignment} src={bookingSlidertwo} alt="bookingSlidertwo" />
            <p className={StyleServices.BoxHeading}>Easy Booking</p>
            <p className={StyleServices.BoxPara}>Square, was moving across the sand in their direction.</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Services;
