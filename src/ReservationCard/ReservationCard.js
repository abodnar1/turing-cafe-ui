import React from "react";
import "./ReservationCard.css";

const ReservationCard = ({ id, name, date, time, numGuests }) => {
  return (
    <div className="card-wrapper">
      <h2 className="name">{name}</h2>
      <p className="card-details">{date}</p>
      <p className="card-details">{time} PM</p>
      <p className="card-details">Number of guests: {numGuests}</p>
      <button className="cancel-button">Cancel</button>
    </div>
  )
};

export default ReservationCard;
