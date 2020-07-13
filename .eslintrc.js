module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
    '@typescript-eslint/no-unused-vars': 'error',
    'import/prefer-default-export': 'off',
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'import/extensions': [2, { extensions: ['.ts', '.tsx'] }],
    'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx'] }],
  },
};
