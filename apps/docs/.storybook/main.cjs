const { mergeConfig } = require('vite')
const path = require('path')

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../../../packages/planum/src/**/*.stories.mdx',
    '../../../packages/planum-editor/src/**/*.stories.mdx',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-themes',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      skipChildrenPropWithoutDoc: false,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
      include: ['../../packages/**/*.{ts,tsx}'],
    },
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: '@uvodohq/planum',
            replacement: path.resolve(
              __dirname,
              '../../../packages/planum/src/index.tsx',
            ),
          },
          {
            find: '@uvodohq/planum-editor',
            replacement: path.resolve(
              __dirname,
              '../../../packages/planum-editor/src/index.tsx',
            ),
          },
        ],
      },
    }
  },
}
