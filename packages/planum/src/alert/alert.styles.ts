import type * as Stitches from '@stitches/react'

import { Paragraph } from '../text'
import { styled } from '../theme'

export const AlertContainer = styled('div', {
  cursor: 'initial',
  display: 'flex',
  justifyContent: 'space-between',
  p: '$16',
  overflow: 'hidden',
  borderRadius: '$sm',
  width: '100%',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary50',
        color: '$primary800',
        shadowLineAll: '$colors$primary300 !important',
      },

      info: {
        backgroundColor: '$info50',
        color: '$info800',
        shadowLineAll: '$colors$info300 !important',
      },

      error: {
        backgroundColor: '$danger50',
        color: '$danger800',
        shadowLineAll: '$colors$danger300 !important',
      },

      warning: {
        backgroundColor: '$warning50',
        color: '$warning800',
        shadowLineAll: '$colors$warning300 !important',
      },

      success: {
        backgroundColor: '$success50',
        color: '$success800',
        shadowLineAll: '$colors$success300 !important',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export const StyledContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  color: '$textDark',
  pr: '$8',
})

export const StyledIcon = styled('span', {
  mr: '$8',
})

export const StyledText = styled(Paragraph, {
  userSelect: 'text',
})

export type StyledAlertVariants = Stitches.VariantProps<typeof AlertContainer>
