import * as React from 'react'

import { usePopoverState } from './use-popover-state'

export const PopoverClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { children, ...rest } = props
  const state = usePopoverState()

  return (
    <button {...rest} ref={ref} onClick={() => state.setOpen(false)}>
      {children}
    </button>
  )
})

PopoverClose.displayName = 'PopoverClose'
