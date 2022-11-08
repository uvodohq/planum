import * as ImgBase from '@radix-ui/react-avatar'

import { keyframes, styled } from '../theme'

const fade = keyframes({
  '50%': {
    backgroundColor: '$surface50',
    opacity: 0.8,
  },
})

export const Border = styled('span', {
  position: 'absolute',
  inset: '0',
  borderRadius: '$sm',
  zIndex: 1,
  transition: 'all 0.2s ease-in-out',
  shadowLineAll: '$colors$surface200',
  pointerEvents: 'none',

  variants: {
    status: {
      loading: {
        // animation: `${fade} 2s ease-in-out infinite alternate`,
        // animationDelay: 500, // delayMs
      },
    },
    animated: {
      false: {
        animation: 'none !important',
      },
    },
  },
})

export const StyledContainer = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: '$sm',
  backgroundColor: '$surface100',
  position: 'relative',

  [`&:hover ${Border}`]: {
    shadowLineAll: '$colors$surface400',
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
  },

  variants: {
    borderless: {
      true: {
        borderRadius: 0,

        [`& ${Border}`]: {
          display: 'none',
        },
      },
    },
  },
})

export const StyledImage = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const StyledFallback = styled('span', {
  width: '100%',
  height: '100%',
  dflex: 'center',
  bg: '$white',
  color: '$surface400',
  position: 'relative',
})
