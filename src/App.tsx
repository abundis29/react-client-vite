
import React from "react";
import { SideBox, Example } from "./components/v2";
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SideBox msg="prop message" className="right" />
        <Example />
      </header>
    </div>
  );
};
export default App;
