'use strict';

var expect = require('chai').expect;
var $ = require('sanctuary-def');
var type = require('sanctuary-type-identifiers');
var Future = require('fluture');
var types = require('..');

describe('Fluture Sanctuary Types', function(){

  describe('FutureType', function(){

    it('is a binary function', function(){
      expect(types.FutureType).to.be.a('function');
      expect(types.FutureType.length).to.equal(2);
    });

    it('returns a Type when given two Types', function(){
      var actual = types.FutureType($.Unknown, $.Unknown);
      var typeInfo = type.parse(type(actual));
      expect(typeInfo.namespace).to.equal('sanctuary-def');
      expect(typeInfo.name).to.equal('Type');
    });

    it('tests positive on members', function(){
      var Type = types.FutureType($.Unknown, $.Unknown);
      expect($.test([], Type, Future.Par(Future.of(1)))).to.equal(false);
      expect($.test([], Type, Future.of(1))).to.equal(true);
    });

  });

  describe('ConcurrentFutureType', function(){

    it('is a binary function', function(){
      expect(types.ConcurrentFutureType).to.be.a('function');
      expect(types.ConcurrentFutureType.length).to.equal(2);
    });

    it('returns a Type when given two Types', function(){
      var actual = types.ConcurrentFutureType($.Unknown, $.Unknown);
      var typeInfo = type.parse(type(actual));
      expect(typeInfo.namespace).to.equal('sanctuary-def');
      expect(typeInfo.name).to.equal('Type');
    });

    it('tests positive on members', function(){
      var Type = types.ConcurrentFutureType($.Unknown, $.Unknown);
      expect($.test([], Type, Future.Par(Future.of(1)))).to.equal(true);
      expect($.test([], Type, Future.of(1))).to.equal(false);
    });

  });

});
