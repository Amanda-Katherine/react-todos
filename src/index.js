import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import App from './App';
import listReducer from './reducers/listReducer'

const initialState = {lists: [{name: "Grocery", id: 1}, {name: "Work", id: 2}, {name: "Errands", id: 3}]}
const store = createStore(listReducer, initialState, composeWithDevTools())

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
