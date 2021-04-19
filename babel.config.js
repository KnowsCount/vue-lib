/*
 * @Date: 19/04/2021 20.31.32 +0800
 * @Author: KnowsCount
 * @LastEditTime: 20/04/2021 07.23.23 +0800
 * @FilePath: /vue-lib/babel.config.js
 */
const devPresets = ['@vue/babel-preset-app']
const buildPresets = [
	[
		'@babel/preset-env',
		// Config for @babel/preset-env
		{
			// Example: Always transpile optional chaining/nullish coalescing
			// include: [
			//   /(optional-chaining|nullish-coalescing)/
			// ],
		},
	],
]
module.exports = {
	presets: process.env.NODE_ENV === 'development' ? devPresets : buildPresets,
}
