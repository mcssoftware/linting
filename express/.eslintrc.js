module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }] // Use our .prettierrc file as source
    }
};
