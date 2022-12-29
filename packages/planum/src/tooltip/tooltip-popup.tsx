import { FloatingPortal, useMergeRefs } from '@floating-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

import { styled } from '../theme'
import { useTooltipState } from './use-tooltip-state'

const StyledTooltipContainer = styled(motion.div, {
  backgroundColor: '$surface900',
  fontSize: '$xs',
  lineHeight: '$xl',
  color: '$white',
  p: '$8',
  borderRadius: '$sm',
  maxWidth: 200,
  width: 'max-content',
})

// eslint-disable-next-line react/display-name
export const TooltipPopup = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, propRef) => {
  const state = useTooltipState()
  const ref = useMergeRefs([state.floating, propRef])

  return (
    <FloatingPortal>
      <AnimatePresence>
        {state.open && (
          <StyledTooltipContainer
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{
              type: 'spring',
              damping: 20,
              stiffness: 300,
              delay: 0.15,
            }}
            style={{
              position: state.strategy,
              top: state.y ?? 0,
              left: state.x ?? 0,
              visibility: state.x == null ? 'hidden' : 'visible',
            }}
            {...state.getFloatingProps(props)}
          />
        )}
      </AnimatePresence>
    </FloatingPortal>
  )
})
