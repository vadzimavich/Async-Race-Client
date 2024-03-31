module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    require.resolve('./shared'),
  ],
  rules: {
    '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
    '@typescript-eslint/no-implied-eval': ['error'],
    '@typescript-eslint/no-throw-literal': ['error'],
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
  },
};
