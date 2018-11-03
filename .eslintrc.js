module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
  },
  "rules": {
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }],
    "react/prop-types": 0,
    "react/prefer-stateless-function": "off"
  },
  "plugins": [
    "react",
    "jsx-a11y",
  ]
 };