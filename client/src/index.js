import React from 'react';
import ReactDOM from 'react-dom/client';
import Axios from "axios";

//local imports
import reportWebVitals from './reportWebVitals';
import App from './App';

//style imports
import "./styles/custom.scss";
import "./styles/style.css";

Axios.defaults.baseURL = process.env.REACT_APP_API_URL;

//import "./styles/style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
