module.exports = {
  globals: {
    // __PATH_PREFIX__: true,
    // USER: true,
    // API_KEY: true,
  },
  ignorePatterns: ['dist/*', 'worker/*'],
  extends: [
    'airbnb/base',
  ],
  env: {
    node: true,
    es2020: true,
    mocha: true,
  },
  parserOptions: {
    ecmaFeatures: {
      globalReturn: true,
      impliedStrict: true,
    },
  },
  rules: {
    // airbnb scope overrides
    'class-methods-use-this': 'off',

    // prettier replacement rules
    'max-len': [2, 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      comments: 300,
    }],
    indent: [2, 2],
    semi: [2, 'always'],
    quotes: [2, 'single', {allowTemplateLiterals: true}],
    'comma-dangle': [2, 'always-multiline'],
    'object-curly-spacing': [2, 'never'],
    'arrow-parens': [2, 'as-needed'],
    'linebreak-style': 0,
    'array-bracket-spacing': [2, 'never'],
    'function-call-argument-newline': [2, 'consistent'],
    'function-paren-newline': [2, 'consistent'],
    'object-property-newline': 2,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'import/prefer-default-export': [1],
    'no-restricted-globals': 0,

    // overrides
    'no-unused-vars': 1,
    'no-unused-expressions': [2, {allowShortCircuit: true}],
    'no-console': 0,
    'no-plusplus': 1,
    'no-bitwise': 1,
    'no-underscore-dangle': 1,
    'max-classes-per-file': 1,
  },
};
