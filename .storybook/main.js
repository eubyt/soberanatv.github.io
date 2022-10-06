const path = require('path');

module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-postcss',
			options: {
				cssLoaderOptions: {
					// When you have splitted your css over multiple files
					// and use @import('./other-styles.css')
					importLoaders: 1,
				},
				postcssLoaderOptions: {
					// When using postCSS 8
					implementation: require('postcss'),
				},
			},
		},
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
	staticDirs: ['../public'], // O previewMdx2: true resolve o problema "mdx_js_react__WEBPACK_IMPORTED_MODULE_8_.mdx"
	features: {
		previewMdx2: true,
	},
	async webpackFinal(config) {
		config.resolve.alias = {
			...config.resolve.alias,
			'@': path.resolve(__dirname, '../src/'),
		};
		return config;
	},
};
