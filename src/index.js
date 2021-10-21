import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import reportWebVitals from './reportWebVitals'


ReactDOM.render(
  <HashRouter>
    <Header title="Task" />
    <App />
    <Footer />
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();