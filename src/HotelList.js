import React from "react";
import "./HotelList.css";
import PlaceIcon from "@mui/icons-material/Place";
import BusinessIcon from "@mui/icons-material/Business";
import KingBedIcon from "@mui/icons-material/KingBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import ControlCameraTwoToneIcon from "@mui/icons-material/ControlCameraTwoTone";

const HotelList = ({ hotel }) => {
  return (
    <div className="container">
      <div className="box">
        <div className="row">
          <img src={hotel.img} alt="building" className="image" />

          <div className="place">
            <PlaceIcon /> 8558 paker st
          </div>
          <div>
            <h4>{hotel.Address}</h4>
          </div>
          <div className="row2">
            <div className="details">
              <BusinessIcon /> <p>3 Room</p>
            </div>
            <div className="details">
              <KingBedIcon /> <p>4 Bed</p>
            </div>
            <div className="details">
              <BathtubIcon /> <p>1 Bath</p>
            </div>
            <div className="details">
              <ControlCameraTwoToneIcon />
              <p>732 sft</p>
            </div>
          </div>
          <hr />
          <div className="row3">
            <div className="details1">
              <h1>$7,255</h1>/month
            </div>
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
