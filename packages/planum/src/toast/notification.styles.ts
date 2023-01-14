import type * as Stitches from '@stitches/react'

import { Paragraph } from '../text'
import { styled } from '../theme'

export const StyledNotification = styled('div', {
  boxShadow: '$sm',
  padding: '$16',
  borderRadius: '$sm',
  backgroundColor: '$surface900',
  color: '$white',

  variants: {
    width: {
      full: {
        width: '100%',
        display: 'block',
        maxWidth: 344,
      },
      mini: {
        display: 'inline-block',
      },
    },
  },

  defaultVariants: {
    width: 'full',
  },
})

export const StyledMessage = styled(Paragraph, {
  maxWidth: 240,
  m: 0,
  mr: '$16',
})

export const StyledBody = styled('div', {
  d: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const StyledFooter = styled('div', {})

export type StyledNotificationVariants = Stitches.VariantProps<
  typeof StyledNotification
>
