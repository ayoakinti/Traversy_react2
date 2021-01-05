import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Posts from "./Components/Posts";
import Postform from "./Components/Postform";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Postform />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
