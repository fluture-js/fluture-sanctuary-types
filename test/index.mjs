'use strict';

import assert from 'assert';
import $ from 'sanctuary-def';
import show from 'sanctuary-show';
import Z from 'sanctuary-type-classes';
import type from 'sanctuary-type-identifiers';
import {Par, resolve} from 'fluture/index.js';
import {FutureType, ConcurrentFutureType} from '../index.js';
import test from 'oletus';

const $test = $.test ([]);

function eq(actual, expected) {
  assert.strictEqual (arguments.length, eq.length);
  assert.strictEqual (show (actual), show (expected));
  assert.strictEqual (Z.equals (actual, expected), true);
}

test('FutureType', () => {
  eq (typeof FutureType, 'function');
  eq (FutureType.length, 1);
  eq (typeof FutureType ($.Unknown), 'function');
  eq (FutureType ($.Unknown).length, 1);
  eq (typeof FutureType ($.Unknown) ($.Unknown), 'object');

  const Type = FutureType ($.Unknown) ($.Unknown);
  const typeInfo = type.parse (type (Type));

  eq (typeInfo.namespace, 'sanctuary-def');
  eq (typeInfo.name, 'Type');

  eq ($test (Type) (Par (resolve (1))), false);
  eq ($test (Type) (resolve (1)), true);
});

test('ConcurrentFutureType', () => {
  eq (typeof ConcurrentFutureType, 'function');
  eq (ConcurrentFutureType.length, 1);
  eq (typeof ConcurrentFutureType ($.Unknown), 'function');
  eq (ConcurrentFutureType ($.Unknown).length, 1);
  eq (typeof ConcurrentFutureType ($.Unknown) ($.Unknown), 'object');

  const Type = ConcurrentFutureType ($.Unknown) ($.Unknown);
  const typeInfo = type.parse (type (Type));

  eq (typeInfo.namespace, 'sanctuary-def');
  eq (typeInfo.name, 'Type');

  eq ($test (Type) (Par (resolve (1))), true);
  eq ($test (Type) (resolve (1)), false);
});
