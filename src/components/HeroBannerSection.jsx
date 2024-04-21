import BannerSyle  from './HeroBannerSection.module.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import ExplorebuttonImage from '../assets/Explore_button.svg';
import newEarth from '../assets/NewEarth.svg';
import Plane from '../assets/Plane.svg';
// import pathOne from '../assets/pathone.svg';

const HeroBannerSection = () => {

    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(MotionPathPlugin);
     const runAnimation = () => {
      gsap.to(".ImageEarth", {opacity:1 ,rotation: 17, duration: 20,
        onComplete: () => {
            gsap.to(".ImageEarth", {
               opacity: 1,  duration: 1,  rotation: 0,
               onComplete: runAnimation, });
        }
    });
    gsap.to(".pathUSAanimated", {
      opacity: 1,
      rotation: "+=17", // Rotate anticlockwise by 20 degrees
      duration: 20,
      onComplete: () => {
        gsap.to(".pathUSAanimated", {
          opacity: 1,
          duration: 1,
          rotation: 0, // Rotate back to initial value
          onComplete: runAnimation
        });
      }
    });
    
    
    
  }
  
    useGSAP(() => {

      gsap.to(".openanimationUpwards", { duration: 2, y:-600 });

     
        // gsap.to(".Plane", {
        //   motionPath: {
        //     path: [{ rotation: 10, x:200, y:-230}, {rotation: 25, x:250, y:-250 }, {rotation: 75, x:500, y:-200 }, {rotation: 75, x:500, y:-170 }]
        //   },
        //   duration: 20, // Duration of the animation
        //   repeat: -1, // Repeat indefinitely
        //   ease: "4", // Linear easing
        // });

        // gsap.to(".Plane", {
        //     duration: 5, 
        //     repeat: 12,
        //     repeatDelay: 3,
        //     yoyo: true,
        //     ease: "power1.inOut",
        //     motionPath:{
        //       path: "#path",
        //       align: "#path",
        //       autoRotate: true,
        //       alignOrigin: [0.5, 0.5]
        //     }
        //   });


// Working Plane Animation Code
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
            //repeat: -1, // Set repeat to -1 for infinite looping
            repeatDelay: 1,
            yoyo: true,
            ease: "power1.inOut",
            motionPath: {
              path: "#path",
              align: "#path",
              autoRotate: true,
              alignOrigin: [0.5, 0.5],
            },
            onComplete: function() {
              test();
            }
          });
        }
        
        animateSVG(); 

        
       
      
        
        
    });

    useGSAP(runAnimation);

   


    return(
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
            <img className={`Plane ${BannerSyle.planeImage}`} src={Plane} alt="plane" />
            <img className={`ImageEarth ${BannerSyle.FastTrack}`} src={newEarth} alt="Logo" />
           

            <svg className={`pathUSAanimated ${BannerSyle.PathUSA}`} width="50%" height="auto" viewBox="-20 0 557 190" id="svg" fill="none" stroke="black" strokeWidth="2">
  <rect stroke="none" fill="none"/>
  <path id="path" d="m9,100 C 370,180 470,180 610,100"/>
  <g id="rect">
    <image className={`rect hello ${BannerSyle.Planepathabove}`} href={Plane} alt="plane" />
  </g>
</svg>

            </div>
        </div>
        
    );

}

export default HeroBannerSection;