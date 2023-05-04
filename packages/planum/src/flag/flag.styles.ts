import { styled } from '../theme'

export const StyledSpan = styled('span', {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'inline-flex',
  borderRadius: '2px',
  boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',

  variants: {
    borderless: {
      true: {
        dflex: 'center',
        border: 'none',
        boxShadow: 'none',
      },
    },
  },
})
