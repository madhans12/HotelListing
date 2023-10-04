import React from "react";
import { Link } from "react-router-dom";
import "./HotelNav.css";

const HotelNav = () => {
  return (
    <div className="navbar">
      <div className="nav">
        <Link to="/"></Link>
        <button className="btn1">
          <Link to="/london" className="link1">
            {" "}
            London
          </Link>
        </button>
        <button className="btn1">
          <Link to="/newyork" className="link1">
            New York
          </Link>
        </button>
        <button className="btn1">
          {" "}
          <Link to="/chicago" className="link1">
            Chicago
          </Link>
        </button>
        <button className="btn1">
          {" "}
          <Link to="/texas" className="link1">
            Texas{" "}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HotelNav;
