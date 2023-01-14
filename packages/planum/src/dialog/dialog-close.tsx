import * as React from 'react'

import { styled } from '../theme'
import { useDialogState } from './use-dialog-state'

const StyledButton = styled('button', {
  display: 'inline-flex',
  bg: 'transparent',
  fontSize: 16,
  border: 'none',
  cursor: 'pointer',
  p: 0,
})

export const DialogClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { children, ...rest } = props
  const state = useDialogState()

  return (
    <StyledButton {...rest} ref={ref} onClick={() => state.setOpen(false)}>
      {children}
    </StyledButton>
  )
})

DialogClose.displayName = 'DialogClose'
