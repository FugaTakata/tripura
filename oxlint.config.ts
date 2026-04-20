import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["react", "jsx-a11y", "nextjs", "node"],
  categories: {
    correctness: "error",
    suspicious: "warn",
  },
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  ignorePatterns: ["**/node_modules/**", "**/dist/**", "**/.next/**", "**/*.d.ts"],
  rules: {
    "no-void": ["error", { allowAsStatement: true }],
    "no-console": ["error", { allow: ["warn", "error", "info", "debug"] }],
    "prefer-template": "error",
    "arrow-body-style": ["error", "as-needed"],
    "guard-for-in": "error",
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "next/router",
            message: "Please import from `next/navigation` instead.",
          },
        ],
      },
    ],

    "typescript/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: false,
        varsIgnorePattern: "^_",
      },
    ],
    "typescript/consistent-type-definitions": ["error", "type"],
    "typescript/consistent-type-imports": ["error", { prefer: "type-imports" }],
    "typescript/no-floating-promises": "error",
    "typescript/switch-exhaustiveness-check": "error",

    "react/react-in-jsx-scope": "off",
    "react/no-unknown-property": "error",
    "react/self-closing-comp": "error",
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
    "react/exhaustive-deps": "error",
    "react/rules-of-hooks": "error",

    "jsx-a11y/alt-text": "error",
    "jsx-a11y/anchor-has-content": "error",
    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-role": "error",
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/click-events-have-key-events": "error",
    "jsx-a11y/heading-has-content": "error",
    "jsx-a11y/html-has-lang": "error",
    "jsx-a11y/iframe-has-title": "error",
    "jsx-a11y/img-redundant-alt": "error",
    "jsx-a11y/label-has-associated-control": "error",
    "jsx-a11y/media-has-caption": "error",
    "jsx-a11y/mouse-events-have-key-events": "error",
    "jsx-a11y/no-access-key": "error",
    "jsx-a11y/no-autofocus": "error",
    "jsx-a11y/no-distracting-elements": "error",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "jsx-a11y/scope": "error",
    "jsx-a11y/tabindex-no-positive": "error",
  },
  overrides: [
    {
      files: ["apps/**/*.ts", "apps/**/*.tsx", "apps/**/*.js", "apps/**/*.jsx"],
      rules: {
        "nextjs/no-img-element": "error",
        "nextjs/no-async-client-component": "error",
        "node/no-process-env": "error",
      },
    },
  ],
});
