import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";
import data, { signalsData } from "./links";
import { signalsDataTest } from "./testFile";
function App() {
  const [state, setState] = useState([]);
  let dummy = [];
  // useEffect(() => {
  (async () => {
    let data = await signalsDataTest;
    setState(data);
    dummy = data;
    console.log(state);
  })();
  // }, [state]);
  console.log("this is dummy");
  console.log(dummy);
  return (
    <div className="App">
      <br />
      {state.length > 0 && state[0].cryptoSymbol}
      <br />
      Hi
    </div>
  );
}

export default App;
