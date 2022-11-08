export const fontFamilies = {
  sans: `"Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto',  sans-serif`,
}

// https://nekocalc.com/px-to-rem-converter
// base html font size is 16px
export const fontSizes = {
  min: '0.75rem', // minumum font size 12px
  xs: '0.875rem', // 14px
  base: '1rem', // 16px
  sm: '1.25rem', // 20px
  md: '1.5rem', // 24px
  lg: '1.75rem', // 28px
  xl: '2.25rem', // 36px
  xxl: '3rem', // 48px
}

export const fontWeights = {
  bold: 700,
  semibold: 600,
  medium: 500,
  regular: 400,
}

/**
 height (px) / font-size (px) = unitless lineheight
    24 / 12 = 2
    24 / 12 = 2
    24 / 14 = 1.714
    32 / 16 = 2
    32 / 20 = 1.6
    40 / 24 = 1.66
    40 / 28 = 1.428
    48 / 36 = 1.333
    64 / 48 = 1.333
 */

export const lineHeights = {
  xs: 1.333,
  sm: 1.428,
  md: 1.6,
  lg: 1.66,
  xl: 1.714,
  xxl: 2,
}
