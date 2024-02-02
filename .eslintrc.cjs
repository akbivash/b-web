module.exports = {
    "env": {
        "browser": true,
        "amd": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
    ],
    // "overrides": [
    //     {
    //         "env": {
    //             "node": true
    //         },
    //         "files": [
    //             ".eslintrc.{js,cjs}"
    //         ],
    //         "parserOptions": {
    //             "sourceType": "script"
    //         }
    //     }
    // ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        'unused-imports'
    ],
    "rules": {
        'unused-imports/no-unused-imports-ts': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        "react/react-in-jsx-scope": "off",
        '@typescript-eslint/no-unused-vars': 'off',
        "no-unused-vars": "off",
        "react/no-unescaped-entities": "off" 
    }
};
