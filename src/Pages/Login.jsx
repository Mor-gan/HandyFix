import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import Sign from "../images/Sign.jpeg";

const Login = () => {
  return (
    <body>
      <div className="row" id="">
      <div className="col-md-6" id="imageman">
          <img src={Sign} height={"800px"} alt="" />
        </div>
        <div className="col-md-5" id="secondDivv">
            <h2 >Welcome</h2>
            <p>Login to your account</p>
            <form>
            <input 
            type="text"  name="email" placeholder="@Email"
            />
            <input
             type="text"  name="password" placeholder="Password"
            />
             <div className="row" id='loginlink'>
            <Link to="" className="col-md-6">  Remember me</Link> 
            <Link to="" className="col-md-6"> Forgot password</Link> 
            </div>
             <button>Log in </button>
            </form>
           
            <div className="lastdiv">
             <p>No account yet? <span className="spann"> Sign up?</span></p>
            </div>
           
          </div>
      
      
      </div>
    </body>
  );
};
export default Login;
