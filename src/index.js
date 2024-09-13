import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { store } from './features/store';
// import userReducer from "./features/User";

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
