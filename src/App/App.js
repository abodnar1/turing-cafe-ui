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
          return this.setState({error: "Error, please try again"})
        }
      })
      .then(data => this.setState({allReservations: data}))
      .catch(err => {
        console.log("Error");
        return this.setState({error: "Error, please try again"})
      })
  }

  addRes = (newRes) => {
    this.setState({allReservations: [...this.state.allReservations, newRes]});
    console.log(newRes);
  };

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addRes={this.addRes}/>
        </div>
        <div className='resy-container'>
          <ReservationsContainer allReservations={this.state.allReservations}/>
        </div>
      </div>
    )
  }
}

export default App;
