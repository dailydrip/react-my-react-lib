import React from "react";
import logo from "./logo.svg";

const App = props => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to our React Library</h2>
      </div>
      <p className="App-intro">
        This is our React Library Content
      </p>
    </div>
  );
};

export default App;
