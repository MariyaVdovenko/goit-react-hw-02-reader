import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/Reader/App';
import publications from './components/Reader/publications.json';

ReactDOM.render(<App items={publications} />, document.getElementById('root'));
