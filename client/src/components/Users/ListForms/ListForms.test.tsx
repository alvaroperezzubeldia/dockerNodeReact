import React from 'react';
import ReactDOM from 'react-dom';
import ListForms from './ListForms';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListForms />, div);
  ReactDOM.unmountComponentAtNode(div);
});
