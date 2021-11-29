import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";
import data, { signalsData } from "./links";
function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await signalsData;
      setState(data);
      console.log(state);
    })();
  }, [state]);
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
