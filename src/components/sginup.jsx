import { Link } from "react-router-dom";

const Signup = () => {
    return ( 
        <div className="containersignup">
            <img 
             className="signupimg"
             src="../assets/openai-avatar.png"
             alt="avtar"/>
            <h2>Create your account</h2>
            <form className="form">
            <label for="username"  className="labelsignup">Username:</label>
            <input type="text" 
            className="input"
            id="username" 
            placeholder="username"/>
            <label for="email" className="labelsignup">Email:</label>
            <input type="text" 
            className="input"
            id="email" 
            placeholder="email"/>
            <label for="password" className="labelsignup">Password:</label>
            <input type="text" 
            className="input"
            id="password" 
            placeholder="password"/>
            <button className="buttonsignup">Register</button>
            </form>
            <Link to="/signin/" className="link">have an account? sign in</Link>
        </div>
     );
}
export default Signup;



