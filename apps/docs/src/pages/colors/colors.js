import { tokens } from '@uvodohq/planum'

const {
  baseColors,
  dangerColors,
  infoColors,
  neutralColors,
  palette,
  primaryColors,
  secondaryColors,
  successColors,
  surfaceColors,
  tertiaryColors,
  textColors,
  utilityColors,
  warningColors,
} = tokens

function getHex(key) {
  return palette[key?.slice(1)] // removes $ sign from $primary500
}

function addSpaceColorName(colorKey) {
  return colorKey.split(/(\d.*)/, 2).join(' ') // ads space between primary 500
}

const paletteSets = [
  [primaryColors, 'Primary'],
  [secondaryColors, 'Secondary'],
  [tertiaryColors, 'Tertiary'],
  [successColors, 'Success'],
  [infoColors, 'Info'],
  [warningColors, 'Warning'],
  [dangerColors, 'Danger'],
  [surfaceColors, 'Surface'],
]

export const paletteColorSets = paletteSets.map(([colors, title]) => ({
  title,
  colors: Object.keys(colors).map((colorKey) => ({
    name: addSpaceColorName(colorKey),
    description: null,
    value: colors[colorKey],
    hex: getHex(colors[colorKey]),
  })),
}))

export const textColorSet = {
  title: 'Text colors',
  colors: Object.keys(textColors).map((colorKey) => ({
    name: addSpaceColorName(colorKey),
    description: null,
    value: textColors[colorKey],
    hex: getHex(textColors[colorKey]),
  })),
}

export const semanticColorSets = [
  {
    title: 'Base',
    colors: [
      {
        name: 'Primary',
        description: 'Primary color  ',
        value: baseColors.primary,
        hex: getHex(baseColors.primary),
      },

      {
        name: 'Secondary',
        description: 'Secondary color  ',
        value: baseColors.secondary,
        hex: getHex(baseColors.secondary),
      },

      {
        name: 'Tertiary',
        description: 'Tertiary color  ',
        value: baseColors.tertiary,
        hex: getHex(baseColors.tertiary),
      },
    ],
  },
  {
    title: 'Utility',
    colors: [
      {
        name: 'Success',
        description: 'success color  ',
        value: utilityColors.success,
        hex: getHex(utilityColors.success),
      },

      {
        name: 'Info',
        description: 'info color  ',
        value: utilityColors.info,
        hex: getHex(utilityColors.info),
      },

      {
        name: 'Warning',
        description: 'warning color  ',
        value: utilityColors.warning,
        hex: getHex(utilityColors.warning),
      },
      {
        name: 'Danger',
        description: 'danger color   ',
        value: utilityColors.danger,
        hex: getHex(utilityColors.danger),
      },
    ],
  },
  {
    title: 'Neutral',
    colors: [
      {
        name: 'White',
        description: 'white color  ',
        value: neutralColors.white,
        hex: getHex(neutralColors.white),
      },

      {
        name: 'Surface',
        description: 'surface color  ',
        value: neutralColors.surface,
        hex: getHex(neutralColors.surface),
      },

      {
        name: 'black',
        description: 'black color  ',
        value: neutralColors.black,
        hex: getHex(neutralColors.black),
      },
    ],
  },
]
