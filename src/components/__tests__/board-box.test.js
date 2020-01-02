// Game/game.test.js
//
import React from 'react'
import { Board } from '../board'
import { Box } from '../board-box'
import { shallow, mount } from 'enzyme'
import { BrowserRouter as Router} from 'react-router-dom'

it('renders without crashing', () => {
  shallow(<Box />);
});

it('checks onClick on boxes', () => {
	shallow(<Board />);
	let boxMounted = shallow(<Board/>);
	boxMounted.instance().handleBoxClick();
});


it('calls onClick event on click of a board square', () => {
	let boxes = Array(9).fill(null);
	const mockCallBack = jest.fn();
	let wrapper = mount( <Router><Board boxes={boxes} onClick={mockCallBack}/></Router>);
	wrapper.find('button.board__box').first().simulate('click');
	expect(mockCallBack.mock.calls.length).toEqual(0);

})


