import React, { Component } from 'react';
import ReservationsContainer from "../ReservationsContainer/ReservationsContainer";
import Form from "../Form/Form";
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allReservations: [],
      error: "",
      deleteMessage: ""
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
    fetch("http://localhost:3001/api/v1/reservations", {
      method: "POST",
      body: JSON.stringify(newRes),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      if(res.ok) {
        this.setState({allReservations: [...this.state.allReservations, newRes]});
        return res.json();
      } else {
        console.log("Error");
        return this.setState({error: "Error, please try again."});
      }
    })
  };
  
  deleteRes = (id) => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: "DELETE",
    })
    .then(res => {
      if(res.ok) {
        const filteredReservations = this.state.allReservations.filter(reservation => reservation.id !== id);
        this.setState({
          allReservations: filteredReservations,
          deleteMessage: "Your reservation was deleted"
        });
        console.log("reservation deleted");
        return res.text();
      } else {
        console.log("No reservation with that id found. Please try again");
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
        {this.state.deleteMessage && <p className="delete-message">{this.state.deleteMessage}</p>}
        <div className='resy-container'>
          <ReservationsContainer allReservations={this.state.allReservations} deleteRes={this.deleteRes}/>
        </div>
      </div>
    )
  }
}

export default App;
