import { styled } from '../theme'

export const MenuBarContainer = styled('div', {
  boxShadow:
    'inset 1px 1px 0 0 $colors$surface400,inset -1px 0 0 0 $colors$surface400',
  bg: '$surface50',
  borderRadius: '4px 4px 0 0 ',
  display: 'flex',
  alignItems: 'center',
  p: '$8',
  flexWrap: 'wrap',
})

export const ButtonsGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
  mr: '$8',
  position: 'relative',

  '&>*': {
    mr: '$8',
  },

  // seperator
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '4px',
    right: '0',
    width: '1px',
    height: 'calc(100% - 8px)',
    backgroundColor: '$surface200',
  },
})
