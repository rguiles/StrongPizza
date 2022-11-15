import React from "react";
import logo from "./pizza.png";
import "./app.css";

// const express = require("express");
// const App = express();
// const connectDB = require(".//config/db");
// connectDB();

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <a
          className="App-link"
          href="https://strongpizza.com"
          target="_blank"
          rel="noopener noreferrer"
        >
         Make Pizza
        </a>
      </header>
    </div>
  );
}

export default App;
