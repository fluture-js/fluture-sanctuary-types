//. # fluture-sanctuary-types
//.
//. [Fluture][] type definitions for [Sanctuary][].
//.
//. ## Usage
//.
//. ```console
//. $ npm install --save fluture-sanctuary-types
//. ```
//.
//. Note that you also need [Fluture][] and [sanctuary-def][] installed.
//. Sanctuary-def comes preinstalled with Sanctuary, so you could install
//. either one. Fluture has to be installed separately. See `package.json`
//. for compatible versions (defined in `peerDependencies`).
//.
//. ### EcmaScript Module
//.
//. ```js
//. import $ from 'sanctuary-def';
//. import sanctuary from 'sanctuary';
//. import {env, FutureType} from 'fluture-sanctuary-types/index.js';
//. import {resolve} from 'fluture/index.js';
//.
//. const S = sanctuary.create ({
//.   checkTypes: true,
//.   env: sanctuary.env.concat (env)
//. });
//.
//. S.is (FutureType ($.String) ($.Number)) (resolve (42));
//. ```
//.
//. ### CommonJS Module
//.
//. ```js
//. const $ = require ('sanctuary-def');
//. const sanctuary = require ('sanctuary');
//. const {env, FutureType} = require ('fluture-sanctuary-types');
//. const {resolve} = require ('fluture');
//.
//. const S = sanctuary.create ({
//.   checkTypes: true,
//.   env: sanctuary.env.concat (env)
//. });
//.
//. S.is (FutureType ($.String) ($.Number)) (resolve (42));
//. ```

import $ from 'sanctuary-def';
import type from 'sanctuary-type-identifiers';
import {
  Future,
  isFuture,
  extractLeft,
  extractRight,
  Par,
  seq
} from 'fluture/index.js';

//  $$type :: String
var $$type = '@@type';

//# FutureType :: Type -> Type -> Type
//.
//. The binary type constructor for members of Future.
//.
//. ```js
//. > $.test (env)
//. .        (FutureType ($.String) ($.Number))
//. .        (Future['fantasy-land/of'] (1));
//. true
//. ```
export var FutureType = $.BinaryType
  (type.parse (Future[$$type]).name)
  ('https://github.com/fluture-js/Fluture#readme')
  ([])
  (isFuture)
  (extractLeft)
  (extractRight);

//# ConcurrentFutureType :: Type -> Type -> Type
//.
//. The binary type constructor for members of ConcurrentFuture.
//.
//. ```js
//. > $.test (env)
//. .        (ConcurrentFutureType ($.String) ($.Number))
//. .        (Par['fantasy-land/of'] (1));
//. true
//. ```
export var ConcurrentFutureType = $.BinaryType
  (type.parse (Par[$$type]).name)
  ('https://github.com/fluture-js/Fluture#concurrentfuture')
  ([])
  (function(x) { return type (x) === Par[$$type] && x !== Par; })
  (function(f) { return (seq (f)).extractLeft (); })
  (function(f) { return (seq (f)).extractRight (); });

//# env :: Array Type
//.
//. An Array containing all types applied to [`$.Unknown`][Unknown] for
//. direct use as a Sanctuary environment, as shown in [Usage](#usage).
export var env = [
  FutureType ($.Unknown) ($.Unknown),
  ConcurrentFutureType ($.Unknown) ($.Unknown)
];

//. [Fluture]:       https://github.com/fluture-js/Fluture
//. [Sanctuary]:     https://sanctuary.js.org/
//. [sanctuary-def]: https://github.com/sanctuary-js/sanctuary-def
//. [Unknown]:       https://github.com/sanctuary-js/sanctuary-def#Unknown
