// Game/game.test.js
//
import React from 'react'
import { Board } from '../board'
import { shallow } from 'enzyme'


it('renders without crashing', () => {
  shallow(<Board />);
});

it('renders without crashing', () => {
  let squares = Array(9).fill(null)
  shallow(<Board squares={squares}/>);
});

// Board/board.test.js
/*
import React from 'react'
import Board from './board'
import {shallow} from 'enzyme'
it('renders without crashing', () => {
  shallow(<Board />);
});
// Square/square.test.js
import React from 'react'
import Square from './square'
import {shallow} from 'enzyme'
it('renders without crashing', () => {
  shallow(<Square/>);
});
*/
