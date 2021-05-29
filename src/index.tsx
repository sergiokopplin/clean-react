import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'presentation/components/router/router';
import 'presentation/styles/global.module.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
