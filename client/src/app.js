import React from "react";
import logo from "./pizza.png";
import "./app.css";

// import { BrowserRouter as Router, Route } from "react-router-dom";
// import createTopping from "./components/createTopping";
// import toppingList from "./components/toppingList";

// const routes = require('../../server/routes/api/toppings')
// App.use('/api', routes);

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
        <h1>Strong Pizza Management</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://strongpizza.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Topping Inventory
        </a>
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

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Route exact path='/' component={toppingList} />
//           <Route path='/create-topping' component={createTopping} />
//         </div>
//       </Router>
//     );
//   }
// }

export default App;
