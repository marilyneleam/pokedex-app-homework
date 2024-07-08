import sveltePlugin from 'eslint-plugin-svelte'
import prettierConfig from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import svelteEslintParser from 'svelte-eslint-parser'

export default [
    {
        ignores: ['build', '.svelte-kit', 'dist'],
    },
    {
        files: ['*.js'],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
        },
        plugins: {
            prettier: eslintPluginPrettier,
        },
        rules: {
            ...prettierConfig.rules,
            'prettier/prettier': 'error',
        },
    },
    {
        files: ['*.svelte'],
        languageOptions: {
            parser: svelteEslintParser,
        },
        plugins: {
            svelte: sveltePlugin,
            prettier: eslintPluginPrettier,
        },
        rules: {
            ...sveltePlugin.configs.recommended.rules,
            'prettier/prettier': 'error',
        },
    },
]
