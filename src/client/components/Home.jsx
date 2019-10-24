import React from "react";

const Home = () => {
  return (
    <>
      <h1>React-SSR Boilerplate</h1>
      <p>This is a minimal SSR boilerplate with ReactJS, NodeJS, HapiJS, Webpack.</p>
      <button onClick={() => console.log("Click Works === Hydrate Works")}>Test Events</button>

      <a href="https://github.com/giri-jeedigunta/SSR-Boilerplate-with-React-Hapi">Git Repo</a>
    </>
  );
};

export default Home;
