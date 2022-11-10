import { captionCss } from '../text'
import { css } from '../theme'

export const fallbackCss = css(captionCss, {
  fontWeight: '$medium',
  textTransform: 'uppercase',

  '&&': {
    backgroundColor: '$secondary',
    color: '$textDark',
  },
})

export const imgCss = css({
  '&&': {
    backgroundColor: '$secondary',
    borderRadius: '$sm',
  },
})
