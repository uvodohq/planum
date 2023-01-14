import { sharedInputCss } from '../input'
import { subheaderCss } from '../text'
import type { VariantProps } from '../theme'
import { css, styled } from '../theme'

export const Prefix = styled('span', subheaderCss, {
  fw: '$regular',
  dflex: 'center',
  minWidth: 'fit-content',
  color: '$textDisabled',
})

export const Suffix = styled('span', subheaderCss, {
  fw: '$regular',
  dflex: 'center',
  color: '$textDisabled',
  gap: '$4',
  ml: '$10',
  disableActions: true,
})

export const StyledInputContainer = styled('div', sharedInputCss, {
  position: 'relative',
  cursor: 'text',

  '[placeholder]': {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },

  '& .planum-input-number-input-wrap': {
    size: '100%',

    '& input': {
      outline: 'none',
      size: '100%',
      display: 'flex',
    },
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

        '&:hover': {
          borderColor: '$surface600',
        },
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
        },
      },
    },
  },

  defaultVariants: {
    size: 'default',
  },

  compoundVariants: [
    {
      isFocused: true,
      status: 'normal',
      css: {
        borderColor: '$primary600',
        boxShadow: '0 0 0 3px $colors$primary100',
        '&:hover': {
          borderColor: '$primary600',
        },
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

export const IconWrapper = styled('span', {
  dflex: 'center',
  display: 'inline-flex',
  size: '$16',
  color: '$surface600',
})

export const inputCss = css(subheaderCss, {
  input: {
    fw: '$regular',
    fontSize: 'inherit',
    display: 'block',
    width: '100%',
    maxWidth: '100%',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    backgroundColor: 'transparent',
    color: '$textDark',
    fontWeight: '$regular',
    border: 'none',
    outline: 'none',

    '&:-webkit-autofill': {
      '&, &:hover, &:focus': {
        boxShadow: '0 0 0px 1000px white inset !important',
        transition: 'background-color 0s',
      },
    },

    '&::placeholder': {
      font: 'inherit',
      color: '$surface500',
      disableActions: true,
    },
  },
})

export const StyledInput = styled('input', inputCss, {})

export type StyledInputVariants = Omit<
  VariantProps<typeof StyledInputContainer>,
  'hasLeftIcon' | 'hasRightIcon'
>
