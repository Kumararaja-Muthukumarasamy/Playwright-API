import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-explicit-any": "off",   // 🔥 relax
      "@typescript-eslint/no-unused-vars": "warn",   // 🔥 not error
      "no-undef": "off",                             // 🔥 important
    },
  },
];