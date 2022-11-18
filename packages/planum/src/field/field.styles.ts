import { paragraphCss } from '../text'
import type { VariantProps } from '../theme'
import { styled } from '../theme'

export const FieldContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const StyledLabel = styled('label', paragraphCss, {
  fontWeight: '$regular',
  color: '$textDark',

  '&:empty::after': {
    content: '" "',
  },
})

export const StyledMessage = styled('p', paragraphCss, {
  fontWeight: '$regular',
  m: 0,

  variants: {
    status: {
      normal: {
        color: '$textMedium',
      },
      error: {
        color: '$textDanger',
      },
      success: {
        color: '$textSuccess',
      },
    },
  },
})

export type StyledMessageVariants = VariantProps<typeof StyledMessage>
