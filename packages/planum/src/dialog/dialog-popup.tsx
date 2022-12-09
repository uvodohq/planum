import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
} from '@floating-ui/react-dom-interactions'
import { AnimatePresence } from 'framer-motion'
import * as React from 'react'
import { mergeRefs } from 'react-merge-refs'

import { Overlay, Underlay } from './dialog.styles'
import { useDialogState } from './use-dialog-state'

export const underlayVariants = {
  visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  hidden: { opacity: 0, transition: { duration: 0.2, ease: 'easeOut' } },
}

type DialogPopupProps = React.HTMLProps<HTMLDivElement> & {
  overlayProps?: React.ComponentProps<typeof FloatingOverlay>
}

export const DialogPopup = React.forwardRef<HTMLDivElement, DialogPopupProps>(
  (props, propRef) => {
    const { children, overlayProps, ...rest } = props
    const state = useDialogState()

    const ref = React.useMemo(
      () => mergeRefs([state.floating, propRef]),
      [state.floating, propRef],
    )

    return (
      <FloatingPortal>
        <AnimatePresence>
          {state.open && (
            <FloatingOverlay lockScroll style={{ zIndex: 1 }} {...overlayProps}>
              <Underlay
                variants={underlayVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              />
              <FloatingFocusManager context={state.context}>
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
