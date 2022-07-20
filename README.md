# Front-end Test using React

As required in the, the project tried to follow the instructions as below:

- Two different routes
- The possibility to order by price implemented on the SPA side
- A way to request different parts by type
- The ability to request different search queries on typing
- Create a public repo to share your work with us
- An accurate README to show us how to run your app
- You should not change this service

## Reflection

This was a SPA project which consists of the main page where it renders every part at the first load, then it calls the api every time the user wants to filter parts either by types or simply querying any information in the input field.   

It uses 2 routers, one to navigate from the main page to the page containing just the details about the part selected and another one to redirect the user back to the main page.

For requests to the api service was used Axios library and it has 3 simple testing cases

## Installation

Clone down this repository. You will need `node`, `npm` or `yarn` installed globally on your machine.

```bash
yarn
yarn start
```

or

```bash
npm install
npm run start
```

To Run Test Suite:  

```bash
npm test
```
or
 
```bash
yarn test
```


Also before using the application you should run the mock api server an then run the React aplication, it should start at:

`localhost:3000` 

## About request to the API

I realized that making a GET request passing just the letter 'm' as a parameter will return the whole parts list back, I didn`t take a look to check what is going on, but I used httpie to make the same GET request and its result was the same, it returned the whole list back.