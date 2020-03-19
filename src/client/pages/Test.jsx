import React from "react";

const Test = () => {
  return (
    <>
      <h1>React-SSR Boilerplate</h1>
      <p>This is a test route. helloo</p>
      <button onClick={() => console.log("Click Works === Hydrate Works")}>
        Click !
      </button>
    </>
  );
};

export default Test;
