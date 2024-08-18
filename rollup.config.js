import image from '@rollup/plugin-image';
import sucrase from '@rollup/plugin-sucrase';
import css from 'rollup-plugin-css-only';

export default {
	input: 'src/index.js',
	output: [
		{ file: './dist/index.js', format: 'es' }
	],
	plugins: [
css({output:'index.css'}),

	  sucrase({
      exclude: ['node_modules/**'],
      transforms: ['jsx']
    }),
    image()
	]
}