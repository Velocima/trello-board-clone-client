module.exports = {
	env: {
		browser: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		project: './tsconfig.json',
		tsconfigRootDir: './',
	},
	plugins: ['prettier', 'testing-library', '@typescript-eslint', 'import'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	globals: {
		render: 'writable',
		userEvent: 'writable',
	},
	ignorePatterns: ['.eslintrc.js', 'node_modules', 'build'],
	extends: [
		'plugin:prettier/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:jsx-a11y/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:testing-library/react',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
	rules: {
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/no-var-requires': 'off',
		'react/prop-types': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'react/display-name': [0, { ignoreTranspilerName: true }],
		'prettier/prettier': [
			2,
			{
				trailingComma: 'es5',
				quoteProps: 'as-needed',
				tabWidth: 2,
				semi: true,
				singleQuote: true,
				printWidth: 100,
				useTabs: true,
				bracketSpacing: true,
				arrowParens: 'always',
				endOfLine: 'auto',
			},
			{ usePrettierrc: true },
		],
	},
};
