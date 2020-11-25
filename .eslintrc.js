module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  extends: ['airbnb', 'prettier', 'plugin:react-hooks/recommended'],
  env: {
    browser: true,
    jest: true,
  },
  globals: {
    moment: true,
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'no-alert': 0,
    'consistent-return': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 'off',
    'prefer-template': 'off',
    'no-param-reassign': 1,
    'object-curly-spacing': 2,
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
    ],
    'no-shadow': ['error', { hoist: 'all' }],
    'react/jsx-props-no-spreading': [
      'error',
      {
        custom: 'ignore',
        explicitSpread: 'ignore',
      },
    ],
    'default-param-last': ['error'],
  },
}
