import React from "react";
import "../styles/landingPage.css";
import Carpenter3 from "../images/Carpenter3.png";
import glance1 from "../images/glance1.jpeg";
import glance2 from "../images/glance2.jpeg";
import glance3 from "../images/glance3.jpeg";
import glance4 from "../images/glance4.jpeg";
import Rec1 from "../images/Rec1.png";
import Rec2 from "../images/Rec2.png";
import Rec3 from "../images/Rec3.png";
import Rec4 from "../images/Rec4.png";
import Rec5 from "../images/Rec5.png";
import Rec from "../images/Rec.png";
import Group from "../images/Group.png";
import quote from "../images/quote.jpeg";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <body className="">
      {/* -------------------header-section------------------- */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <h1 id="navH1" className="first">
            HandyFix
          </h1>
          <div className="collapse navbar-collapse " id="">
            <ul className="navbar-nav mr-auto" id="navId">
              <li className="nav-item" id="navLi">
                Company
              </li>
              <li className="nav-item" id="navLi">
                About Us
              </li>
              <li className="nav-item" id="navLi">
                Contact Us
              </li>
            </ul>
          </div>
          <p>Login</p>
         <Link to="/SignUp" id="SignupP">Sign Up</Link> 
        </nav>
      </header>
      <main>
        {/* -------------------section-1------------ */}
        <div className="row" id="main1">
          <div className="col">
            <h1>
              Hire a <span id="span1">Trusted Artisan</span> in your
              neighbourhood
            </h1>
            <p>
              Our platform offers you the best and verified artians around you
              at very affordable prices.
            </p>
            <button className="button1" id="SignupP">Book Now</button>
          </div>
          <div className="col" id="carpenter">
            <img src={Carpenter3} alt="" />
          </div>
        </div>
        {/* ----------------section-2---------------- */}
        <div id="glance">
          <h2 id="glanceH1">HandyFix at a Glance</h2>
          <div className="row" id="glance-sec">
            <div className="col">
              <img src={glance1} width={108} alt="" />
              <p>
                <b>1. </b> Tell us what you need
                <br />
                to be done - repairs, installation, cleaning e.t.c.
              </p>
            </div>
            <div className="col">
              <img src={glance2} width={108} alt="" />
              <p>
                <b>2. </b>Input your correct details
                <br /> Location, payment methpod, job date e.t.c
              </p>
            </div>
          </div>
          <div className="row" id="glance-sec2">
            <div className="col">
              <img src={glance3} width={108} alt="" />
              <p>
                <b>3. </b> Our matching algorithm identifies and
                <br />
                shows you the best available & verified
                <br />
                workers in your neighborhood for the
                <br />
                Job. All you have to do is select your <br />
                preferred artisan.
              </p>
            </div>
            <div className="col">
              <img src={glance4} width={108} alt="" />
              <p>
                <b>4. </b> Tell us what you need
                <br /> to be done - repairs, installation, cleaning e.t.c.
              </p>
            </div>
          </div>
        </div>
        {/* -----------section-3-------------------- */}
        <div className="container-fluid" id="section-3">
          <div className="row" id="section-3-Para">
            <div className="col" id="section-3-first">
              <h2>
                Explore Our Category
                <br /> Of Sevices
              </h2>
              <p>
                We provide varying levels of service with technically skilled
                personnel who are trained to achieve the highest level of
                customer
              </p>
              <p>
                satisfaction. Our services include: Carpentry, Laundry,
                Electricals, Plumbing, Generator repairs, Air conditioner
                repairs e.t.c
              </p>
              <button className="button2" id="SignupP">Explore</button>
            </div>
            <div className="col" id="section-3-Se">
              <div className="" id="Rec-First">
                <img src={Rec1} width={230} height={200} alt="" />
                <img src={Rec2} width={230} height={200} alt="" />
              </div>
              <div id="Rec-second">
                <img src={Rec3} width={250} height={200} alt="" />
              </div>
              <div id="Rec-third">
                <img src={Rec4} width={250} height={200} alt="" />
                <img src={Rec5} width={250} height={200} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------- section-4 ----------------- */}
        <div id="bluesection">
          <h2>Why HandyFix</h2>
          <div className="row" id="bluesection2">
            <div className="col" id="fistBlue">
              <div id="blueRow">
                <button></button>
                <div>
                  <h5>Quality Assurance</h5>
                  <p>
                    Our artisans registered with HandyFix
                    <br /> have professional certifications authenticated
                    <br /> that have been and are in line
                    <br /> with regulatory guidelines.
                  </p>
                </div>
              </div>
              <div id="blueRow">
                <button></button>
                <div>
                  <h5>Quality Assurance</h5>
                  <p>
                    Our artisans registered with HandyFix
                    <br /> have professional certifications authenticated
                    <br /> that have been and are in line
                    <br /> with regulatory guidelines.
                  </p>
                </div>
              </div>
              <div id="blueRow">
                <button></button>
                <div>
                  <h5>Quality Assurance</h5>
                  <p>
                    Our artisans registered with HandyFix
                    <br /> have professional certifications authenticated
                    <br /> that have been and are in line
                    <br /> with regulatory guidelines.
                  </p>
                </div>
              </div>
            </div>
            <div className="col" id="fistBlue">
              <div id="blueRow">
                <button></button>
                <div>
                  <h5>Quality Assurance</h5>
                  <p>
                    Our artisans registered with HandyFix
                    <br /> have professional certifications authenticated
                    <br /> that have been and are in line
                    <br /> with regulatory guidelines.
                  </p>
                </div>
              </div>
              <div id="blueRow">
                <button></button>
                <div>
                  <h5>Quality Assurance</h5>
                  <p>
                    Our artisans registered with HandyFix
                    <br /> have professional certifications authenticated
                    <br /> that have been and are in line
                    <br /> with regulatory guidelines.
                  </p>
                </div>
              </div>
              <div id="blueRow">
                <button></button>
                <div>
                  <h5>Quality Assurance</h5>
                  <p>
                    Our artisans registered with HandyFix
                    <br /> have professional certifications authenticated
                    <br /> that have been and are in line
                    <br /> with regulatory guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------section-5----------------------- */}
        <div className="row" id="group">
          <div className="col">
            <img src={Group} alt="" />
          </div>
          <div className="col" id="secondGroup">
            <h5>
              Highly-quality <br />
              <span id="professional">professionals</span>
            </h5>
            <p>Hire fully vetted HandyFix Pros for every need.</p>
            <p>
              Good quality artisans are so hard to find! At LaborHack,
              <br /> we are solving that problem. All our artisans are curated
              <br /> from a handpicked list of trained, tested, and certified
              artisans.
            </p>
          </div>
        </div>
        {/* ---------------section-6----------------------- */}
        <div className="row" id="Artisan-sec">
          <h2>What Our Customers Say</h2>
          <div className="row" id="white-backgound">
            <div className="col" id="womanImage">
              <img src={Rec} alt="" />
            </div>
            <div className="col" id="womanImage">
              <img src={quote} width={100} height={100} alt="" />
              <p>
                Relocation felt ordinary until I needed a plumber!!! Being new
                to the city, I didn’t know who I could trust. A colleague
                recommended HandyFix and that was all I needed. Not only was the
                plumber very efficient, he was prompt and very professional. I
                highly recommend.
              </p>
              <p>
                <span id="blueP">Christy Ikechukwu</span> <br />
                Calabar, Nigeria.
              </p>
            </div>
          </div>
        </div>
        {/* ---------section-7----------------- */}
        <div id="MainJoin">
          <div className="row" id="Join">
            <div className="col" id="joinword">
              {" "}
              <h2>Join Our Community Of HandyFix Pros</h2>
              <p>Earn more money by working as an artisan on Handyfix</p>
              <button className="button2">Register</button>
            </div>
            <div className="col">
              <img src={Carpenter3} width={250} height={300} alt="" />
            </div>
          </div>
        </div>
        {/* ------------------section-8------------- */}
        <footer>
          <div className="row" >
            <div className="col" id="fooot">
              <ul>
             <li>Service</li>
                <li>Company</li>
                <li>Laundry</li>
                <li>Painting</li>
                <li>Electricals</li>
                <li>Plumbing</li>
              </ul>
              </div>
              <div className="col" id="fooot">
              <ul>
              <li>Company</li>
                <li>About</li>
                <li>Terms of service</li>
                <li>Privacy Policy</li>
                <li>FAQs</li>
                <li>Get Started</li>
              </ul>
              </div>
              <div className="col" id="fooot">
              <ul>
              <li>Resources</li>
                <li>Reviews</li>
                <li>Media</li>
                <li>Our Artisans</li>
                <li>Security</li>
              </ul>
              </div>
              <div className="col" id="fooot">
              <ul>
                <li>Contact</li>
                <li>support@handyfix.com</li>
                <li>080001283773893803</li>
              </ul>
              </div>
              <div className="row" id="foooter">
                <div className="col"><h3>HandyFix</h3>
                </div>
               <div className="col"> <p>Copyright 2021. Handyfix. All rights reserved.</p></div>
              </div>
          </div>
        </footer>
      </main>
    </body>
  );
};
export default Landingpage;
