import React from "react";

const Home = () => {
  return (
    <>
      <h1>React-SSR Boilerplate</h1>
      <p>This is a minimal SSR boilerplate with ReactJS, NodeJS, HapiJS, Webpack.</p>
      <button onClick={() => console.log("Click Works === Hydrate Works")}>Click !</button>
      <p>Use console to validate Events / Hydrate is working... </p>
    </>
  );
};

export default Home;