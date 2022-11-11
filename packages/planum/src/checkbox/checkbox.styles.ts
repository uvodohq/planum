import { paragraphCss } from '../text'
import type { VariantProps } from '../theme'
import { styled } from '../theme'

// TODO: when label text of checkbox hovered, show styles for checkbox itself
export const StyledLabel = styled('label', paragraphCss, {
  display: 'inline-flex',
  alignItems: 'flex-start',
  cursor: 'pointer',
  userSelect: 'none',
  position: 'relative',

  variants: {
    isDisabled: {
      true: {
        cursor: 'default',
      },
    },
  },
})

export const StyledCheckbox = styled('div', {
  dflex: 'center',
  d: 'inline-flex',
  size: 20,
  maxSize: 20,
  minSize: 20,
  boxSizing: 'border-box',
  borderRadius: '$sm',
  border: '2px solid $surface400',
  transition: 'background-color 0.24s, border-color 0.24s',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  outline: 'none',
  mt: 2,

  variants: {
    isSelected: {
      true: {
        backgroundColor: '$primary600',
        borderColor: '$primary600',

        '&:hover': {
          backgroundColor: '$primary800',
          borderColor: '$primary800',
        },
      },

      false: {
        '&:hover': {
          borderColor: '$surface600',
        },
      },
    },

    isFocusVisible: {
      true: {
        borderColor: '$surface700',
      },
    },

    isDisabled: {
      true: {
        borderColor: '$surface400',
        backgroundColor: '$surface100',
        disableActions: true,
      },
    },

    isIndeterminate: {
      true: {
        backgroundColor: '$primary600',
        borderColor: '$primary600',

        '&:hover': {
          backgroundColor: '$primary800',
          borderColor: '$primary800',
        },
      },
    },
  },

  defaultVariants: {
    isSelected: false,
    isIndeterminate: false,
  },

  compoundVariants: [
    {
      isSelected: true,
      isDisabled: true,
      css: {
        backgroundColor: '$primary400',
        borderColor: '$primary400',
      },
    },
    {
      isIndeterminate: true,
      isDisabled: true,
      css: {
        backgroundColor: '$primary400',
        borderColor: '$primary400',
      },
    },
  ],
})

export const StyledIndicator = styled('span', {
  color: '$white',
  dflex: 'center',
  d: 'inline-flex',
  position: 'absolute',
  inset: 0,
})

export type StyledCheckboxVariants = VariantProps<typeof StyledCheckbox>
