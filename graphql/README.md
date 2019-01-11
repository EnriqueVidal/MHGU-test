[![Codeship Status for cloverinteractive/boilerplate-graphql](https://app.codeship.com/projects/23fb8ca0-f540-0136-2f32-1e71af04627f/status?branch=master)](/projects/320829)
[![Coverage Status](https://coveralls.io/repos/github/cloverinteractive/boilerplate-graphql/badge.svg?branch=master)](https://coveralls.io/github/cloverinteractive/boilerplate-graphql?branch=master)

# Dead Simple GraphQL boilerplate

Simply download and start coding.

## Pre-requisites

Just one, a recent installation of **Node.js®** you can find an installer for your OS [here](https://nodejs.org/en/).
or use your OS's favorite package manager.

## Installation

You can download a [here](https://github.com/cloverinteractive/boilerplate-graphql/archive/stable.zip), or use `curl` like
this:

```sh
curl -L "https://github.com/cloverinteractive/boilerplate-graphql/archive/stable.tar.gz" | tar -zxvf -
cd boilerplate-graphql-stable # Go into the boilerplate folder
npm install
```

# Running the app

Running the app is simple just do:

```sh
npm start
```

## Running in Docker

Another way to run the app in production is to use docker, just do the following:

```sh
docker build -t boiler-graphql .
docker run --rm -it -p 8080:8080 boiler-graphql
```

# Building the app

We use *webpack* for building the app, you can run the build script via `npm`:

```sh
npm run build
```

# Where is everything?

No architecture design is enforced and given we only provide a simple entry point here's
our structure:

1. All code lives inside `src/`
1. Schemas live under `src/schema`
1. Tests live under `test/`

# TypeScript

You can use typescript to create your schemas and types simply use the `ts` extension.
