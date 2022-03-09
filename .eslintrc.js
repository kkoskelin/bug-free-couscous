module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:cypress/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'cypress',
    'jest',
    'prettier',
    'react',
    'react-func',
    'sort-destructure-keys',
    'sort-imports-es6-autofix',
    'sort-keys-fix',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    complexity: ['error', { max: 20 }],
    'jest/expect-expect': 'off',
    'max-lines': [
      'error',
      { max: 500, skipBlankLines: true, skipComments: true },
    ],
    'no-irregular-whitespace': ['error', { skipStrings: false }],
    'no-restricted-globals': [
      'error',
      { name: 'error' },
      { name: 'event' },
      { name: 'status' },
      { name: 'name' },
      { name: 'document' },
    ],
    'no-shadow': ['error', { builtinGlobals: false }],
    'no-trailing-spaces': 'error',
    'prettier/prettier': 'error',
    'react-func/max-lines-per-function': [
      'warn',
      {
        IIFEs: true,
        max: 50,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'sort-destructure-keys/sort-destructure-keys': [
      'error',
      { caseSensitive: false },
    ],
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      { caseSensitive: true, natural: true },
    ],
  },
  settings: {
    react: {
      version: '17.0.2',
    },
  },
};
