module.exports = {
  env: {
    browser: true, // Allows for the use of predefined global variables for browsers (document, window, etc.)
    jest: true, // Allows for the use of predefined global variables for Jest (describe, test, etc.)
    node: true, // Allows for the use of predefined global variables for Node.js (module, process, etc.)
  },
  extends: [
    'eslint:recommended', // Use the recommened rules from eslint
    'plugin:react/recommended', // Use the recommended rules from eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Use the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier to display Prettier errors as ESLint errors
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: [
    '@typescript-eslint', // Allows for manually setting @typescript-eslint/* rules
    'prettier', // Allows for manually setting prettier/* rules
    'react', // Allows for manually setting react/* rules
    'eslint-plugin-import-helpers', // Organised arranging of imports
  ],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  ignorePatterns: ['src/template-components/*', 'src/ausbom.local/*'],
  rules: {
    'prettier/prettier': 'warn', // Prettier should not influence compilation - only interfere when committing
    'react/prop-types': 'off', // May enable later, too wild right now
    '@typescript-eslint/no-explicit-any': 'off', // any is useful...
    '@typescript-eslint/no-var-requires': 'off', // I think some dependencies are doing this
    '@typescript-eslint/no-empty-function': 'off', // useful for stubbing
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off', // allow disabling TS for specific lines
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        args: 'after-used',
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error']}],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          '/^next/',
          'module',
          '/^@/contexts|^@/services|^@/utils/',
          '/^@ausbom/',
          '/^@/template-components/',
          '/^@/components/',
          '/^@/styles/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
}
