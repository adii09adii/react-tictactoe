// Game/game.test.js
//
import React from 'react'
import { Box } from '../board-box'
import { shallow, mount } from 'enzyme'


it('renders without crashing', () => {
  shallow(<Box />);
});


/*
it('calls onClick event on click of a board square', () =>{
  let squares = Array(9).fill(null)
  const onClick = jest.fn();
  let wrapper = mount(<Board squares={squares} onClick={onClick}/>);
  wrapper.find('button.square').first().simulate('click', { button: 0 });
  expect(onClick).toBeCalledWith(0)
})
*/

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
