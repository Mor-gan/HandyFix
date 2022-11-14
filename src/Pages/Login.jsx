import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory()
  return (
    <body>
      <div className="row" id="">
      <div className="col-md-6" id="imageman">
        <div id="login"></div>
          {/* <img src={Sign} height={"800px"} alt="" /> */}
        </div>
        <div className="col-md-5" id="secondDivv">
            <h2 >Welcome</h2>
            <p>Login to your account</p>
            <form>
            <input 
            type="text"  name="email" placeholder="@Email" required
            />
            <input
              name="password" placeholder="Password"  type="password" 
            />
             <div className="row" id='loginlink'>
            <Link to="" className="col-md-6">  Remember me</Link> 
            <Link to="" className="col-md-6"> Forgot password</Link> 
            </div>
             <button onClick={() => history.push('/homepage') }>Log in </button>
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
