import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      date: "",
      time: "",
      number: "",
      error: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitRes = (event) => {
    event.preventDefault();

    if (!this.state.name || !this.state.date || !this.state.time || !this.state.number) {
      return this.setState({error: "Please fill out all fields"})
    }

    const newRes = {
      id: Date.now(),
      name: this.state.name,
      date: this.state.date.slice(5).replace("-", "/"),
      time: this.state.time,
      number: parseInt(this.state.number)
    };
    console.log(newRes)
    this.props.addRes(newRes);
    this.clearForm();
  }

  clearForm = () => {
    this.setState({
      name: "",
      date: "",
      time: "",
      number: ""
    });
  };

  render() {
    return (
      <>
        <form className="form-container">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={event => this.handleChange(event)}
          />
          <input
            type="date"
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
            type="text"
            name="number"
            placeholder="Number of guests"
            value={this.state.number}
            onChange={event => this.handleChange(event)}
          />
          <button className="make-res-button" onClick={event => this.submitRes(event)}>Make Reservation</button>
        </form>
        <p className="form-error-message">{this.state.error}</p>
      </>
    )
  }
};

export default Form;
