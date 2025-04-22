import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import vue from 'eslint-plugin-vue';
import globals from 'globals';
import { parser as tsParser, plugin as typescriptEslint } from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';

export const baseConfig = {
    plugins: {
        '@typescript-eslint': typescriptEslint,
        '@stylistic': stylistic,
        'simple-import-sort': simpleImportSort,
        'unused-imports': unusedImports,
        'vue': vue,
        'import': importPlugin,
    },

    languageOptions: {
        globals: {
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: 2022,
        sourceType: 'module',

        parserOptions: {
            modules: true,
        },
    },

    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },

    rules: {
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-explicit-any': 0,

        '@typescript-eslint/no-inferrable-types': [2, {
            ignoreParameters: true,
            ignoreProperties: true,
        }],

        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-this-alias': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/no-var-requires': 0,

        'array-bracket-spacing': [2, 'never'],
        'arrow-body-style': 0,
        'brace-style': 0,
        'class-methods-use-this': 0,
        'comma-dangle': 0,
        curly: [2, 'all'],
        'dot-notation': 0,
        'eol-last': 2,

        eqeqeq: [2, 'always', {
            null: 'never',
        }],

        'import/named': 0,
        'import/no-default-export': 2,
        'import/no-namespace': 0,
        'import/no-nodejs-modules': 0,
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0,
        indent: 0,
        'newline-per-chained-call': 0,

        'no-console': ['error', {
            allow: ['warn', 'info', 'error'],
        }],

        'no-dupe-class-members': 0,
        'no-empty': 0,
        'no-extra-parens': 0,
        'no-invalid-this': 0,
        'no-loop-func': 0,

        'no-multiple-empty-lines': [2, {
            max: 2,
            maxBOF: 0,
            maxEOF: 1,
        }],

        'no-new-func': 0,
        'no-prototype-builtins': 0,
        'no-use-before-define': 0,
        'no-useless-constructor': 0,
        'no-warning-comments': 0,
        'object-property-newline': 0,
        'operator-assignment': 0,
        'operator-linebreak': 0,
        'quote-props': 0,
        '@stylistic/member-delimiter-style': 2,
        '@stylistic/indent': ['error', 4],
        '@stylistic/quotes': ['error', 'single'],
        '@stylistic/semi': ['error', 'always'],
        '@stylistic/comma-dangle': ['error', 'always-multiline'],
        '@stylistic/object-curly-spacing': ['error', 'always'],

        '@typescript-eslint/no-unused-vars': ['warn', {
            ignoreRestSiblings: true,
            args: 'after-used',
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',
        }],

        'simple-import-sort/imports': 'warn',
        'sort-imports': 0,

        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }],

        'template-curly-spacing': 0,
        'unused-imports/no-unused-imports': 'warn',
        'valid-jsdoc': 0,
    },
};

export const jsConfig = {
    files: ['**/*.js'],
    rules: {
        'import/no-commonjs': 0,
        'import/extensions': 0,
    },
};

export const testConfig = {
    files: ['**/test/**/*'],

    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.mocha,
        },
    },

    rules: {
        'no-restricted-properties': ['error', {
            object: 'describe',
            property: 'only',
        }, {
            object: 'context',
            property: 'only',
        }, {
            object: 'it',
            property: 'only',
        }],
    },
};

export const vueConfig = {
    files: ['**/*.vue'],

    languageOptions: {
        parser: vueParser,
        parserOptions: {
            parser: tsParser,
            extraFileExtensions: ['.vue'],
            sourceType: 'module',
            ecmaVersion: 'latest',
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    plugins: {
        vue,
    },

    rules: {
        'import/no-default-export': 0,
        'vue/attributes-order': 2,
        'vue/component-definition-name-casing': [2, 'PascalCase'],
        'vue/first-attribute-linebreak': 2,
        'vue/html-closing-bracket-spacing': 2,
        'vue/html-end-tags': 2,
        'vue/html-indent': [2, 4, { alignAttributesVertically: false }],
        'vue/html-self-closing': [2, { html: { void: 'always' } }],
        'vue/max-attributes-per-line': 2,
        'vue/multi-word-component-names': 0,
        'vue/mustache-interpolation-spacing': 2,
        'vue/no-multi-spaces': 2,
        'vue/no-multiple-template-root': 0,
        'vue/no-template-key': 0,
        'vue/no-v-for-template-key': 0,
        'vue/order-in-components': 2,
        'vue/prop-name-casing': 2,
        'vue/block-order': ['error', {
            order: ['template', 'script', 'style'],
        }],
    },
};

export const tsConfig = {
    files: ['*.ts'],
    rules: {
        'semi': 0,
    },
};

export const dtsConfig = {
    files: ['*.d.ts'],
    rules: {
        'import/no-default-export': 0,
    },
};

export const mjsConfig = {
    files: ['*.mjs'],
    rules: {
        'import/no-default-export': 0,
    },
};

export const sharedConfigs = [
    baseConfig,
    tsConfig,
    dtsConfig,
    mjsConfig,
    jsConfig,
    testConfig,
    vueConfig,
];

export default sharedConfigs;
