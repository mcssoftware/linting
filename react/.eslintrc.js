module.exports = {
    env: {
        browser: true,
        es2021: true,
        amd: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
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
    plugins: ['react'],
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }] // Use our .prettierrc file as source
    }
};
