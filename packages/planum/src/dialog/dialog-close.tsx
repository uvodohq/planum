import * as React from 'react'

import { useDialogState } from './use-dialog-state'

export const DialogClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { children, ...rest } = props
  const state = useDialogState()

  return (
    <button {...rest} ref={ref} onClick={() => state.setOpen(false)}>
      {children}
    </button>
  )
})

DialogClose.displayName = 'DialogClose'
