import React, { useCallback, useState } from "react";
import "./App.css";
import StateInitiliseFn from "./StateInitialiseFn";
import Clock from "./Clock";
import { TestCallbackFn } from "./TestCallbackFn";
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

  const printCountCb = useCallback(() => {
    console.log("printCountCb", appCount);
  }, [appCount]);

  return (
    <div className="App">
      <p>App count {appCount} </p>
      <StateInitiliseFn />
      <Clock />
      {/* Dùng để xem truyền useCallback memorised vào xem render như nào? Thường sẽ thay đổi vì
          useCallback dựa trên deependency, mà thường fn sẽ tương tác với state
       */}
      <TestCallbackFn printCountCb={printCountCb} />
      <button onClick={() => setAppCount((count) => count + 1)}>
        Change App count from App.tsx
      </button>
    </div>
  );
}

export default App;
