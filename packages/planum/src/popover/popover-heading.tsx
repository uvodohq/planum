import { useId } from '@floating-ui/react'
import * as React from 'react'

import { styled } from '../theme'
import { usePopoverState } from './use-popover-state'

const StyledHeading = styled('h2', {
  fw: 'inherit',
  fontSize: 'inherit',
  m: 0,
})

export const PopoverHeading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLProps<HTMLHeadingElement>
>(({ children, ...props }, ref) => {
  const { setLabelId } = usePopoverState()
  const id = useId()

  // Only sets `aria-labelledby` on the Popover root element
  // if this component is mounted inside it.
  React.useLayoutEffect(() => {
    setLabelId(id)
    return () => setLabelId(undefined)
  }, [id, setLabelId])

  return (
    <StyledHeading {...props} ref={ref} id={id}>
      {children}
    </StyledHeading>
  )
})

PopoverHeading.displayName = 'PopoverHeading'
