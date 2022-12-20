import { useId } from '@floating-ui/react-dom-interactions'
import * as React from 'react'

import { usePopoverState } from './use-popover-state'

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
    <h2 {...props} ref={ref} id={id}>
      {children}
    </h2>
  )
})

PopoverHeading.displayName = 'PopoverHeading'
