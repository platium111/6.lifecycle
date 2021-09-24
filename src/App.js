import React, { useState } from "react";
import "./App.css";
import StateInitiliseFn from "./StateInitialiseFn";
import Clock from "./Clock";
/**
 * Lifecycle
 *  + <App> will be passed into render() -> its constructor is called -> render() is called and when DOM is updated in browser
 *    -> componentDidMount() is called -> state changed -> render() is called again
 *  + only when Clock is removed from DOM, componentWillUnMount will be called
 *
 * @returns
 */
function App() {
  const [appCount, setAppCount] = useState(0);

  console.log("--------------");
  console.log("App rendering ");
  console.log("Count = ", appCount);

  return (
    <div className="App">
      <p>App count {appCount} </p>
      <StateInitiliseFn />
      <Clock />
    </div>
  );
}

export default App;
