module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {

        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "rules": {
      "no-tabs": "off",
    "indent": [
      "error",
      "tab"
    ],
    "linebreak-style": "off",
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ]
    }
};
