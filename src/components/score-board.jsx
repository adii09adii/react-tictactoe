///
// src/components/scoreboard.jsx
///
import React from 'react'
import { Link } from 'react-router-dom'

// Import Storage object
import { Storage } from './../storage/storage'

// Create Scoreboard component
export class Scoreboard extends React.Component {

  state = {
    scoreboard: [],
    result:[]
  }

    // After component mounts, load any data from local storage and update component state
  async componentDidMount() {
    let storage = await new Storage().getData()
    console.log('storage'+storage);

    this.setState({
      scoreboard: storage
    })

  }


  render() {

    // Get current state of history
        let scoreboard = this.state.scoreboard;
        scoreboard.push(this.state.scoreboard);
        console.log('scoreboard'+scoreboard);

    return (
      <div className="game">
        <h1>Recent games:</h1>

                {/* List with previous games */}
        <ul>
          {this.state.scoreboard.map((leader, key) => {
            return <li key={key}>{leader}</li>
          })}
        </ul>

                {/* Link to start new game */}
        <Link to="/board">
          <button className="btn">Start new game</button>
        </Link>
      </div>
    )
  }
}