<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 3000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>
);
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './Tienda';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


>>>>>>> 4934fdf95e4744cfa83a7bd70011ae0878f4b5b3
