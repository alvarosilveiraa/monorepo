import React from 'react';
import ReactDOM from 'react-dom';
import {App} from '@developer-ui/app';
import {reportWebVitals} from './report-web-vitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
