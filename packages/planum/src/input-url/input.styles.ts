import { subheaderCss } from '../text'
import type { VariantProps } from '../theme'
import { css, styled } from '../theme'

export const StyledInputContainer = styled('div', {
  position: 'relative',
  width: '100%',
  color: '$textDark',
  display: 'flex',
  alignItems: 'center',
  border: '1px solid',
  backgroundColor: '$white',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    borderColor: '$surface600',
    cursor: 'text',
  },

  variants: {
    size: {
      default: {
        height: '$48',
        borderRadius: '$sm',
        padding: '$8 $16',
      },
    },

    isFocused: {
      true: {},
    },

    status: {
      normal: {
        borderColor: '$surface400',
      },

      error: {
        borderColor: '$danger700',
      },

      success: {
        borderColor: '$success700',
      },
    },

    isDisabled: {
      true: {
        '&&': {
          color: '$surface500',
          borderColor: '$surface400',
          backgroundColor: '$surface100',
          boxShadow: 'none',
          disableActions: true,

          '&:hover': {
            borderColor: 'unset',
            cursor: 'unset',
          },
        },
      },
    },

    hasLeftIcon: { true: {} },

    hasRightIcon: { true: {} },
  },

  defaultVariants: {
    size: 'default',
    status: 'normal',
  },

  compoundVariants: [
    {
      isFocused: true,
      status: 'normal',
      css: {
        borderColor: '$primary600',
        boxShadow: '0 0 0 3px $colors$primary100',
      },
    },
    {
      isFocused: true,
      status: 'error',
      css: {
        boxShadow: '0 0 0 3px $colors$danger100',
      },
    },
    {
      isFocused: true,
      status: 'success',
      css: {
        boxShadow: '0 0 0 3px $colors$success100',
      },
    },
  ],
})

export const StyledIconsOverlay = styled('div', {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  inset: 0,
  padding: '$8 $16',
  disableActions: true,
})

export const LeftIconWrapper = styled('span', {
  dflex: 'center',
  display: 'inline-flex',
  size: '$16',
  color: '$surface600',
  width: 'unset',
})

export const RightIconWrapper = styled(LeftIconWrapper, {
  marginLeft: 'auto',
})

export const inputCss = css(subheaderCss, {
  fw: '$regular',
  display: 'block',
  width: '100%',
  maxWidth: '100%',
  transition: 'border-color 0.2s, box-shadow 0.2s',

  backgroundColor: 'transparent',
  color: '$textDark',
  fontWeight: '$regular',
  outline: 'none',

  '&::placeholder': {
    font: 'inherit',
    color: '$surface500',
    disableActions: true,
  },

  '&:-webkit-autofill': {
    boxShadow: 'inset 0 0 0 100px $colors$primary100',
  },

  '&:-webkit-autofill::first-line': {
    font: 'inherit',
    color: 'hsl(208 12% 5%)',
  },
})

export const StyledInput = styled('input', inputCss)

export type StyledInputVariants = Omit<
  VariantProps<typeof StyledInput>,
  'hasLeftIcon' | 'hasRightIcon'
>
