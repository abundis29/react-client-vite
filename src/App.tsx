
import React from "react";
import { Example, SideBox } from "@v2";
// import { SideBox } from "@v2";
import "./App.scss";
import logo from "./logo.svg";
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img width={300} src={logo} className="App-logo" alt="logo" />
        <SideBox msg="prop message" className="right" />
        <Example />
      </header>
    </div>
  );
};
export default App;
