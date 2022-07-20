import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      date: "",
      time: "",
      numGuests: null
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form className="form-container">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />

        <input
          type="text"
          name="date"
          placeholder="Date (mm/dd)"
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />

        <input
          type="text"
          name="time"
          placeholder="Time"
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />

        <input
          type="number"
          name="numGuests"
          placeholder="Number of guests"
          value={this.state.numGuests}
          onChange={event => this.handleChange(event)}
        />

        <button className="make-res-button-">Make Reservation</button>
      </form>
    )
  }
};

export default Form;
