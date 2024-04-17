import BannerSyle  from './HeroBannerSection.module.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react"

const HeroBannerSection = () => {

    gsap.registerPlugin(useGSAP);
  
    useGSAP(() => {

      gsap.to(".openanimationUpwards", { duration: 2, y:-600 });
    });

    return(
        <div className={BannerSyle.wrappetext}>
            <div className={`openanimationUpwards ${BannerSyle.animationIntro} ${BannerSyle.Introtext}`}>
            <button>Explore the world</button>

            <h1>Travel top destination of the world</h1>

            <p>we always make our customer happy by providing as many choices as possible.</p>
            <div>
                <button>Get Started</button>
                <button>Watch Demo</button>
            </div>
            </div>
        </div>
    );

}

export default HeroBannerSection;