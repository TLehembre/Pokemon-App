import React from 'react';
import ReactDOM from 'react-dom';
import Pokedex from './Pokedex';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pokedex />, div);
  ReactDOM.unmountComponentAtNode(div);
});