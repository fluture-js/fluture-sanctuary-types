# fluture-sanctuary-types

[Fluture][] type definitions for [Sanctuary][].

## Usage

### Node

```console
$ npm install --save fluture-sanctuary-types
```

Note that you also need [Fluture][] and [sanctuary-def][] installed.
Sanctuary-def comes preinstalled with Sanctuary, so you could install
either one. Fluture has to be installed separately. See `package.json`
for compatible versions (defined in `peerDependencies`).

On Node 12 and up, this module can be loaded directly with `import` or
`require`. On Node versions below 12, `require` or the [esm][]-loader can
be used.

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

### Deno and Modern Browsers

You can load the EcmaScript module from various content delivery networks:

- [Skypack](https://cdn.skypack.dev/fluture-sanctuary-types@7.1.0)
- [JSPM](https://jspm.dev/fluture-sanctuary-types@7.1.0)
- [jsDelivr](https://cdn.jsdelivr.net/npm/fluture-sanctuary-types@7.1.0/+esm)

### Old Browsers and Code Pens

There's a [UMD][] file included in the NPM package, also available via
jsDelivr: https://cdn.jsdelivr.net/npm/fluture-sanctuary-types@7.1.0/dist/umd.js

This file adds `flutureSanctuaryTypes` to the global scope, or use
CommonJS/AMD when available.

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

#### <a name="FutureType" href="https://github.com/fluture-js/fluture-sanctuary-types/blob/v7.1.0/index.js#L80">`FutureType :: Type -⁠> Type -⁠> Type`</a>

The binary type constructor for members of Future.

```js
> $.test (env)
.        (FutureType ($.String) ($.Number))
.        (Future['fantasy-land/of'] (1));
true
```

#### <a name="ConcurrentFutureType" href="https://github.com/fluture-js/fluture-sanctuary-types/blob/v7.1.0/index.js#L98">`ConcurrentFutureType :: Type -⁠> Type -⁠> Type`</a>

The binary type constructor for members of ConcurrentFuture.

```js
> $.test (env)
.        (ConcurrentFutureType ($.String) ($.Number))
.        (Par['fantasy-land/of'] (1));
true
```

#### <a name="env" href="https://github.com/fluture-js/fluture-sanctuary-types/blob/v7.1.0/index.js#L116">`env :: Array Type`</a>

An Array containing all types applied to [`$.Unknown`][Unknown] for
direct use as a Sanctuary environment, as shown in [Usage](#usage).

[Fluture]:       https://github.com/fluture-js/Fluture
[Sanctuary]:     https://sanctuary.js.org/
[sanctuary-def]: https://github.com/sanctuary-js/sanctuary-def
[Unknown]:       https://github.com/sanctuary-js/sanctuary-def#Unknown
[esm]:           https://github.com/standard-things/esm
[UMD]:           https://github.com/umdjs/umd
