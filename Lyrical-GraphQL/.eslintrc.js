module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  settings: {
    'import/extensions': [
      '.js',
      '.jsx'
    ]
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'func-names': ['error', 'never'],
    'no-param-reassign': [0],
    'import/order': [0],
    'global-require': [0],
    'react/prop-types': [0],
    'jsx-a11y/label-has-associated-control': 0,
    'react/destructuring-assignment': 0,
    'comma-dangle': 0,
    'max-len': ['error', { code: 120 }],
    'object-curly-newline': 0
  },
};
