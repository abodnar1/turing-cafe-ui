import React from "react";
import "./ReservationsContainer.css";
import ReservationCard from "../ReservationCard/ReservationCard";

const ReservationsContainer = ({ allReservations }) => {

  const reservations = allReservations.map((reservation) => {
    return (
      <ReservationCard
        id={reservation.id}
        key={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        numGuests={reservation.number}
      />
    )
  });

  return (
    <div className="all-cards">
      {reservations}
    </div>
  )
};

export default ReservationsContainer;
