import React from 'react';
import * as ReactDOM from 'react-dom/client';

const div = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

const container = document.querySelector('div[id="root"]');

const root = ReactDOM.createRoot(container);
root.render(div);
