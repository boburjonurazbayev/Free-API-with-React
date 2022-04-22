import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { Provider } from "./context/Authenticaion.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
