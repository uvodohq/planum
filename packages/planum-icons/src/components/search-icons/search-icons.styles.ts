import { styled } from '@uvodohq/planum'

export const IconGrid = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '$48',
  px: '$32',
})

export const IconContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$16',
})

export const SearchContainer = styled('div', {
  maxWidth: '400px',
  margin: '20px auto 50px',
})
