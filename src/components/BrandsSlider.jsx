import AirBnb from '../assets/AirBnb.svg';
import BookingCom from '../assets/BookingCom.svg';
import Expedia from '../assets/Expedia.svg';
import TripAdvisor from '../assets/TripAdvisor.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandsSlider = () => {

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows:false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },{
        breakpoint: 499,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
    ]
  };



  return (
    <div>
     <Slider {...settings}>
        <div ><img src={AirBnb} alt="AirBnb" /></div>
        <div ><img src={BookingCom} alt="BookingCom" /></div>
        <div ><img src={Expedia} alt="Expedia" /></div>
        <div ><img src={TripAdvisor} alt="TripAdvisor" /></div>
        <div ><img src={Expedia} alt="Expedia" /></div>
        <div ><img src={AirBnb} alt="AirBnb" /></div>
        <div ><img src={BookingCom} alt="BookingCom" /></div>
        <div ><img src={Expedia} alt="Expedia" /></div>
        <div ><img src={TripAdvisor} alt="TripAdvisor" /></div>
        <div ><img src={Expedia} alt="Expedia" /></div>
      </Slider>
      {/* <button onClick={slidetonext}>Slide Next</button> */}
    </div>
  );
};

export default BrandsSlider;