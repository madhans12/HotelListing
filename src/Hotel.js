import React, { useState } from "react";
import HotelList from "./HotelList";
import { HotelData } from "./HotelData";

const Hotel = () => {
  const [loadMore, setLoadMore] = useState(6);
  const Hotel = HotelData.hotel0;

  const HandleLoadmore = () => {
    setLoadMore(12);
  };
  const HandleLoadless = () => {
    setLoadMore(6);
  };
  return (
    <div className="box">
      {Hotel.map((data) => (
        <div key={data.id}>
          {data.id <= loadMore ? <HotelList hotel={data} /> : " "}
        </div>
      ))}
      {loadMore === 6 ? (
        <div className="btn2">
          <button className="btn3" onClick={HandleLoadmore}>
            SHOW MORE
          </button>
        </div>
      ) : (
        <div className="btn2">
          <button className="btn3" onClick={HandleLoadless}>
            SHOW LESS
          </button>
        </div>
      )}
    </div>
  );
};

export default Hotel;
