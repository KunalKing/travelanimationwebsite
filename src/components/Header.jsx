import headerstyle from './Header.module.css';
import logo from '../assets/logo.svg';
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"

const Header = () => 
{
      
  const[position, setPosition] = useState(false);
    
    const container = useRef(null);

    gsap.registerPlugin(useGSAP);
  
    useGSAP(() => {
      const screenWidth = window.innerWidth;
      let screenlogops = "195"; // Default value
  
      if (screenWidth < 1350 && screenWidth > 1251) {
        screenlogops = "187"; // Adjust for smaller screens
      } else if (screenWidth < 1250 && screenWidth >= 1151) {
        screenlogops = "172"; // Adjust for smaller screens
      } else if (screenWidth <= 1150 && screenWidth >= 1063) {
        screenlogops = "160"; // Adjust for smaller screens
      } else if (screenWidth <= 1062 && screenWidth >= 1000) {
        screenlogops = "155"; // Adjust for smaller screens
      }
  
   
      gsap.to(".image_logo", { duration: 3, rotation: 360, x: screenlogops });
    }, { scope: container });
  

   
  
  
    const handleMouseEnter = (CV, event) => {
      console.log(CV);
    
      // Check if the current element is the first one with class "animatedNavLinks"
      if (event.target.classList.contains("animatedNavLinks")) {
        // Add animation logic for the first element
        gsap.to(event.target, { duration: 1, display: 'block', position: 'absolute', y: -8 });
      }
    
      // setPosition(true); // You can uncomment this if you need to update state
    };

      const handleMouseLeave = () => {
        gsap.to(".animatedNavLinks", { duration: 1,  display: 'block', position: 'absolute', y: 0,});
     };
     const handleMouseLeave_loginsignup = () => {
      gsap.to(".pstyle", { duration: 1,  display: 'block', position: 'absolute', y: 0, left: 0,});
      gsap.to(".pstyle_right", { duration: 1,  display: 'block', position: 'absolute', y: 0, right: 0,});
   };
   
  
     
  
    return (
        
      <div className={headerstyle.header}>
        <div className={headerstyle.container}>
          <div ref={container} className={headerstyle.logo}>
        <img className={`image_logo ${headerstyle.logops}`} src={logo} alt="Logo" />
            <span className={headerstyle.name}>Travlog</span>
          </div>
          <nav className={headerstyle.menu}>
            <ul>
              <li ><a  onMouseEnter={(event) => handleMouseEnter('Home', event)}  onMouseLeave={handleMouseLeave} className="animatedNavLinks" href="#">HOME</a></li>
             <li><a onMouseEnter={(event) => handleMouseEnter('Discover', event)} onMouseLeave={handleMouseLeave} className="animatedNavLinks" href="#">DISCOVER</a></li>
              <li><a onMouseEnter={(event) => handleMouseEnter('SPECIAL_DEALS', event)} onMouseLeave={handleMouseLeave} className="animatedNavLinks" href="#">SPECIAL DEALS</a></li>
              <li><a onMouseEnter={(event) => handleMouseEnter('CONTACT', event)} onMouseLeave={handleMouseLeave} className="animatedNavLinks" href="#">CONTACT</a></li> 
            </ul>
          </nav>
          <div className={headerstyle.buttons_loginsignin}>
            <button type='button' onMouseEnter={(event) => handleMouseEnter('Login', event)}  onMouseLeave={handleMouseLeave_loginsignup} className={`animatedNavLinks pstyle ${headerstyle.login}`}>Login</button>
            <button type='button'onMouseEnter={(event) => handleMouseEnter('SignUp', event)}  onMouseLeave={handleMouseLeave_loginsignup}  className={`animatedNavLinks pstyle_right ${headerstyle.signup}`}>Sign Up</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  