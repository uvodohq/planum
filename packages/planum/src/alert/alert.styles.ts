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
        backgroundColor: '$primary25',
        color: '$primary600',
        shadowLineAll: '$colors$primary100 !important',
      },

      info: {
        backgroundColor: '$info25',
        color: '$info',
        shadowLineAll: '$colors$info100 !important',
      },

      error: {
        backgroundColor: '$danger25',
        color: '$danger',
        shadowLineAll: '$colors$danger100 !important',
      },

      warning: {
        backgroundColor: '$warning25',
        color: '$warning',
        shadowLineAll: '$colors$warning100 !important',
      },

      success: {
        backgroundColor: '$success25',
        color: '$success',
        shadowLineAll: '$colors$success100 !important',
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
