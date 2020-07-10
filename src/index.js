import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose,combineReducers } from "redux";
import thunk from 'redux-thunk';
import PostsReducer from './Store/reducers/posts';
import Auth from './Store/reducers/auth';

const rootReducer = combineReducers({
  post:PostsReducer,
  auth:Auth,
})
const store = createStore(rootReducer,applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
