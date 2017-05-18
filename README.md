# fluture-sanctuary-types

[![Greenkeeper badge](https://badges.greenkeeper.io/fluture-js/fluture-sanctuary-types.svg)](https://greenkeeper.io/)

[![Chat](https://badges.gitter.im/fluture-js/fluture-sanctuary-types.svg)](https://gitter.im/fluture-js/fluture)
[![NPM Version](https://badge.fury.io/js/fluture-sanctuary-types.svg)](https://www.npmjs.com/package/fluture-sanctuary-types)
[![Dependencies](https://david-dm.org/fluture-js/fluture-sanctuary-types.svg)](https://david-dm.org/fluture-js/fluture-sanctuary-types)
[![Build Status](https://travis-ci.org/fluture-js/fluture-sanctuary-types.svg?branch=master)](https://travis-ci.org/fluture-js/fluture-sanctuary-types)
[![Code Coverage](https://codecov.io/gh/fluture-js/fluture-sanctuary-types/branch/master/graph/badge.svg)](https://codecov.io/gh/fluture-js/fluture-sanctuary-types)

[Fluture][] type definitions for [Sanctuary][].

> `npm install --save fluture sanctuary-def fluture-sanctuary-types`

```js
const {create, env} = require('sanctuary-def');
const {env: flutureEnv} = require('fluture-sanctuary-types');
const Future = require('fluture');

const def = create({checkTypes: true, env: env.concat(flutureEnv)});
```

## types

The package also exports the type constructors in named exports.

### `FutureType :: Type -> Type -> Type`

The binary type constructor for members of Future.

```js
const {test, String, Number} = require('sanctuary-def');
const {env, FutureType} = require('fluture-sanctuary-types');
const {of} = require('fluture');

test(env, FutureType(String, Number), of(1))
//> true
```

### `ConcurrentFutureType :: Type -> Type -> Type`

The binary type constructor for members of ConcurrentFuture.

```js
const {test, String, Number} = require('sanctuary-def');
const {env, ConcurrentFutureType} = require('fluture-sanctuary-types');
const {of, Par} = require('fluture');

test(env, ConcurrentFutureType(String, Number), Par(of(1)))
//> true
```

[Fluture]:    https://github.com/fluture-js/Fluture
[Sanctuary]:  https://sanctuary.js.org/
