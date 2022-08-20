import React from "react"
import "../styles/homepage.css"
import { Link } from "react-router-dom";
import avi from "../images/avi.svg";
import notification from "../images/clarity_notification-outline-badged.svg";


const Navbar = () => {
  const data ={
    name : "John doe"
  }
     return (
        <>
      <nav className="navbar navbar-expand-lg navbar-light ">
          <h1 id="navH1" className="first">
            HandyFix
          </h1>
          <div className="collapse navbar-collapse " id="">
            <ul className="navbar-nav mr-auto" id="navId">
              <li className="nav-item" id="navLi">
                Home
              </li>
              <li className="nav-item" id="navLi">
               Service
              </li>
              <li className="nav-item" id="navLi">
                Pricing
              </li>
            </ul>
           
          </div>
          <img id="navImage" src={notification} />
          <img id="navImage"  src={avi} />
          <p id="navImage">{data.name}</p>
        </nav>
        </>
     );
};
export default Navbar