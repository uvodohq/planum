import { styled } from '../theme'

export const UnderlayCover = styled('div', {
  position: 'absolute',
  zIndex: 100,
  inset: 0,
  background: 'rgba(38, 38, 38, 0.4)',
})

export const StyledDrawerContainer = styled('div', {
  position: 'absolute',
  height: '100%',
  zIndex: 999,
})

export const StyledDrawerContainerInner = styled('div', {
  backgroundColor: '$white',
  overflow: 'hidden',
  height: '100%',
})
