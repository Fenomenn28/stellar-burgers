import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import burgerIngredients from './services/reducers/burger-ingredients';
import burgerConstructor from "./services/reducers/burger-constructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const rootReducer = combineReducers({
  burgerIngredients,
  burgerConstructor
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
}) 

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  </DndProvider>,
  document.getElementById("root")
);


reportWebVitals();



