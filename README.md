# fluture-sanctuary-types

[![Chat](https://badges.gitter.im/fluture-js/fluture-sanctuary-types.svg)](https://gitter.im/fluture-js/fluture)
[![NPM Version](https://badge.fury.io/js/fluture-sanctuary-types.svg)](https://www.npmjs.com/package/fluture-sanctuary-types)
[![Dependencies](https://david-dm.org/fluture-js/fluture-sanctuary-types.svg)](https://david-dm.org/fluture-js/fluture-sanctuary-types)
[![Build Status](https://travis-ci.org/fluture-js/fluture-sanctuary-types.svg?branch=master)](https://travis-ci.org/fluture-js/fluture-sanctuary-types)
[![Code Coverage](https://codecov.io/gh/fluture-js/fluture-sanctuary-types/branch/master/graph/badge.svg)](https://codecov.io/gh/fluture-js/fluture-sanctuary-types)

[Fluture][] type definitions for [Sanctuary][].

> `npm install --save fluture sanctuary-def fluture-sanctuary-types`

```js
const {create, env, Unknown} = require('sanctuary-def');
const {FutureType, ConcurrentFutureType} = require('fluture-sanctuary-types');
const Future = require('fluture');

const def = create({
  checkTypes: true,
  env: env.concat([
    FutureType(Unknown, Unknown),
    ConcurrentFutureType(Unknown, Unknown)
  ])
});
```


[Fluture]:    https://github.com/fluture-js/Fluture
[Sanctuary]:  https://sanctuary.js.org/
