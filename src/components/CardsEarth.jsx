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

    const screenWidth = window.innerWidth;
    let DynamicCardPositionMobileOne = "100%";
    let DynamicCardPositionMobiletwo = "210%";
    let DynamicCardPositionMobilethree = "60%";

    if(screenWidth < 999 && screenWidth > 500){
      DynamicCardPositionMobileOne = "1%"; 
      DynamicCardPositionMobiletwo ="60%";
      DynamicCardPositionMobilethree = "60%";
    }else if(screenWidth < 499  && screenWidth > 200){
      DynamicCardPositionMobileOne = "1%"; 
      DynamicCardPositionMobiletwo ="60%";
      DynamicCardPositionMobilethree = "26%";
    }


    gsap.to('.firstpic', {
      position: "absolute",
      duration:2.5,
      ease: "power4.out",
      x: DynamicCardPositionMobileOne,
      top:"5%",
    });
    gsap.to('.secondpic', {
      position: "absolute",
         duration:2.5,
         ease: "power4.out",
         x: DynamicCardPositionMobiletwo,
         y: "-10%",
         rotate: "0deg",
    });
    gsap.to('.thirdpic', {
      position: "absolute",
      duration:2.5,
      ease: "power4.out",
      y: DynamicCardPositionMobilethree,
      rotate: "0deg",
    });
    setIsAnimated(true);
  };

  const handleMouseLeave = () => {
    
    const screenWidth = window.innerWidth;
    let DynamicCardPositionOne = "220%";
    let DynamicCardPositiontwo = "230%";
    let DynamicCardPositionthree = "240%";

    if (screenWidth < 1201 && screenWidth > 999) {
      DynamicCardPositionOne = "134%"; 
      DynamicCardPositiontwo ="144%";
      DynamicCardPositionthree = "155%";
    }else if(screenWidth < 999 && screenWidth > 500){
      DynamicCardPositionOne = "40%";
      DynamicCardPositiontwo = "40%";
      DynamicCardPositionthree = "40%";
    }else if(screenWidth < 500 && screenWidth > 200){
      DynamicCardPositionOne = "4%";
      DynamicCardPositiontwo = "4%";
      DynamicCardPositionthree = "4%";
    }

    if (isAnimated) {
      gsap.to('.firstpic', {
        position: "absolute",
         duration:6,
         ease: "power4.out",
         x: DynamicCardPositionOne,
         top:"3%",
         });
         gsap.to('.secondpic', {
          position: "absolute",
           duration:6,
           ease: "power4.out",
           x: DynamicCardPositiontwo,
           rotate: "8deg",
           top:"3%",
           });
           gsap.to('.thirdpic', {
            position: "absolute",
             duration:6,
             ease: "power4.out",
             x: DynamicCardPositionthree,
             rotate: "14deg",
             top:"3%",
             y: "0%",
           });
      setIsAnimated(false);
    }
  };


  const runCardsAnimation = () => {

    
    const screenWidth = window.innerWidth;
    let DynamicCardPositionOne = "220%";
    let DynamicCardPositiontwo = "230%";
    let DynamicCardPositionthree = "240%";
    let DynamicCardPositiontop = "3%";

    if (screenWidth < 1201 && screenWidth > 999) {
      DynamicCardPositionOne = "134%"; 
      DynamicCardPositiontwo ="144%";
      DynamicCardPositionthree = "155%";
    }else if(screenWidth < 999 && screenWidth > 500){
      DynamicCardPositionOne = "20%"; 
      DynamicCardPositiontwo ="21%";
      DynamicCardPositionthree = "22%";
    }else if(screenWidth < 499 && screenWidth > 200){
      DynamicCardPositionOne = "2%"; 
      DynamicCardPositiontwo ="3%";
      DynamicCardPositionthree = "4%";
    }

    gsap.to('.firstpic', {
     position: "absolute",
      duration:2.5,
      ease: "power4.out",
      x: DynamicCardPositionOne,
      top:DynamicCardPositiontop,
      });
      gsap.to('.secondpic', {
        position: "absolute",
         duration:6,
         ease: "power4.out",
         x: DynamicCardPositiontwo,
         rotate: "8deg",
         top:DynamicCardPositiontop,
         });
         gsap.to('.thirdpic', {
          position: "absolute",
           duration:8,
           ease: "power4.out",
           x: DynamicCardPositionthree,
           rotate: "14deg",
           top:DynamicCardPositiontop,
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

  // const [tutorial, setTutorial] = useState('');

  // useEffect(() => {
  //   const hasVisitedBefore = localStorage.getItem('hasVisited');
  //   if (!hasVisitedBefore) {
  //     setTutorial('To view the content, hover your cursor over the cards.');
  //     localStorage.setItem('hasVisited', 'true');
  //   }
  // }, []);

  useGSAP(runCardsAnimation);

  return (
    <div className={cardsCss.CardsAnimation} ref={elementRef}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
    {/* <p className={`popupmessageanimation ${cardsCss.popupmessage}`}>To view the content, hover your cursor over the cards.</p> */}
      <img className={`firstpic ${cardsCss.firstCard}`} src={firstCard} alt="FirstCardImage" />
      <img className={`secondpic ${cardsCss.secondCard}`} src={SecondCard} alt="FirstCardImage" />
      <img className={`thirdpic ${cardsCss.thirdCard}`} src={ThirdCard} alt="FirstCardImage" />
       
    </div>
  );
}

export default CardsEarth;
