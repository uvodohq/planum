import { keyframes } from './stitches.config'

export const spin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
})

export const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})
