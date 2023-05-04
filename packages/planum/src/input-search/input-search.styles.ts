import { sharedInputCss } from '../input'
import { subheaderCss } from '../text'
import type { VariantProps } from '../theme'
import { styled } from '../theme'

export const Prefix = styled('span', {
  dflex: 'center',
  color: '$surface600',
  mr: '$8',
})

export const Suffix = styled('span', {
  dflex: 'center',
  color: '$textDisabled',
  gap: '$4',
  ml: '$10',
})

export const StyledInput = styled('input', subheaderCss, {
  fw: '$regular',
  display: 'block',
  width: '100%',
  maxWidth: '100%',
  transition: 'border-color 0.2s, box-shadow 0.2s',

  backgroundColor: 'transparent',
  color: '$textDark',
  fontWeight: '$regular',
  outline: 'none',
  appearance: 'none',

  '&::placeholder': {
    font: 'inherit',
    color: '$surface500',
    disableActions: true,
  },

  '&:-webkit-autofill': {
    '&, &:hover, &:focus': {
      boxShadow: '0 0 0px 1000px white inset !important',
      transition: 'background-color 0s',
    },
  },

  '&:-webkit-autofill::first-line': {
    font: 'inherit',
    color: 'hsl(208 12% 5%)',
  },

  '&::-webkit-search-cancel-button,&::-webkit-search-decoration': {
    appearance: 'none',
  },
})

export type StyledInputVariants = Omit<
  VariantProps<typeof StyledInput>,
  'hasLeftIcon' | 'hasRightIcon'
>
