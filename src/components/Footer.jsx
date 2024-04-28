import FooterStyle from './Footer.module.css';
import Footer_Logo from '../assets/Footer_Logo.svg';
import Facebook from '../assets/Facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/Instagramlogos.svg';


const Footer = () => {

    return (
       
        <div className={FooterStyle.footerwrapper}>
        <div className={FooterStyle.SectionOne}>
           <div className={FooterStyle.logoSection}>
                <img src={Footer_Logo} alt='Footer_Logo'/>
                <p className={FooterStyle.Travlog}>Travlog</p>
           </div>
           <div className={FooterStyle.desc}>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
           </div>
           <div className={FooterStyle.socialmediaIcons}>
                  <img src={Facebook}  alt='Facebook'/>   
                  <img src={twitter}  alt='twitter'/>   
                  <img src={instagram}  alt='instagram'/>   
           </div>
           </div>
           <div className={FooterStyle.Sectiontwo}>
            <div className={FooterStyle.company}>
                <h2>Company</h2>
                <ul>
                    <li>About</li>
                    <li>Career</li>
                    <li>Mobile</li>
                </ul>
            </div>
            <div className={FooterStyle.contact}>
            <h2>Contact</h2>
                <ul>
                    <li>Why Travlog</li>
                    <li>patner with us</li>
                    <li>FAQ'S</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className={FooterStyle.meetUs}>
            <h2>Meet US</h2>
                <ul>
                    <li>+00 92 123456789</li>
                    <li>info@travlog.com</li>
                    <li>205. R Street, New York</li>
                    <li>BD23200</li>
                </ul>
            </div>
           </div>

        </div>
    );
}

export default Footer;