import { styled } from '../theme'

export const StyledDiv = styled('div', {
  backgroundColor: '$surface200',

  variants: {
    direction: {
      vertical: {
        width: '1px',
        minWidth: '1px',
        height: 'inherit',
      },
      horizontal: {
        width: '100%',
        height: '1px',
        minHeight: '1px',
      },
    },
  },
})
