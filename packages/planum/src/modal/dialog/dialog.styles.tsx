import { H3, Paragraph } from '../../text'
import { customScrollbar, styled } from '../../theme'

export const StyledDialogContainer = styled('div', {
  maxHeight: '100%',
  width: '100%',
  boxShadow: 'none',
  borderRadius: '$sm',
  overflow: 'hidden',
  backgroundColor: '$white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'strech',
  pointerEvents: 'auto',
  pb: 32,

  '@laptop': {
    maxWidth: 600,
    boxShadow: '$md',
  },
})

export const StyledDialogHeader = styled('div', {
  minHeight: 64,
  backgroundColor: '$surface100',
  borderBottom: '1px solid $surface200',
  dflex: 'center',
  p: '0 $32',
})

export const StyledDialogBody = styled('div', customScrollbar, {
  px: '$32',
  maxHeight: 'calc(100% - 128px)',
  overflowY: 'auto',
})

export const StyledDialogTitle = styled(H3, {
  fw: '$bold',
  pt: '$16',
  wordBreak: 'break-word',
  m: 0,
})

export const StyledDialogDesc = styled(Paragraph, {
  color: '$textLight',
  wordBreak: 'break-word',
  m: 0,
})

export const StyledCloseButton = styled('button', {
  dflex: 'center',
  size: 44,
  mt: 1,
  color: '$surface400',
  mr: 'auto',
  ml: -16,
  transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
  outline: 'none',
  br: 99,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',

  '&:hover': {
    color: '$surface600',
    bg: '$surface200',
  },

  '&:focus': {
    color: '$surface800',
    bg: '$surface200',
  },

  '@laptop': {
    ml: 'auto',
    mr: -16,
  },
})
