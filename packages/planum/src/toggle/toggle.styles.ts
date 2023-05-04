import type * as Stitches from '@stitches/react'

import { paragraphCss } from '../text'
import { styled } from '../theme'

export const StyledLabel = styled('label', paragraphCss, {
  d: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  userSelect: 'none',
})

export const StyledThumb = styled('span', {
  display: 'block',
  minSize: 20,
  backgroundColor: '$surface600',
  borderRadius: '$pill',
  transition:
    'transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1), background-color 0.2s',
  transform: 'translateX(0)',
  willChange: 'transform',
})

export const StyledSwitch = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  width: 56,
  height: 32,
  padding: '0 5px',
  backgroundColor: 'transparent',
  border: '1px solid $surface600',
  borderRadius: '$pill',
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  cursor: 'pointer',

  [`&:active ${StyledThumb}`]: {
    transform: 'scale(0.94)',
  },

  variants: {
    isSelected: {
      true: {
        borderColor: '$primary600',

        [`& ${StyledThumb}`]: {
          transform: 'translateX(calc(100% + 5px))',
          backgroundColor: '$primary600',
        },
      },
    },

    isFocusVisible: {
      true: {
        borderColor: '$primary600',
        boxShadow: '0 0 0 3px $colors$primary100',
      },
    },

    isDisabled: {
      true: {
        disableActions: true,
      },
    },

    isHovered: {
      true: {},
    },
  },

  defaultVariants: {
    isSelected: false,
  },

  compoundVariants: [
    {
      isSelected: false,
      isDisabled: true,
      css: {
        borderColor: '$surface400',
        backgroundColor: '$surface100',

        [`& ${StyledThumb}`]: {
          backgroundColor: '$surface400',
        },
      },
    },
    {
      isSelected: true,
      isDisabled: true,
      css: {
        borderColor: '$primary300',

        [`& ${StyledThumb}`]: {
          backgroundColor: '$primary300',
        },
      },
    },

    {
      isSelected: true,
      isHovered: true,
      css: {
        borderColor: '$primary800',

        [`& ${StyledThumb}`]: {
          backgroundColor: '$primary800',
        },
      },
    },

    {
      isSelected: false,
      isHovered: true,
      css: {
        borderColor: '$surface700',

        [`& ${StyledThumb}`]: {
          backgroundColor: '$surface700',
        },
      },
    },
  ],
})

export type StyledSwitchVariants = Stitches.VariantProps<typeof StyledSwitch>
