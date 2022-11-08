import { subheaderCss } from '~/ui/text'

import type { VariantProps } from '../theme'
import { css, styled } from '../theme'

export const Prefix = styled('span', {
  dflex: 'center',
  minWidth: 'fit-content',
  color: '$textDisabled',
})

export const Suffix = styled('span', {
  dflex: 'center',
  color: '$textDisabled',
  gap: '$4',
  ml: '$10',
})

export const sharedInputCss = css({
  width: '100%',
  color: '$textDark',
  display: 'flex',
  alignItems: 'stretch',
  border: '1px solid',
  backgroundColor: '$white',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  cursor: 'text',

  '[placeholder]': {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },

  variants: {
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
    status: 'normal',
  },
})

export const StyledInputContainer = styled('div', sharedInputCss, {
  position: 'relative',
  height: '$48',
  borderRadius: '$sm',
  padding: '$8 $16',

  variants: {
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
  fw: '$regular',
  display: 'block',
  width: '100%',
  maxWidth: '100%',
  transition: 'border-color 0.2s, box-shadow 0.2s',

  backgroundColor: 'transparent',
  color: '$textDark',
  fontWeight: '$regular',
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
})

export const StyledInput = styled('input', inputCss, {})

export type StyledInputVariants = Omit<
  VariantProps<typeof StyledInputContainer>,
  'hasLeftIcon' | 'hasRightIcon'
>
