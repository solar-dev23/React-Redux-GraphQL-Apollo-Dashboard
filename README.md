# Admin IDE Stack Packages

*Admin IDE packages to develop and test end to end; to use as packages or work independently.*

Purpose: 
---
The idea is to create modules for each package so it can work independently as well as integrated to another project as packages. 

Useful commands:
---
    lerna clean             - removes the node_modules directory from all packages. 
    npm start               - starts the web server and backend server
    npm run watch           - build the packages in watchmode (Useful for development)
    npm run lerna           - install external dependencies at the repo root so they're available to all packages.
    npm run build           - build all the packages
    npm install             - runs `lerna` and `build`
    lerna publish           - publishes packages in the current Lerna project. 

Files explained:
---    
It uses `lerna.json` for creating the packages structure. Under packages you can create different modules based on its usage. For example:

     packages                    - Has the packages to organize the codebase into multi-package repositories.
         sample-core             - Core interfaces of the packages which can be shared between server and client.
         sample-server-core      - Core interfaces and its implementation code for Server.   
         sample-client-core      - Core interfaces and its implementation code for Client.
         sample-client-redux     - Redux's reducers and actions are defined. Which may use `@sample\client-core` or `@sample\core`
         sample-client-react     - React pure components and containers are defined. 
         sample-graphql-client   - Graphql Quries and Mutation for Client.
         sample-graphql-schema   - Graphql Schema for Server.
         sample-apollo-server    - Backend Graphql Server which runs the server code. 
         sample-brwoser-server   - Front-end Client Server. This is useful to show demo of this package.
        index.spec.ts            - Tests file for main
        actions                  - Contains Actions to transform the state tree
            index.ts             - References all the exported actions
        reducers                 - Contains reducers, pure function with (s

## Getting Started

If you want to develop FullStack locally you must follow the following instructions:

* Fork or Clone this repository

* Install the project in your computer

```
git clone https://github.com/meanpeace52/React-Redux-GraphQL-Apollo-Dashboard
cd React-Redux-GraphQL-Apollo-Dashboard
npm install
```
to run server
you can run both the client and server together by 
```
npm start
```
The graphql server endpoints are
>http://localhost:3000/graphql

>http://localhost:3000/graphiql

The browser server endopoint is
>http://localhost:8080

If you want to run server independently
```
npm run start:server 
- or -
cd packages/sample-server
npm start
```
to run client server
```
npm run start:client
- or -
cd packages/sample-browser-server
npm start
```
to run build with watch. Useful for auto reloading changes into the server to be productive during development.
```
npm run watch
```



[lerna-clean]: https://github.com/lerna/lerna#clean
