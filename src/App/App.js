import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
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
      .then(data => this.setState({reservations: data}))
      .catch(err => {
        console.log("Error");
        return this.setState({error: "Error, please try again"})
      })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>

        </div>
      </div>
    )
  }
}

export default App;
