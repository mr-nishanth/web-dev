import ReactDOM from "react-dom/client";
import "./index.css";

import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "state";
import App from "App";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
