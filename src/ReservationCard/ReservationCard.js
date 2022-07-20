import React from "react";
import "./ReservationCard.css";

const ReservationCard = () => {
  return (
    <div className="card-wrapper">
      <h2 className="name">NAME</h2>
      <p className="card-details">DATE</p>
      <p className="card-details">TIME PM</p>
      <p className="card-details">NUMBER GUESTS</p>
      <button className="cancel-button">Cancel</button>
    </div>
  )
};

export default ReservationCard;
