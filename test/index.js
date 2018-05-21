'use strict';

var assert = require ('assert');
var Future = require ('fluture');
var $ = require ('sanctuary-def');
var show = require ('sanctuary-show');
var Z = require ('sanctuary-type-classes');
var type = require ('sanctuary-type-identifiers');

var types = require ('..');

var $test = $.test ([]);

function eq(actual, expected) {
  assert.strictEqual (arguments.length, eq.length);
  assert.strictEqual (show (actual), show (expected));
  assert.strictEqual (Z.equals (actual, expected), true);
}

test ('FutureType', function() {
  eq (typeof types.FutureType, 'function');
  eq (types.FutureType.length, 1);
  eq (typeof types.FutureType ($.Unknown), 'function');
  eq (types.FutureType ($.Unknown).length, 1);
  eq (typeof types.FutureType ($.Unknown) ($.Unknown), 'object');

  var Type = types.FutureType ($.Unknown) ($.Unknown);
  var typeInfo = type.parse (type (Type));

  eq (typeInfo.namespace, 'sanctuary-def');
  eq (typeInfo.name, 'Type');

  eq ($test (Type) (Future.Par (Future.of (1))), false);
  eq ($test (Type) (Future.of (1)), true);
});

test ('ConcurrentFutureType', function() {
  eq (typeof types.ConcurrentFutureType, 'function');
  eq (types.ConcurrentFutureType.length, 1);
  eq (typeof types.ConcurrentFutureType ($.Unknown), 'function');
  eq (types.ConcurrentFutureType ($.Unknown).length, 1);
  eq (typeof types.ConcurrentFutureType ($.Unknown) ($.Unknown), 'object');

  var Type = types.ConcurrentFutureType ($.Unknown) ($.Unknown);
  var typeInfo = type.parse (type (Type));

  eq (typeInfo.namespace, 'sanctuary-def');
  eq (typeInfo.name, 'Type');

  eq ($test (Type) (Future.Par (Future.of (1))), true);
  eq ($test (Type) (Future.of (1)), false);
});
