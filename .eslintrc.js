module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    semi: 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error', // or "error"
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
}
