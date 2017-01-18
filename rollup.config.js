import babel from 'rollup-plugin-babel';

var dest = 'dist/library.js';
var destES = 'dist/library.es.js';
var sourceMap = true;

if (process.env.NODE_ENV === 'production') {
  dest = 'dist/library.min.js';
  destES = 'dist/library.min.es.js';
  sourceMap = false;
}

export default {
  entry: 'src/index.js',
  moduleName: 'Library',
  targets: [ { dest: dest, format: 'umd' }, { dest: destES, format: 'es' } ],
  sourceMap,
  plugins: [
    babel({
      babelrc: true,
      externalHelpers: true,
      runtimeHelpers: false,
      exclude: 'node_modules/**',
    }),
  ],
  external: [],
  globals: {},
}
