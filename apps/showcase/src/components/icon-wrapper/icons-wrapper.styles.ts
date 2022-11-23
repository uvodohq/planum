import { styled } from '@uvodohq/planum'

export const IconGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
  gap: '$32',
})

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$16',
  borderRadius: '$sm',
  transition: 'background-color 0.4s',
  cursor: 'pointer',
  p: '$16',

  '&:hover': {
    backgroundColor: '$surface200',
  },
})
