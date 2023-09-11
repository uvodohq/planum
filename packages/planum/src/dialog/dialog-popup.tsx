import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useMergeRefs,
} from '@floating-ui/react'
import { AnimatePresence } from 'framer-motion'
import * as React from 'react'

import { Overlay, Underlay } from './dialog.styles'
import { useDialogState } from './use-dialog-state'

export const underlayVariants = {
  visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  hidden: { opacity: 0, transition: { duration: 0.2, ease: 'easeOut' } },
}

type DialogPopupProps = React.HTMLProps<HTMLDivElement> & {
  overlayProps?: React.ComponentProps<typeof FloatingOverlay>
  initialFocus?: number
}

export const DialogPopup = React.forwardRef<HTMLDivElement, DialogPopupProps>(
  (props, propRef) => {
    const { children, overlayProps, initialFocus = -1, ...rest } = props
    const state = useDialogState()

    const ref = useMergeRefs([state.floating, propRef])

    return (
      <FloatingPortal>
        <AnimatePresence>
          {state.open && (
            <FloatingOverlay
              lockScroll
              style={{ zIndex: 900 }}
              {...overlayProps}>
              <Underlay
                variants={underlayVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              />
              <FloatingFocusManager
                context={state.context}
                initialFocus={initialFocus}>
                <Overlay
                  ref={ref}
                  aria-labelledby={state.labelId}
                  aria-describedby={state.descriptionId}
                  {...state.getFloatingProps(rest)}>
                  {children}
                </Overlay>
              </FloatingFocusManager>
            </FloatingOverlay>
          )}
        </AnimatePresence>
      </FloatingPortal>
    )
  },
)

DialogPopup.displayName = 'DialogPopup'
