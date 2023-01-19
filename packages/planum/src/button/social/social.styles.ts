import { styled } from '../../theme'

export const StyledContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  background: '$white',
  borderRadius: '$sm',
  boxShadow: '$xs',
  border: '1px solid $surface400',
  isolation: 'isolate',
  p: '$8 $16',
  gap: '$8',
  transition: '0.2s',

  '&:hover': {
    transform: 'translateY(-1px)  scale(1.005)',
    boxShadow: '$md',
  },

  variants: {
    variant: {
      whatsapp: {
        backgroundColor: '$success600',
        color: '$white',
        fontSize: '$24',
      },
    },
    full: {
      true: {
        width: '100%',
      },
    },
  },
})

export const StyledText = styled('div', {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',

  variants: {
    full: {
      true: {
        '@laptop': {
          pr: '$24',
        },
      },
    },
  },
})
