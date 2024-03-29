import { sharedInputCss } from '../input/input.styles'
import { subheaderCss } from '../text'
import type { VariantProps } from '../theme'
import { css, styled } from '../theme'

export const StyledTextareaContainer = styled('div', {
  position: 'relative',
  width: '100%',
  color: '$textDark',
})

export const textareaCss = css(subheaderCss, sharedInputCss, {
  fw: '$regular',
  fontWeight: '$regular',
  outline: 'none',
  opacity: 1,

  '&::placeholder': {
    font: 'inherit',
    color: '$surface500',
    disableActions: true,
  },

  variants: {
    status: {
      normal: {
        '&:focus': {
          borderColor: '$primary600',
          boxShadow: '0 0 0 3px $colors$primary100',
        },
      },

      error: {
        '&:focus': {
          boxShadow: '0 0 0 3px $colors$danger100',
        },
      },

      success: {
        '&:focus': {
          boxShadow: '0 0 0 3px $colors$success100',
        },
      },
    },
  },
})

export const StyledTextarea = styled('textarea', textareaCss, {
  minHeight: '$120',
  resize: 'vertical',
  borderRadius: '$sm',
  padding: '$8 $16',

  variants: {
    size: {
      default: {
        height: 'auto',
        padding: '$8 $16',
      },
    },
  },
})

export type StyledTextareaVariants = Omit<
  VariantProps<typeof StyledTextarea>,
  'hasLeftIcon' | 'hasRightIcon'
>
