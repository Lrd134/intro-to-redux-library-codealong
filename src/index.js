import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux"; /* code change */
import counterReducer from "./reducers/counterReducer.js";
import App from "./App";
import "./index.css";

const store = createStore(counterReducer); /* code change */

ReactDOM.render(<App store={store}/>, document.getElementById("root"));