import React, { useState } from "react";

const StateInitialiseFn = () => {
  // [learn] print out one time with default value from function
  const [state, setState] = useState(() => {
    return {
      age: 26,
      name: "Chan",
    };
  });

  console.log("StateInitialiseFn rendering ", state);

  // [learn] using function inside setState with previousState
  const handleChange = () => {
    setState((previousState) => ({
      ...previousState,
      age: previousState.age + 1,
    }));
  };

  return (
    <div>
      <p>StateInitialiseFn component</p>
      <button onClick={handleChange}>Increase Age using previous age</button>
    </div>
  );
};

export default StateInitialiseFn;
