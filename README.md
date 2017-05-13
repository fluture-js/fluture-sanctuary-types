# Concurrify

[![Chat](https://badges.gitter.im/fluture-js/fluture-sanctuary-types.svg)](https://gitter.im/fluture-js/fluture)
[![NPM Version](https://badge.fury.io/js/fluture-sanctuary-types.svg)](https://www.npmjs.com/package/fluture-sanctuary-types)
[![Dependencies](https://david-dm.org/fluture-js/fluture-sanctuary-types.svg)](https://david-dm.org/fluture-js/fluture-sanctuary-types)
[![Build Status](https://travis-ci.org/fluture-js/fluture-sanctuary-types.svg?branch=master)](https://travis-ci.org/fluture-js/fluture-sanctuary-types)
[![Code Coverage](https://codecov.io/gh/fluture-js/fluture-sanctuary-types/branch/master/graph/badge.svg)](https://codecov.io/gh/fluture-js/fluture-sanctuary-types)

[Fluture][] type definitions for [Sanctuary][].

> `npm install --save fluture sanctuary-def fluture-sanctuary-types`

```js
const {create, env} = require('sanctuary');
const {FutureType, ConcurrentFutureType} = require('fluture-sanctuary-types');
const Future = require('fluture');

const S = create({
  checkTypes: true,
  env: env.concat([FutureType, ConcurrentFutureType])
});

S.I(Future.of(1))
//> Future.of(1)
```


[Fluture]:    https://github.com/fluture-js/Fluture
[Sanctuary]:  https://sanctuary.js.org/
