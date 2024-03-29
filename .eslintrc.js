module.exports = {
  settings: {
    react: {
      version: '16.12.0',
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
  },
};
