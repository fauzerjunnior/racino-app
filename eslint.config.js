module.exports = {
  extends: ['react-app', 'react-app/jest', 'plugin:prettier/recommended'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': 'error',
    'import/no-anonymous-default-export': 'off',
    'jsx-a11y/alt-text': 'off',
  },
};
