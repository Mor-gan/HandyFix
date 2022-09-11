import React, { useState } from "react";
import camera from "../images/camera.svg";
import DatePicker from "react-datepicker";
import "../styles/description.css";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
// import TimePicker from 'react-dropdown-timepicker';

const Description = () => {
    const details = {
service : "Electricians",
name: "Grey Gold",
amount:50000
    }
  return (
    <body>
      <div className="container">
        <div className="row" >
            <div className="col-md-4" id="bluedetails">
                <h5 className="bluecard">ORDER DETAILS</h5>
                <div className="bluecard">
                    <h6>SERVICE REQUIRED</h6>
                    <p>{details.service}</p>
                </div>
                <div className="bluecard">
                    <h6>NAME OF ARTISAN</h6>
                    <p>{details.name}</p>
                </div>
                <div className="bluecard">
                    <h6>DATE</h6>
                    <p>Dateee</p>
                </div>
                <div className="bluecard">
                    <h6>TOTAL AMOUNT</h6>
                    <p>{details.amount}</p>
                </div>
            </div>
            <div className="col-md-8">
                <div className="row">
                <div className="col-md-5"> <button id="descriptionLink1">Description</button></div>
          <div className="col-md-5"><button  id="descriptionLink2">Location</button></div>
                </div>
            </div>
         
        </div>
      </div>
    </body>
  );
};
export default Description;
