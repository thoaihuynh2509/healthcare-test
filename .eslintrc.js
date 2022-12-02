module.exports = {
  extends: ['airbnb-typescript', 'plugin:jest-dom/recommended', 'plugin:testing-library/react', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['import', 'prettier', 'react', 'react-hooks', 'jest'],
  env: {
    amd: true,
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  rules: {
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-nested-ternary': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/alt-text': 'off',
    'import/extensions': 'off',
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    'no-use-before-define': 'off',
  }
};