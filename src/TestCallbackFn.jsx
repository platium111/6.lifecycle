import React from "react";

export const TestCallbackFn = React.memo(({ printCountCb }) => {
  console.log("TestCallbackFn render");
  return <button onClick={printCountCb}>trigger printcallback fn</button>;
});
