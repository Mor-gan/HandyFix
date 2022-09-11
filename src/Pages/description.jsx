import React, { useState } from "react";
import camera from "../images/camera.svg";
import DatePicker from "react-datepicker";
import "../styles/description.css";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
// import TimePicker from 'react-dropdown-timepicker';

const Description = () => {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  const [startDate, setStartDate] = useState(new Date());

  return (
    <body>
      <div className="container">
        <div className="row" id="upperLink">
          <div className="col-md-6"> <button id="descriptionLink1">Description</button></div>
          <div className="col-md-6"><button  id="descriptionLink2">Location</button></div>
        </div>
        <form className="formD">
          <div className="selectJob">
            <h4>Please choose the service you need.</h4>
            <select className="selectoptions" placeholder="Electrician">Electrician
              <option>Electrician</option>
              <option>Mechanic</option>
              <option>Hair stylist</option>
              <option>Barber</option>
              <option>Chef</option>
            </select>
          </div>
          <div className="selectJob">
            <h4>Task description *</h4>
            <textarea></textarea>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h4 className="uploadh4">Upload a picture of your task</h4>
              <img alt="photo" src={camera} />
              <input
                className=""
                onChange={uploadToClient}
                textColor="white"
                type="file"
              />
            </div>
            <div className="col-md-2">
              <h4>Job Date</h4>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          <button className="classButton" type="submit">CONTINUE</button>
        </form>
      </div>
    </body>
  );
};
export default Description;
