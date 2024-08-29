import image from "@rollup/plugin-image";
import sucrase from "@rollup/plugin-sucrase";
import css from "rollup-plugin-css-only";

export default {
	input: "src/index.js",
	output: [{
		file: "./dist/uikit.js",
		format: "es",
	}],
	plugins: [
		css({ output: "uikit.css" }),
		sucrase({
			exclude: ["node_modules/**"],
			transforms: ["jsx"],
			production: true
		}),
		image(),
		{
			name: 'disable-treeshake',
        	transform (code, id) {
            	if (/safelist/.test(id)) {
                	return {
                    	code,
                    	map: null,
                    	moduleSideEffects: 'no-treeshake',
                	};
            	}
            	return null;
        	}        
    	}
	],
};
