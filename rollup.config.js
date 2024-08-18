import image from '@rollup/plugin-image';
import sucrase from '@rollup/plugin-sucrase';

export default {
	input: 'src/index.js',
	output: [
		{ file: './dist/index.js', format: 'es' }
	],
	plugins: [
	  sucrase({
      exclude: ['node_modules/**'],
      transforms: ['jsx']
    }),
    image()
	]
}