import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <diV className="footer">
            
        <div className="footer1">
        <Link to="/">  <p>OpenAi 2015-2022</p></Link>
        <Link to="/"> <p>Privacy Policy</p></Link>
        <Link to="/"> <p>Terms of Use</p></Link>
        </div>
        <div className="footer2">
        <Link to="/"><img src="./assets/twitter.jpg" alt="twitter"/></Link>
         <Link to="/"><img src="./assets/facebook.png" alt="facebook"/></Link>
         <Link to="/"><img src="./assets/instagram.jpg" alt="instagram"/></Link>
         <Link to="/"><img src="./assets/github.png" alt="github"/></Link>
        </div>
        </diV>
     );
}
 
export default Footer;