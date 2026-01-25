import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	// Base Next.js + TS (obligatoire)
	...compat.extends("next/core-web-vitals", "next/typescript"),
	// Fichiers ignorés
	{
		ignores: [
		"node_modules/**",
		".next/**",
		"out/**",
		"build/**",
		"next-env.d.ts",
		],
	},
	// Règles TypeScript / JS sérieuses
	{
		rules: {
			/* ==============================
			* Unused / conventions
			* ============================== */
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

			/* ==============================
			* Robustesse / bugs réels
			* ============================== */
			"@typescript-eslint/consistent-type-imports": "off",

			/* ==============================
			* Best practices
			* ============================== */
			"no-console": [
				"warn",
				{
					allow: ["warn", "error"],
				},
			],

			"eqeqeq": ["error", "always"],

			"prefer-const": "warn",

			/* ==============================
			* That we should discuss
			* ============================== */
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/no-explicit-any": "error",
		},
	},
];

export default eslintConfig;
