import React from "react";
import Navbar from "../assets/navbar";
import "../styles/service.css";
import Image1 from "../images/Image1.svg";
import Image2 from "../images/Image2.svg";
import Image3 from "../images/Image3.svg";
import Image4 from "../images/Image4.svg";
import image5 from "../images/image5.svg"

const Service = () => {
    return (
        <body>
        <Navbar/>
        <div className="Heroservice">
        <p>Artisans </p>
        <p>For your every need</p>
        </div>
        <div className="row" id="service" >
          <h4>Services</h4>
          <div className="col-md-2"><div  id="image1"></div><div>Mechanic</div></div>
          <div className="col-md-2"><div  id="image1"></div><div>Mechanic</div></div>
          <div className="col-md-2"><div  id="image1"></div><div>Mechanic</div></div>
          <div className="col-md-2"><div  id="image1"></div><div>Mechanic</div></div>
          <div className="col-md-2"><div  id="image1"></div><div>Mechanic</div></div>
          <div className="col-md-2"><div  id="image1"></div><div>Mechanic</div></div>
          <div></div>
        </div>
        <div className="row" id="rating"> 
        <h4>Ratings</h4>
          <div className="col-md-2"><img src= {Image1} /><p>Star</p></div>
          <div className="col-md-2"><img src= {Image2}/></div>
          <div className="col-md-2"><img src= {Image3}/></div>
          <div className="col-md-2"><img src= {Image4}/></div>
          <div className="col-md-2"><img src= {image5}/></div>
          <div className="col-md-2"><img src= {Image4}/></div>
        </div>
        </body>      
    )
}
export default  Service