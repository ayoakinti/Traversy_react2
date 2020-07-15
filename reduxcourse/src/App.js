import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Posts from "./Components/Posts";
import Postform from "./Components/Postform";
// import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
      <Postform />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
