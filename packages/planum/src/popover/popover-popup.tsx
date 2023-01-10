import type { FloatingOverlay } from '@floating-ui/react'
import {
  FloatingFocusManager,
  FloatingPortal,
  useMergeRefs,
  useTransitionStyles,
} from '@floating-ui/react'
import * as React from 'react'

import { Box } from '../layout'
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
    const ref = useMergeRefs([state.floating, propRef])

    const { isMounted, styles } = useTransitionStyles(state.context, {
      initial: {
        opacity: 0,
        scale: 0.9,
      },
      open: {
        opacity: 1,
        scale: 1,
      },
      close: {
        opacity: 0,
        scale: 0.98,
      },
      duration: 200,
    })

    return (
      <FloatingPortal>
        <Box>
          {(state.open || isMounted) && (
            <FloatingFocusManager context={state.context} modal={state.modal}>
              <StyledOverlay
                ref={ref}
                style={{
                  position: state.strategy,
                  top: state.y ?? 0,
                  left: state.x ?? 0,
                  width: 'max-content',
                  ...styles,
                  ...props.style,
                }}
                aria-labelledby={state.labelId}
                aria-describedby={state.descriptionId}
                {...state.getFloatingProps({
                  onClick: (e: any) => e.stopPropagation(),
                  ...rest,
                })}>
                {children}
              </StyledOverlay>
            </FloatingFocusManager>
          )}
        </Box>
      </FloatingPortal>
    )
  },
)

PopoverPopup.displayName = 'PopoverPopup'
