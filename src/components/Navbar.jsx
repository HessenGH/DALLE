import {Link} from 'react-router-dom';

const Navbar = () => {
  return ( 
    <div className="nav">
      <img src="../assets/openai-avatar.png" alt=""/>
      <h3>DALL<sup>.</sup>E</h3>
      <div className="nav-item">
      <p><Link to="/">Home</Link></p>
      <p><Link to="/About/">About</Link></p>
      <p><Link to="/SignIn/">Sign in</Link></p>
      <p><Link to="/signup/" className="signup">Sign up</Link></p>
      </div>
    </div>
   );
}
 
export default Navbar;