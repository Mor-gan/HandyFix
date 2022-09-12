import React, { useState } from "react";
import card from "../images/card.svg";
import visa from "../images/visa.svg";
import visacard from "../images/visacard.svg";
import imagee from "../images/image 9.svg";
import "../styles/description.css";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";


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
            <div className="col-md-7">
                <div className="row">
                <div className=""><h2>PAYMENT DETAILS</h2></div>
                <form className="formPayment">
                  <div className="cardimage"> <img src={card} /></div> 
                  <div className="row" id="cardinput">
                    <label className="col-md-3" for="Card">Card number </label>
                    <input placeholder="card number" className="numberinput"></input>
                  </div>
                  <div className="row">
                  <div className="col-md-6">
                    <label for="Card">Card number </label>
                    <input placeholder="Janet Herbert" className="input1"></input>
                  </div>
                  <div className="col-md-3">
                    <label for="Card">Expiry Date </label>
                    <input placeholder="MM/YY" className="input1"></input>
                  </div>
                  <div className="col-md-2">
                    <label for="Card">CVV </label>
                    <input className="input1"></input>
                  </div>
                  <p>By clicking the ‘Pay Now’ button, I hereby accept the Terms & Conditions of payment.</p>
                  </div>
                  <div className="row" id="payment_button">
                  <button className="col-md-4">Cancel</button>
                  <button className="col-md-4">Pay now</button>
                  </div>
                  <div>
                    <img src={visa}/>
                    <img src={visacard}/>
                    <img src={imagee}/>
                </div>
                </form>
              
                </div>
            </div>
         
        </div>
      </div>
    </body>
  );
};
export default Description;
