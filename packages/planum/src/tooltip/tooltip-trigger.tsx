import { useMergeRefs } from '@floating-ui/react'
import React from 'react'

import { useTooltipState } from './use-tooltip-state'

export const TooltipTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & { asChild?: boolean }
>(({ children, asChild = false, ...props }, propRef) => {
  const state = useTooltipState()
  const childrenRef = (children as any).ref
  const ref = useMergeRefs([state.reference, propRef, childrenRef])

  // `asChild` allows the user to pass any element as the anchor
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      state.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        'data-state': state.open ? 'open' : 'closed',
      }),
    )
  }

  return (
    <button
      type="button"
      ref={ref}
      // The user can style the trigger based on the state
      data-state={state.open ? 'open' : 'closed'}
      {...state.getReferenceProps(props)}>
      {children}
    </button>
  )
})

TooltipTrigger.displayName = 'TooltipTrigger'
