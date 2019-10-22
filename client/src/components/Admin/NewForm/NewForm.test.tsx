import React from 'react';
import ReactDOM from 'react-dom';
import NewForm from './NewForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
