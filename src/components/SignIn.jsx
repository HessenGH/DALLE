import { Link } from "react-router-dom";
const SignIn = () => {
    return ( 
        <div className="containersignup">
            <img 
             className="signupimg"
             src="../assets/openai-avatar.png"
             alt="avtar"/>
            <h2>LogIn</h2>
            <form className="form">
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
        </div>
     );
}
 
export default SignIn;