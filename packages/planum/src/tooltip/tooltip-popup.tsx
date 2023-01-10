import {
  FloatingPortal,
  useMergeRefs,
  useTransitionStyles,
} from '@floating-ui/react'
import { mergeProps } from '@react-aria/utils'
import React from 'react'

import { styled } from '../theme'
import { useTooltipState } from './use-tooltip-state'

const StyledTooltipContainer = styled('div', {
  backgroundColor: '$surface900',
  fontSize: '$xs',
  lineHeight: '$xl',
  color: '$white',
  p: '$8',
  borderRadius: '$sm',
  maxWidth: 200,
  width: 'max-content',
})

export const TooltipPopup = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, propRef) => {
  const state = useTooltipState()
  const ref = useMergeRefs([state.floating, propRef])

  const { styles, isMounted } = useTransitionStyles(state.context, {
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
      {(state.open || isMounted) && (
        <StyledTooltipContainer
          ref={ref}
          {...state.getFloatingProps(props)}
          style={mergeProps(
            {
              position: state.strategy,
              top: state.y ?? 0,
              left: state.x ?? 0,
              visibility: state.x == null ? 'hidden' : 'visible',
              zIndex: 1,
            },
            styles,
            props.style ?? {},
          )}
        />
      )}
    </FloatingPortal>
  )
})

TooltipPopup.displayName = 'TooltipPopup'
