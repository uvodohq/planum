import { styled } from 'src'

export const ActionButton = styled('button', {
  padding: 8,
  backgroundColor: '$surface100',
  br: 4,

  '&:focus': {
    outline: '2px solid $primary',
    outlineOffset: '2px',
  },
  '&[data-open="true"]': {
    backgroundColor: '$surface200',
  },
})
