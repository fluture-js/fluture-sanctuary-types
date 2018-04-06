//. # fluture-sanctuary-types
//.
//. [![Greenkeeper badge](https://badges.greenkeeper.io/fluture-js/fluture-sanctuary-types.svg)](https://greenkeeper.io/)
//. [![Chat](https://badges.gitter.im/fluture-js/fluture-sanctuary-types.svg)](https://gitter.im/fluture-js/fluture)
//. [![NPM Version](https://badge.fury.io/js/fluture-sanctuary-types.svg)](https://www.npmjs.com/package/fluture-sanctuary-types)
//. [![Dependencies](https://david-dm.org/fluture-js/fluture-sanctuary-types.svg)](https://david-dm.org/fluture-js/fluture-sanctuary-types)
//. [![Build Status](https://travis-ci.org/fluture-js/fluture-sanctuary-types.svg?branch=master)](https://travis-ci.org/fluture-js/fluture-sanctuary-types)
//. [![Code Coverage](https://codecov.io/gh/fluture-js/fluture-sanctuary-types/branch/master/graph/badge.svg)](https://codecov.io/gh/fluture-js/fluture-sanctuary-types)
//.
//. [Fluture][] type definitions for [Sanctuary][].
//.
//. ```console
//. $ npm install --save fluture sanctuary-def fluture-sanctuary-types
//. ```
//.
//. ## Usage
//.
//. ```js
//. const {create, env} = require('sanctuary-def');
//. const {env: flutureEnv} = require('fluture-sanctuary-types');
//. const Future = require('fluture');
//.
//. const def = create({checkTypes: true, env: env.concat(flutureEnv)});
//. ```
(function(f) {

  'use strict';

  /* istanbul ignore else */
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = f(
      require('fluture'),
      require('sanctuary-def'),
      require('sanctuary-type-identifiers')
    );
  } else {
    self.flutureSanctuaryTypes = f(
      self.Fluture,
      self.sanctuaryDef,
      self.sanctuaryTypeIdentifiers
    );
  }

//. ## API
}(function(Future, $, type) {

  'use strict';

  //  $$type :: String
  var $$type = '@@type';

  //# FutureType :: Type -> Type -> Type
  //.
  //. The binary type constructor for members of Future.
  //.
  //. ```js
  //. > $.test (env) (FutureType ($.String) ($.Number)) (Future.of (1));
  //. true
  //. ```
  var FutureType = $.BinaryType
    (type.parse(Future[$$type]).name)
    ('https://github.com/fluture-js/Fluture#readme')
    (Future.isFuture)
    (Future.extractLeft)
    (Future.extractRight);

  //# ConcurrentFutureType :: Type -> Type -> Type
  //.
  //. The binary type constructor for members of ConcurrentFuture.
  //.
  //. ```js
  //. > $.test
  //. .   (env)
  //. .   (ConcurrentFutureType ($.String) ($.Number))
  //. .   (Future.Par.of (1));
  //. true
  //. ```
  var ConcurrentFutureType = $.BinaryType
    (type.parse(Future.Par[$$type]).name)
    ('https://github.com/fluture-js/Fluture#concurrentfuture')
    (function(x) { return type(x) === Future.Par[$$type]; })
    (function(f) { return Future.seq(f).extractLeft(); })
    (function(f) { return Future.seq(f).extractRight(); });

  //# env :: Array Type
  //.
  //. An Array containing all types applied to [`$.Unknown`][Unknown] for
  //. direct use as a Sanctuary environment, as shown in [Usage](#usage).
  var env = [
    FutureType ($.Unknown) ($.Unknown),
    ConcurrentFutureType ($.Unknown) ($.Unknown)
  ];

  return {
    FutureType: FutureType,
    ConcurrentFutureType: ConcurrentFutureType,
    env: env
  };

}));

//. [Fluture]:    https://github.com/fluture-js/Fluture
//. [Sanctuary]:  https://sanctuary.js.org/
//. [Unknown]:    v:sanctuary-js/sanctuary-def#Unknown
