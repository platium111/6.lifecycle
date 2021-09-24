import React, { useState } from "react";
import "./App.css";
import StateInitiliseFn from "./StateInitialiseFn";

function App() {
  const [appCount, setAppCount] = useState(0);

  console.log("--------------");
  console.log("App rendering ");
  console.log("Count = ", appCount);

  return (
    <div className="App">
      <p>App count {appCount} </p>
      <StateInitiliseFn />
    </div>
  );
}

export default App;
