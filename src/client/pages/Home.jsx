import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

const Home = () => {
  return (
    <>
      <h1>React-SSR Boilerplate</h1>
      <p>
        This is a minimal SSR boilerplate with ReactJS, NodeJS, HapiJS, Webpack.
      </p>
      <Button onClick={() => console.log("Click Works === Hydrate Works")}>
        Click !
      </Button>
      <p>Use console to validate Events / Hydrate is working... </p>
      <h2>Features & Examples: </h2>
      <p>
        Example routing: <a href="/test">Test</a>
      </p>
    </>
  );
};

export default Home;
