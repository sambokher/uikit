import url from '@rollup/plugin-url';

export default {
input: 'src/react/index.js',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  plugins: [
    url({
      include: ['**/*.svg'],
      limit: 0, // This inlines all SVGs as data URIs
      emitFiles: true,
    }),
  ],
};