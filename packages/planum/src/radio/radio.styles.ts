import { paragraphCss, subheaderCss } from '../text'
import { styled } from '../theme'

export const StyleRadioGroupContainer = styled('div', {
  variants: {
    type: {
      button: {
        display: 'flex',
      },

      radio: {},
    },
  },
})

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
    isHovered: {
      true: {},
    },

    isSelected: {
      true: {
        boxShadow: 'inset 0 0 0 2px $colors$primary600',
        color: '$primary600',
      },
    },

    isDisabled: {
      true: {
        borderColor: '$surface400',
        backgroundColor: '$surface100',
        cursor: 'not-allowed',
      },
    },

    isFocusVisible: {
      true: { outline: '2px solid $colors$primary100' },
    },
  },

  compoundVariants: [
    {
      isHovered: true,
      isSelected: true,
      css: {
        boxShadow: 'inset 0 0 0 2px $colors$primary800',
        color: '$primary800',
      },
    },
    {
      isHovered: true,
      isSelected: false,
      css: {
        boxShadow: 'inset 0 0 0 2px $colors$surface600',
      },
    },
  ],
})

export const StyledRadioLabel = styled('label', paragraphCss, {
  d: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  userSelect: 'none',

  variants: {
    isHovered: {
      true: {},
    },

    isSelected: {
      true: {},
    },

    isDisabled: {
      true: {
        cursor: 'not-allowed',
      },
    },

    isFocusVisible: {
      true: {},
    },
  },
})

export const StyledRadioButtonLabel = styled('label', subheaderCss, {
  cursor: 'pointer',
  userSelect: 'none',
  transition: 'all .2s',
  dflex: 'center',
  py: 8,
  px: 12,
  fontWeight: '$semibold',

  borderTop: '1px solid $surface400',
  borderBottom: '1px solid $surface400',
  borderRight: '1px solid $surface400',

  '&:first-of-type': {
    borderLeft: '1px solid $surface400',
    borderTopLeftRadius: '$sm',
    borderBottomLeftRadius: '$sm',
  },

  '&:last-of-type': {
    borderTopRightRadius: '$sm',
    borderBottomRightRadius: '$sm',
  },

  variants: {
    isHovered: {
      true: {},
    },

    isSelected: {
      true: {
        color: '$textDark',
        bg: '$surface200',
      },

      false: {
        color: '$textLight',
        bg: '$white',
      },
    },

    isDisabled: {
      true: {
        color: '$textDisabled',
        cursor: 'not-allowed',
      },
    },

    isFocusVisible: {
      true: {
        boxShadow: '0 0 0 2px $colors$primary',
        zIndex: 2,
      },
    },
  },

  compoundVariants: [
    {
      isHovered: true,
      isSelected: true,
      css: {
        bg: '$surface300',
      },
    },
    {
      isHovered: true,
      isSelected: false,
      css: {
        bg: '$surface100',
      },
    },
  ],
})
