const path = require('path');
const createSettings = require('@theforeman/eslint-plugin-foreman/src/config/settings');
const { getPackageJsonDirectories } = require('@theforeman/eslint-plugin-foreman/src/config/helpers');

module.exports = {
  env: {
    browser: true,
    'jest/globals': true
  },
  'extends': [
    'airbnb',
    'plugin:jest/recommended',
  ],
  plugins: [
    'jest',
    'react',
    'babel',
    'promise'
  ],
  parser: 'babel-eslint',
  settings: createSettings(true),
  rules: {
    'babel/semi': 1,
    'react/jsx-filename-extension': 'off',
    // Import rules off for now due to HoundCI issue
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      "error",
      {
        // Need to check Katello, Foreman, and Foreman's meta package for dependencies
        "packageDir": [path.join(__dirname, '../../katello'), ...getPackageJsonDirectories(true)]
      }
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [
          'Link',
          'LinkContainer'
        ],
        specialLink: [
          'to'
        ]
      }
    ],
    'promise/prefer-await-to-then': 'error',
    'promise/prefer-await-to-callbacks': 'error',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_'
      }
    ]
  }
}
