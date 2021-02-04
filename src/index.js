import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MetaTags from "react-meta-tags";

//document.title = "Goncalo Duarte";

ReactDOM.render(
  <React.StrictMode>
    <MetaTags>
      <title>Gonçalo Duarte</title>
      <meta name="description" content="Gonçalo Duarte personal portfolio" />
      <meta property="og:title" content="Gonçalo Duarte" />
    </MetaTags>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
