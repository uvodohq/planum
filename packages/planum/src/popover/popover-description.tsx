import { useId } from '@floating-ui/react'
import * as React from 'react'

import { usePopoverState } from './use-popover-state'

export const PopoverDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLProps<HTMLParagraphElement>
>((props, ref) => {
  const { children, ...rest } = props
  const { setDescriptionId } = usePopoverState()
  const id = useId()

  // Only sets `aria-describedby` on the Popover root element
  // if this component is mounted inside it.
  React.useLayoutEffect(() => {
    setDescriptionId(id)

    return () => setDescriptionId(undefined)
  }, [id, setDescriptionId])

  return (
    <p {...rest} ref={ref} id={id}>
      {children}
    </p>
  )
})

PopoverDescription.displayName = 'PopoverDescription'
