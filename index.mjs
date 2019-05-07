//. # fluture-sanctuary-types
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
//. import $ = from 'sanctuary-def';
//. import {env} from 'fluture-sanctuary-types';
//.
//. const def = $.create ({checkTypes: true, env: $.env.concat (env)});
//. ```

import $ from 'sanctuary-def';
import type from 'sanctuary-type-identifiers';
import {Future, isFuture, extractLeft, extractRight, Par, seq} from 'fluture';

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
//. > $.test
//. .   (env)
//. .   (ConcurrentFutureType ($.String) ($.Number))
//. .   (Future.Par.of (1));
//. true
//. ```
export var ConcurrentFutureType = $.BinaryType
  (type.parse (Par[$$type]).name)
  ('https://github.com/fluture-js/Fluture#concurrentfuture')
  ([])
  (function(x) { return type (x) === Par[$$type]; })
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

//. [Fluture]:    https://github.com/fluture-js/Fluture
//. [Sanctuary]:  https://sanctuary.js.org/
//. [Unknown]:    https://github.com/sanctuary-js/sanctuary-def#Unknown
