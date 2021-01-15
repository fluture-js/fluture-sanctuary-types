# fluture-sanctuary-types

[Fluture][] type definitions for [Sanctuary][].

## Usage

```console
$ npm install --save fluture-sanctuary-types
```

Note that you also need [Fluture][] and [sanctuary-def][] installed.
Sanctuary-def comes preinstalled with Sanctuary, so you could install
either one. Fluture has to be installed separately. See `package.json`
for compatible versions (defined in `peerDependencies`).

### EcmaScript Module

```js
import $ from 'sanctuary-def';
import sanctuary from 'sanctuary';
import {env, FutureType} from 'fluture-sanctuary-types/index.js';
import {resolve} from 'fluture/index.js';

const S = sanctuary.create ({
  checkTypes: process.env.NODE_ENV !== 'production',
  env: sanctuary.env.concat (env)
});

S.is (FutureType ($.String) ($.Number)) (resolve (42));
```

### CommonJS Module

```js
const $ = require ('sanctuary-def');
const sanctuary = require ('sanctuary');
const {env, FutureType} = require ('fluture-sanctuary-types');
const {resolve} = require ('fluture');

const S = sanctuary.create ({
  checkTypes: process.env.NODE_ENV !== 'production',
  env: sanctuary.env.concat (env)
});

S.is (FutureType ($.String) ($.Number)) (resolve (42));
```

#### <a name="FutureType" href="https://github.com/fluture-js/fluture-sanctuary-types/blob/v7.0.1/index.js#L62">`FutureType :: Type -⁠> Type -⁠> Type`</a>

The binary type constructor for members of Future.

```js
> $.test (env)
.        (FutureType ($.String) ($.Number))
.        (Future['fantasy-land/of'] (1));
true
```

#### <a name="ConcurrentFutureType" href="https://github.com/fluture-js/fluture-sanctuary-types/blob/v7.0.1/index.js#L80">`ConcurrentFutureType :: Type -⁠> Type -⁠> Type`</a>

The binary type constructor for members of ConcurrentFuture.

```js
> $.test (env)
.        (ConcurrentFutureType ($.String) ($.Number))
.        (Par['fantasy-land/of'] (1));
true
```

#### <a name="env" href="https://github.com/fluture-js/fluture-sanctuary-types/blob/v7.0.1/index.js#L98">`env :: Array Type`</a>

An Array containing all types applied to [`$.Unknown`][Unknown] for
direct use as a Sanctuary environment, as shown in [Usage](#usage).

[Fluture]:       https://github.com/fluture-js/Fluture
[Sanctuary]:     https://sanctuary.js.org/
[sanctuary-def]: https://github.com/sanctuary-js/sanctuary-def
[Unknown]:       https://github.com/sanctuary-js/sanctuary-def#Unknown
