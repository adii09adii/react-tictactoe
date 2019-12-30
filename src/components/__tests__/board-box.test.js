// Game/game.test.js
//
import React from 'react'
import { Box } from '../board-box'
import { shallow, mount } from 'enzyme'
import { BrowserRouter as Router} from 'react-router-dom'

it('renders without crashing', () => {
  shallow(<Box />);
});


/*
it('calls onClick event on click of a board square', () =>{
  let squares = Array(9).fill(null)
  const onClick = jest.fn();
  let wrapper = mount( <Router><Box squares={squares} onClick={onClick}/></Router>);
  wrapper.find('button.Board__box').first().simulate('click');
  expect(onClick).toBeCalledWith(0)
})
*/



