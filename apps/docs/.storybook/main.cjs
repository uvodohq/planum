const { mergeConfig } = require('vite')
const path = require('path')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    // '../storybook/**/*.stories.mdx',
    // '../../../packages/planum/src/alert/**/*.stories.mdx',
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
              '../../../packages/planum/dist',
            ),
          },
        ],
      },
    }
  },
}
