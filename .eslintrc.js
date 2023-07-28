module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',

  },
  plugins: [
    'vue'
  ],
  rules: {
    "no-unused-vars": true
  },
  eslintConfig: {
    parser: 'babel-eslint'
  }
}
