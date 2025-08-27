import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import {configureStore} from "@reduxjs/toolkit"

import userReducer from "./featres/user"
import themeReducer from"./featres/Theme"
const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer  // connect your user slice
  }
})

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
