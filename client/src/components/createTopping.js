import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../app.css";
import axios from "axios";

class createTopping extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      title: "",
      stock: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: this.state.id,
      title: this.state.title,
      stock: this.state.stock,
    };

    axios
      .post("http://localhost:3001/api/toppings", data)
      .then((res) => {
        this.setState({
          id: "",
          title: "",
          stock: "",
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in createTopping!");
      });
  };

  render() {
    return (
      <div className="createTopping">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Toppings
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add New Topping</h1>
              <p className="lead text-center">Create Topping</p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name of Topping"
                    name="title"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Replenished Amount"
                    name="stock"
                    className="form-control"
                    value={this.state.stock}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default createTopping;
