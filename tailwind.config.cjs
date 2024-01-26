// 1. Import the Skeleton plugin

import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';

import { myCustomTheme } from './my-custom-theme';

const config = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {},
	},
	plugins: [
		// 4. Append the Skeleton plugin (after other plugins)
		skeleton({
            themes: {
                custom: [
                    myCustomTheme
                ],
                // Register each theme within this array:
                preset: [ "skeleton", "modern", "crimson" ] 
            }
        })
	]
} satisfies Config;

export default config;