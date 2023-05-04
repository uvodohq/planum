import { Subheader } from '@uvodohq/planum'

import { styled } from '@uvodohq/planum'

export const CardContainer = styled('nav', {
  width: '100%',
})

export const CardList = styled('ul', {
  display: 'grid',
  gridTemplateColumns: 'repeat( auto-fit, minmax(200px, auto) )',
  gap: '$24',
})

export const CardGrid = styled('li', {})

export const CardLink = styled('a', {
  fontWeight: '$semibold',
  color: '$textLight',
  paddingBottom: 14,
  position: 'relative',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  transition: 'all 0.25s ease-in-out',
  border: '1px solid $surface200',
  padding: '$12',
  borderRadius: '$md',
  height: '100%',
  transform: 'perspective(800px) translateY(0px)',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '$16',

  '&:hover': {
    boxShadow: '$md',
    transform: 'perspective(800px) translateY(-4px)',
  },

  '&:active': {
    boxShadow: 'none',
    transform: 'perspective(800px) translateY(2px)',
  },
})

export const CardTitle = styled(Subheader, {
  color: '$textDark',
})

export const CardIcon = styled('div', {
  width: '$48',
  height: '$48',
  background: '$primary50',
  borderRadius: '$sm',
  color: '$primary600',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
