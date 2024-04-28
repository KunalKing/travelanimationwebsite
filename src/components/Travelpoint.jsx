import TravelPointstyle from "./TravelPointstyle.module.css";
import Yellowblock from "../assets/Yellowblock.svg";
import TravelGirl from "../assets/TravelGirl.svg";
import ballOne from "../assets/ballOne.svg";
import ballThree from "../assets/ballThree.svg";
import ballTwo from "../assets/ballTwo.svg";
import ballFour from "../assets/ballFour.svg";

const Travelpoint = () => {
  return (
    <div className={TravelPointstyle.wrapperContent}>
      <div className={TravelPointstyle.wrapperImages}>
        <img
          src={Yellowblock}
          alt="Yellowblock"
          className={TravelPointstyle.yellowbimgae}
        />
        <img
          src={TravelGirl}
          alt="TravelGirl"
          className={TravelPointstyle.girlImages}
        />
           <img
          src={ballOne}
          alt="ballOne"
          className={TravelPointstyle.ballOne}
        />
           <img
          src={ballTwo}
          alt="ballTwo"
          className={TravelPointstyle.ballTwo}
        />
           <img
          src={ballThree}
          alt="ballThree"
          className={TravelPointstyle.ballThree}
        />
           <img
          src={ballFour}
          alt="ballFour"
          className={TravelPointstyle.ballFour}
        />
      </div>

      <div className={TravelPointstyle.textwrap}>
        <p className={TravelPointstyle.pinkHeading}>Travel Point</p>
        <h2 className={TravelPointstyle.blackHeading}>We helping you find your dream location</h2>
        <p className={TravelPointstyle.blackPara}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
        <div className={TravelPointstyle.fourbox}>
            <div className={TravelPointstyle.box}>

                <p>500+</p>
                <p>Holiday Package</p>
            </div>
            <div className={TravelPointstyle.box}>
                <p>100</p>
                <p>Luxury Hotel</p>
            </div>
            <div className={TravelPointstyle.box}>
                <p>7</p>
                <p>Premium Airlines</p>
            </div>
            <div className={TravelPointstyle.box}>
                <p>2K+</p>
                <p>Happy Customer</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Travelpoint;
