# fluture-sanctuary-types

[![Greenkeeper badge](https://badges.greenkeeper.io/fluture-js/fluture-sanctuary-types.svg)](https://greenkeeper.io/)
[![Chat](https://badges.gitter.im/fluture-js/fluture-sanctuary-types.svg)](https://gitter.im/fluture-js/fluture)
[![NPM Version](https://badge.fury.io/js/fluture-sanctuary-types.svg)](https://www.npmjs.com/package/fluture-sanctuary-types)
[![Dependencies](https://david-dm.org/fluture-js/fluture-sanctuary-types.svg)](https://david-dm.org/fluture-js/fluture-sanctuary-types)
[![Build Status](https://travis-ci.org/fluture-js/fluture-sanctuary-types.svg?branch=master)](https://travis-ci.org/fluture-js/fluture-sanctuary-types)
[![Code Coverage](https://codecov.io/gh/fluture-js/fluture-sanctuary-types/branch/master/graph/badge.svg)](https://codecov.io/gh/fluture-js/fluture-sanctuary-types)

[Fluture][] type definitions for [Sanctuary][].

```console
$ npm install --save fluture sanctuary-def fluture-sanctuary-types
```

## Usage

```js
const {create, env} = require('sanctuary-def');
const {env: flutureEnv} = require('fluture-sanctuary-types');
const Future = require('fluture');

const def = create({checkTypes: true, env: env.concat(flutureEnv)});
```

## API

<h4 name="FutureType"><code><a href="https://github.com/fluture-js/fluture-sanctuary-types/blob/v2.0.0/index.js#L52">FutureType :: Type -⁠> Type -⁠> Type</a></code></h4>

The binary type constructor for members of Future.

```js
> $.test (env) (FutureType ($.String) ($.Number)) (Future.of (1));
true
```

<h4 name="ConcurrentFutureType"><code><a href="https://github.com/fluture-js/fluture-sanctuary-types/blob/v2.0.0/index.js#L67">ConcurrentFutureType :: Type -⁠> Type -⁠> Type</a></code></h4>

The binary type constructor for members of ConcurrentFuture.

```js
> $.test
.   (env)
.   (ConcurrentFutureType ($.String) ($.Number))
.   (Future.Par.of (1));
true
```

<h4 name="env"><code><a href="https://github.com/fluture-js/fluture-sanctuary-types/blob/v2.0.0/index.js#L85">env :: Array Type</a></code></h4>

An Array containing all types applied to [`$.Unknown`][Unknown] for
direct use as a Sanctuary environment, as shown in [Usage](#usage).

[Fluture]:    https://github.com/fluture-js/Fluture
[Sanctuary]:  https://sanctuary.js.org/
[Unknown]:    https://github.com/sanctuary-js/sanctuary-def#Unknown
