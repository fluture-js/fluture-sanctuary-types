(function(global, f){

  'use strict';

  /*istanbul ignore next*/
  if(module && typeof module.exports !== 'undefined'){
    module.exports = f(
      require('fluture'),
      require('sanctuary-def'),
      require('sanctuary-type-identifiers')
    );
  }else{
    global.flutureSanctuaryTypes = f(
      global.Fluture,
      global.sanctuaryDef,
      global.sanctuaryTypeIdentifiers
    );
  }

}(/*istanbul ignore next*/(global || window || this), function(Future, $, type){

  'use strict';

  //  $$type :: String
  var $$type = '@@type';

  //  FutureType :: (Type, Type) -> Type
  var FutureType = $.BinaryType(
    type.parse(Future[$$type]).name,
    'https://github.com/fluture-js/Fluture#readme',
    Future.isFuture,
    Future.extractLeft,
    Future.extractRight
  );

  //  ConcurrentFutureType :: (Type, Type) -> Type
  var ConcurrentFutureType = $.BinaryType(
    type.parse(Future.Par[$$type]).name,
    'https://github.com/fluture-js/Fluture#concurrentfuture',
    function(x){ return type(x) === Future.Par[$$type] },
    function(f){ return Future.seq(f).extractLeft() },
    function(f){ return Future.seq(f).extractRight() }
  );

  var env = [
    FutureType($.Unknown, $.Unknown),
    ConcurrentFutureType($.Unknown, $.Unknown)
  ];

  return {
    FutureType: FutureType,
    ConcurrentFutureType: ConcurrentFutureType,
    env: env
  };

}));
