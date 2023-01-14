import { useMergeRefs } from '@floating-ui/react'
import * as React from 'react'

import { useDialogState } from './use-dialog-state'

interface DialogTriggerProps {
  children: React.ReactNode
  asChild?: boolean
}

export const DialogTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & DialogTriggerProps
>((props, propRef) => {
  const { children, asChild = false, ...rest } = props
  const state = useDialogState()
  const dataState = state.open ? 'open' : 'closed'

  const childrenRef = (children as any).ref

  const ref = useMergeRefs([state.reference, propRef, childrenRef])

  // `asChild` allows the user to pass any element as the anchor
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      state.getReferenceProps({
        ref,
        ...rest,
        ...children.props,
        'data-state': dataState,
      }),
    )
  }

  return (
    <button ref={ref} data-state={dataState} {...state.getReferenceProps(rest)}>
      {children}
    </button>
  )
})

DialogTrigger.displayName = 'DialogTrigger'
