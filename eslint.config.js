import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import importX from 'eslint-plugin-import-x'
import unicorn from 'eslint-plugin-unicorn'
import eslintReact from 'eslint-plugin-react'
import eslintReactHooks from 'eslint-plugin-react-hooks'
import eslintReactRefresh from 'eslint-plugin-react-refresh'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'
import tanstackQuery from '@tanstack/eslint-plugin-query'
import sonarjs from 'eslint-plugin-sonarjs'
import reactCompiler from 'eslint-plugin-react-compiler'

export default tseslint.config(
  {
    ignores: ['dist/', 'src/api/swagger'],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.es2024 },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      react: eslintReact,
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
      'import-x': importX,
      unicorn,
      sonarjs,
      prettier: prettierPlugin,
      'react-compiler': reactCompiler,
    },
  },
  js.configs.recommended,
  ...tseslint.configs.strict,
  ...tanstackQuery.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    files: ['src/**/*.{ts,tsx,json}'],
    rules: {
      ...eslintReact.configs.recommended.rules,
      ...eslintReactHooks.configs.recommended.rules,
      'react-compiler/react-compiler': 'warn',
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-expressions': ['error', { allowTernary: true }],

      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
      'react/jsx-no-leaked-render': [
        'error',
        {
          validStrategies: ['ternary', 'coerce'],
        },
      ],
      'react/jsx-boolean-value': ['error', 'always'],
      'react-hooks/rules-of-hooks': 'error',
      'react-refresh/only-export-components': 'warn',
      'import-x/no-named-as-default-member': 'off',
      'import-x/no-named-as-default': 'off',
      'import-x/no-unresolved': ['error'],
      'import-x/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'unknown', 'type'],
          'newlines-between': 'never',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'arrow-body-style': ['error', 'as-needed'],
      'no-debugger': 'warn',
      'no-console': [
        'error',
        {
          allow: ['clear', 'info', 'error', 'trace'],
        },
      ],
      'unicorn/filename-case': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-useless-undefined': 'warn',
      'unicorn/no-negated-condition': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-array-for-each': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-dynamic-delete': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import-x/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import-x/resolver': {
        typescript: true,
        node: true,
      },
    },
  },
)
