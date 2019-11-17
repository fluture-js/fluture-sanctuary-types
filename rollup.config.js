export default {
  input: 'index.js',
  external: ['fluture/index.js', 'sanctuary-def', 'sanctuary-type-identifiers'],
  output: {
    format: 'umd',
    name: 'flutureSanctuaryTypes',
    file: 'index.cjs',
    interop: false,
    globals: {
      'fluture/index.js': 'Fluture',
      'sanctuary-def': 'sanctuaryDef',
      'sanctuary-type-identifiers': 'sanctuaryTypeIdentifiers',
    },
    paths: {
      'fluture/index.js': 'fluture',
    }
  }
};
