import { paragraphCss } from '../text'
import { styled } from '../theme'

export const NavList = styled('ol', {
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
})

export const ListItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  outline: 'none',
})

export const ItemText = styled('span', paragraphCss, {
  color: '$textLight',
  transition: 'color 0.2s ease-in-out',
  outline: 'none',

  variants: {
    isCurrent: {
      true: {
        fw: '$bold',
        color: '$textDark',
        cursor: 'default',
        disableActions: true,
      },
      false: {
        '&:hover': {
          color: '$textDark',
          cursor: 'pointer',
        },
      },
    },
  },
})

export const ArrowContainer = styled('span', {
  px: '$8',
  dflex: 'center',
})
