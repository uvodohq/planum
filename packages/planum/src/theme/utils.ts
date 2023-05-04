import type * as Stitches from '@stitches/react'

type Spacing = any

export const shorthandUtils = {
  // paddings
  p: (value: Spacing) => ({
    padding: value,
  }),
  pt: (value: Spacing) => ({
    paddingTop: value,
  }),
  pr: (value: Spacing) => ({
    paddingRight: value,
  }),
  pb: (value: Spacing) => ({
    paddingBottom: value,
  }),
  pl: (value: Spacing) => ({
    paddingLeft: value,
  }),
  px: (value: Spacing) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Spacing) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  // margins
  m: (value: Spacing) => ({
    margin: value,
  }),
  mt: (value: Spacing) => ({
    marginTop: value,
  }),
  mr: (value: Spacing) => ({
    marginRight: value,
  }),
  mb: (value: Spacing) => ({
    marginBottom: value,
  }),
  ml: (value: Spacing) => ({
    marginLeft: value,
  }),
  mx: (value: Spacing) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Spacing) => ({
    marginTop: value,
    marginBottom: value,
  }),

  // Text
  ta: (value: Stitches.PropertyValue<'textAlign'>) => ({
    textAlign: value,
  }),
  tt: (value: Stitches.PropertyValue<'textTransform'>) => ({
    textTransform: value,
  }),
  to: (value: Stitches.PropertyValue<'textOverflow'>) => ({
    textOverflow: value,
  }),
  fw: (value: Stitches.PropertyValue<'fontWeight'>) => ({
    fontWeight: value,
  }),

  lineClamp: (value: Stitches.PropertyValue<'lineClamp'>) => ({
    display: '-webkit-box',
    '-webkit-line-clamp': value,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  }),

  oneLineClamp: () => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }),

  d: (value: Stitches.PropertyValue<'display'>) => ({ display: value }),
  dflex: (value: Stitches.PropertyValue<'alignItems'>) => ({
    display: 'flex',
    alignItems: value,
    justifyContent: value,
  }),
  bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    background: value,
  }),
  bgBlur: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    bf: 'saturate(180%) blur(10px)',
    bg: `${value}66`,
  }),
  bgColor: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value,
  }),
  bgClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value,
  }),
  br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
    borderRadius: value,
  }),
  lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
    lineHeight: value,
  }),
  userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
    WebkitUserSelect: value,
    userSelect: value,
  }),
  disableActions: (disabled: boolean) =>
    disabled
      ? {
          touchAction: 'none',
          userSelect: 'none',
          userDrag: 'none',
          tapHighlightColor: 'rgba(0, 0, 0, 0)',
          touchCallout: 'none',
          contentZooming: 'none',
          pointerEvents: 'none',
        }
      : {},

  w: (value: Stitches.PropertyValue<'width'>) => ({ width: value }),
  h: (value: Stitches.PropertyValue<'height'>) => ({ height: value }),
  size: (value: Stitches.PropertyValue<'width'>) => ({
    width: value,
    height: value,
  }),
  minSize: (value: Stitches.PropertyValue<'width'>) => ({
    minWidth: value,
    minHeight: value,
  }),
  maxSize: (value: Stitches.PropertyValue<'width'>) => ({
    maxWidth: value,
    maxHeight: value,
  }),
  appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
    WebkitAppearance: value,
    appearance: value,
  }),
  /**
   * add border line to element without getting extra 1px height/width
   * useful to make pixel perfect ui from figma
   */
  shadowLine: (value: 'top' | 'bottom' | 'left' | 'right' | 'all') => {
    const shadow = {
      top: `inset 0 1px 0 $colors$surface200`,
      bottom: `inset 0 -1px 0 $colors$surface200`,
      left: `inset 1px 0 0 $colors$surface200`,
      right: `inset -1px 0 0 $colors$surface200`,
      all: `inset 0 0 1px 0 $colors$surface200`,
    }[value]

    return {
      boxShadow: shadow as any,
    }
  },
  shadowLineTop: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    boxShadow: `inset 0 1px 0 ${value}`,
  }),
  shadowLineBottom: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    boxShadow: `inset 0 -1px 0 ${value}`,
  }),
  shadowLineLeft: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    boxShadow: `inset 1px 0 0 ${value}`,
  }),
  shadowLineRight: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    boxShadow: `inset -1px 0 0 ${value}`,
  }),
  shadowLineAll: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
    boxShadow: `inset 0 0 0 1px ${value}`,
  }),
} as any
