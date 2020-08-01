import React, { Component } from "react";
import Fire from "./Fire";
import Home from "./components/Home";
import Login from "./components/Login";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  authListener() {
    Fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  // wheather uer logged in or not

  componentDidMount() {
    this.authListener();
  }

  render() {
    return <div className="App">{this.state.user ? <Home /> : <Login />}</div>;
  }
}

export default App;
