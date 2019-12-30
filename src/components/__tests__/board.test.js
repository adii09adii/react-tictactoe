// Game/game.test.js
//
import React from 'react'
import { Board } from '../board'
import { shallow, mount } from 'enzyme'
import { BrowserRouter as Router} from 'react-router-dom'
//import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  shallow(<Board />);
});

it('renders without crashing', () => {
  let squares = Array(9).fill(null)
  shallow(<Board squares={squares}/>);
});

/*
it('calls onClick event on click of a board square', () =>{
  let squares = Array(9).fill(null)
  const onClick = jest.fn();
  let wrapper = mount( <Router><Board squares={squares} onClick={onClick}/></Router>);
  wrapper.find('button.board__box').first().simulate('click');
  expect(onClick).toBeCalledWith()
})

*/