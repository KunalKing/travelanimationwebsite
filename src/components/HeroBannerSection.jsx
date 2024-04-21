import BannerSyle from './HeroBannerSection.module.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import ExplorebuttonImage from '../assets/Explore_button.svg';
import newEarth from '../assets/NewEarth.svg';
import Plane from '../assets/Plane.svg';
import Plane_two from '../assets/Plane_Two.svg';
import CardsEarth from './CardsEarth';

const HeroBannerSection = () => {
  
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(MotionPathPlugin);

  const runAnimation = () => {
    gsap.to(".ImageEarth", {
      opacity: 1,
      rotation: 17,
      duration: 20,
      onComplete: () => {
        gsap.to(".ImageEarth", {
          opacity: 1,
          duration: 1,
          rotation: 0,
          onComplete: runAnimation
        });
      }
    });

    gsap.to(".pathUSAanimated", {
      opacity: 1,
      rotation: "+=17",
      duration: 20,
      onComplete: () => {
        gsap.to(".pathUSAanimated", {
          opacity: 1,
          duration: 1,
          rotation: 0,
          onComplete: runAnimation
        });
      }
    });

    gsap.to(".pathAustrilaanimated", {
      opacity: 1,
      rotation: "+=14",
      duration: 20,
      onComplete: () => {
        gsap.to(".pathAustrilaanimated", {
          opacity: 1,
          duration: 1,
          rotation: 38,
          onComplete: runAnimation
        });
      }
    });
  };

  useGSAP(() => {
    gsap.to(".openanimationUpwards", { duration: 2, y: -600 });

    function test() {
      animateSVG();
      gsap.to(".hello", {
        rotation: 33,
        duration: 1,
      });
    }

    function animateSVG() {
      gsap.to("#rect", {
        duration: 15,
        repeatDelay: 1,
        yoyo: true,
        ease: "power1.inOut",
        motionPath: {
          path: "#path",
          align: "#path",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
        onComplete: function () {
          test();
        }
      });
    }

    animateSVG();

    function testOne() {
      animateSVGOne();
      gsap.to(".helloAustrila", {
        rotation: 33,
        duration: 1,
      });
    }

    function animateSVGOne() {
      gsap.to("#rectOne", {
        duration: 15,
        repeatDelay: 1,
        yoyo: true,
        ease: "power1.inOut",
        motionPath: {
          path: "#pathtwo",
          align: "#pathtwo",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
        onComplete: function () {
          testOne();
        }
      });
    }

    animateSVGOne();
  });

  useGSAP(runAnimation);

  return (
    <div className={BannerSyle.wrappetext}>
      <div className={`openanimationUpwards ${BannerSyle.animationIntro} ${BannerSyle.Introtext}`} >
        <button>Explore the world<img src={ExplorebuttonImage} alt="Logo" /></button>
        <h1>Travel <span className={BannerSyle.VibrantText}>top destination</span> of the world</h1>
        <p className={BannerSyle.paragraphText}>we always make our customer happy by providing as many choices as possible.</p>
        <div className={BannerSyle.wrapperButtonOpreations}>
          <button>Get Started</button>
          <button>Watch Demo</button>
        </div>
      </div>
      <div className={BannerSyle.ImagesAnimation}>
        <img className={`ImageEarth ${BannerSyle.FastTrack}`} src={newEarth} alt="Logo" />
        <svg className={`pathAustrilaanimated ${BannerSyle.PathAustrila}`} width="50%" height="auto" viewBox="-20 0 557 190" id="svg" fill="none" stroke="red" strokeWidth="2">
          <rectOne stroke="none" fill="none"/>
          <path id="pathtwo" d="m9,100 C 370,180 470,180 610,100"/>
          <g id="rectOne">
            <image className={`rectOne helloAustrila ${BannerSyle.Planepathabove}`} href={Plane_two} alt="planeOne" />
          </g>
        </svg>
        <svg className={`pathUSAanimated ${BannerSyle.PathUSA}`} width="50%" height="auto" viewBox="-20 0 557 190" id="svg" fill="none" stroke="red" strokeWidth="2">
          <rect stroke="none" fill="none"/>
          <path id="path" d="m9,100 C 370,180 470,180 610,100"/>
          <g id="rect">
            <image className={`rect hello ${BannerSyle.Planepathabove}`} href={Plane} alt="plane" />
          </g>
        </svg>
      </div>
      < CardsEarth />
    </div>
  );

}

export default HeroBannerSection;
