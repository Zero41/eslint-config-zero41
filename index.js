module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "import/no-duplicates": "error",
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          [
            "internal",
            "unknown",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
        ],
        "newlines-between": "always",
      },
    ],
    "import/prefer-default-export": ["error", { target: "single" }],
    "no-console": ["error", { allow: ["warn", "error"] }],
  },
};
