import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
	// Presets Next.js + TS
	...compat.extends("next/core-web-vitals", "next/typescript"),

	// Ignored files / folders
	{
		ignores: [
		"node_modules/**",
		".next/**",
		"out/**",
		"build/**",
		"next-env.d.ts",
		],
	},

	// Global rules for TS files
	{
		rules: {
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
			args: "after-used",
			argsIgnorePattern: "^_",
			varsIgnorePattern: "^_",
			caughtErrorsIgnorePattern: "^_",
			},
		],
		"@typescript-eslint/no-shadow": "off",
		"@typescript-eslint/consistent-type-imports": "off",
		"no-console": ["warn", { allow: ["warn", "error"] }],
		"eqeqeq": ["error", "always"],
		"prefer-const": "warn",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-explicit-any": "error",
		},
	},
];

export default eslintConfig;
