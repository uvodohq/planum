import type { FloatingOverlay } from '@floating-ui/react-dom-interactions'
import {
  FloatingFocusManager,
  FloatingPortal,
} from '@floating-ui/react-dom-interactions'
import { AnimatePresence } from 'framer-motion'
import * as React from 'react'
import { mergeRefs } from 'react-merge-refs'

import { StyledOverlay } from './popover.styles'
import { usePopoverState } from './use-popover-state'

export const underlayVariants = {
  visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  hidden: { opacity: 0, transition: { duration: 0.2, ease: 'easeOut' } },
}

type PopoverPopupProps = React.HTMLProps<HTMLDivElement> & {
  overlayProps?: React.ComponentProps<typeof FloatingOverlay>
}

export const PopoverPopup = React.forwardRef<HTMLDivElement, PopoverPopupProps>(
  (props, propRef) => {
    const { children, ...rest } = props
    const state = usePopoverState()

    const ref = React.useMemo(
      () => mergeRefs([state.floating, propRef]),
      [state.floating, propRef],
    )

    return (
      <FloatingPortal>
        <AnimatePresence>
          {state.open && (
            <FloatingFocusManager context={state.context} modal={state.modal}>
              <StyledOverlay
                ref={ref}
                style={{
                  position: state.strategy,
                  top: state.y ?? 0,
                  left: state.x ?? 0,
                  width: 'max-content',
                  ...props.style,
                }}
                aria-labelledby={state.labelId}
                aria-describedby={state.descriptionId}
                {...state.getFloatingProps(rest)}>
                {children}
              </StyledOverlay>
            </FloatingFocusManager>
          )}
        </AnimatePresence>
      </FloatingPortal>
    )
  },
)

PopoverPopup.displayName = 'PopoverPopup'
