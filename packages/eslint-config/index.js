module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:unicorn/recommended',
    '@antfu/eslint-config-react',
    'turbo',
    'prettier',
  ],
  plugins: ['simple-import-sort', 'react-hooks', 'prettier'],
  rules: {
    'import/order': 'off', // conflicts with simple-import-sort
    'sort-imports': 'off', // conflicts with simple-import-sort
    'antfu/if-newline': 'off', // conflicts with prettier
    'react/prop-types': 'off',

    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-null': 'off',

    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'import/newline-after-import': [
      'error',
      {
        count: 1, // add 1 empty blank line after the last import
      },
    ],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'prettier/prettier': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',

    'react/jsx-uses-react': 'error',
    'no-unused-vars': 'off',
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'coverage/',
    'pnpm-lock.yaml',
    'yarn.lock',
    'storybook-static/',
    '.husk/y',
    '.git/',
  ],
  overrides: [],
}
