import { useMergeRefs } from '@floating-ui/react'
import * as React from 'react'

import { styled } from '../theme'
import { usePopoverState } from './use-popover-state'

const StyledButton = styled('button', {
  bg: 'transparent',
  fontSize: 16,
  border: 'none',
  cursor: 'pointer',
  p: 0,
})

interface PopoverTriggerProps {
  children: React.ReactNode
  asChild?: boolean
  onClick?: (e: any) => void
}

export const PopoverTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & PopoverTriggerProps
>((props, propRef) => {
  const { children, asChild = false, ...rest } = props
  const state = usePopoverState()
  const dataState = state.open ? 'open' : 'closed'

  const childrenRef = (children as any).ref

  const ref = useMergeRefs([state.reference, propRef, childrenRef])

  function mergedOnClickEvents(e: any) {
    e.stopPropagation()
    rest?.onClick?.(e)
  }

  // `asChild` allows the user to pass any element as the anchor
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      state.getReferenceProps({
        ref,
        ...rest,
        ...children.props,
        'data-state': dataState,
        onClick: mergedOnClickEvents,
      }),
    )
  }

  return (
    <StyledButton
      ref={ref}
      data-state={dataState}
      {...state.getReferenceProps({
        ...rest,
        onClick: mergedOnClickEvents,
      })}>
      {children}
    </StyledButton>
  )
})

PopoverTrigger.displayName = 'PopoverTrigger'
