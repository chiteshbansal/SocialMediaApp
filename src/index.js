import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { Provider} from "react-redux";
import { createStore, applyMiddleware, compose,combineReducers } from "redux";
import thunk from 'redux-thunk';
import PostsReducer from './Store/reducers/posts';
import Auth from './Store/reducers/auth';
import userProfile from './Store/reducers/UserProfile';
import Friends from './Store/reducers/Friends';
const rootReducer = combineReducers({
  post:PostsReducer,
  UserProfile:userProfile,
  auth:Auth,  
  Friends:Friends,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
