# wf-space-program

[![Tests](https://github.com/lancerael/wf-space-program/workflows/Tests/badge.svg?branch=main)](https://github.com/lancerael/wf-space-program/actions?query=workflow%3A%22Tests%22)
[![Coverage Status](https://coveralls.io/repos/github/lancerael/wf-space-program/badge.svg?branch=main)](https://coveralls.io/github/lancerael/wf-space-program?branch=main)
[![License](https://badgen.net/github/license/lancerael/wf-space-program)](https://github.com/lancerael/wf-space-program/blob/master/LICENSE)

Component library for WF space program

## Overview

In building an AdvancedButton component, I have shown the early stages of how I might set up a component library.  The project is currently set up as a single application, but I have taken some steps to show how it would be converted to a monorepo, with each component able to be published to npm and imported in isolation.

## Getting started

Check out the repo and run the following commands:

* `yarn install` - install the project and dependencies
* `yarn dev` - launch the server and fake API so you can access the demo in the browser
* `yarn lint` - to verify the style of the code
* `yarn tdd` - to run the unit tests
* `yarn bdd` - to run the integration tests

There are also build and preview tasks, though they would be deprecated as the conversion to a monorepo is completed.  

## Atomic Structure

Code is split heirarchically into atoms and molecules, meaning the smaller pieces of the AdvancedButton (button, loader and tooltip) can be reused inside other more advanced components.  There is also a seperate folder for helper functions and constants.

The typical structure of a component is:

- `index.ts` - export so you can see named files without lengthening the import
- `Component.tsx` - the component code
- `Component.types.ts` - the typescript types and interfaces for the component
- `Component.test.ts` - the unit tests for the component
- `styles/Component.style.tsx` - styled component code, in a folder so it can have its own types
- `styles/Component.styles.types.ts` - typescript types and interfaces for the style

## Features

- Fully written in TypeScript
- Yarn workspaces for monorepo (example - Button)
- Uses Vite over Webpack for speed and simplicity
- Uses eslint for code quality
- Uses Jest and RTL for unit testing
- Uses Cypress for behaviour driven tests (may not be needed in monorepo, but I wanted to show how it works)
- Code coverage reporting with coveralls
- Uses Github Actions for CI/CD (example - pre-merge only)

## Future Work

- Complete conversion to monorepo and publish individual components on npm
- Complete unit test coverage to 100%