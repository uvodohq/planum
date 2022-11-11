import { FloatingPortal } from '@floating-ui/react-dom-interactions'
import { AnimatePresence, motion } from 'framer-motion'
import * as React from 'react'

import { styled } from '../theme'
import type { UseTooltip } from './use-tooltip'
import type { UseTooltipState } from './use-tooltip-state'

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

interface TooltipPopupProps {
  state: UseTooltipState
  tooltip: UseTooltip
  label: React.ReactNode
}

export const TooltipPopup = (props: TooltipPopupProps) => {
  const { state, tooltip, label } = props

  return (
    <FloatingPortal id="planum-tooltip-portal">
      <AnimatePresence>
        {state.isOpen && (
          <div {...tooltip.floatingProps} role="tooltip">
            <StyledTooltipContainer
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{
                type: 'spring',
                damping: 20,
                stiffness: 300,
                delay: 0.15,
              }}>
              {label}
            </StyledTooltipContainer>
          </div>
        )}
      </AnimatePresence>
    </FloatingPortal>
  )
}
