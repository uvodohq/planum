import { paragraphCss } from '~/ui/text'

import type { VariantProps } from '../theme'
import { styled } from '../theme'

export const StyledRadioSvg = styled('svg', {
  boxSizing: 'border-box',
  backgroundColor: 'transparent',
  display: 'inline-flex',
  size: 20,
  borderRadius: '$pill',
  boxShadow: 'inset 0 0 0 2px $colors$surface400',
  dflex: 'center',
  color: 'transparent',
  transition: 'all .2s',

  variants: {
    isSelected: {
      true: {
        boxShadow: 'inset 0 0 0 2px $colors$primary600',
        color: '$primary600',

        '&:hover': {
          boxShadow: 'inset 0 0 0 2px $colors$primary800',
          color: '$primary800',
        },
      },

      false: {
        '&:hover': {
          boxShadow: 'inset 0 0 0 2px $colors$surface600',
        },
      },
    },

    isDisabled: {
      true: {
        borderColor: '$surface400',
        backgroundColor: '$surface100',
        disableActions: true,
      },
    },

    isFocusVisible: {
      true: { outline: '2px solid $colors$primary100' },
    },
  },
})

export const StyledLabel = styled('label', paragraphCss, {
  d: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  userSelect: 'none',

  variants: {
    isHovered: {
      true: {},
    },
  },
})

export type StyledRadioVariants = VariantProps<typeof StyledRadioSvg>
