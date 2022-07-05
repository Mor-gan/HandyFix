import React from "react";
import "../styles/Signup.css";
import { Link } from "react-router-dom";
import Sign from "../images/Sign.jpeg";

const Signup = () => {
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
            type="text"  name="firstName" placeholder="Firstname"
            />
             <input 
            type="text"  name="lastName" placeholder="Lastname"
            />
            <input 
            type="text"  name="email" placeholder="@Email"
            />
            <input
             type="text"  name="password" placeholder="Password"
            />
            <input
             type="text"  name="confirmPassword" placeholder="Confirm Password"
            />
             <button>Create account </button>
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
