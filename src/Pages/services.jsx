import React from "react";
import Navbar from "../assets/navbar";
import "../styles/service.css";
import Image1 from "../images/Image1.svg";
import Image2 from "../images/Image2.svg";
import Image3 from "../images/Image3.svg";
import Image4 from "../images/Image4.svg";
import image5 from "../images/image5.svg";
import StarRating from "../assets/star";

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
          <div className="col-md-2"><div  id="image1"></div><div id="Imagetext">Mechanic</div></div>
          <div className="col-md-2"><div  id="image1"></div><div>Mechanic</div></div>
          <div className="col-md-2"><div  id="image1"></div><div>Mechanic</div></div>
          <div className="col-md-2"><div  id="image1"></div><div>Mechanic</div></div>
          <div className="col-md-2"><div  id="image1"></div><div>Mechanic</div></div>
          <div className="col-md-2"><div  id="image1"></div><div>Mechanic</div></div>
          <div></div>
        </div>
        <div className="row" id="rating"> 
        <h4>Ratings</h4>
          <div className="col-md-2" id="ratinng"><img src= {Image1} /><p>Amaka</p><b>Hair stylist</b><StarRating/> </div>
          <div className="col-md-2" id="ratinng"><img src= {Image2}/><p>Nonso</p><b>Fashion designer</b><StarRating/> </div>
          <div className="col-md-2" id="ratinng"><img src= {Image3}/><p>Paul</p><b>Photographer</b><StarRating/> </div>
          <div className="col-md-2" id="ratinng"><img src= {Image4}/><p>Precious mako</p><b>Chef</b><StarRating/> </div>
          <div className="col-md-2" id="ratinng"><img src= {image5}/><p>Timbert</p><b>Hair stylist</b><StarRating/> </div>
          <div className="col-md-2" id="ratinng"><img src= {Image4}/><p>Precious mako</p><b>Hair stylist</b><StarRating/> </div>
        </div>
        </body>      
    )
}
export default  Service