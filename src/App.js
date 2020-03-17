import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import styles from "./Mystyle.module.css";

class App extends Component {
  render() {
    const myStyle = {
      backgroundColor: "#cccc",
      display: "flex"
    };

    return (
      <div className="App">
        {/* using import stylesheet */}
        <button className="App-header">Learn React</button>
        <br></br>

        {/* Inline styling & as camelcased property */}
        <button
          style={{
            backgroundColor: "#20fe",
            display: "flex"
          }}  
        >
          Learn React
        </button>
        <br></br>

        {/* using js object */}
        <button style={myStyle}>Learn React</button>
        <br></br>

        {/* using module.css */}
        <button className={styles.buttonStyle}>Learn React</button>
      </div>
    );
  }
}

export default App;
