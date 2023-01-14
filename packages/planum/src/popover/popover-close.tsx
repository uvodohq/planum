import * as React from 'react'

import { styled } from '../theme'
import { usePopoverState } from './use-popover-state'

const StyledButton = styled('button', {
  display: 'inline-flex',
  bg: 'transparent',
  fontSize: 16,
  border: 'none',
  cursor: 'pointer',
  p: 0,
})

export const PopoverClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { children, ...rest } = props
  const state = usePopoverState()

  return (
    <StyledButton {...rest} ref={ref} onClick={() => state.setOpen(false)}>
      {children}
    </StyledButton>
  )
})

PopoverClose.displayName = 'PopoverClose'
