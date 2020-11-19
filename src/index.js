import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import App from './App';
import listReducer from './reducers/listReducer'

const initialState = {lists: []}

// const rootReducer = combineReducers({lists: listReducer, users: userReducer})
const store = createStore(listReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools()))

console.log(store)

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
