import React, { Component } from 'react';
import ReservationsContainer from "../ReservationsContainer/ReservationsContainer";
import Form from "../Form/Form";
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allReservations: [],
      error: ""
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3001/api/v1/reservations")
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("Error");
          return this.setState({error: "Error, please try again."})
        }
      })
      .then(data => this.setState({allReservations: data}))
      .catch(err => {
        console.log("Error");
        return this.setState({error: "Error, please try again."})
      })
  }

  addRes = (newRes) => {
    this.setState({allReservations: [...this.state.allReservations, newRes]});
    console.log(newRes);

    return fetch("http://localhost:3001/api/v1/reservations", {
      method: "POST",
      body: JSON.stringify(newRes),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      if(res.ok) {
        return res.json();
      } else {
        console.log("Error");
        window.alert("Error, reservation not made. Please try again.")
        return this.setState({error: "Error, please try again."});
      }
    })
  };

  deleteRes = (id) => {
    const filteredReservations = this.state.allReservations.filter(reservation => reservation.id !== id);

    this.setState({allReservations: filteredReservations});

    return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: "DELETE",
    })
    .then(res => {
      if(res.ok) {
        res.text();
        console.log("reservation deleted");
        window.alert("Your reservation has been deleted.")
      } else {
        console.log("No reservation with that id found. Please try again");
        window.alert("No reservation with that id found. Please try again.")
        return this.setState({error: "No reservation with that id found. Please try again"});
      }
    })
  };

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addRes={this.addRes}/>
        </div>
        <div className='resy-container'>
          <ReservationsContainer allReservations={this.state.allReservations} deleteRes={this.deleteRes}/>
        </div>
      </div>
    )
  }
}

export default App;
