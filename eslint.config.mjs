import _import from "eslint-plugin-import";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/build",
        "**/dist",
        "**/public",
        "**/*.stories.js",
        "**/*.stories.tsx",
        "storybook-static/*",
        "**/*.config.ts",
        "**/*.config.mjs",
    ],
}, ...compat.extends(
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
), {
    plugins: {
        import: fixupPluginRules(_import),
        "@typescript-eslint": typescriptEslint,
        react,
        prettier,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },

            project: "./tsconfig.json",
        },
    },

    rules: {
        "react/react-in-jsx-scope": "off",

        "react/jsx-filename-extension": ["warn", {
            extensions: [".ts", ".tsx"],
        }],

        "@typescript-eslint/camelcase": "off",

        "import/extensions": ["error", "ignorePackages", {
            js: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
        }],

        "no-console": "error",

        "prettier/prettier": ["error", {
            singleQuote: true,
        }],

        "react/button-has-type": "off",
        "react/no-array-index-key": "off",
        "eslintno-console": "off",
        "@typescript-eslint/default-param-last": "off",
        "@typescript-eslint/no-shadow": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-explicit-any": "off",

        "react/function-component-definition": [2, {
            namedComponents: ["arrow-function", "function-declaration"],
        }],

        "import/prefer-default-export": "off",
    },
}];