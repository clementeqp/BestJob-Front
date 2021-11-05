import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//STYLES
import "./styles/index.css";
import "./styles/oferta.css";
import "./components/pages/navbar/navbar.css";
import "./components/pages/searchbar/searchbar.css";
import "./components/pages/footer/footer.css";
import "./styles/queries.css";
import "./components/pages/toogle/toogle.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
