import { css } from './stitches.config'

// TODO: custom scroolbar in firefox not works,
export const customScrollbar = css({
  'scrollbar-width': 'thin', // for firefox as possible

  /* Foreground, Background */
  'scrollbar-color': '$colors$surface300 transparent',

  '&::-webkit-scrollbar': {
    width: 4 /* vertical scrollbars */,
    height: 4 /* horizontal scrollbars */,
  },

  '&::-webkit-scrollbar-thumb': {
    background: '$surface300',
    borderRadius: 32,
  },

  '&::-webkit-scrollbar-track ': {
    background: 'transparent',
  },
})
