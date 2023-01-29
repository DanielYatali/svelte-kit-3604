const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#869e0e',
					light: '#869e0e',
					dark: '#869e0e'
				},
				secondary: {
					DEFAULT: '#f50057',
					light: '#ff4081',
					dark: '#c51162'
				},
				accent: {
					DEFAULT: '#ff9800',
					light: '#ffc107',
					dark: '#f57c00'
				}
			}
		}
	},

	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};

module.exports = config;
