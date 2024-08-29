import image from "@rollup/plugin-image";
import sucrase from "@rollup/plugin-sucrase";
import css from "rollup-plugin-css-only";

export default {
	input: "src/index.js",
	output: [{
		dir: "./dist",
		format: "es",
		// sourcemap: true,
    	// preserveModules: true,
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
