
import React from 'react'
import { Link } from 'react-router-dom'

// Import Storage object
import { Storage } from './../storage/storage'

// Import Box component
import { Box } from './board-box'

// Import utility functions
import * as utils from '../utils/functions'

import {
  setWinner,
  resetState,
  updateStateValues,
  setNewHistory, defaultState} from './state-functions';

// Create Board component
export class Board extends React.Component {
    constructor(props) {
    super(props)

        // Initialize component state
        this.state = {
            boxes: Array(9).fill(null),
            history: [],
            match: [],
            xIsNext: true
        }
    }

    // Create instance of Storage object
    storage = new Storage()

    // Handle click on boxes on the board.
    handleBoxClick(index) {
        // get current state of boxes
        const boxes = this.state.boxes.slice()

        // Get current state of history
        let history = this.state.history

        // Stop the game if board contains winning combination
        if (utils.findWinner(boxes) || boxes[index]) {
            return
        }

        // Stop the game if all boxes are clicked (filled)
        if(utils.areAllBoxesClicked(boxes) === true) {
            return
        }

        // Mark the box either as 'x' or 'o'
        boxes[index] = this.state.xIsNext ? 'x' : 'o'

        // Add move to game history
        history.push(this.state.xIsNext ? 'x' : 'o')

        // Update component state with new data
    this.setState({
            boxes: boxes,
            history: history,
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        })
    }

    jumpTo(step) {
        this.setState({
          stepNumber: step,
          xIsNext: (step % 2) === 0
        });
  }

    // Handle board restart - set component state to initial state
    handleBoardRestart = () => {
        this.setState({
            boxes: Array(9).fill(null),
            history: [],
            match: [],
            xIsNext: true
        })
    }

    // Handle board rematch - set component state to initial state
    handleBoardRematch = () => {
        this.setState({
            boxes: Array(9).fill(null),
            history: [],
            xIsNext: true
        })
    }


    // Handle board rewind moves 
    handleBoardRewind = () => {
        //console.log("this.state.history.length"+this.state.history.length);
        //console.log("this.state.boxes"+this.state.boxes);

        while(this.state.boxes.pop() == null)
        {
            //this.state.boxes.pop();
            //console.log("check-------------"+this.state.boxes);
        }
        this.state.history.pop();


        this.setState({
            xIsNext: !this.state.xIsNext
        })
    }

   

    render() {
        // Get winner (if there is any)
    const winner = utils.findWinner(this.state.boxes)

        // Are all boxes checked?
    const isFilled = utils.areAllBoxesClicked(this.state.boxes)

        // Status message
    let status

        if (winner) {
            // If winner exists, create status message
            status = `Winner: ${winner}!`
             this.state.match.push(status)
            // Push data about the game to storage
            this.storage.update([`${winner} won`])
        } else if(!winner && isFilled) {
            // If game is drawn, create status message
            status = 'Game drawn -- Its a tie!!'

            // Push data about the game to storage
            this.storage.update(['Game drawn'])
        } else {
            // If there is no winner and game is not drawn, ask the next player to make a move
            status = `Next player: ${(this.state.xIsNext ? 'X' : '0')}`
        }

        return (
            <>
                {/* Link to scoreboard */}
                <Link to="/" className="board-link">Go back to scoreboard</Link>

                {/* The game board */}
                <div className="board-wrapper">
                    <div className="board">
                        <h2 className="board-heading">{status}</h2>

                        <div className="board-row">
                            <Box value={this.state.boxes[0]} onClick={() => this.handleBoxClick(0)} />

                            <Box value={this.state.boxes[1]} onClick={() => this.handleBoxClick(1)} />

                            <Box value={this.state.boxes[2]} onClick={() => this.handleBoxClick(2)} />
                        </div>

                        <div className="board-row">
                            <Box value={this.state.boxes[3]} onClick={() => this.handleBoxClick(3)} />

                            <Box value={this.state.boxes[4]} onClick={() => this.handleBoxClick(4)} />

                            <Box value={this.state.boxes[5]} onClick={() => this.handleBoxClick(5)} />
                        </div>

                        <div className="board-row">
                            <Box value={this.state.boxes[6]} onClick={() => this.handleBoxClick(6)} />

                            <Box value={this.state.boxes[7]} onClick={() => this.handleBoxClick(7)} />

                            <Box value={this.state.boxes[8]} onClick={() => this.handleBoxClick(8)} />
                        </div>
                    </div>

                    <div className="board-history">
                        <h2 className="board-heading">Moves history:</h2>

                        {/* List with history of moves */}
                        <ul className="board-historyList">
                            {this.state.history.length === 0 && <span>No moves to show.</span>}

                            {this.state.history.length !== 0 && this.state.history.map((move, index) => {
                                return <li key={index}>Move {index + 1}: <strong>{move}</strong></li>
                            })}
                        </ul>
                    </div>

                    {/* commenting for now
                    <div className="game">
                        <h2 className="board-heading"> Recent games:</h2> 

                            <li>
                            {winner &&  this.state.match}                           
                            </li>
                    </div>
                    */}

                    {/* Button to start new game */}
                    {<div className="board-footer">
                        <button className="btn" onClick={this.handleBoardRestart}>Start new game</button>

                    </div>}

                    {<div className="board-footer">
                        <button className="btn" onClick={this.handleBoardRestart}>Reset</button>
                    
                    </div>}

                    {<div className="board-footer">
                        <button className="btn" onClick={this.handleBoardRewind}>Rewind</button>
                    
                    </div>}
                    {/* commenting for now
                    {<div className="board-footer">
                        <button className="btn" onClick={this.handleBoardRematch}>New Match between Same players</button>
                    
                    </div>}
                    */}

                </div>
            </>
        )
    }
}

export default (Board)