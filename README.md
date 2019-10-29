# Minimal SSR with Webpack, React, Node and HapiJS

A simple, minimal and light-weight Server Side Rendering(SSR) boilerplate with ReactJS, HapiJS, Webpack. 

**SSR** brings a great improvement to key performance metrics like First Contentful Paint(FCP) and First Meaningful Paint(FMP). 

**HapiJS** Go through this detailed comparassion on Express vs Hapi https://stackoverflow.com/questions/30469767/how-do-express-and-hapi-compare-to-each-other


Clone / Download the repo run the below: 


```
yarn install

yarn start

```
**Docker containarization** Since some of the methods has been used in which is not going to support in lower node version, to up and running the application with higher node v12.x docker file has been introduced. To manage the local development and up and running the server through docker container, some steps to be followed below. 

```
after the above step done,

1. docker need to install in host system and docker demon need to up and runing

2. type command
$ docker-compose up

the application will run at the port 9001 in host system. to change the port for convenince need to update the docker-compose file. there is -ports has been defined as ymal format.
simply need to chage that for the particular host system.

```