import { create } from '@storybook/theming'
import { addons } from '@storybook/addons'
import logo from './logo.svg'

const theme = create({
  base: 'light',
  brandImage: logo,
  brandUrl: 'https://uvodo.com',
  brandTitle: 'Uvodo Design',
  background: {
    hoverable: 'rgba(80, 52, 255, 0.1)',
  },
  hoverable: 'rgba(80, 52, 255, 0.1)',
  colorPrimary: '#8979e8',
  colorSecondary: '#8979e8',

  // UI
  //   appBg: "white",
  //   appContentBg: "silver",
  //   appBorderColor: "grey",
  //   appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  //   textColor: "black",
  //   textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: '#8979e8',
  barSelectedColor: '#8979e8',
  // barBg: "hotpink",

  // Form colors
  //   inputBg: "white",
  //   inputBorder: "silver",
  //   inputTextColor: "black",
  //   inputBorderRadius: 4,
})

addons.setConfig({
  theme,
})
