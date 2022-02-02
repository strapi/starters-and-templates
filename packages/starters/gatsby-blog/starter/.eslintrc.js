module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ["react-app", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        singleQuote: false,
        trailingComma: "es5",
        semi: false,
        tabWidth: 2,
      },
    ],
  },
}
