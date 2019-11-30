import React from 'react';
import ReactDOM from 'react-dom';

import Reader from './components/Reader/Reader';
import publications from './components/Reader/publications.json';

ReactDOM.render(
  <Reader items={publications} />,
  document.getElementById('root'),
);
