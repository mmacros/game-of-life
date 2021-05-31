# Conway´s Game of Life

This is a Rust Webassembly example of Conway´s Game of Life.
This example is based on the [rustwasm book](https://rustwasm.github.io/book/) example. 

## How to install

First you must have installed Rust, you can do it from the [Rust-lang page](https://www.rust-lang.org/learn/get-started),
and [Node.js](https://nodejs.org/).
Once installed, you must install the Rust Wasm Pack, you can download it from the [rust-wasm page](https://rustwasm.github.io/wasm-pack/installer/).
Then run:

```sh
# install Cargo generate if not installed
cargo install cargo-generate

#install node.js modules
npm install

#use cargo build to pull all dependencies
cargo build
```

## How to run in debug mode

```sh
# Builds the project and opens it in a new browser tab. Auto-reloads when the project changes.
npm start
```

## How to build in release mode

```sh
# Builds the project and places it into the `dist` folder.
npm run build
```

## How to run unit tests

```sh
# Runs tests in Firefox
npm test -- --firefox

# Runs tests in Chrome
npm test -- --chrome

# Runs tests in Safari
npm test -- --safari
```

## What does each file do?

* `Cargo.toml` contains the standard Rust metadata. You put your Rust dependencies in here. You must change this file with your details (name, description, version, authors, categories)

* `package.json` contains the standard npm metadata. You put your JavaScript dependencies in here. You must change this file with your details (author, name, version)

* `webpack.config.js` contains the Webpack configuration. You shouldn't need to change this, unless you have very special needs.

* The `js` folder contains your JavaScript code (`index.js` is used to hook everything into Webpack, you don't need to change it).

* The `src` folder contains your Rust code.

* The `static` folder contains any files that you want copied as-is into the final build. It contains an `index.html` file which loads the `index.js` file.

* The `tests` folder contains your Rust unit tests.
