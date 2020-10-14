import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";

import App from "./components/app"
import reducers from "./reducers";

ReactDOM.render(
  <Provider store = {createStore(reducers)}>
    <div className = "ui container">
      <App/>
    </div>
  </Provider>,
  document.getElementById('root')
);
