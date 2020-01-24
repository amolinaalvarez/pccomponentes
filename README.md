# PcComponentes login tests using Cypress

The goal of this repository is to carry out the functional tests for PcComponentes login. Cypress will be used as a framework in order to achieve this goal.

## Set up tests

The only requirement is to have installed Node.js. Once this requirement is satisfied:

`npm install`

## Set up environment variables

In order to set up the envioronment variables copy the `cypress.env.json.dist` and update the values using credentials for a valid user. These crendentials will be used to check the login process works correctly.

## Run Tests

To open the Cypress Test Runner in interactive mode, use the following command:

`npm run cypress:open`

To run Cypress tests to completion, use the following command:

`npm run cypress:run`

## Run ES LInt

ESLint is also available, you can use it by typing the following:

`npm run lint`