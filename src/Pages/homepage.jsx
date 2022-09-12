// import React from "react";
import "../styles/homepage.css";
import Searchbar from "../assets/serachbar";
import home from "../images/home.svg";
import history from "../images/history.svg";
import message from "../images/message.svg";
import avi from "../images/avi.svg";
import wallet from "../images/wallet.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Dashboard = () => {
  const artisan = {
    name: "John Doe",
    firstName: "John",
    ImageURL: "",
    walletBalance: "0.00",
    completeTask: 20,
    pendingTask: 15,
  };
//   const history = useHistory()
  return (
    <>
      <div className="row ">
        <div className="col-md-2 "  id="myTopnav">
          <div>
            <h4>HandyFix</h4>
          </div>
          <div className="side_link">
            <img src={home} alt=""/> 
            <Link to="/">
              Home
            </Link>
          </div>
          <div className="side_link">
            <img src={history} alt=" " />
            <a to href="/services "  >
              Services
            </a>
            
          </div>
          <div className="side_link">
            <img src={history} alt="" />
            <a to href="/description "  >
              Description
            </a>
          </div>
          <div className="side_link">
            <img src={message} alt="" />
            <Link to href="/descrition">
              Complaint
            </Link>
          </div>
        </div>
        <div className="col-md-10" id="mainDashbord">
          <div className="row">
            <div className="col-md-6">
              <Searchbar />
            </div>
            <div className="col-md-1" id="notification"></div>
            <div className="col-md-1">
              {artisan.ImageURL}
              <img src={avi} />
            </div>
            <div className="col-md-1">{artisan.name}</div>
          </div>
          <div>
            <div className="welcomeNote">
              Hello<strong> {artisan.firstName}</strong>
              <p>What are you searching for?</p>
            </div>
            <div className="row" id="walletDiv">
              <div className="col-md-3" id="mainWallet">
                <div className="firstWallet">
                  <img src={wallet} id="walletImg"/>
                  Wallet 
                </div>
                <div className="walletbalance">{artisan.walletBalance}</div>
                <div className="oyawithdraw">
                  <button>Withdraw</button>
                </div>
              </div>
              <div className="col-md-3">
                <div className="row">
                  <div className="pendingTask">
                    Pending Task{" "}
                    <span className="taskNO"> {artisan.pendingTask}</span>
                  </div>
                  <div className="completeTask">
                    Completed Task{" "}
                    <span className="taskNO"> {artisan.completeTask}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
