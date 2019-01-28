import pkg from './package.json';

export default {
  input: 'index.mjs',
  external: (
    Object.keys (pkg.peerDependencies)
    .concat (Object.keys (pkg.dependencies))
  ),
  output: {
    format: 'umd',
    name: 'flutureSanctuaryTypes',
    file: 'index.js',
    interop: false,
    globals: {
      'fluture': 'Fluture',
      'sanctuary-def': 'sanctuaryDef',
      'sanctuary-type-identifiers': 'sanctuaryTypeIdentifiers'
    }
  }
};
