import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      date: "",
      time: "",
      numGuests: ""
    };
  }

  render() {
    return (
      <form className="form-container">
        <input
          type="text"
          name="name"
          placehold="Name"
          value={this.state.name}
        />

        <input
          type="date"
          name="date"
          placehold="Date (mm/dd)"
          value={this.state.date}
        />

        <input
          type="text"
          name="time"
          placehold="Time"
          value={this.state.time}
        />

        <input
          type="number"
          name="numGuests"
          placehold="Number of guests"
          value={this.state.numGuests}
        />

        <button className="make-res-button-">Make Reservation</button>
      </form>
    )
  }
};

export default Form;
