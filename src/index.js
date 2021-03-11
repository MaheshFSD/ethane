
import { store } from "./Redux/store";
import { Provider } from "react-redux";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from "./Context/AuthContext";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
