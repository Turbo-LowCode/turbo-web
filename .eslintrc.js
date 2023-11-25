module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['standard', 'standard-jsx'],
	parser: '@typescript-eslint/parser',
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
		'no-unused-vars': 'off',
		'no-useless-constructor': 'off',
	},
}
