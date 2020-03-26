# Webpack Boilerplate

This repository serves as a template for starting React apps. Within it is support for `webpack dev server` hot reloading, css `imports` and loading, `eslint` with `airbnb` and `prettier` config rules and formatting. Additionally, it contains a template directory structure and starting file for React projects.

**Fork this repository for use in starting your own apps.**.

## Key Concepts

- Webpack Loaders
  - Webpack loaders take files and process them into different file outputs. They can allow you to transform syntax, import things like css into your html, etc. Loaders take an input and produces an output bundle
- Babel Presets
  - Babel presets provide a set of rules that babel uses to transform syntax. For example, a babel preset can be used to transform esNext syntax into es5.

## Project Dependencies

### Production

- Axios
  - Axios is used as the core request library. It has a promised-based API
- Flux
  - Flux is the state management solution for the application
- React
  - Contains the building blocks for React components
- ReactDOM
  - While React provides the building blocks for the React application, ReactDOM provides the utilities for rendering components in the actual DOM. This is separate from React because server-side React code and React Native code, etc. don't need to be rendered on an HTML DOM.

### Development

- @babel/core
  - The core engine for the babel project. This handles all of the transformations. It uses presets to tell it how to transform certain sets of syntax.
- @babel/preset-react
  - A babel preset that the core babel engine uses to transform jsx into es5 JavaScript
- @babel/preset-env
  - This babel preset is used to transform esNext syntax into es5 JavaScript
- babel-loader
  - Webpack needs loaders that tell it how to process files and turn them into a bundle. The babel-loader tells webpack how to work with babel
- webpack
  - The core webpack bundling engine
- webpack-cli
  - A command line interface for interfacing with `webpack`. You can pass webpack specific config files through `webpack-cli`

##### Eslint Dependencies

- eslint
  - The core `eslint` engine: a JavaScript linter to find and fix problems
- eslint-config-airbnb
  - This dependency installs the airbnb eslint config that is extended within the `.eslintrc.json` file
- eslint-plugin-import, eslint-plugin-jsx-ally, eslint-plugin-react, eslint-plugin-react-hooks
  - Peer dependencies required by the eslint-config-airbnb dependency.
- eslint-config-prettier
  - A prettier config file that is extended both to disable all eslint settings that conflict with prettier and create custom prettier rules
- eslint-plugin-prettier
  - A plugin thats used to allow eslint to format files with prettier

## Webpack Configuration

### Concepts

- rule.test
  - Contains a regular expression that webpack will test filenames against. If the regex matches, webpack will use the rules defined within the matching section
- rule.use
  - A list of loaders that webpack will use when processing files of the type matching the section's test regex
- rule.exclude
  - Exclude files of any type with file paths that start with the provided string or match the provided regex
