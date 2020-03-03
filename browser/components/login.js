import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

class Login extends Component {
  login() {
    //Authenticating the login by getting the data from the database
  }
  render() {
    return (
      <div>
        <h1 className="label">LOGIN</h1>
        <br />
        <br />
        <h2>EMAIL</h2>
        <br />
        <input
          type="text"
          onChange={e => {
            this.setState({ email: e.target.value });
          }}
        ></input>
        <br />
        <br />
        <h2>PASSWORD</h2>
        <br />
        <input
          type="text"
          onChange={e => {
            this.setState({ password: e.target.value });
          }}
        ></input>
        <br />
        <br />
        <br />
        <Link to="/minions">
          <button onClick={() => this.login()}>Login</button>
        </Link>
        <br />
        <br />
        <p>Don't have an account, Sigup then.</p>
        <br />
        <Link to="/signup">
          <button onClick={() => this.login()}>Signup</button>
        </Link>
      </div>
    );
  }
}

export default Login;