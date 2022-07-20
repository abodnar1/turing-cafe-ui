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
        number={reservation.number}
      />
    )
  });

  return (
    <div>
      <h1>CONTAINER!</h1>
      {reservations}
    </div>
  )
};

export default ReservationsContainer;
