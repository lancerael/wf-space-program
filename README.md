# wf-space-program

[![Tests](https://github.com/lancerael/wf-space-program/workflows/Tests/badge.svg?branch=main)](https://github.com/lancerael/wf-space-program/actions?query=workflow%3A%22Tests%22)
[![Coverage Status](https://coveralls.io/repos/github/lancerael/wf-space-program/badge.svg?branch=main)](https://coveralls.io/github/lancerael/wf-space-program?branch=main)
[![License](https://badgen.net/github/license/lancerael/wf-space-program)](https://github.com/lancerael/wf-space-program/blob/master/LICENSE)

Component library for WF space program

## Overview

I have shown the early stages of how I might set up a component library.  The project is currently set up as a single application, but I have taken some steps to show how it would be converted to a monorepo, with each component published to npm to be imported in isolation.

## Getting started

Check out the repo and run the following commands:

* `yarn install` - install the project and dependencies
* `yarn dev` - launch the server and fake API so you can access the demo in the browser
* `yarn lint` - to verify the style of the code
* `yarn tdd` - (or `yarn test`) to run the unit tests
* `yarn bdd` - to run the integration tests
* `yarn sb` - to launch storybook

## Code Structure

Code is split heirarchically using atomic design principles. We have atoms and molecules, meaning the smaller pieces of the AdvancedButton (button, loader and tooltip) can be reused inside other more advanced components.  There are also seperate folders for helper functions and constants.

The typical structure of a component is:

- `index.ts` - to see named files in the ide without lengthening the import
- `Component.tsx` - the component code
- `Component.types.ts` - the typescript types and interfaces for the component
- `Component.test.ts` - the unit tests for the component
- `Component.style.tsx` - styled component code
- `Component.styles.types.ts` - typescript types and interfaces for the style
- `Component.stories.ts` - storybook doc examples

NOTES: I have set up the `Button` component as a standalone package, to show how the monorepo might look. On a successful PR, we could use the CI/CD pipleines to build and publish a new NPM package for each component. I have not added 100% unit test coverage, due to time constraints.  But I have added this under suggested enhancements.  Basic behaviour of the AdvancedButton is also covered by the BDD tests.

## Features

- Fully written in TypeScript (minimal enforcement for rapid prototyping)
- Yarn workspaces for monorepo (example - Button)
- Uses Vite over Webpack for speed and simplicity
- Uses eslint for code quality
- Uses Jest and RTL for unit testing, including accessibility tests
- Uses Cypress for behaviour driven tests
- Code coverage reporting with coveralls badge
- Uses Github Actions for CI/CD (example - pre-merge only - create PR from development to master)
- Added simple express fake API for more control of back end and for offline bdds

## Suggested Enhancements

- Conversion to monorepo
- Unit test coverage to 100%
- BDDs to test all acceptence criteria (may not be used in component library if sufficient overlap with TDD suite)
- Replace Jest with Vitest 
- Stricter rules around usage of TypeScript
- Thorough commentary to generate TS Docs eg TypeDoc
- CI/CD pipelines to publish individual components on npm 
- Create a real API and use pipelines to deploy to AWS Lambda / API-GW
- Automate versioning & changelogs in pipelines
- Enforce code coverage in pre-merge pipline
- Improve button/tooltip layout CSS for better responsiveness
