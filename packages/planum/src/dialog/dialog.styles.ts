import { motion } from 'framer-motion'

import { styled } from '../theme'

export const Underlay = styled(motion.div, {
  position: 'absolute',
  size: '100%',
  zIndex: 1,
  inset: 0,
  background: 'rgba(38, 38, 38, 0.4)',
  disableActions: true,
})

export const Overlay = styled(motion.div, {
  outline: '0',
  overflow: 'hidden',
  pointerEvents: 'auto',
  zIndex: 2,
  position: 'relative',
})
