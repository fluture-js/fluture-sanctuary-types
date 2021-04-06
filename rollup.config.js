import pkg from './package.json';

const dependencyNames = Array.prototype.concat.call (
  Object.keys (pkg.dependencies),
  Object.keys (pkg.peerDependencies),
  ['fluture/index.js']
);

export default {
  input: 'index.js',
  external: dependencyNames,
  output: {
    format: 'umd',
    name: 'flutureSanctuaryTypes',
    file: 'dist/umd.js',
    interop: false,
    exports: 'named',
    globals: {
      'fluture/index.js': 'Fluture',
      'sanctuary-def': 'sanctuaryDef',
      'sanctuary-type-identifiers': 'sanctuaryTypeIdentifiers'
    },
    paths: {
      'fluture/index.js': 'fluture'
    }
  }
};
