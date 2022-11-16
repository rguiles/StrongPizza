import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../app.css";
import axios from 'axios';

class toppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toppings: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/api/toppings')
      .then(res => {
        this.setState({
          toppings: res.data
        })
      })
      .catch(err =>{
        console.log('Error from toppingList');
      })
  };


  render() {
    const toppings = this.state.toppings;
    console.log("PrintBook: " + toppings);
    let toppingList;

    if(!toppings) {
      toppingList = "there is no book record!";
    } else {
      toppingList = toppings.map((topping, k) =>
        <newTopping topping={topping} key={k} />
      );
    }

    return (
      <div className="toppingList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Available Toppings</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-topping" className="btn btn-outline-warning float-right">
                + Add New Topping
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {toppingList}
          </div>
        </div>
      </div>
    );
  }
}

export default toppingList;