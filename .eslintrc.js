module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn",
    "max-len": [
      "warn",
      {
        ignoreComments: false,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ]
  }
}
