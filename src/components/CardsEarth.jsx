import firstCard from '../assets/FirstCard.svg';
import SecondCard from '../assets/SecondCard.svg'
import cardsCss from './CardsEarth.module.css';
import ThirdCard from '../assets/ThirdCard.svg';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useState, useRef } from 'react';


const CardsEarth = () => {
  const elementRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  gsap.registerPlugin(useGSAP);

  const handleMouseEnter = () => {
    gsap.to('.firstpic', {
      position: "absolute",
      duration:2.5,
      ease: "power4.out",
      x: "100%",
      top:"5%",
    });
    gsap.to('.secondpic', {
      position: "absolute",
         duration:2.5,
         ease: "power4.out",
         x: "210%",
         y: "-10%",
         rotate: "0deg",
    });
    gsap.to('.thirdpic', {
      position: "absolute",
      duration:2.5,
      ease: "power4.out",
      y: "60%",
      rotate: "0deg",
    });
    setIsAnimated(true);
  };

  const handleMouseLeave = () => {
    if (isAnimated) {
      gsap.to('.firstpic', {
        position: "absolute",
         duration:6,
         ease: "power4.out",
         x: "220%",
         top:"3%",
         });
         gsap.to('.secondpic', {
          position: "absolute",
           duration:6,
           ease: "power4.out",
           x: "230%",
           rotate: "8deg",
           top:"3%",
           });
           gsap.to('.thirdpic', {
            position: "absolute",
             duration:6,
             ease: "power4.out",
             x: "240%",
             rotate: "14deg",
             top:"3%",
             y: "0%",
           });
      setIsAnimated(false);
    }
  };


  const runCardsAnimation = () => {

    
    gsap.to('.firstpic', {
     position: "absolute",
      duration:2.5,
      ease: "power4.out",
      x: "220%",
      top:"3%",
      });
      gsap.to('.secondpic', {
        position: "absolute",
         duration:6,
         ease: "power4.out",
         x: "230%",
         rotate: "8deg",
         top:"3%",
         });
         gsap.to('.thirdpic', {
          position: "absolute",
           duration:8,
           ease: "power4.out",
           x: "240%",
           rotate: "14deg",
           top:"3%",
           onComplete: function () {
            BounceEffect();
           },
         });
  
         function BounceEffect() {
          gsap.to('.popupmessageanimation', {
            opacity: 1,
            scale: 1,
            transformOrigin: "center center",
            duration:1,
            ease: "elastic.out(1,0.3)",
            y: 50,
            });
           }
          }

  const [tutorial, setTutorial] = useState('');

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisited');
    if (!hasVisitedBefore) {
      setTutorial('To view the content, hover your cursor over the cards.');
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  useGSAP(runCardsAnimation);

  return (
    <div className={cardsCss.CardsAnimation} ref={elementRef}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      {tutorial && <p className={`popupmessageanimation ${cardsCss.popupmessage}`}>{tutorial}</p>}
      <img className={`firstpic ${cardsCss.firstCard}`} src={firstCard} alt="FirstCardImage" />
      <img className={`secondpic ${cardsCss.secondCard}`} src={SecondCard} alt="FirstCardImage" />
      <img className={`thirdpic ${cardsCss.thirdCard}`} src={ThirdCard} alt="FirstCardImage" />
    </div>
  );
}

export default CardsEarth;
