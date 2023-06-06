import { css, styled } from '../theme'

export const StyledContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',
  width: '100%',
})

export const styledInput = css({
  width: 30,
  height: 50,
  color: '$textDark',
  display: 'flex',
  alignItems: 'center',
  border: '1px solid $surface400',
  backgroundColor: '$white',
  transition: 'all 0.2s ease-in-out',
  textAlign: 'center',
  fontSize: 16,
  outline: 'none',

  '&::placeholder': {
    font: 'inherit',
    color: '$surface500',
    disableActions: true,
  },

  '&:disabled': {
    color: '$surface500',
    borderColor: '$surface400',
    backgroundColor: '$surface100',
    boxShadow: 'none',
    disableActions: true,
    pointerEvents: 'none',

    '&:hover': {
      borderColor: 'unset',
      cursor: 'unset',
    },
  },

  '&:hover': {
    borderColor: '$surface600',
    cursor: 'text',
  },

  '&:focus': {
    borderColor: '$primary600',
    boxShadow: '0 0 0 3px $colors$primary100',
  },
})

export const StyledSeparator = styled('span', {})
