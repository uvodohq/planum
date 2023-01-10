import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'

import { isDev } from '../utils'
import {
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  shadows,
  space,
} from './tokens'
import { shorthandUtils } from './utils'

const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  prefix: isDev ? '' : 'Planum',
  theme: {
    colors,
    fonts: fontFamilies,
    fontSizes,
    fontWeights,
    lineHeights,
    shadows,
    radii,
    space,
    sizes: space,
  },
  media: {
    desktop: '(min-width: 1024px)',
    laptop: '(min-width: 768px)',
    tablet: '(min-width: 640px)',
    largeMobile: '(min-width: 425px)',
    mobile: '(min-width: 0px)',

    // sm: '(min-width: 640px)',
    // md: '(min-width: 768px)',
    // lg: '(min-width: 1024px)',
    // xl: '(min-width: 1280px)',
    // xxl: '(min-width: 1536px)',
    // motion: '(prefers-reduced-motion)',
    // dark: '(prefers-color-scheme: dark)',
    // light: '(prefers-color-scheme: light)',
  },
  utils: shorthandUtils,
})

export type VariantProps<T extends {}> = Stitches.VariantProps<T>
export type CSS = Stitches.CSS<typeof config>

export type SpacingValue =
  | number
  | string
  | Stitches.PropertyValue<'margin' | 'padding'>

export {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
}
