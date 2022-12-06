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

export const DialogPopup = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, propRef) => {
  const state = useDialogState()

  const ref = React.useMemo(
    () => mergeRefs([state.floating, propRef]),
    [state.floating, propRef],
  )

  return (
    <FloatingPortal>
      <AnimatePresence>
        {state.open && (
          <FloatingOverlay className="Dialog-overlay" lockScroll>
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
                {...state.getFloatingProps(props)}>
                {props.children}
              </Overlay>
            </FloatingFocusManager>
          </FloatingOverlay>
        )}
      </AnimatePresence>
    </FloatingPortal>
  )
})

DialogPopup.displayName = 'DialogPopup'
