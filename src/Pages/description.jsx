import React, { useState } from "react";
import camera from "../images/camera.svg"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Description = ()  => {
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
    // const [startDate, setStartDate] = useState(new Date());
    return (<>
    <div>
        <form>
            <div>
            <h4>Please choose the service you need.</h4>
       <select>hi</select>
            </div>
       <div>
       <h4>Task description *</h4>
       <textarea></textarea>
       </div>
       <div>
      <h4>Upload a picture of your task</h4>
      <div>
        <img alt="bbbb" src={camera}/>
      <input className=""  onChange={uploadToClient}  type="file"  />
      </div>
      <div>
        <h4>Job Date</h4>
         <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
      </div>
       </div>
        </form>
    </div>
    
    </>)
}
export default Description