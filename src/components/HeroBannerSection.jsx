import BannerSyle  from './HeroBannerSection.module.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import ExplorebuttonImage from '../assets/Explore_button.svg';
import newEarth from '../assets/NewEarth.svg';

const HeroBannerSection = () => {

    gsap.registerPlugin(useGSAP);
  
    useGSAP(() => {

      gsap.to(".openanimationUpwards", { duration: 2, y:-600 });
    });

    return(
        <div className={BannerSyle.wrappetext}>
            <div className={`openanimationUpwards ${BannerSyle.animationIntro} ${BannerSyle.Introtext}`}>
            <button>Explore the world    
             <img src={ExplorebuttonImage} alt="Logo" />
             </button>

            <h1>Travel <span className={BannerSyle.VibrantText}>top destination</span> of the world</h1>

            <p className={BannerSyle.paragraphText}>we always make our customer happy by providing as many choices as possible.</p>
            <div className={BannerSyle.wrapperButtonOpreations}>
                <button>Get Started</button>
                <button>Watch Demo</button>
            </div>
            </div>
            <div className={BannerSyle.ImagesAnimation}>
            <img className={BannerSyle.FastTrack} src={newEarth} alt="Logo" />
            </div>
        </div>
    );

}

export default HeroBannerSection;