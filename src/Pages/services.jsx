import React from "react";
import Navbar from "../assets/navbar";
import "../styles/service.css"
// import Rec1 from "../images/Rec1.png";
// import Rec2 from "../images/Rec2.png";
// import Rec3 from "../images/Rec3.png";
// import Rec4 from "../images/Rec4.png";
// import Rec5 from "../images/Rec5.png";
// import Rec from "../images/Rec.png";

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
        </body>      
    )
}
export default  Service