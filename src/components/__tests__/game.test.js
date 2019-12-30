import React from 'react'
import Board from '../board'
import {shallow, mount} from 'enzyme'
import { BrowserRouter as Router} from 'react-router-dom'

it('renders without crashing', () => {
  shallow(<Board />);
});

it('renders game status correctly', () => {
  const wrapper = mount( <Router> <Board/> </Router>)
  const firstPlayer = wrapper.find('div.board').children().first().text()
  expect(firstPlayer).toEqual(`Next player: X`)

  const button = wrapper.find('button.board__box').first()
  button.simulate('click')
  const secondPlayer = wrapper.find('div.board').children().first().text()
  expect(secondPlayer).toEqual(`Next player: 0`)

  //player 2
  const turn2 = wrapper.find('button.board__box').at(1)
  turn2.simulate('click')
  //player 1
  const turn3 = wrapper.find('button.board__box').at(4)
  turn3.simulate('click')
  //player 2
  const turn4 = wrapper.find('button.board__box').at(5)
  turn4.simulate('click')
  //player 1
  const turn5 = wrapper.find('button.board__box').at(8)
  turn5.simulate('click')
  const winner = wrapper.find('div.board').children().first().text()
  expect(winner).toEqual('Winner: x!')
})