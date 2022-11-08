import { styled } from '../theme'

export const Element = styled('div', {
  // boxShadow: 'inset 0px -1px 0px #E9E9E9',
  backgroundColor: '$surface200',

  variants: {
    orientation: {
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
