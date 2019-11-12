# SSR Boilerplate

A simple, light-weight Server Side Rendering(SSR) boilerplate with NodeJS ReactJS, [HapiJS](https://hapi.dev/), Webpack.

### Prerequisites

node v.10+
yarn

Basic understanding of ES6, React, Node and Webpack

## Getting Started

Clone / download the repo and run: 

```
yarn install

yarn start
```

View the app from http://localhost:3000/

## Key Features:

This boilerplate is simple and highly customizable for your web app needs. Simply fork the code and play around customize for your needs. Below are few key features of this app. 

### Server-Side Rendering (SSR)
SSR is a great feature that renders a page on the server instead of browser. What does that mean? Simple, A fully rendered HTML is served in the initial load which makes the page load faster and more meaningful. But the subsequent pages and user interactions will directly happen on the client-side. 

For SSR setup review **src/server** to understand how it's done. I've used a combination of React features(ReactDOMServer, ReactDOM.Hydrate, ReactRouterDOM) NodeJS and HapiJS instead of express to achieve this. Read more about HapiJS [here](https://stackoverflow.com/questions/30469767/how-do-express-and-hapi-compare-to-each-other).

There are many Frameworks like [Next.js](https://nextjs.org/features/server-side-rendering) [Razzle](https://www.telerik.com/blogs/getting-started-with-razzle-an-alternative-ssr-framework-for-react) that gives SSR out of the box with many more features. Do checkout if you don't need any customization. 

### Bundling / Splitting with Webpack
Webpack generates / updates the JS bundles for client and server side whenever changes are detected. Refer the **config** folder and **package.json** to understand the webpack setup.

### Docker Container
- Docker needs to be installed and running
- Install the latest version of Node v12+ is preferred
- Use terminal and run the below 

```
docker-compose up
```
This application will run at port 9001 in host machine. Update docker-compose.yml to change the default port or any other settings.

