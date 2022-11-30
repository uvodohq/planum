import { paragraphCss, subheaderCss } from '../text'
import type { VariantProps } from '../theme'
import { styled } from '../theme'

export const StyleRadioGroup = styled('div', {})

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

export const StyledRadioButton = styled('span', subheaderCss, {
  backgroundColor: 'transparent',
  display: 'inline-flex',
  dflex: 'center',
  transition: 'all .2s',
  py: 8,
  px: 12,
  fontWeight: '$semibold',

  // height: 48px;
  // border: 1px solid #C7C7C7;
  // border-radius: 4px 0px 0px 4px;

  variants: {
    isSelected: {
      true: {
        color: '$textDark',
        bg: '$surface200',

        '&:hover': {
          color: '$surface300',
        },
      },

      false: {
        '&:hover': {},
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
