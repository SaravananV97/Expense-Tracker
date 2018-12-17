import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import mainReducer from "./Store/Reducers/reducer";
import formReducer from "../src/Store/Reducers/formReducer";
import {createStore, compose} from "redux";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
}


const rootReducer = combineReducers({main: mainReducer, form: formReducer});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));
const current_state = store.getState();
const app = (
    <Provider store = {store}>
    <BrowserRouter>
        <App current_state = {current_state}></App>
    </BrowserRouter>
    </Provider>
    );



ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
