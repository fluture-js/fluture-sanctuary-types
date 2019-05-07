# fluture-sanctuary-types

[Fluture][] type definitions for [Sanctuary][].

```console
$ npm install --save fluture sanctuary-def fluture-sanctuary-types
```

## Usage

```js
import $ = from 'sanctuary-def';
import {env} from 'fluture-sanctuary-types';

const def = $.create ({checkTypes: true, env: $.env.concat (env)});
```

#### <a name="FutureType" href="https://github.com/fluture-js/fluture-sanctuary-types/blob/master/index.mjs#L25">`FutureType :: Type -⁠> Type -⁠> Type`</a>

The binary type constructor for members of Future.

```js
> $.test (env) (FutureType ($.String) ($.Number)) (Future.of (1));
true
```

#### <a name="ConcurrentFutureType" href="https://github.com/fluture-js/fluture-sanctuary-types/blob/master/index.mjs#L41">`ConcurrentFutureType :: Type -⁠> Type -⁠> Type`</a>

The binary type constructor for members of ConcurrentFuture.

```js
> $.test
.   (env)
.   (ConcurrentFutureType ($.String) ($.Number))
.   (Future.Par.of (1));
true
```

#### <a name="env" href="https://github.com/fluture-js/fluture-sanctuary-types/blob/master/index.mjs#L60">`env :: Array Type`</a>

An Array containing all types applied to [`$.Unknown`][Unknown] for
direct use as a Sanctuary environment, as shown in [Usage](#usage).

[Fluture]:    https://github.com/fluture-js/Fluture
[Sanctuary]:  https://sanctuary.js.org/
[Unknown]:    https://github.com/sanctuary-js/sanctuary-def#Unknown
