import { motion } from 'framer-motion'

import { css, styled } from '../../theme'

// Desktop styles
export const Underlay = styled(motion.div, {
  position: 'absolute',
  size: '100%',
  zIndex: 1,
  inset: 0,
  background: 'rgba(38, 38, 38, 0.4)',
  disableActions: true,
})

export const StyledModalDesktop = styled('div', {
  position: 'absolute',
  zIndex: 2,
  maxHeight: '100%',
  height: '100%',
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'strech',
  pointerEvents: 'none',
  width: '100%',
})

export const Spacer = styled('div', {
  maxHeight: '12.4%',
  flex: 1,
})

export const StyledModalInnerDesktop = styled(motion.div, {
  maxHeight: '90%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  perspective: 1000,

  '&>*': {
    pointerEvents: 'auto',
  },
})

export const floatingOverlayCss = css({
  isolation: 'isolate',
  position: 'fixed',
  zIndex: 999,
  display: 'flex',
  justifyContent: 'center',
  maxWidth: '100%',
  maxHeight: '100%',
  overflow: 'hidden',
})

export const StyledModalDrawer = styled('div', {
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: 902,
  overflow: 'hidden',
})
