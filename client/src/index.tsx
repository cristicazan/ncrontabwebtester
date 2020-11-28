import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
  <SnackbarProvider maxSnack={3} preventDuplicate
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}>
    <App />
  </SnackbarProvider>,
  document.getElementById('root')
);

reportWebVitals();
