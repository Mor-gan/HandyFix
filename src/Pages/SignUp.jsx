import React from "react";
import "../styles/Signup.css";
import { Link } from "react-router-dom";
import Sign from "../images/Sign.jpeg";
import formInput from "../hooks/signUp";
import { useHistory } from 'react-router-dom';

const Signup = () => {
const history = useHistory()
const [firstName, binderFirstname, resetFirstname] = formInput()
const [lastName, binderLastname, resetLastname] = formInput()
const [email, binderEmail, resetEmail] = formInput() 
const [password, binderPassword, resetPassword] = formInput()
const [confirmPassword, bindercomfirmPassword, resetcomfirmPassword] = formInput()
return (
    <body>
      <div className="row" id="imagesignup">
        <div className="col" id="imageman">
          <img src={Sign} alt="" />
        </div>
        <div className="col" id="secondDiv">
            <h2>Sign Up</h2>
            <p>Welcome to our community</p>
            <p2>Account type</p2>
            <div id="rowUser">
              <button>User 1</button>
              <button> User 2</button>
            </div>
            <form>
            <input 
            type="text"  name="firstName" value={firstName} placeholder="Firstname" minLength={3} required
            {...binderFirstname}
            />
             <input 
            type="text"  name="lastName" value={lastName} placeholder="Lastname" minLength={3} required
            {...binderLastname}
            />
            <input 
            type="email" value={email} name="email" placeholder="@Email" {...binderEmail}
            />
            <input
             type="password" {...binderPassword} value={password} name="password" placeholder="Password" 
            />
            <input
             type="password" {...bindercomfirmPassword} value={confirmPassword} name="confirmPassword" placeholder="Confirm Password"
            />
             <button type="submit" onClick={() => history.push('/Login') }>Create account </button>
            </form>
            <div className="lastdiv">
            <div>
             <p>By creating an account, you agree to the <span className="spann">Terms & Conditions</span>  and the <span>Privacy policy</span> </p>
           </div>
           <div>
             <p>Already have an account?<span className="spann"> <Link to ="/Login"> Log In</Link></span></p>
           </div>
            </div>
           
          </div>
      </div>
    </body>
  );
};
export default Signup;
