import React from 'react';
import ReactDOM from 'react-dom';
import AddResponse from './AddResponse';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddResponse />, div);
  ReactDOM.unmountComponentAtNode(div);
});
